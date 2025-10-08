import { Button } from "./ui/button";
import Logo2 from "../assets/images/ET Logo 2.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="h-auto w-1/6 my-2">
          <img src={Logo2} alt="Easythrift Logo" />
        </div>
        <a href="#waitlist">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
            Join the Waitlist
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;