"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/components/motion/use-reduced-motion";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  const reduce = usePrefersReducedMotion();
  return (
    <div className="border-b border-border">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="group flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
        >
          <span>{question}</span>
          <span
            className={cn(
              "flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-secondary/60 transition-transform duration-300",
              isOpen && "rotate-45 bg-cyan-500 text-white border-transparent"
            )}
          >
            <Plus className="size-4" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 pr-12 text-muted-foreground">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export interface AccordionProps {
  items: readonly { question: string; answer: string }[];
  /** Allow more than one open at a time. */
  multiple?: boolean;
  className?: string;
}

export function Accordion({ items, multiple = false, className }: AccordionProps) {
  const [open, setOpen] = React.useState<number[]>([0]);

  const toggle = (i: number) => {
    setOpen((prev) => {
      if (prev.includes(i)) return prev.filter((x) => x !== i);
      return multiple ? [...prev, i] : [i];
    });
  };

  return (
    <div className={cn("divide-y divide-border", className)}>
      {items.map((item, i) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          isOpen={open.includes(i)}
          onToggle={() => toggle(i)}
        />
      ))}
    </div>
  );
}
