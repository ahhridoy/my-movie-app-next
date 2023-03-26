export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-5">
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            nibh tristique, rhoncus lacus vel, vestibulum urna. Donec vitae enim
            eu urna efficitur eleifend ac non nulla.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Twitter
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Instagram
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400 mb-2">123 Main St.</p>
          <p className="text-gray-400 mb-2">Anytown, USA 12345</p>
          <p className="text-gray-400 mb-2">(123) 456-7890</p>
          <p className="text-gray-400 mb-2">email@example.com</p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
        <p>&copy; 2023 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
