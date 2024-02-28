import React from "react";
import Button from "./Button";

const HomePage = ({ homePage }) => {
  const { title, paragraph, image } = homePage;
  return (
    <div className="w-full px-5 lg:px-10 py-5 lg:py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 items-start lg:items-center lg:justify-center">
          <h1>{title}</h1>
          <p className="max-w-[700px] lg:text-center">{paragraph}</p>
          <Button title="Contact Us" />
          <img src={image} alt="service" className="mt-3" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
