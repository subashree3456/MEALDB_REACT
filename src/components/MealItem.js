import React from "react";

// const MealItem = () => {
const MealItem = (getMeal) => {
  console.log(getMeal.data);
  return (
    <>
      <div className="card">
        <img src={getMeal.data.strMealThumb} />
        <div className="info">
          <h2>{getMeal.data.strMeal}</h2>
          <p>{getMeal.data.strArea} food </p>
          </div>

<div className="recipe">
    <h2>Receipe</h2>
    <p>{getMeal.data.strInstructions} </p>
    <img src={getMeal.data.strMealThumb} />
    <a href={getMeal.data.strSource}>Watch Video</a>
</div>

      </div>
    </>
  );
};

export default MealItem;


{/* <div className="card">
        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Chicken-chow-mein-7aeec1d.png" />
        <div className="info">
          <h2>Pan Cake</h2>
          <p>American Food</p>
          </div>

<div className="recipe">
    <h2>Receipe</h2>
    <p>
            Combine flour, sugar, baking powder, and salt in a large bowl. Make
            a well in the center, and pour in milk, oil, and egg. Mix until
            smooth.
          </p>
    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Chicken-chow-mein-7aeec1d.png" />
    <a href="https://www.youtube.com/watch?v=HYSspU4XhC4&list=PLciq6xcjU9aJy8VbaVRIte213iWoEaRHc">Watch Video</a>
</div> */}



/////////////////////////////

// import React from "react";

// // const MealItem = () => {
// const MealItem = (data) => {
//   console.log(data);
//   return (
//     <>
//       <div className="card">
//         <img src={getMeal.data.strMealThumb} />
//         <div className="info">
//           <h2>{getMeal.data.strMeal}</h2>
//           <p>{getMeal.data.strArea} food </p>
//           </div>

// <div className="recipe">
//     <h2>Receipe</h2>
//     <p>{getMeal.data.strInstructions} </p>
//     <img src={getMeal.data.strMealThumb} />
//     <a href={getMeal.data.strSource}>Watch Video</a>
// </div>

//       </div>
//     </>
//   );
// };

// export default MealItem;
