import React, { useLayoutEffect } from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blog from "../components/Blog";
import Pagination from "../components/Pagination";
import {FcPrevious} from "react-icons/Fc";
import Footer from "../components/footer";

const CategoryPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div className="flex mt-6">
      <div className="flex mx-5">
          <button
            className="flex items-center justify-center bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate(-1)}
          >
            {<FcPrevious />}
            Back
          </button>
        </div>


        <h2 className="text-2xl mx-[440px] font-bold">
            Blogs on <span className="text-blue-500">{category}</span>
        </h2>
      </div>
      <Blog/>
      <Pagination/>
      <Footer/>
    </div>
  );
};

export default CategoryPage;
