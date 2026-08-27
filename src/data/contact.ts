import { ContentBlock } from "@/types";

/* ข้อมูลติดต่อ — แปลงจาก xlsm แถว p25 (+ site.ts)
 * blocks ใช้ร่วมกับ ContentRenderer สำหรับหน้า "ติดต่อเรา"
 */
export const contactBlocks: ContentBlock[] = [
  {
    type: "paragraph",
    text: "Sun Soft Tech\nSigma Graphics Co., Ltd.\n105, 107 ซอยเอกชัย 94 ถนนเอกชัย แขวงบางบอนเหนือ เขตบางบอน กรุงเทพมหานคร 10150",
  },
  {
    type: "list",
    items: [
      "โทร: 066-080-0233",
      "E-mail: bugussobox@gmail.com",
      "Facebook: Bugussobox",
      "Shopee: BestBox2you",
      "Shopee: bestbox2you by bugussobox",
      "Line ID : @bugussobox",
    ],
  },
];