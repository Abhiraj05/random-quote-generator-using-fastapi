import { useEffect, useState } from "react";
import "./App.css";
import image from "./assets/quotes.png";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("Random Quote Generator....");
  const [author, setAuthor] = useState("n/a");
  const [category, setCategory] = useState(null);
 
  //function feches the quote when user clicks on button
  const fetchRandomQuote = async () => {
     if(category==null || category=="null"){
    alert("please select the category of quote !")
  }else{
    try {
      //fetches the quote based on category
      await axios
        .get(`http://127.0.0.1:8000/randomquote/${category}`)
        .then((response) => response.data)
        .then((data) => {
          //sets the data fetched from api
          setQuote(data["quote"]);
          setAuthor(data["author"]);
          setCategory(data["category"]);
        });
    } catch (error) {
      console.error("error");
    }}
  };

  return (
    <>
      <main className="flex justify-center items-center min-h-screen">
        <div className="mx-7 md:mx-142">
          <div className="bg-black  border-gray-700 border rounded-4xl">
            <div className=" border-gray-700 border px-10 py-10 shadow-gray-800 shadow-xl rounded-4xl ">
              <div className="flex justify-start items-start">
                <img className="w-15 md:w-20" src={image} alt="" />
              </div>
              <div className="pt-10 pb-5 text-wrap">
                <h1 className="text-white text-3xl md:text-5xl font-bold ">{quote}</h1>
              </div>
              <div className="pt-3 text-gray-500 text-[16px] md:text-[19px] capitalize">
                <span className="text-[#b9b569]">author : </span>
                <span className="">{author}</span>
              </div>
              <div className="pt-1 text-gray-500 text-[16px] md:text-[19px] capitalize flex justify-start items-center ">
                <div>
                <span className="text-[#b9b569]">category : </span>
                </div>
                <div>
                {/*category list of quotes*/}
                <select name="category" onChange={(e)=>setCategory(e.target.value)} id="" className="capitalize bg-black ">
                  <option value="null">select the category</option>
                  <option value="mindful">mindful</option>
                  <option value="funny">funny</option>
                  <option value="philosophical">philosophical</option>
                  <option value="motivational">motivational</option>
                  <option value="love">love</option>
                  <option value="growth">growth</option>
                  <option value="wisdom">wisdom</option>
                  <option value="positivity">positivity</option>
                  <option value="creativity">creativity</option>
                  <option value="existential">existential</option>
                  <option value="growth">growth</option>
                </select>
                </div>
              </div>
              <div className="text-center mt-8">
                <button className="bg-[#FFF82B] capitalize px-20 md:px-25 py-1 rounded-lg hover:bg-[#b4af26] md:text-lg "onClick={fetchRandomQuote}>
                       get quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
