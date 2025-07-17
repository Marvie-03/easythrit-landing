import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Users, Store } from "lucide-react";

const features = [
    {
        icon: <ShieldCheck size={32} className="text-blue-500" />,
        title: "Trade with Confidence",
        description: "A marketplace rooted in community trust. We use 'Verified Seller' badges and manual moderation to reduce fraud and increase safety."
    },
    {
        icon: <Users size={32} className="text-blue-500" />,
        title: "Hyperlocal & Relevant",
        description: "Discover products through location-based listings tailored to your specific campus or neighborhood. Find what you need, right where you are."
    },
    {
        icon: <Store size={32} className="text-blue-500" />,
        title: "Hybrid Commerce",
        description: "It's not just about secondhand!  Buy and sell both pre-owned items and affordable new goods from individuals and local vendors. "
    },
    {
        icon: <CheckCircle size={32} className="text-blue-500" />,
        title: "Verify Before You Pay",
         description: "Avoid 'what I ordered vs what I got'. Our model encourages in-person product verification with no forced in-app payments."
    }
];

const Features = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tighter">The All-in-One Campus Solution</h2>
                    <p className="mt-4 text-lg text-gray-600">
                         EasyThrift is more than a platform; it's a community-first marketplace built for you.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start p-6 bg-gray-50 rounded-xl"
                        >
                            <div className="flex-shrink-0">{feature.icon}</div>
                            <div className="ml-4">
                                <h3 className="text-xl font-bold">{feature.title}</h3>
                                <p className="mt-1 text-gray-600">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;