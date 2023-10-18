"use client"

import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { BiDollar } from 'react-icons/bi';

const Input = ({ name, label, type = 'text', formatPrice, disabled, border }) => {
  const inputStyle = {
    border: border || '1px solid #E6E6E6',
  };

  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar size={24} className="text-[#042f2e] absolute top-5 left-2" />
      )}
      <Field
        name={name}
        type={type}
        disabled={disabled}
        placeholder=" "
        style={inputStyle}
        className={`peer w-full pt-5 h-[55px] font-light bg-white pb-1 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed text-[14px] ${
          formatPrice ? 'pl-9' : 'pl-4'
        }`}
      />
      <label
        className={`
          absolute 
          text-[13px]
          duration-150 
          transform 
          -translate-y-1
          top-4
          z-10 
          origin-[0]
          ${formatPrice ? 'left-9' : 'left-4'}
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-3
        `}
      >
        {label}
      </label>
      <ErrorMessage name={name} component="div" className="text-error text-sm" />
    </div>
  );
};

export default Input;
