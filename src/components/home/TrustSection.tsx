import SectionHead from "@/components/ui/SectionHead";

const trustItems = [
  "ควบคุมคุณภาพทุกขั้นตอน",
  "ผลิตเองจากโรงงาน",
  "ใส่โลโก้แบรนด์ของคุณ",
  "ส่งเร็วแม่นยำทั่วประเทศ",
];

export default function TrustSection() {
  return (
    <section style={{ background: "var(--surface)", borderBlock: "1px solid var(--line)" }}>
      <div className="container">
        <SectionHead
          kicker="ทำไมต้อง BugussoBox"
          title="โรงงานตัวจริง · งานสม่ำเสมอ · ราคาโรง"
        />
        <div className="shape-grid">
          {trustItems.map((item) => (
            <div key={item} className="shape-card center" style={{ cursor: "default" }}>
              <div className="cap">
                {item}
                <span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}