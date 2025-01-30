import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown, Menu, X, ShoppingCart, Heart, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigation = {
    Men: [
      { name: "MensProducts", href: "/men-products" },
      { name: "T-Shirts", href: "/men-products/tshirts" },
      { name: "Jeans/Trousers", href: "/men-products/jeans" },
      { name: "Shoes", href: "/men-products/shoes" },
      { name: "Coats", href: "/men-products/coats" },
      { name: "Accessories", href: "/men-products/accessories" },
    ],
    Women: [
      { name: "WomenProducts", href: "/women-products" },
      { name: "Dresses", href: "/women-products/dresses" },
      { name: "Tops", href: "/women-products/tops" },
      { name: "Skirts/Pants", href: "/women-products/skirts-and-pants" },
      { name: "Shoes", href: "/women-products/shoes" },
      { name: "Accessories", href: "/women-products/accessories" },
    ],
    Kids: [
      { name: "KidsProducts", href: "/kids-products" },
      { name: "T-Shirts", href: "/kids-products/tshirts" },
      { name: "Jeans/Bottoms", href: "/kids-products/jeans-and-bottoms" },
      { name: "Shoes", href: "/kids-products/shoes" },
      { name: "Outerwear", href: "/kids-products/outerwear" },
      { name: "Accessories", href: "/kids-products/accessories" },
      { name: "Toys", href: "/kids-products/toys" },
    ],
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">Logo</Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {Object.entries(navigation).map(([category, items]) => (
                <div key={category} className="relative inline-block text-left">
                  <button
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900"
                    onClick={() => toggleDropdown(category)}
                  >
                    {category} <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === category && (
                    <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu">
                        {items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-gray-900">
              <Heart className="h-6 w-6" />
            </button>
            <button className="relative p-2 text-gray-600 hover:text-gray-900">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="relative p-2 text-gray-600 hover:text-gray-900">
              <User className="h-6 w-6" />
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
