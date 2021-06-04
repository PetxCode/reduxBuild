import "antd/dist/antd.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import CartHolder from "./component/Content/CartHolder";
import CartPage from "./component/Content/CartPage";
import HeaderView from "./component/Content/HeaderView";
import ProductPage from "./component/Content/ProductPage"


function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderView />
        <Switch>
          <Route exact path='/' component={ProductPage}  />
          <Route exact path='/cart' component={CartHolder}  />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
