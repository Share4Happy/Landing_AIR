import Banner from "@/component/banner";
import Chatbot from "@/component/chatbot";
import Dk from "@/component/dk";
import Footer from "@/component/footer";
import Intro from "@/component/intro";
import Kn62cs from "@/component/kn6cs";
import Map from "@/component/map";
import New from "@/component/new";
import Signal from "@/component/signal";
import Why from "@/component/why";

import { FadeIn, ScaleIn, ScrollProgressBar, SmartFloatingCTA } from "@/component/motion";

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <Banner />
      <Intro />
      <Signal />
      <Kn62cs />
      <Dk />
      <FadeIn direction="down" duration={0.6}>
        <div style={{ width: '100%', padding: '30px 0', background: 'var(--main)' }}>
          <p className="text_1" style={{ textAlign: 'center', width: '90%', margin: '0 auto', color: 'white' }}>
            ROADMAP - LỘ TRÌNH TOÀN DIỆN KHÓA HỌC
          </p>
        </div>
      </FadeIn>
      <ScaleIn duration={0.8} initialScale={0.93}>
        <div className="raodwrap">
          <div className="roadmap"></div>
        </div>
      </ScaleIn>
      <Map />
      <Why />
      <New />
      <Footer />
      <SmartFloatingCTA targetId="dk" text="Đăng ký ngay" />
      <Chatbot />
    </>
  );
}
