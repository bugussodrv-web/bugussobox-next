import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageView from "@/components/content/PageView";
import { pages, getPageBySlug } from "@/data/pages";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export function generateStaticParams() {
  return pages
    .filter((p) => p.slug !== "")
    .map((p) => ({ slug: p.slug.split("/") }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = slug.map((s) => decodeURIComponent(s)).join("/");
  const page = getPageBySlug(path);

  if (!page) {
    return { title: "ไม่พบหน้า" };
  }

  return {
    title: `${page.title} | BugussoBox`,
    description: page.metaDescription ?? page.lead,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const path = slug.map((s) => decodeURIComponent(s)).join("/");
  const page = getPageBySlug(path);

  if (!page) {
    notFound();
  }

  return (
    <article className="content-page">
      <div className="container">
        <header className="page-head">
          <h1>{page.title}</h1>
        </header>
        <PageView page={page} />
      </div>
    </article>
  );
}