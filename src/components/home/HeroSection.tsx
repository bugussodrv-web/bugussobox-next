import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div>
          <h1>
            กล่องจั่วปังพรีเมียม <span>คุณภาพสูง</span> ผลิตเอง · ปรับเองได้
          </h1>
          <p>
            เราคือผู้ผลิตบรรจุภัณฑ์กล่องจั่วปัง (Rigid Box) คุณภาพสูง
            ควบคุมคุณภาพในทุกขั้นตอนการผลิต ส่งมอบงานที่สวยงานจริง
            ให้คุณมั่นใจได้ทุกชิ้น
          </p>
          <div className="hero-badges">
            <div>
              <b>ผลิตเอง</b>จากโรงงานไทย
            </div>
            <div>
              <b>300+</b>รูปทรงมาตรฐาน
            </div>
            <div>
              <b>ใส่โลโก้</b>งานคุณภาพ
            </div>
            <div>
              <b>ส่งเร็ว</b>ทั่วประเทศ
            </div>
          </div>
          <div className="hero-actions">
            <Button href="/ติดต่อเรา" variant="primary">
              ปรึกษา / ขอราคาฟรี
            </Button>
            <Button href="/ทรงกล่องมาตรฐาน" variant="ghost">
              ดูรูปทรงกล่อง
            </Button>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/images/p01_1.jpg"
            alt="กล่องจั่วปังพรีเมียม BugussoBox"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}