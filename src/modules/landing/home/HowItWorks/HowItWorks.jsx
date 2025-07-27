import React from 'react';
import Marquee from 'react-fast-marquee';
import { Typewriter } from 'react-simple-typewriter';

const steps = [
  {
    id: 1,
    title: 'Choose Your Plan',
    description:
      "Find the perfect travel plan that suits your needs and budget. Whether you're a solo traveler, a couple, or planning a group tour — we've got you covered.",
    imageUrl: 'https://i.postimg.cc/BQqgfFCw/942c3237f0e5458df4d49f2c9a657c80.jpg',
  },
  {
    id: 2,
    title: 'Enjoy the Journey',
    description:
      "Experience scenic beauty, exciting moments, and lasting memories.TourNest BD is with you every step of the way.",
    imageUrl: 'https://i.postimg.cc/G2VZSQDN/979d087a49f05e58b2fecaf9f4796eb1.jpg',
  },
  {
    id: 3,
    title: 'Book with Ease',
    description:
      "Enjoy a smooth and secure booking experience. No hidden fees, no hassle – just a few simple steps.Confirm your trip instantly and focus on the adventure!.",
    imageUrl: 'https://i.postimg.cc/zfjzM9DQ/5d57c4ab76328dc76fee218781b38e08.jpg',
  },
];

const HowItWorks = () => (
  <section className="py-8 sm:py-12 lg:py-16 ">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-4 ">
        <Typewriter
          words={["Here's How It Works", 'Only 3 Simple Steps', 'Get Started Now!']}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>
      <p className="text-center font-semibold mb-6 sm:mb-8 lg:mb-10 text-base sm:text-lg lg:text-xl">
        Explore More, Worry Less with TourNest BD
      </p>
      <Marquee speed={50} pauseOnHover>
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center mx-4 sm:mx-6 lg:mx-10 w-64 sm:w-72 lg:w-80"
          >
            <img
              src={step.imageUrl}
              alt={step.title}
              className="h-40 sm:h-44 lg:h-48 w-auto object-contain rounded-xl mb-4"
            />
            <h3 className=" sm:text-xl font-medium mb-2 text-base">{step.title}</h3>
            <p className=" sm:text-sm text-base">{step.description}</p>
          </div>
        ))}
      </Marquee>
    </div>
  </section>
);

export default HowItWorks;