import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    getData();
  }, [index]);

  async function getData() {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=20`
      );

      console.log(response.data);
      setUserData(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  let printUserData = "No User Available";

  if (userData.length > 0) {
    printUserData = userData.map((elem) => {
      return (
        <a
          href={elem.url}
          target="_blank"
          rel="noreferrer"
          key={elem.id}
          className="
            group relative w-60 h-64 overflow-hidden rounded-2xl
            bg-[#dce8dc]
            border border-[#b8cbb8]
            shadow-[0_8px_25px_rgba(80,65,45,0.18)]
            hover:-translate-y-2
            hover:shadow-[0_15px_35px_rgba(80,65,45,0.28)]
            hover:border-[#9aae9a]
            transition-all duration-500
          "
        >
          {/* Image */}
          <img
            src={elem.download_url}
            alt={elem.author}
            className="
              h-full w-full object-cover
              group-hover:scale-110
              transition-transform duration-700
            "
          />

          {/* Soft overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-[#5c4b38]/90
              via-[#7c927c]/35
              to-transparent
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-500
            "
          ></div>

          {/* Author */}
          <div
            className="
              absolute bottom-0 left-0 right-0
              translate-y-full
              group-hover:translate-y-0
              transition-transform duration-500
              bg-[#e5d8c5]/95
              backdrop-blur-md
              border-t border-[#b9aa94]
              px-4 py-4
            "
          >
            <p
              className="
                text-[#718571]
                text-xs uppercase
                tracking-[0.2em]
                font-semibold
              "
            >
              Photographer
            </p>

            <h2
              className="
                text-[#594938]
                text-lg
                font-bold
                mt-1
              "
            >
              {elem.author}
            </h2>
          </div>

          {/* Hover icon */}
          <div
            className="
              absolute top-3 right-3
              w-9 h-9 rounded-full
              bg-[#e5d8c5]/90
              backdrop-blur-sm
              border border-[#b9aa94]
              flex items-center justify-center
              text-[#5d4d3b]
              font-bold
              opacity-0
              scale-75
              group-hover:opacity-100
              group-hover:scale-100
              transition-all duration-500
            "
          >
            ↗
          </div>
        </a>
      );
    });
  }

  return (
    <div
      className="
        min-h-screen
        bg-[#f1eee6]
        px-6 py-10
      "
    >

      {/* Header */}
      <div className="text-center mb-12">

        <p
          className="
            text-[#789078]
            uppercase
            tracking-[0.3em]
            text-sm
            font-semibold
            mb-3
          "
        >
          Explore Beautiful Images
        </p>

        <h1
          className="
            text-5xl md:text-6xl
            font-extrabold
            text-[#594938]
            tracking-tight
          "
        >
          Soft Frames
        </h1>

        <div
          className="
            w-24 h-1
            bg-[#9aae9a]
            mx-auto
            mt-5
            rounded-full
          "
        ></div>

      </div>

      {}
      <div
        className="
          max-w-7xl
          mx-auto
          flex flex-wrap
          gap-7
          justify-center
        "
      >
        {printUserData}
      </div>

      {}
      <div className="flex justify-center items-center gap-5 mt-14">

        {}
        {}
<button
  disabled={index === 1}
  onClick={() => {
    if (index > 1) {
      setIndex(index - 1);
    }
  }}
  className="
    px-4 py-2
    text-sm
    rounded-lg
    bg-[#d8cbb8]
    border border-[#b9aa94]
    text-[#594938]
    font-semibold
    hover:bg-[#cbbba5]
    hover:-translate-y-0.5
    disabled:opacity-40
    disabled:cursor-not-allowed
    transition-all duration-300
  "
>
  ← Prev
</button>

{/* Page Number */}
<div
  className="
    min-w-11
    text-center
    px-4 py-2
    rounded-lg
    bg-[#c9d8c9]
    border border-[#aabdaa]
    text-[#526752]
    font-bold
    text-lg
    shadow-sm
  "
>
  {index}
</div>

{/* Next */}
<button
  onClick={() => {
    setIndex(index + 1);
  }}
  className="
    px-4 py-2
    text-sm
    rounded-lg
    bg-[#b8cbb8]
    border border-[#9aae9a]
    text-[#465b46]
    font-semibold
    hover:bg-[#a9bea9]
    hover:-translate-y-0.5
    transition-all duration-300
  "
>
  Next →
</button>
      </div>

    </div>
  );
}

export default App;
