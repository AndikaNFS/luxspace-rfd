import React from "react";
import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb/index";
// import JustArrived from '../parts/HomePage/JustArrived';
// import BrowseRoom from '../parts/HomePage/BrowseRoom';
import Clients from "../parts/Clients";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestion from "../parts/Details/Suggestion";

// const routes = [];

function Details() {
  return (
    <>
      <Header theme="black" />

      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/19233", name: "Office Room" },
          { url: "/categories/19233/products/1339", name: "Details" },
        ]}
      />

      <ProductDetails />
      <Suggestion />
      {/* <Clients /> */}
      <Sitemap />
      <Footer />
    </>
  );
}

export default Details;
