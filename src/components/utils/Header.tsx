import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { logo } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn,setIsLoggedIn] = useState(true)
  const [isAdmin,setIsAdmin] = useState(true)
  
const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

// navigation
const path = useLocation().pathname;
const navigation = [
  { name: "HOME", href: "/", current: path == "/" ? true : false },
  { name: "VIP", href: "/vip", current: path == "/vip" ? true : false },
  { name: "ABOUT", href: "/about", current: path == "/about" ? true : false },
  {
    name: "CONTACT",
    href: "/contact",
    current: path == "/contact" ? true : false,
  },
];
const userNavigation = [{ name: "Sign out", href: "#" }, isAdmin ? {name: "Admin dashboard", href:"/admin"} : null];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}


  return (
    <Disclosure as="nav" className="bg-red-400 p-1">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-red-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center justify-center">
                  <img
                    className="h-14 w-auto rounded-full"
                    src={logo}
                    alt="Your Company"
                  />
                  <p
                    className={classNames(
                      "hidden sm:block text-white ml-2 text-xl font-semibold"
                    )}
                  >
                    OGSOO
                  </p>
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-red-300 text-white"
                          : "text-white hover:bg-red-300 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                  {/* Profile dropdown */}
                  {isLoggedIn ? (
                    <>
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-red-300" : "",
                                      "block px-4 py-2 text-sm text-gray-900/70"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </>
                  ) : (
                    <>
                      <div className="flex gap-4 items-center">
                        <Link
                          to={"/login"}
                          className="rounded-md p-1 font-[500] text-white bg-red-300 px-4"
                        >
                          LOG IN
                        </Link>
                        <Link
                          to={"/signup"}
                          className="rounded-md p-1 font-[500] text-slate-50 bg-cyan-500 px-4"
                        >
                          SIGN UP
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-red-300 text-white"
                      : "text-white hover:bg-red-300 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              {/* checking to see if user is logged in or not */}

              {isLoggedIn ? (
                <>
                  <div className="flex items-center px-5 sm:px-6">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-white">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 px-2 sm:px-3">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex gap-4 items-center">
                    <Link
                      to={"/login"}
                      className="rounded-md p-1 font-[500] text-white bg-red-300 px-4"
                    >
                      LOG IN
                    </Link>
                    <Link
                      to={"/signup"}
                      className="rounded-md p-1 font-[500] text-slate-50 bg-cyan-500 px-4"
                    >
                      SIGN UP
                    </Link>
                  </div>
                </>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
