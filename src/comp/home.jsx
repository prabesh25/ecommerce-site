

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiFillEye,
  AiFillHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import Homeproduct from "./home_product";

const Home = ({ addtocart }) => {
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);

  const filtercate = (x) => {
    const filterproduct = Homeproduct.filter((curElem) => curElem.type === x);
    setTrendingProduct(filterproduct);
  };

  const allTrendingProcuct = () => setTrendingProduct(Homeproduct);

  useEffect(() => {
    const newcategory = Homeproduct.filter((x) => x.type === "new");
    setNewProduct(newcategory);

    const featured = Homeproduct.filter((x) => x.type === "featured");
    setFeaturedProduct(featured);

    const top = Homeproduct.filter((x) => x.type === "top");
    setTopProduct(top);
  }, []);

  const renderProductCard = (curElm) => (
    <div className="flex w-full max-w-sm flex-col overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition ">
      <div className="relative h-60 w-full overflow-hidden">
        <img
          src={curElm.image}
          alt={curElm.Name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute right-2 top-2 flex flex-col gap-2 opacity-0 transition-all group-hover:opacity-100">
          <button className="rounded-full bg-white p-2 shadow hover:bg-indigo-600 hover:text-white">
            <AiFillEye />
          </button>
          <button className="rounded-full bg-white p-2 shadow hover:bg-indigo-600 hover:text-white">
            <AiFillHeart />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{curElm.Name}</h3>
        <p className="text-indigo-600 text-xl font-bold mb-2">Rs {curElm.price}</p>
        <button
          onClick={() => addtocart(curElm)}
          className="w-full rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen  bg-gray-50">
      {/* Hero */}
      <div className="relative h-[600px] overflow-hidden bg-gradient-to-r from-indigo-900 to-indigo-700">
        <img
          src="image/pngwing.com.png"
          alt="Smartwatch"
          className="absolute right-0 top-1/2 h-96 -translate-y-1/2 transform opacity-75 transition hover:scale-105 hidden sm:block"
        />
        <img
          src="image/phoneimg.jpg"
          alt="Smartwatch"
          className="w-full h-full absolute right-0 top-1/2 h-96 -translate-y-1/2 transform opacity-75 transition hover:scale-105 sm:hidden"
        />
        <div className="relative z-10 flex h-full items-center px-4 text-white max-w-6xl ">
          <div className="space-y-6 ml-[15%]">
            <h3 className="text-xl  font-light tracking-wider text-indigo-200">
              Silver Aluminum
            </h3>
            <h2 className="text-6xl font-bold space-y-6">Apple Watch <br /> Series 8</h2>
            <p className="text-lg text-indigo-100">30% off on your first order</p>
            <Link
              to="/shop"
              className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-indigo-900 transition hover:scale-105 hover:bg-opacity-90 hover:shadow-xl"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/* <div className="relative z-10 flex h-full items-center justify-start px-4 text-white max-w-6xl mx-auto">
  <div className="space-y-6 text-left">
    <h3 className="text-xl font-light tracking-wider text-indigo-200">
      Silver Aluminum
    </h3>
    <h2 className="text-6xl font-bold">Apple Watch Series 8</h2>
    <p className="text-lg text-indigo-100">30% off on your first order</p>
    <Link
      to="/shop"
      className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-indigo-900 transition hover:scale-105 hover:bg-opacity-90 hover:shadow-xl"
    >
      Shop Now
    </Link>
  </div>
</div> */}






      </div>

      {/* Trending Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex-1">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <h2
                onClick={allTrendingProcuct}
                className="cursor-pointer text-3xl font-bold text-gray-800 hover:text-indigo-600"
              >
                Trending Products
              </h2>
              <div className="flex gap-6">
                {["New", "Featured", "Top"].map((category) => (
                  <h3
                    key={category}
                    onClick={() => filtercate(category.toLowerCase())}
                    className="cursor-pointer font-semibold uppercase text-gray-500 hover:text-indigo-600"
                  >
                    {category}
                  </h3>
                ))}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {trendingProduct.map((curElem) => renderProductCard(curElem))}
            </div>

            <div className="mt-8 text-center">
              <button className="rounded bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700">
                Show More
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full space-y-8 lg:w-96">
            {/* Testimonial */}
            <div className="rounded-xl bg-white p-8 shadow hover:shadow-md">
              <h3 className="mb-6 text-2xl font-bold text-gray-800">
                Our Testimonial
              </h3>
              <div className="flex items-center gap-6">
                <img
                  src="image/T1.png"
                  alt="Stephan Robot"
                  className="h-20 w-20 rounded-full border-4 border-indigo-100 object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Stephan Robot
                  </h3>
                  <p className="text-sm text-gray-500">Web Designer</p>
                  <p className="mt-2 text-gray-600">
                    We provide different services and offer products according
                    to customer requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="rounded-xl bg-indigo-600 p-8 text-white shadow-lg">
              <h3 className="mb-6 text-2xl font-bold">Newsletter</h3>
              <p className="text-indigo-100 mb-4">Join our mailing list!</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mb-4 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="w-full rounded-lg bg-white px-6 py-3 font-semibold text-indigo-600 hover:bg-opacity-90 hover:shadow">
                Subscribe
              </button>
              <div className="mt-6 flex justify-center gap-4">
                {[BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube].map(
                  (Icon, index) => (
                    <a key={index} href="#" className="text-2xl hover:text-indigo-200">
                      <Icon />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banners Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <img src="image/banner1.webp" alt="Banner 1" className="rounded-xl shadow" />
          <img src="image/bannerr2.webp" alt="Banner 2" className="rounded-xl shadow" />
          <div className="flex flex-col gap-4">
            {/* <img src="image/banner3.avif" alt="Top Banner" className="rounded-xl shadow" /> */}
            <img src="image/banner3.webp" alt="Bottom Banner" className="rounded-xl shadow" />
          </div>
        </div>
      </div>

      {/* Product Types */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        {[["New Product", newProduct], ["Featured Product", featuredProduct], ["Top Product", topProduct]].map(([title, products]) => (
          <div key={title} className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">{title}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((curElm) => (
                <div
                  key={curElm.id}
                  className="group flex flex-col overflow-hidden rounded-xl bg-white shadow hover:shadow-lg"
                >
                  <div className="h-60 w-full overflow-hidden">
                    <img
                      src={curElm.image}
                      alt={curElm.Name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{curElm.Name}</h3>
                    <p className="text-indigo-600 font-bold mb-2">${curElm.price}</p>
                    <div className="flex items-center gap-2">
                      <button className="text-gray-600 hover:text-indigo-600">
                        <AiFillEye />
                      </button>
                      <button className="text-gray-600 hover:text-indigo-600">
                        <AiFillHeart />
                      </button>
                      <button
                        onClick={() => addtocart(curElm)}
                        className="text-gray-600 hover:text-indigo-600"
                      >
                        <AiOutlineShoppingCart />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

