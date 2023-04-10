import React from "react";
import Header from "../components/Header";
import Blog from "../components/Blog";
import Pagination from "../components/Pagination";
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <div>
        <div className="container mx-auto bg-gray-200">
          <Header />
          <main className="my-8">
            <Blog />
            <Pagination />
          </main>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Home;
