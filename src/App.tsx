import Login from "./components/templates/Home";
import GlobalStyle from "./styles/global";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <>
        <Routes />
        <GlobalStyle />
        <Login />
      </>
    </div>
  );
}

export default App;
