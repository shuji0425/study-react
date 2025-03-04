import React from "react";

const ClickButton = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("ボタンがクリックされました！", event);
  };

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      onClick={handleClick}
    >
      クリックしてね
    </button>
  );
};

export default ClickButton;
