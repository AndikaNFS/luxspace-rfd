import React from "react";
import Header from "../parts/Header";
import PageErrorMessage from "../parts/PageErrorMessage";

import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

import Document from "../parts/Document";

function NotFound() {
  return (
    <Document>
      <Header />

      <PageErrorMessage />

      <Sitemap />
      <Footer />
    </Document>
  );
}

export default NotFound;
