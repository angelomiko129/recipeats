import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = ({ logo }) => {
  // Get current year
  function getYear() {
    return new Date().getFullYear();
  }
  return (
    <>
      <footer className="footer-responsive">
        <img src={logo} alt="Logo" className="size-[7.2rem] pl-3 sm:p-0" />
        <div className="grid grid-cols-2 gap-10 p-4 sm:grid-cols-3">
          <div>
            <p className="mb-4 font-bold">Quick Links</p>
            <ul className="flex cursor-pointer flex-col gap-4">
              <li>About Us</li>
              <li>
                Contact Us{" "}
                <ul>
                  <li>(+012 3456 789)</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-bold">Follow Us</p>
            <ul className="flex cursor-pointer flex-col gap-4">
              <li>Facebook Page</li>
              <li>Instagram Feed</li>
              <li>Twitter Updates</li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-bold">Stay Updated</p>
            <ul className="flex cursor-pointer flex-col gap-4">
              <li>Recipe Tips</li>
              <li>User Stories</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 p-4 text-center sm:grid-cols-3 sm:text-start">
          <p>© {getYear()} RecipEats All rights reserved.</p>
          <ul className="flex justify-center gap-8">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
          <div className="flex cursor-pointer justify-center gap-4 sm:justify-end">
            <FaFacebook size={30} />
            <FaInstagram size={30} />
            <FaTwitter size={30} />
          </div>
        </div>
      </footer>
    </>
  );
};
