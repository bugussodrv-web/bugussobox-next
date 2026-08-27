interface SectionHeadProps {
  kicker: string;
  title: string;
  description?: string;
}

export default function SectionHead({
  kicker,
  title,
  description,
}: SectionHeadProps) {
  return (
    <div className="sec-head">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}