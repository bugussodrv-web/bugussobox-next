import { PageData } from "@/types";
import ContentRenderer from "./ContentRenderer";
import ImageGallery from "./ImageGallery";
import FaqAccordion from "./FaqAccordion";
import ContactBlock from "./ContactBlock";
import ProductLineCard from "./ProductLineCard";
import ShapeCard from "@/components/home/ShapeCard";
import { faqItems } from "@/data/faq";
import { productLines } from "@/data/products";
import { shapes } from "@/data/shapes";

interface PageViewProps {
  page: PageData;
}

export default function PageView({ page }: PageViewProps) {
  const lead = page.lead;

  switch (page.template) {
    case "shape": {
      return (
        <>
          {lead && <p className="page-lead">{lead}</p>}
          {page.partsLabel && <p className="page-parts">{page.partsLabel}</p>}
          <ContentRenderer blocks={page.blocks} />
          <ImageGallery images={page.images} alt={page.title} />
        </>
      );
    }

    case "shapes-index": {
      return (
        <>
          {lead && <p className="page-lead">{lead}</p>}
          <div className="shape-grid-4x3">
            {shapes.map((shape) => (
              <ShapeCard key={shape.href} shape={shape} />
            ))}
          </div>
        </>
      );
    }

    case "products": {
      return (
        <>
          {lead && <p className="page-lead">{lead}</p>}
          <div className="product-grid">
            {productLines.map((line) => (
              <ProductLineCard key={line.slug} line={line} />
            ))}
          </div>
        </>
      );
    }

    case "product": {
      return (
        <>
          {lead && <p className="page-lead">{lead}</p>}
          <ContentRenderer blocks={page.blocks} />
          <ImageGallery images={page.images} alt={page.title} />
        </>
      );
    }

    case "faq": {
      return (
        <>
          {lead && <p className="page-lead">{lead}</p>}
          <FaqAccordion items={faqItems} />
        </>
      );
    }

    case "contact": {
      return (
        <>
          {lead && <p className="page-lead">{lead}</p>}
          <ContactBlock />
          <ImageGallery images={page.images} alt={page.title} />
        </>
      );
    }

    case "gallery": {
      return (
        <>
          {lead && <p className="page-lead">{lead}</p>}
          <ImageGallery images={page.images} alt={page.title} />
        </>
      );
    }

    case "article":
    default: {
      return (
        <>
          {lead && <p className="page-lead">{lead}</p>}
          <ContentRenderer blocks={page.blocks} />
          <ImageGallery images={page.images} alt={page.title} />
        </>
      );
    }
  }
}