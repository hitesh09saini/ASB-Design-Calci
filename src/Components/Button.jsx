import React from 'react';

const Button = ({ text, color, onClick }) => {
  return (
    <button onClick={() => onClick(text)} className={`h-[70px] w-[100px] max-sm:w-[60px] text-2xl m-1 active:bg-violet-700  text-white font-bold py-2 px-4 rounded bg-blue-500  bg-${color}-500`}>
      {text}
    </button>
  );
};

export default Button;
