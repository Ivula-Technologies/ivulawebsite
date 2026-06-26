"use client";

import * as React from "react";

/**
 * Minimal `asChild` Slot implementation.
 * Merges the Slot's props onto its single child element, so we can render
 * a `<Button asChild><Link/></Button>` without an extra wrapper.
 */
export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, ...props }, ref) => {
    if (!React.isValidElement(children)) {
      return null;
    }

    const child = children as React.ReactElement<Record<string, unknown>>;

    return React.cloneElement(child, {
      ...mergeProps(props, child.props),
      ref: mergeRefs(ref, (child as unknown as { ref?: React.Ref<unknown> }).ref),
    } as Record<string, unknown>);
  }
);
Slot.displayName = "Slot";

function mergeProps(
  slotProps: Record<string, unknown>,
  childProps: Record<string, unknown>
) {
  const merged: Record<string, unknown> = { ...slotProps };

  for (const key in childProps) {
    const slotValue = slotProps[key];
    const childValue = childProps[key];

    // Compose event handlers.
    if (/^on[A-Z]/.test(key) && typeof childValue === "function") {
      merged[key] =
        typeof slotValue === "function"
          ? (...args: unknown[]) => {
              (childValue as (...a: unknown[]) => void)(...args);
              (slotValue as (...a: unknown[]) => void)(...args);
            }
          : childValue;
    } else if (key === "className") {
      merged[key] = [slotValue, childValue].filter(Boolean).join(" ");
    } else if (key === "style") {
      merged[key] = {
        ...(slotValue as object),
        ...(childValue as object),
      };
    } else {
      merged[key] = childValue !== undefined ? childValue : slotValue;
    }
  }

  return merged;
}

function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
  return (node: T) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref && typeof ref === "object") {
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    });
  };
}
