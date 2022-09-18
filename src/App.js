import './assets/App.css';
import GlobalStyle from './assets/GlobalStyle';
import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import Routes from './Routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </>
  );
}

export default App;
