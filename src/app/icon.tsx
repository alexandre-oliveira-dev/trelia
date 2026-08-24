import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 7,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
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
