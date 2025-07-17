import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <h1 className="text-2xl font-bold">
          Easy<span className="text-orange-500">Thrift</span>
        </h1>
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