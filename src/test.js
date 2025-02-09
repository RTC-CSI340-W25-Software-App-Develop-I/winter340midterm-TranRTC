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

<div class="review_container"> | reviewContainer (div)
    <img src="img url here"/>   | img  (img) 
    <div>                       | reviewSubContainer (div)
      <p> username here </p>    | userName (p)
      <p> star rating here </p> | userRating (p)
      <p> review here </p>      | userReview (p)
    <div>
  </div>
*/

const renderReview = (review) => {


const reviewContainer = document.createElement("div");
reviewContainer.className = "review_container";

const img = document.createElement("img");
img.src = review.image;
img.alt = "default";

const reviewSubContainer = document.createElement("div");

const userName = document.createElement("p");
userName.textContent = `${review.username}`;

const userRating = document.createElement("p")
userRating.textContent = `${review.star} out of 5`

const userReview = document.createElement("p");
userReview.textContent = `${review.review}`;

reviewSubContainer.append(userName, userRating, userReview);

reviewContainer.append(img, reviewSubContainer);


return reviewContainer

};

// 1.2 create function to render reviews 

const reviewSection = document.querySelector(".reviews");

const renderReviews = (reviews) => {

  reviews.forEach(review => { 
    
    const reviewElement = renderReview(review);
    reviewSection.appendChild(reviewElement);
    
  });

};


// 1.3 call function to render and pass the argument which is an array of review

renderReviews(reviews);



//2. Append new reviews to the DOM from the form

const reviewForm = document.querySelector("form");
reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userName = document.querySelector("#username").value;
  const postImage = document.querySelector("#image").value;
  const userRating = document.querySelector("#star").value;
  const reviewText = document.querySelector("#review").value

  const newReview = {

    username: userName,
    image: postImage,
    star: userRating,
    review: reviewText,
  };

  reviews.push(newReview);

  const newReviewElement = renderReview(newReview);
  reviewSection.appendChild(newReviewElement);

  reviewForm.reset();

});