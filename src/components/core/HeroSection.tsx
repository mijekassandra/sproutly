import PrimaryButton from "../buttons/PrimaryButton";

const HeroSection = () => {
  return (
    <div className="padding-to-all flex flex-grow items-center pb-16">
      <div className="grid w-4/6 gap-4">
        <h3 className="font-semibold">Your Green Companion Awaits</h3>
        <h6 className="font-openSans mb-2 font-normal">
          Find the perfect plant to breathe life into your space and purify the
          air.
        </h6>
        <PrimaryButton label="Shop Now" fontSize="text-base"></PrimaryButton>
      </div>
    </div>
  );
};

export default HeroSection;
