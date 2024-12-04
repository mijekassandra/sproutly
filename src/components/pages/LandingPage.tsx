import React, { useState, useEffect } from "react";

// import icon
import icons from "../icons/Icons.tsx";

//import json
import plantData from "../../mockData/plantCollections.json";

// import components
import CardVariantOne from "../cards/CardVariantOne";
import CardVariantTwo from "../cards/CardVariantTwo";
import HeroSection from "../core/HeroSection";
import Navbar from "../core/Navbar";
import CardVariantThree from "../cards/CardVariantThree.tsx";
import CardVariantFour from "../cards/CardVariantFour.tsx";
import SecondaryButton from "../buttons/SecondaryButton.tsx";
import PrimaryButton from "../buttons/PrimaryButton.tsx";
import Footer from "../core/Footer.tsx";

const LandingPage = () => {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle visibility based on scroll position
      if (window.scrollY > 0) {
        setShowCards(true); // Show cards
      } else {
        setShowCards(false); // Hide cards
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex h-screen flex-col bg-[url('src/assets/hero-banner1.jpg')] bg-cover bg-center">
        <div>
          <Navbar />
        </div>
        <HeroSection />
      </div>
      {/*------- FEATURED SECTION ---------------------------------------- */}
      <div className="relative">
        <div className="padding-to-all landing-container h-128 sm:h-80 lg:h-28">
          <div className="absolute -top-24 left-1/2 grid w-full -translate-x-1/2 transform justify-center gap-10">
            <div
              className={`flex flex-wrap justify-center gap-x-8 gap-y-10 transition-all duration-700 ${
                showCards
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <CardVariantOne
                image="src\assets\planty-2.png"
                label="Trending Plants"
                subLabel="Plant name"
              ></CardVariantOne>
              <CardVariantOne
                image="src\assets\planty-7.png"
                label="New Collection"
                subLabel="Plant name"
              ></CardVariantOne>
              <CardVariantOne
                image="src\assets\planty-6.png"
                label="Unkillable Houseplants"
                subLabel="Plant name"
              ></CardVariantOne>
            </div>
          </div>
        </div>
      </div>
      {/*------- WHAT WE SERVE SECTION ---------------------------------------- */}
      <div className="padding-to-all landing-container">
        <h5 className="landing-header-title text-center">What we serve</h5>
        <div className="card-div-responsiveness justify-center">
          <CardVariantTwo
            label="Air-purifying Plants"
            subLabel="Lorem ipsum dolor sit amet consectetur adipiscing elit justo sollicitudin."
            icon={<icons.PotPlantIcon className="h-8 w-8 text-mainGreen" />}
          ></CardVariantTwo>
          <CardVariantTwo
            label="Refreshing Plants"
            subLabel="Lorem ipsum dolor sit amet consectetur adipiscing elit justo sollicitudin."
            icon={<icons.GrassIcon className="h-8 w-8 text-mainGreen" />}
          ></CardVariantTwo>
          <CardVariantTwo
            label="Plants for home offices"
            subLabel="Lorem ipsum dolor sit amet consectetur adipiscing elit justo sollicitudin."
            icon={<icons.HomeIcon className="h-8 w-8 text-mainGreen" />}
          ></CardVariantTwo>
          <CardVariantTwo
            label="Nationwide Delivery"
            subLabel="Lorem ipsum dolor sit amet consectetur adipiscing elit justo sollicitudin."
            icon={<icons.DeliveryIcon className="h-8 w-8 text-mainGreen" />}
          ></CardVariantTwo>
        </div>
      </div>
      {/*------- POPULAR COLLECTIONS ---------------------------------------- */}
      <div
        className="padding-to-all landing-container"
        style={{ background: "#F4F3F0" }}
      >
        <h5 className="landing-header-title mb-10 text-center">
          Popular Collections
        </h5>
        <div className="card-div-responsiveness justify-center gap-y-20">
          {plantData.plantCollections.map((plant: any, index: any) => (
            <CardVariantThree
              key={index}
              image={plant.image}
              label={plant.label}
              subLabel={plant.subLabel}
              price={plant.price}
            ></CardVariantThree>
          ))}
        </div>
        <div className="flex justify-center">
          <PrimaryButton label="See More"></PrimaryButton>
        </div>
      </div>

      {/*------- SPROUTLY PROMIS ---------------------------------------- */}
      <div className="padding-to-all landing-container">
        <h5 className="landing-header-title mb-10 text-center">
          This the Sproutly Promise
        </h5>
        <div className="card-div-responsiveness justify-center">
          <CardVariantFour
            label="QUALITY"
            definition="Lorem ipsum dolor sit amet consectetur adipiscing elit blandit."
            icon={<icons.DiamondIcon className="h-6 w-6" />}
            bgColor="bg-red-100"
            iconColor="text-red-500"
          />
          <CardVariantFour
            label="DELIVERY"
            definition="Lorem ipsum dolor sit amet consectetur adipiscing elit blandit."
            icon={<icons.DeliveryIcon className="h-6 w-6" />}
            bgColor="bg-yellow-100"
            iconColor="text-yellow-500"
          />
          <CardVariantFour
            label="PRICING"
            definition="Lorem ipsum dolor sit amet consectetur adipiscing elit blandit."
            icon={<icons.PriceIcon className="h-6 w-6" />}
            bgColor="bg-purple-100"
            iconColor="text-purple-500"
          />
          <CardVariantFour
            label="CARE"
            definition="Lorem ipsum dolor sit amet consectetur adipiscing elit blandit."
            icon={<icons.CareIcon className="h-6 w-6" />}
            bgColor="bg-blue-100"
            iconColor="text-blue-500"
          />
        </div>
      </div>
      <div className="padding-to-all landing-container justify-center">
        <div className="cardVariantGreen relative mx-auto flex min-h-60 w-full max-w-screen-xl items-center justify-between gap-4">
          <div className="flex flex-col justify-center gap-8 md:w-2/3">
            <div>
              <h5 className="font-semibold text-white">
                Free standard delivery on orders over ₱1500
              </h5>
              <h6 className="font-light text-white">
                Receive your beloved plant at your doorstep within 1 to 3 days.
              </h6>
            </div>
            <SecondaryButton label="Discover now" />
          </div>
          <div className="absolute -top-36 right-10 md:right-4">
            <img
              className="hide-image w-48 md:w-72"
              src="src/assets/planty-5.png"
              alt="Plant Image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
