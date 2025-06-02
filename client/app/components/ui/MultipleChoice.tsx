"use client"

import React, { useState } from 'react'
import { IoChevronUp } from "react-icons/io5";
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
});

type MultipleChoiceProps = {
    question: string;
    options: string[];
    required?: boolean;
}

const MultipleChoice = (props: MultipleChoiceProps) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  return (
    <div className={`bg-white border-b border-gray-200 ${manrope.className}`}>
      {/* Header */}
      <div className="flex items-center justify-between py-4 px-6">
        <h3 className="text-lg font-medium text-gray-900">{props.question}</h3>
        <div className="flex items-center gap-2">
          {props.required && (
            <span className="text-red-500 text-sm font-medium">Required</span>
          )}
          <IoChevronUp className="text-gray-400" size={16} />
        </div>
      </div>

      {/* Options */}
      <div className="px-6 pb-6">
        {props.options.map((option, index) => (
          <label
            key={index}
            className="flex items-center gap-3 py-3 cursor-pointer hover:bg-gray-50 rounded-lg px-2 -mx-2"
          >
            <div className="relative">
              <input
                type="radio"
                name={props.question}
                value={option}
                checked={selectedOption === option}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="w-5 h-5 text-black border-2 border-gray-300 focus:ring-2 focus:ring-black sr-only"
              />
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedOption === option 
                  ? 'border-black bg-black' 
                  : 'border-gray-300 bg-white'
              }`}>
                {selectedOption === option && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </div>
            <span className="text-gray-700 text-base">{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default MultipleChoice