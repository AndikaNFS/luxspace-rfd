import React from "react";
import { Link } from "react-router-dom";
import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";
import PageErrorMessage from "../parts/PageErrorMessage";

function NotFound() {
  return (
    <>
      <Header />

      <PageErrorMessage />

      <Sitemap />
      <Footer />
    </>
  );
}

export default NotFound;
