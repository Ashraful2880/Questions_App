import React, { useState } from "react";
import { RiCheckFill } from "react-icons/ri";
import { MdClose, MdArrowBack } from "react-icons/md";

const Questions = () => {
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsCorrect(option === "B");
  };

  return (
    <div className="container mx-auto">
      <div className="bg-white max-w-md mx-auto p-6 rounded-lg shadow-md mt-3">
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold">Question 1/10</div>
            <div className="text-red-600">18 sec</div>
          </div>
          <div className="bg-indigo-200 h-2 rounded-full mt-1">
            <div
              className="bg-indigo-500 h-full rounded-full"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>
        <div className="mb-6 text-lg">
          In publishing and graphic design, thear Lorem ips isplaceholder text
          which the commonly used to demon?
        </div>
        <div>
          {["A", "B", "C", "D"]?.map((option) => (
            <button
              key={option}
              className={`w-full mb-2 px-4 py-3 text-left rounded-lg border ${
                selectedOption === option
                  ? isCorrect
                    ? "bg-green-100 border-b-2 border-green-500 text-green-700"
                    : "bg-red-100 border-red-500 border-b-2 text-red-700"
                  : "border-gray-300"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <div className="flex justify-between items-center">
                <p>
                  <span className="font-semibold mr-2 text-slate-500">
                    {option}.
                  </span>
                  <span className="text-slate-600">Issac Network</span>
                </p>
                {selectedOption === option ? (
                  isCorrect ? (
                    <div className="h-5 w-5 border border-green-600 bg-green-600 rounded-full text-white flex justify-center items-center text-2xl">
                      <RiCheckFill />
                    </div>
                  ) : (
                    <div className="h-5 w-5 border border-red-600 bg-red-600 rounded-full text-white flex justify-center items-center text-xl">
                      <MdClose />
                    </div>
                  )
                ) : (
                  ""
                )}
              </div>
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center gap-x-2 mt-4">
          <button className="py-1.5 text-[#5340FB] font-bold rounded-[4px] text-[17px]">
            <div className="flex items-center gap-x-1">
              <MdArrowBack className="text-2xl" />
              <span>BACK</span>
            </div>
          </button>
          <button className="px-4 py-1.5 border border-[#5340FB] bg-[#5340FB] text-white font-semibold rounded-[4px] text-[14px]">
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
