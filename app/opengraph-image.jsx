import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Oluwatobiloba Oluwadare, full-stack and mobile engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link preview card in the site's own palette: ink background, off-white type, one cyan accent.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0b0d14",
          color: "#eef0f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, color: "#a3a9b8" }}>Oluwatobiloba Oluwadare</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, lineHeight: 1.08, letterSpacing: -2, fontWeight: 500, display: "flex" }}>
            Full-stack and mobile engineer for banking and fintech products
          </div>
          <div style={{ marginTop: 32, fontSize: 28, color: "#4fc3f7", display: "flex" }}>
            React · Next.js · Node.js · React Native
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
