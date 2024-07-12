// PAGES

import Introduction from "./pages/Introduction";

import Map from "./pages/Map.js";
import Span from "./pages/Span";

import { FloatingWhatsApp } from "react-floating-whatsapp";

import whatsAvatar from "./assets/whatsAvatar.ico";
import Header from "./pages/Header";
import ParalaxPage from "./pages/ParalaxPage";
import Footer from "./pages/Footer.js";
import Instagram from "./pages/Instagram";
import Swiper from "./pages/SwiperPage.jsx"

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Span />
      <ParalaxPage />
      <Swiper />
      <Map />
      <Instagram />
      <Footer />
      <FloatingWhatsApp
        phoneNumber="+5551981399146"
        accountName="Renata Biesdorf"
        onSubmit={() =>
          window.open("whatsaspp://send?phone=1234567890", "_self")
        }
        avatar={whatsAvatar}
        chatMessage="Olá, como eu posso ajudar?"
        statusMessage="Online"
        placeholder="Digite sua mensagem..."
      />
    </>
  );
}

export default App;
