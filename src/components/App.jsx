import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { About } from "./About/About";
import { Electricity } from "./Electricity/Electricity";
import { Cases } from "./Cases/Cases";
import { Faq } from "./Faq/Faq";
import { Contacts } from "./Contacts/Contacts";
import { Footer } from "./Footer/Footer";

import { Container } from "./AppStyled";

export const App = () => {
  return (
    <Container>
      <Header />
      <Main />
      <About />
      <Electricity />
      <Cases />
      <Faq />
      <Contacts />
      <Footer />
    </Container>
  );
};
