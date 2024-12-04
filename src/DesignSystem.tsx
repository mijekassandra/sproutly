// import components
import PrimaryButton from "./components/buttons/PrimaryButton";
import SecondaryButton from "./components/buttons/SecondaryButton";
import CardVariantOne from "./components/cards/CardVariantOne";
import CardVariantTwo from "./components/cards/CardVariantTwo";
import CardVariantThree from "./components/cards/CardVariantThree";
import Navbar from "./components/core/Navbar";
import CardVariantFour from "./components/cards/CardVariantFour";

// sample icon
const IconOne = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="40px"
    viewBox="0 -960 960 960"
    width="40px"
    fill="#51b385"
  >
    <path d="M325.33-146.67h309.34l45.33-180H280l45.33 180Zm0 66.67q-22.66 0-40.52-14.03-17.86-14.02-23.81-36.3l-49.67-196.34h537.34L699-130.33q-5.95 22.28-23.81 36.3Q657.33-80 634.67-80H325.33ZM186.67-393.33h586.66v-93.34H186.67v93.34Zm294-247.34q0-91.33 73.33-163.66 73.33-72.34 165.33-75.67-2 84-63.66 152.33-61.67 68.34-142.34 83v91.34H840v160q0 27.5-19.58 47.08-19.59 19.58-47.09 19.58H186.67q-27.5 0-47.09-19.58Q120-365.83 120-393.33v-160h326.67v-91.34q-80.67-14.66-142-83-61.34-68.33-64-152.33 92 3.33 166 75.33t74 164Z" />
  </svg>
);

const IconTwo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="currentColor"
  >
    <path d="M480-120 80-600l120-240h560l120 240-400 480Zm-95-520h190l-60-120h-70l-60 120Zm55 347v-267H218l222 267Zm80 0 222-267H520v267Zm144-347h106l-60-120H604l60 120Zm-474 0h106l60-120H250l-60 120Z" />
  </svg>
);

const DesignSystem = () => {
  return (
    <div className="grid gap-4">
      <div>
        <h1>This is H1</h1>
        <h2>This is H2</h2>
        <h3>This is H3</h3>
        <h4>This is H4</h4>
        <h5>This is H5</h5>
        <h6>This is H6</h6>
        <p>This is p tag</p>
      </div>
      <div>
        <Navbar />
      </div>
      <div className="grid gap-6">
        Button
        <PrimaryButton label="Primary Button" />
        <SecondaryButton label="Secondary Button" />
      </div>
      <div className="flex flex-wrap gap-10">
        <CardVariantOne
          image="src\assets\planty-2.png"
          label="Trending Plants"
          subLabel="Plant name"
        ></CardVariantOne>
        <CardVariantTwo
          label="Refreshing Plants"
          subLabel="Lorem ipsum dolor sit amet consectetur adipiscing elit justo sollicitudin."
          icon={<IconOne />}
        ></CardVariantTwo>
        <div className="mt-12">
          <CardVariantThree
            image="src\assets\african-mask-plant-pot.png"
            label="African Mask Plant"
            subLabel="Alocasia × amazonica"
            price={350}
          ></CardVariantThree>
        </div>
        <CardVariantFour
          label="QUALITY"
          definition="Lorem ipsum dolor sit amet consectetur adipiscing elit blandit."
          icon={<IconTwo />}
          bgColor="#FEF2F2"
          iconColor="text-red-500"
        />
      </div>
    </div>
  );
};

export default DesignSystem;
