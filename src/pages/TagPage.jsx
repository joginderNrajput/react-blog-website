import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blog from "../components/Blog";
import Pagination from "../components/Pagination";
import {FcPrevious} from "react-icons/Fc";
import Footer from "../components/footer";

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div className="flex mt-6">
        <div className="flex mx-5">
          <button
            className="flex items-center justify-center bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigation(-1)}
          >
            {<FcPrevious />}
            Back
          </button>
        </div>

        <h2 className="text-2xl mx-[350px] font-bold">
          Blogs Tagged <span className="text-blue-500">{`#${tag}`}</span>
        </h2>
      </div>
      <Blog />
      <Pagination />
      <Footer/>
    </div>
  );
};

export default TagPage;
