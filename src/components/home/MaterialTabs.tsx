"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHead from "@/components/ui/SectionHead";
import { materialTabs } from "@/data/materials";

export default function MaterialTabs() {
  const [activeTab, setActiveTab] = useState(materialTabs[0].id);

  return (
    <section style={{ background: "var(--surface)", borderBlock: "1px solid var(--line)" }}>
      <div className="container">
        <SectionHead
          kicker="เลือกวัสดุ & เทคนิค"
          title="ครบทุกตัวเลือก สำหรับงานของคุณ"
          description="ปรับทุกรายละเอียดเพื่อกล่องที่ใช่ ตั้งแต่กระดาษหุ้ม จนถึงของตกแต่งตามความต้องการ"
        />
        <div className="tabs">
          {materialTabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {materialTabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-panel ${activeTab === tab.id ? "active" : ""}`}
            id={`p-${tab.id}`}
          >
            {tab.items.map((item) => (
              <Link key={item.label} className="mini" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}