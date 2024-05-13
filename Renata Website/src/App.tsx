// PAGES
import Home from "./pages/Home";
import Teaser from "./pages/Teaser";
import Advertising from "./pages/Advertising";
import Introduction from "./pages/Introduction";
import SlideImages from "./pages/SlideImages";
import Space from "./pages/Space";
import Map from "./pages/Map";
import Span from "./pages/Span";

import { FloatingWhatsApp } from "react-floating-whatsapp";

import whatsAvatar from "./assets/whatsAvatar.ico";

function App() {
  return (
    <>
      <Home />
      <Teaser />
      <Advertising />
      <Introduction />
      <Span />
      <SlideImages />
      <Space />
      <Map />
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
