import { useState } from "react";
import {Link} from "react-router-dom"
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import { HiOutlineSearch } from "react-icons/hi";

export default function QuranNavbar() {
  const [activeTab, setActiveTab] = useState("surah");
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Navbar fluid rounded className="bg-gray-900 text-white px-4">
      <NavbarBrand href="/" className="text-green-400 font-bold text-lg flex items-center space-x-2">
        <img
          src="/favicon.svg"
          className="h-8 w-8"
          alt="Logo"
        />
        <span>Baca Qur'an</span>
      </NavbarBrand>

      <div className="flex md:order-2 items-center space-x-3">
        {/* Search Input */}
        <div className="hidden sm:flex items-center">
          <TextInput
            type="search"
            placeholder="Cari Surah..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            icon={HiOutlineSearch}
            className="bg-gray-800 border-gray-700 placeholder-gray-400 text-white"
          />
        </div>

        {/* Hamburger menu toggle on small */}
        <NavbarToggle onClick={() => setIsOpen(!isOpen)} />
      </div>

      <NavbarCollapse show={isOpen} className="bg-gray-900 md:bg-transparent">
        {/* Tabs */}
        <div className="flex space-x-6 justify-center w-full border-b border-gray-700 md:border-0">
        <Link to="/">
        
          <button
            onClick={() => handleTabClick("beranda")}
            className={`pb-2 text-sm font-semibold uppercase tracking-wider ${
              activeTab === "beranda"
                ? "border-b-2 border-green-400 text-green-400"
                : "text-gray-400 hover:text-green-400"
            }`}
          >
            Beranda
          </button>
        </Link>
          <button
            onClick={() => handleTabClick("surah")}
            className={`pb-2 text-sm font-semibold uppercase tracking-wider ${
              activeTab === "surah"
                ? "border-b-2 border-green-400 text-green-400"
                : "text-gray-400 hover:text-green-400"
            }`}
          >
            SURAH
          </button>
          <button
            onClick={() => handleTabClick("juz")}
            className={`pb-2 text-sm font-semibold uppercase tracking-wider ${
              activeTab === "juz"
                ? "border-b-2 border-green-400 text-green-400"
                : "text-gray-400 hover:text-green-400"
            }`}
          >
            JUZ
          </button>
          <button
            onClick={() => handleTabClick("bookmark")}
            className={`pb-2 text-sm font-semibold uppercase tracking-wider ${
              activeTab === "bookmark"
                ? "border-b-2 border-green-400 text-green-400"
                : "text-gray-400 hover:text-green-400"
            }`}
          >
            BOOKMARK
          </button>
        </div>

        {/* Search input on mobile */}
        <div className="flex mt-3 sm:hidden px-4">
          <TextInput
            type="search"
            placeholder="Cari Surah..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            icon={HiOutlineSearch}
            className="bg-gray-800 border-gray-700 placeholder-gray-400 text-white"
          />
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}