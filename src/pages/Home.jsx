import React from "react";
import { Header } from "../components/Header/Header";
import { Landing } from "../components/Landing.jsx/Landing";
import { Footer } from "../components/Footer/Footer";
import { Copyright } from "../components/Copyright/Copyright";

export const Home = () => {
  return (
    <div>
      <Header />
      <Landing />
      <Footer />
      <Copyright />
    </div>
  );
};
