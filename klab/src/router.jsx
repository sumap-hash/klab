import { Switch, Route } from "react-router-dom";
import Projects from "./pages/project";
import Contact from "./pages/contact";

const Router = () => {
  return (
    <Switch>
      <Route path="/contact" component={Contact} />
      <Route path="/" exact component={Projects} />
    </Switch>
  );
};

export default Router;
