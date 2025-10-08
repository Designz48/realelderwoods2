// src/components/ui/TwoColumn.jsx
import React from "react";

export default function TwoColumn({ leftContent, rightContent }) {
  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-6">
        {/* LEFT SIDE */}
        <div className="md:w-1/2">{leftContent}</div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2">{rightContent}</div>
      </div>
    </section>
  );
}
