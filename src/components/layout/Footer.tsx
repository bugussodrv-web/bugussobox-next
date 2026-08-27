import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div>
            <h4>{siteConfig.name}</h4>
            <p style={{ color: "var(--muted)", fontSize: ".92rem" }}>
              กล่องจั่วปังพรีเมียม รับส่งทำทุกรูปทรง งานคุณภาพสูง
              <br />
              โรงงานไทย ควบคุมการผลิตทุกขั้นตอน
            </p>
          </div>
          <div>
            <h4>สินค้า</h4>
            <ul>
              <li>
                <Link href="/landing5">กล่องสำเร็จ (ขายปลีก)</Link>
              </li>
              <li>
                <Link href="/landing3">กล่องกึ่งสำเร็จ</Link>
              </li>
              <li>
                <Link href="/size_ready">กล่องไซส์สำเร็จ</Link>
              </li>
              <li>
                <Link href="/สินค้าของเรา">สินค้าของเรา</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>ข้อมูล</h4>
            <ul>
              <li>
                <Link href="/ตัวอย่างสินค้า">ตัวอย่างสินค้า</Link>
              </li>
              <li>
                <Link href="/ทรงกล่องมาตรฐาน">ทรงกล่องมาตรฐาน</Link>
              </li>
              <li>
                <Link href="/คำถามที่พบบ่อย">คำถามที่พบบ่อย</Link>
              </li>
              <li>
                <Link href="/ติดต่อเรา">ติดต่อเรา</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>ติดต่อ</h4>
            <ul>
              <li>
                โทร: <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
              </li>
              <li>
                LINE:{" "}
                <a href={siteConfig.lineUrl}>{siteConfig.lineId}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          © Copyright 2019 by Sun Soft Tech All rights reserved · {siteConfig.name}
        </div>
      </div>
    </footer>
  );
}