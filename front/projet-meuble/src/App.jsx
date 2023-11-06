import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Furniture from "./PageDetail/components/PageDetail";
import UserConnexion from "./PageConnexion/page_connexion";
import PagePrincipal from "./PagePrincipal/PagePrincipal.jsx";
import Navbar from "./Navbar";
import Cart from "./Cart";
import TopButton from "./TopButton";
import AdminPage from "./pageAdmin/page_admin";
// import ShopCategory from "./ShopCategory";

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <TopButton />
        <Routes>
          <Route path="/detail" element={<Furniture />} />
          <Route path="/PageConnexion" element={<UserConnexion />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/product" element={<PagePrincipal />} />
          <Route path="/pageAdmin" element={<AdminPage />} />

          {/* <Route  path="/Chaise" element={<ShopCategory category="chaise" /> } />
      <Route  path="/Table" element={<ShopCategory category="Table" /> } />
      <Route  path="/Lampe" element={<ShopCategory category="Lampe" /> } />
      <Route  path="/Sofa" element={<ShopCategory category="Sofa" /> } />
      <Route  path="/Fauteuil" element={<ShopCategory category="Fauteuil" /> } /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
