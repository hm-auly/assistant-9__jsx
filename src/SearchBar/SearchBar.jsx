import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ bisi, notbisi }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const [open, setopen] = useState(false)


  // const clickbole = () => {
  //   bisi === true ? setopen(true) : setopen(false)
  // }
  // const notClick = () => {
  //   setopen(false)
  // }

  const pages = {
    Nav: "",
    home: "/",
    about: "/about",
    restaurant: "/All ",
    bellaltalia: "/BellatalialAll",
    restaurants: "/contact",
    services: "/services",
  };

  // ইনপুট অনুযায়ী সাজেশন ফিল্টার করা
  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    // if(value === true){
    //   setopen(true)
    // } else{
    //   setopen(false)
    // }

    if (value) {
      const filteredSuggestions = Object.keys(pages).filter((page) =>
        page.startsWith(value)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // সার্চ সাবমিট হলে নেভিগেট করা
  const handleSearch = (e) => {
    e.preventDefault();

    if (pages[query]) {
      navigate(pages[query]);
    } else {
      alert("Page not found!");
    }
  };

  return (
     
       <section>

      <div className="px-5 backdrop-blur-2xl md:backdrop-blur-[3px] lg:w-[1440px] overflow-hidden h-screen flex flex-col items-center absolute md:top-7 top-16 left-0 z-50">

        {bisi &&
          <div className="flex justify-between items-center w-full lg:w-[625px] border-b-2 border-[#757575] pb-2  bg-[#FFFFFF] shadow-md shadow-gray-400 px-4">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                value={query}
                className="border-none outline-none"
                onChange={handleChange}
                placeholder="Enter page name..." autoFocus
              />
            </form>

            {/* <div className="flex items-center justify-between"> */}
            <div className='flex items-center gap-2 md:gap-5 px-2'>
              {/* <hr className='h-9  border-[#7A7A7A] border' /> */}
              <p className='text-[#7A7A7A]'>Singapour</p>
            </div>
            <div className='pr-1'>
              <div className='bg-[#1677BD] w-11 h-11 rounded-full text-white flex items-center justify-center'><button onClick={notbisi}><i class="fa-solid fa-xmark"></i></button> </div>
            </div>
          </div>

          
        } 

        {/* সাজেশন লিস্ট দেখানো */}
        { suggestions.length > 0 && (
          <ul onClick={notbisi} className=" w-full lg:w-[625px] bg-[#FFFFFF] px-3 py-2 rounded-md " >
            {suggestions.map((suggestion) => (
              <li key={suggestion} onClick={() => navigate(pages[suggestion])}>
                <div className="flex items-center gap-2 py-1.5 border-b-2 border-[#969696]">
                  <img src="/Images/search.svg" alt="" />
                  <p className="text-[20px]"> {suggestion}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

    </section>
  );
};

export default SearchBar;