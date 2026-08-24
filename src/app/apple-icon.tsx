import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08090D",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 130,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            backgroundImage: "linear-gradient(135deg, #60a5fa, #8b5cf6)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          t
        </div>
      </div>
    ),
    { ...size }
  );
}
