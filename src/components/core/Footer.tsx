import PrimaryButton from "../buttons/PrimaryButton";

const Footer = () => {
  return (
    <div
      className="padding-to-all flex flex-col justify-between gap-6 sm:flex-row md:flex-row"
      style={{ background: "#F4F3F0" }}
    >
      <div className="flex flex-col justify-center gap-1">
        <h6 className="footer-text font-bold">About Sproutly</h6>
        <h6 className="footer-text">Plant Care</h6>
        <h6 className="footer-text">FAQ</h6>
        <h6 className="footer-text">Contact</h6>
        <h6 className="footer-text">Careers</h6>
      </div>
      <div className="flex flex-col content-center gap-4">
        <h6 className="text-center font-semibold">Join Sproutly</h6>
        <h6 className="footer-text">
          Sign up for our free video course and urban garden inspiration
        </h6>
        <div className="flex justify-center">
          <PrimaryButton label="Sign up" />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-1">
        <h6 className="footer-text font-bold">Terms</h6>
        <h6 className="footer-text">Terms of Service</h6>
        <h6 className="footer-text">Privacy Policy</h6>
        <h6 className="footer-text">Return & Delivery</h6>
        <h6 className="footer-text">Cookies</h6>
      </div>
    </div>
  );
};

export default Footer;
