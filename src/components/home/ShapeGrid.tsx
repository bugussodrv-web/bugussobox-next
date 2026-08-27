import SectionHead from "@/components/ui/SectionHead";
import ShapeCard from "./ShapeCard";
import { shapes } from "@/data/shapes";

export default function ShapeGrid() {
  return (
    <section>
      <div className="container">
        <SectionHead
          kicker="ทรงกล่องมาตรฐาน"
          title="ทุกรูปทรง ที่เราสั่งทำได้"
          description="เลือกทรงที่ใช่ สั่งทำได้ตั้งแต่ 1 – 2,000+ ใบ งานสวยสมคุณภาพ ราคาโรงงาน พร้อมใส่โลโก้แบรนด์คุณ"
        />
        <div className="shape-grid-4x3">
          {shapes.map((shape) => (
            <ShapeCard key={shape.href} shape={shape} />
          ))}
        </div>
      </div>
    </section>
  );
}