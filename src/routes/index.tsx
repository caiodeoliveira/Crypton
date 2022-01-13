import { Route, BrowserRouter } from "react-router-dom";
import Home from "../components/templates/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/home" component={Home} />
    </BrowserRouter>
  );
};

export default Routes;
