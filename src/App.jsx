

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { Provider } from "react-redux";
import store from "./app/store";
import Header from "./components/Head";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes> 
        <Footer/>
      </Router>
    </Provider>
  );
}
export default App;
