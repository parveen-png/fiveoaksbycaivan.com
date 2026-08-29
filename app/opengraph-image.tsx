import { ImageResponse } from "next/og";

export const alt = "Five Oaks by Caivan in Oakville — independent project updates";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1C1712",
          color: "#FBF7EF",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#D4CBB8",
          }}
        >
          Independent briefing · Oakville, Ontario
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 700 }}>
            Five Oaks
          </div>
          <div style={{ marginTop: 16, fontSize: 30, color: "#E8E0D2" }}>
            Caivan Communities · coming soon · detached and townhomes
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#D4CBB8",
            maxWidth: 880,
          }}
        >
          Official prices unpublished as of August 24, 2026. Not the official
          Caivan website.
        </div>
      </div>
    ),
    size,
  );
}
