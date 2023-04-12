import React, { useState } from "react";
import MealItem from "./MealItem";

const Meal = () => {
  const [search, setSearch] = useState("");
  const [Mymeal, setMeal] = useState();
  const searchMeal = (evt) => {
    if (evt) {

      // fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res=>res.json())
      .then(data=>{
      setMeal(data.meals);
      //  console.log(data);
      })
      // console.log("hello");
    }
  };

  return (
    <div className="main">
      <div className="heading">
        <h1>Search your Favourite Food Receipe</h1>
        <h4>
          Welcome to My Food Website 😃😃😃!. Here you can find all your
          favourite Receipes
        </h4>
      </div>

      <div className="searchBox">
        <input
          type="search"
          className="search-bar"
          placeholder="Enter Food Name"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onClick={(searchMeal)}
        />
      </div>

      <div className="container">
       {
        (Mymeal==null) ? <p className="not-found">Not Found😢</p> : Mymeal.map((res)=>{
          return(
            <MealItem data={res} />
          )
        })
       }
      </div>
    </div>
  );
};

export default Meal;

// old coding

//<input type="search" className="search-bar" placeholder="Enter Food Name"
// onChange={(e)=> console.log(e.target.value)}/>



// <div className="container">
//         <MealItem />
//       </div>
//     </div>
