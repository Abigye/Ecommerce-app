const Footer = () => (
    <footer className="bg-gray-900 text-white py-6 mt-8 text-center text-sm sm:text-base">
      <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      <p className="mt-1">Built with ❤️ using React, TypeScript, and TailwindCSS.</p>
      <p className="mt-1">
        <a
          href="https://github.com/Abigye/Ecommerce-app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          View this project on GitHub
        </a>
      </p>
    </footer>
  );
  
  export default Footer;