import React from 'react';
import { dataTitle } from '../Data';

const ListeTitle = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto md:ml-[6rem]">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline hover:text-yellow-500"
                  aria-current="page"
                >
                  Accueil
                </a>
              </li>
              <li className="flex gap-1">
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline hover:text-yellow-500"
                  aria-current="page"
                >
                  Rachat or
                </a>
                <svg
                  className="w-2.5 h-2.5 ms-2.5 mt-1 text-gray-900 dark:text-white hover:text-yellow-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </li>
              <li className="flex gap-1">
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline hover:text-yellow-500"
                  aria-current="page"
                >
                  Argent
                </a>
                <svg
                  className="w-2.5 h-2.5 ms-2.5 mt-1 text-gray-900 dark:text-white hover:text-yellow-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline hover:text-yellow-500"
                >
                  Argenterie
                </a>
              </li>
              <li className="flex gap-1">
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline hover:text-yellow-500"
                  aria-current="page"
                >
                  Bijoux
                </a>
                <svg
                  className="w-2.5 h-2.5 ms-2.5 mt-1 text-gray-900 dark:text-white hover:text-yellow-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </li>
              {dataTitle &&
                dataTitle.map((item) => (
                  <li key={item.key}>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:underline hover:text-yellow-500"
                    >
                      {item.Title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ListeTitle;
