import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {['About', 'Careers', 'Brand Center', 'Blog'].map((item) => (
                <li className="mb-4" key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {['Discord Server', 'Twitter', 'Facebook', 'Contact Us'].map((item) => (
                <li className="mb-4" key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {['Privacy Policy', 'Licensing', 'Terms & Conditions'].map((item) => (
                <li className="mb-4" key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {['iOS', 'Android', 'Windows', 'MacOS'].map((item) => (
                <li className="mb-4" key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 <a href="https://flowbite.com/">codyForm™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            {[
              { name: 'Facebook page', path: '#' },
              { name: 'Discord community', path: '#' },
              { name: 'Twitter page', path: '#' },
              { name: 'GitHub account', path: '#' },
              { name: 'Dribbble account', path: '#' },
            ].map(({ name, path }) => (
              <a key={name} href={path} className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <span className="sr-only">{name}</span>
                {/* Replace with the appropriate SVG icon for each link */}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
