import { motion } from "framer-motion";
import { Lock, Shuffle, PackageX } from "lucide-react";

const problems = [
  {
    icon: <Lock className="w-8 h-8 text-orange-500" />,
    title: "Lack of Trust",
    description: "Fear of scams, payment fraud, and fake listings in existing marketplaces. ",
  },
  {
    icon: <Shuffle className="w-8 h-8 text-orange-500" />,
    title: "Fragmented & Chaotic",
    description: "Relying on scattered WhatsApp groups and untrusted platforms leads to frustration.",
  },
  {
    icon: <PackageX className="w-8 h-8 text-orange-500" />,
    title: "Poor Quality & Logistics",
    description: "Uncertainty about item condition and the high cost of delivery for low-value items. ",
  },
];

const Problems = () => {
    const cardVariants = {
        offscreen: { y: 50, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tighter">Why is Thrifting on Campus So Hard?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We've all been there. The process is broken, but it doesn't have to be.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              className="p-8 bg-white rounded-2xl shadow-lg"
            >
              <div className="flex items-center justify-center h-16 w-16 bg-orange-100 rounded-full">
                {problem.icon}
              </div>
              <h3 className="mt-6 text-2xl font-bold">{problem.title}</h3>
              <p className="mt-2 text-gray-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;