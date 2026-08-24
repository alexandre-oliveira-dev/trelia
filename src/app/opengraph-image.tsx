import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#08090D",
          backgroundImage:
            "radial-gradient(circle at 22% 25%, rgba(37,99,235,0.35), transparent 45%), radial-gradient(circle at 78% 75%, rgba(124,58,237,0.35), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 128,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            backgroundImage: "linear-gradient(100deg, #ffffff 10%, #60a5fa 45%, #8b5cf6 70%, #ffffff 90%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          trelia
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 32,
            color: "#9ca3af",
          }}
        >
          Software sob medida, construído para durar.
        </div>
      </div>
    ),
    { ...size }
  );
}
