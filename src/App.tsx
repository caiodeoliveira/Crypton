import Login from "./components/templates/Home";
import GlobalStyle from "./styles/global";
import { AppRoutes } from "./routes";
import createRoot from "react-dom";

// Search how to use createRoot() function to render react application Dom elements.

function App() {
  return (
    <div className="App">
      <>
        <AppRoutes />
        <GlobalStyle />
        <Login />
      </>
    </div>
  );
}
export default App;
