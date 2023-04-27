import React, { useState } from "react";
import Link from 'next/link';
import { Transition } from "@headlessui/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
        <div>
            <nav>
                <div className="max-w-[80vw] mx-auto px-2 sm:px-6 lg:px-8 pb-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <h1 className="font-semibold text-2xl text-gray-500">Bruno<span className="font-bold text-gray-800">Bold</span></h1>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-12 flex items-baseline space-x-4">
                                <Link
                                    href="/"
                                    className=" hover:bg-gray-200 text-black px-3 py-2 rounded-md text-md font-medium"
                                >Home</Link>

                                <Link
                                    href="/about"
                                    className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-md font-medium"
                                >About</Link>

                                <Link
                                    href="/projects"
                                    className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-md font-medium"
                                >Projects</Link>

                                <Link
                                    href="/blog"
                                    className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-md font-medium"
                                >Blog</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between h-16 space-x-4">
                            {/* <button className="text-white h-12 w-12 bg-yellow-500 rounded-xl hidden lg:block">!</button> */}
                            <Link href="/contact">
                                <button className="text-white h-12 w-32 bg-zinc-800 rounded-xl hidden lg:block">Contact Me</button>
                            </Link>
                        </div>
                        
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    </div>

                    <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                    {(ref) => (
                        <div className="md:hidden bg-gray-200 rounded-b-xl" id="mobile-menu">
                        <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                            href="/"
                            className="hover:bg-gray-300 text-black block px-3 py-2 rounded-md text-base font-medium"
                            >Home
                            </Link>

                            <Link
                            href="/about"
                            className="text-black hover:bg-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >About
                            </Link>

                            <Link
                            href="/projects"
                            className="text-black hover:bg-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >Projects
                            </Link>

                            <Link
                            href="/blog"
                            className="text-black hover:bg-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >Blog
                            </Link>

                            <Link
                            href="/contact"
                            className="text-black hover:bg-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >Contact
                            </Link>
                        </div>
                    </div>
                )}
                </Transition>
            </nav>
        </div>
    </header>
  );
}

export default Navbar;