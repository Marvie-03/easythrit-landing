const Footer = () => {
    return (
        <footer className="py-8 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} EasyThrift. Built for the community, in the community.</p>
                {/* Add social media links here if needed */}
            </div>
        </footer>
    )
}

export default Footer;