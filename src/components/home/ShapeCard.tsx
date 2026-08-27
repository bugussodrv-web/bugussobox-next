import Link from "next/link";
import { Shape } from "@/types";

interface ShapeCardProps {
  shape: Shape;
}

export default function ShapeCard({ shape }: ShapeCardProps) {
  return (
    <Link className="shape-card" href={shape.href}>
      <img src={shape.image} alt={shape.title} loading="lazy" />
      <span className="cap">
        {shape.title}
        <span>→</span>
      </span>
    </Link>
  );
}