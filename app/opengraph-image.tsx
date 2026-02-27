import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Unfold — Geen small talk. Gewoon echte vragen.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #1a1a1a, #000000)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: "128px",
            fontWeight: "700",
            color: "white",
            letterSpacing: "-3px",
            lineHeight: 1,
          }}
        >
          Unfold
        </div>
        <div
          style={{
            fontSize: "36px",
            color: "rgba(255,255,255,0.75)",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Geen small talk. Gewoon echte vragen.
        </div>
      </div>
    ),
    { ...size }
  );
}
