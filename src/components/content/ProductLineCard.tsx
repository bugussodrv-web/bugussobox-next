import Link from "next/link";
import { ProductLine } from "@/types";

interface ProductLineCardProps {
  line: ProductLine;
}

export default function ProductLineCard({ line }: ProductLineCardProps) {
  return (
    <article className="product-card">
      {line.image && (
        <div className="product-card-img">
          <img src={line.image} alt={line.title} loading="lazy" />
        </div>
      )}
      <div className="product-card-body">
        <h2>{line.title}</h2>
        <span className="product-min">ขั้นต่ำ {line.minOrder}</span>
        <p>{line.subtitle}</p>
        <ul>
          {line.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <Link className="product-link" href={line.href}>
          ดูรายละเอียดเพิ่มเติม →
        </Link>
      </div>
    </article>
  );
}