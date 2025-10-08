import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const FinalCTA = () => {

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null); 
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await fetch(`${apiUrl}/join-waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "Anonymous", email }),
      });
      if (!response.ok) {
        throw new Error("Failed to join waitlist. Please try again.");
      }
      setSuccess("Thank you for joining the waitlist!");
      setEmail("");
    } catch (err: string | any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(null);
        setError(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  return (
    <section id="waitlist" className="py-24 bg-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tighter">Be the First to Know</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-100">
           Join the waitlist to get early access. The first 100 vendors get priority placement and a "Founding Vendor" badge!
        </p>
        { (success || error) ? (
          <div className="mt-6">
            {success && <p className="text-green-300">{success}</p>}
            {error && <p className="text-red-300">{error}</p>}
          </div>
        ) :
          <form className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <Input 
            type="email" 
            placeholder="Enter your email address" 
            className="h-14 text-lg text-white plsceholder-gray-200 rounded-full flex-grow" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
          <Button 
            type="submit"
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full h-14 px-8 text-lg"
            disabled={isSubmitting}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </form>}
      </div>
    </section>
  );
};

export default FinalCTA;