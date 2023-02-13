import { Redirect, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Products from "./Pages/Products";
import MainHeader from "./Components/MainHeader";
import ProductDetails from "./Pages/ProductDetails";
function App() {
  return (
    <div>
      <MainHeader/>
      <main>
        <Route path='/'>
          <Redirect to='/welcome'/>
        </Route>
      <Route path='/Welcome'>
        <Welcome/>
      </Route>
      <Route path='/Products' exact>
        <Products/>
      </Route>
      <Route path='/products/:productId'>
        <ProductDetails/>
      </Route>
      </main>
      
    </div>
  );
}

export default App;
