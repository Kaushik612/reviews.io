"use client";
import React from "react";

const AboutPage = () => {
  return (
    <section className="bg-secondary mt-5">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          About Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          This is a sample About us page. Write your own unique story here!
        </p>
        <div className="flex justify-center items-center flex-wrap">
          <p className="text-2xl md:text-3xl font-bold text-primary leading-relaxed text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            dolores dignissimos accusantium perferendis officia culpa voluptatem
            labore aut! Nemo facere, similique voluptatibus nulla itaque cum
            doloremque quidem exercitationem, vero adipisci incidunt voluptatum
            quaerat blanditiis mollitia, provident beatae sed culpa odit?
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
