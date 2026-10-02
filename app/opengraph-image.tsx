import { ImageResponse } from "next/og";

export const alt = "VIBELAND | The Sovereign Metaverse";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 90, background: "#0a0a0f", color: "#f5f5f5" }}>
        <div style={{ fontSize: 96, fontWeight: 800, color: "#3b82f6" }}>VIBELAND</div>
        <div style={{ fontSize: 52, marginTop: 24, color: "#f5f5f5" }}>The Sovereign Metaverse</div>
        <div style={{ fontSize: 30, marginTop: 28, color: "#b9c0cf", maxWidth: 1000 }}>A concept for an immersive 3D metaverse on the Sovereign Stack. Not yet playable.</div>
        <div style={{ fontSize: 26, marginTop: 56, color: "#3b82f6" }}>vibeland.com</div>
      </div>
    ),
    size,
  );
}
