import React from "react";
import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb/index";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";
import Document from "../parts/Document";
import ShoopingCart from "../parts/Cart/ShoopingCart";
import ShippingDetails from "../parts/Cart/ShippingDetails";

// const routes = [];

function Cart() {
  return (
    <>
      <Document>
        <Header theme="black" />

        <Breadcrumb
          list={[
            { url: "/", name: "Home" },
            { url: "/cart", name: "Shooping Cart" },
          ]}
        />

        <section className="md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex -mx-4 flex-wrap">
              <ShoopingCart />
              <ShippingDetails />
            </div>
          </div>
        </section>
        <Sitemap />
        <Footer />
      </Document>
    </>
  );
}

export default Cart;
