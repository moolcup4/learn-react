import React from "react";

const Greeting = () => {
  // logic
  const userName = "김태원";
  const textClass = "text-red";

  // view
  return (
    <>
      <h1 className={`greeting-title ${textClass}`}>
        안녕하세요. {userName}님!
      </h1>
      <p>좋은 하루되세요. </p>
    </>
  );
};

export default Greeting;
