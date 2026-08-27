import ContentRenderer from "./ContentRenderer";
import { contactBlocks } from "@/data/contact";
import { siteConfig } from "@/data/site";

export default function ContactBlock() {
  return (
    <div className="contact-block">
      <div className="prose">
        <ContentRenderer blocks={contactBlocks} />
      </div>
      <div className="contact-actions">
        <a className="btn btn-primary" href={`tel:${siteConfig.phone}`}>
          {siteConfig.phoneDisplay}
        </a>
        <a className="btn btn-primary" href={siteConfig.lineUrl} target="_blank">
          Line: {siteConfig.lineId}
        </a>
        <a className="btn btn-ghost" href="mailto:bugussobox@gmail.com">
          bugussobox@gmail.com
        </a>
      </div>
    </div>
  );
}