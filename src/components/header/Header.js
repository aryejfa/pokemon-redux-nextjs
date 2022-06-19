import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className="relative">
        <Disclosure as="nav" className="w-full bg-primary z-10 shadow">
          {({ open }) => (
            <>
              <div className="container mx-auto">
                <div className="relative flex items-center justify-between h-20">
                  <div className="absolute inset-y-0 right-0 flex items-center md:hidden mr-2">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon
                          className="block h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-1 flex items-center justify-start md:justify-center h-20 md:px-8 px-4">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center text-white font-Roboto-Bold text-xl">
                      <Link href="/">POKEMON</Link>
                    </div>
                    {/* List Menu */}
                  </div>
                  <div className="hidden md:block md:ml-6 w-full">
                    <div className="flex flex-row justify-end items-center h-20 space-x-4 uppercase tracking-widest font-Roboto text-white text-lg">
                      <Link href="/">Home</Link>
                    </div>
                  </div>
                  <div className="hidden md:block absolute inset-y-0 left-0 flex items-center px-2 md:static md:inset-auto md:ml-6 md:pr-0"></div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 font-Roboto uppercase tracking-widest">
                  <Disclosure.Button className="block px-3 py-2 rounded-md text-base font-medium text-center font-Roboto text-white text-lg">
                    <Link href="/">Home</Link>
                  </Disclosure.Button>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </header>
    </>
  );
}

export default Header;
