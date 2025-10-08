import React, { useState } from "react";

/**
 * Props:
 *   items: [{ title: string, content: ReactNode }]
 */
export default function Accordian({ items }) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, idx) => (
        <div key={idx}>
          <button
            className="w-full flex justify-between items-center py-4"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            <span className="font-medium">{item.title}</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                openIdx === idx ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIdx === idx && (
            <div className="pb-4 pl-4 text-gray-600">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
