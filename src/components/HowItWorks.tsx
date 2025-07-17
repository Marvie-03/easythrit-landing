import { motion } from "framer-motion";
import { PenSquare, MessagesSquare, Handshake } from "lucide-react";

const steps = [
  {
    icon: <PenSquare className="w-10 h-10 text-orange-500" />,
    title: "List or Discover",
    // This step combines the idea of sellers listing items and buyers Browse the feed.
    // Source: "Sellers/vendors add product details (images, price, tags)"  and "Marketplace feed shows items and vendors"
    description: "Whether you're selling unused items or hunting for great deals, you can list products in seconds or browse a feed tailored to your campus.",
  },
  {
    icon: <MessagesSquare className="w-10 h-10 text-orange-500" />,
    title: "Connect Securely",
    // This step highlights the secure, in-app communication.
    // Source: "Interested users contact sellers or vendors via messaging"  and features like "'Verified Seller' and 'Verified Vendor' badges" 
    description: "Use the in-app chat to talk directly with buyers or sellers. Discuss details and negotiate terms within a trusted, verified environment.",
  },
  {
    icon: <Handshake className="w-10 h-10 text-orange-500" />,
    title: "Meet & Transact",
    // This final step emphasizes the offline, community-based transaction model.
    // Source: "Users agree on terms and location for the transaction"  and "No forced in-app payments; users meet physically or handle payment externally" 
    description: "Arrange a meet-up at a convenient spot on or around campus. Verify the item in person and complete your deal with confidence.",
  },
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // This will make the children animate one by one
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tighter">
            It's as Easy as 1, 2, 3
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Our entire process is designed for simplicity, safety, and speed.
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mt-16 grid gap-10 md:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6"
            >
              <div className="flex items-center justify-center h-20 w-20 bg-orange-100 rounded-full mx-auto">
                {step.icon}
              </div>
              <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;