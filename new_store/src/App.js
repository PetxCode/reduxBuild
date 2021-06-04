import { BrowserRouter, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css"
import HomeScreen from "./component/Screens/HomeScreen";
import HeaderNav from "./component/Screens/HeaderNav";
import CartHolder from "./component/Screens/CartHolder";

function App() {
  return (
    <div >
     <BrowserRouter>
     <HeaderNav />
      <Switch>
        <Route exact path="/" component={HomeScreen}  />
        <Route exact path="/cart" component={CartHolder}  />

      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
