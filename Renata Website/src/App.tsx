import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// PAGES
import Introduction from "./pages/Introduction";
import Map from "./pages/Map.js";
import Span from "./pages/Span";
import Header from "./pages/Header";
import ParalaxPage from "./pages/ParalaxPage";
import Footer from "./pages/Footer.js";
import Instagram from "./pages/Instagram.jsx";
import Swiper from "./pages/SwiperPage.jsx";
import BotoxPage from "./pages/BotoxPage";
import InvisalignPage from "./pages/InvisalignPage";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import whatsAvatar from "./assets/whatsAvatar.ico";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Existing content as a default route */}
        <Route
          path="/"
          element={
            <>
              <Introduction />
              <Span />
              <ParalaxPage />
              <Swiper />
              <Map />
              <Instagram />
            </>
          }
        />
        <Route path="/botox" element={<BotoxPage />} />
        <Route path="/invisalign" element={<InvisalignPage />} />
        
      </Routes>
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
    </Router>
  );
}

export default App;
