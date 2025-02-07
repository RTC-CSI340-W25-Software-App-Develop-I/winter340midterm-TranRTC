//Do not change //////////////////////////////////
import { calculateStarAverage } from "../src/logic.js";

const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//1. Append the reviews to the DOM

//1.1 create a function to render 1 reviews
/*

<div class="review_container">
    <img src="img url here"/>
    <div>
      <p> username here </p>
      <p> star rating here </p>
      <p> review here </p>
    <div>
  </div>
*/

const renderReview = (review) => {


const reviewContainer = document.createElement("div");
reviewContainer.className = "review_container";

const img = document.createElement("img");
img.src = review.img;

const reviewSubContainer = document.createElement("div");

const userName = document.createElement("p");
userName.textContent = `${review.username}`;

const userRating = document.createElement("p")
userRating.textContent = `${review.star} out of 5`

const userReview = document.createElement("p");
userReview.textContent = `${review.review}`;

reviewSubContainer.append(userName, userRating, userReview);

reviewContainer.append(img, reviewSubContainer);

};

// 1.2 create function to render reviews 

const renderReviews = (reviews) => {

  reviews.forEach(review => { renderReview(review)
    
  });

};


// 1.3 

const reviewSection = document.querySelector(".reviews");

// want to keep tag h3 here how?

renderReviews(reviews);



//2. Append new reviews to the DOM from the form
