import React from "react";

/**
 * Props:
 *   height – number of REM units (e.g., 2 → 2rem)
 */
export default function Spacer({ height }) {
  return <div style={{ height: `${height}rem` }} />;
}
