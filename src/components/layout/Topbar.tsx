import { siteConfig } from "@/data/site";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container">
        <span>🏭 โรงงานผลิตกล่องจั่วปังพรีเมียม · ผลิตเอง สั่งทำตั้งแต่ 1 ใบ</span>
        <span>
          📞 <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>{" "}
          &nbsp;·&nbsp; LINE:{" "}
          <a href={siteConfig.lineUrl}>{siteConfig.lineId}</a>
        </span>
      </div>
    </div>
  );
}