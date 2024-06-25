// import { BrowserRouter as Router, Routes, Route, useLocation, useSearchParams } from 'react-router-dom';
// import ProductList from './components/ProductList';
// import ProductDetail from './components/ProductDetail';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { Cart } from './components/Cart';
// import Section from './components/Section';

// function App() {

//     return (
//         <Router>
//             <Header/>
//             <Section/>
//             <Routes>
//                 <Route path="/" element={<ProductList />} />
//                 <Route path="/product/:productId" element={<ProductDetail />} />
//                 <Route path="/cart" element={<Cart />} />
//             </Routes>
//             <Footer/>
//         </Router>
//     );
// }
// export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { Provider } from "react-redux";
import store from "./app/store";
import Header from "./components/Head";
import Cart from "./components/Cart";

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
      </Router>
    </Provider>
  );
}
export default App;
