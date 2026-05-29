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

export default function Home() {
  return (
    <>
      <Banner />
      <Intro />
      <Signal />
      <Kn62cs />
      <Dk />
      <div style={{ width: '100%', padding: '30px 0', background: 'var(--main)' }}>
        <p className="text_1" style={{ textAlign: 'center', width: '90%', margin: '0 auto', color: 'white' }}>ROADMAP - LỘ TRÌNH TOÀN DIỆN KHÓA HỌC</p>
      </div>
      <div className="raodwrap">
        <div className="roadmap"></div>
      </div>
      <Map />
      <Why />
      <New />
      <Footer />
      <div className="dangky"><a href="#dk">Đăng ký ngay</a></div>
      <Chatbot />
    </>
  );
}
