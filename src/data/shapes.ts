import { Shape, PageData } from "@/types";
import { pages } from "./pages";

/* 12 ทรงกล่องมาตรฐาน — ใช้ข้อมูลจริงจากหน้า shape (p11–p22)
 * ภาพแรกของแต่ละหน้าใช้เป็นภาพการ์ดบนหน้า home และหน้าดัชนีทรง
 */
const shapePages = pages.filter((p) => p.template === "shape") as PageData[];

export const shapes: Shape[] = shapePages.map((p) => ({
  title: p.title,
  href: `/${p.slug}`,
  image: p.images[0],
}));