import { ImageResponse } from "next/og";

export const alt = "Ivula Technologies — Technology that serves your business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#070c1d",
          color: "white",
          padding: "76px 84px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 560,
            height: 560,
            borderRadius: 999,
            right: -80,
            top: -160,
            background: "rgba(19, 200, 232, 0.24)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: 999,
            left: -180,
            bottom: -240,
            background: "rgba(52, 80, 168, 0.38)",
            filter: "blur(100px)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #13c8e8, #0aa9df)",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            I
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
            Ivula Technologies
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
          <div
            style={{
              display: "flex",
              fontSize: 74,
              lineHeight: 1.04,
              letterSpacing: -3,
              fontWeight: 800,
            }}
          >
            Technology that genuinely serves your business.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 27,
              color: "#b9c7df",
            }}
          >
            Software products · AI automation · Cloud systems
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 20,
            color: "#67e2f9",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Nairobi roots · Global outlook
        </div>
      </div>
    ),
    size
  );
}
