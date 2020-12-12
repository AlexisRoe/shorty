import React from "react";
import Shorties from "./pages/Shorties";
import styled from "styled-components/macro";
import GlobalStyle from "./GlobalStyle";
import logoSrc from "./assets/logo.svg";
import { I18nProvider } from "./contexts/i18n";
import LocaleSelect from "./components/LocaleSelect";
import useSubscription from "./hooks/useSubscription";

const Container = styled.div`
  max-width: 1000px;
  width: 80%;
  margin: 0 auto;

  header {
    display: flex;

    img {
      margin-right: 0.5em;
    }
  }
`;

const getLocale = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("lang") || "en";
};

const App = () => {
  const [subscription, subscribeUser] = useSubscription();

  return (
    <I18nProvider lang={getLocale()}>
      <GlobalStyle />
      <Container>
        <header>
          <img src={logoSrc} alt="shorty Logo with pants" />
          <h1>shorty</h1>
          <button onClick={() => subscribeUser()}>Subscribe</button>
          <LocaleSelect />
        </header>
        <main>
          <Shorties />
        </main>
      </Container>
    </I18nProvider>
  );
};

export default App;
