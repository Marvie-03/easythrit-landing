import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="pt-40 pb-24 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter"
        >
          Your Campus Marketplace, <br />
          <span className="text-orange-500">Reimagined.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600"
        >
           Bridging the gap between buyers, sellers, and vendors in campus communities through a trusted digital marketplace. Sell what you don't need, find what you do.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <a href="#waitlist">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full h-14 px-8 text-lg">
              Join the Waitlist
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;