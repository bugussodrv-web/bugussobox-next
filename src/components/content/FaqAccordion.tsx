"use client";

import { useState } from "react";
import { FaqItem } from "@/types";

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={`faq-item ${isOpen ? "open" : ""}`}>
            <button
              className="faq-question"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span className="faq-icon">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div className="faq-answer">
                {item.a.split("\n").map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}