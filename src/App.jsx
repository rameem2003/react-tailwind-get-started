import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import { v4 as uuidv4 } from "uuid";
import { FaReact } from "react-icons/fa";
import { ProgressBar } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => toast(`React + Tailwind CSS`);
  return (
    <>
      <ToastContainer />
      <div className=" bg-slate-700 h-screen flex items-center justify-center flex-col">
        <div>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className=" w-[200px] h-[200px]"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className=" font-medium text-4xl text-white mt-4">
          React + Tailwind CSS
        </h1>

        <button
          onClick={notify}
          className=" bg-slate-600 border-white border-2 px-6 py-2 mt-4 font-medium text-xl text-white rounded-lg"
        >
          <FaReact className=" inline" /> Notify
        </button>

        <div>
          <ProgressBar
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
