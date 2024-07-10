import React from "react";

function DessertsList(props) {
  // we are going to render all desserts with less than 500 cal
  const lowCaloriesDesserts = props.data
    .filter((dessert) => {
      return dessert.calories < 500;
      //   we filter all desserts which are less than 500 cal
      // note : we condition is true, element is kept in the returned Array, and if element is false, it's filtered out of returned array
    })
    // Maintenant, on va "sort", ranger par ordre croissant, par calorie
    .sort((a, b) => {
      return a.calories - b.calories;
    })
    // Finalement, on va mapper sur la Array et renvoyer des li elements
    //   WARNING, it's missing a key in my map method although the code still runs
    .map((dessert) => {
      return (
        <li>
          {dessert.name} - {dessert.calories} cal
        </li>
      );
    });
  return <ul>{lowCaloriesDesserts}</ul>;
}

export default DessertsList;
