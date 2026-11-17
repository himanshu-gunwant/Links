import { ImageResponse } from "next/og";
import { linksConfig } from "@/config/links";

export const alt = `${linksConfig.header.name} — Links`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0f0f0f",
          color: "#f5f5f5",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Subtle top border gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #ffffff, #6b7280, transparent)",
          }}
        />

        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#9ca3af",
              letterSpacing: "-0.02em",
            }}
          >
            links.himanshugunwant.com
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#6b7280",
              fontFamily: "monospace",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "6px 14px",
              borderRadius: "9999px",
            }}
          >
            IIIT Tiruchirappalli
          </div>
        </div>

        {/* Center / Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "#ffffff",
              maxWidth: "1000px",
            }}
          >
            {linksConfig.header.name}
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#9ca3af",
              lineHeight: 1.5,
              maxWidth: "880px",
            }}
          >
            {linksConfig.header.tagline}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              color: "#6b7280",
              fontFamily: "monospace",
            }}
          >
            Socials · Projects · Writing · Contact
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#9ca3af",
            }}
          >
            himanshugunwant.com ↗
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
