import { Button } from "./ui/button";
import { Input } from "./ui/input";

const FinalCTA = () => {
  return (
    <section id="waitlist" className="py-24 bg-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tighter">Be the First to Know</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-100">
           Join the waitlist to get early access. The first 100 vendors get priority placement and a "Founding Vendor" badge!
        </p>
        <form className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <Input 
            type="email" 
            placeholder="Enter your email address" 
            className="h-14 text-lg text-black rounded-full flex-grow" 
          />
          <Button 
            type="submit"
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full h-14 px-8 text-lg"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
};

export default FinalCTA;