import Header from "./Header";
import Hero from "./Hero";
import Problems from "./Problems";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";
import Mockup from "../assets/images/Mockup.png";

// A component to add the blue glow effect inspired by modern websites
const Glow = () => (
  <div className="absolute top-1/4 left-0 w-full h-[500px] bg-blue-500/10 blur-[150px] -z-10" />
);

const LandingPage = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Glow />
      <Header />
      <Hero />
      <Problems />
      {/* Placeholder for a full-width product visual, like on Apple's site */}
      <div className="w-full my-24 flex justify-center">
        {/* You can place a high-quality image or a video component here */}
        <img
          src={Mockup}
          alt="EasyThrift App Mockup"
          className="rounded-2xl shadow-2xl object-cover w-full h-full hover:scale-150 focus:scale-150 transition-transform duration-500 max-w-4xl"
        />
      </div>
      <Features />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
