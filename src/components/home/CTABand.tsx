import Button from "@/components/ui/Button";

export default function CTABand() {
  return (
    <section>
      <div className="container">
        <div className="cta-band">
          <h2>อยากให้สินค้าคุณมาในกล่องสวยๆ ไหม?</h2>
          <p>
            ส่งแบบ / สเปกให้เราดูราคาก่อน ฟรีไม่มีภาระผูกพัน
            เราช่วยแนะนำทรงให้เหมาะกับสินค้าและงบคุณ
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Button href="/ติดต่อเรา" variant="light">
              ขอใบเสนอราคาฟรี
            </Button>
            <Button href="/ตัวอย่างสินค้า" variant="ghost">
              ดูตัวอย่างงาน
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}