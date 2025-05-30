import { CatalogoContainer } from "./components/catalogoDeVelas/Catalogo";
import Header from "./components/header/Header";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <CatalogoContainer />
    </>
  );
};

export default App;
