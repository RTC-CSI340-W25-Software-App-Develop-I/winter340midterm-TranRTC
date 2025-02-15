import { assert } from "chai";
import { calculateStarAverage } from "../src/logic.js";


const mockReviews = [
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

// test suite to test the function calculateStarAverage() with given data
describe("Testing calculateStarAverage function", () => {

  
  // case: all 3 reviews
  it("Should return the correct average ratings for all reviews", () => {

    const result = calculateStarAverage(mockReviews);
    assert.equal(result, 3, "The average rating should be 3 for all reviews");

  });


  // case: only first review
  it("should return the correct rating for first review", () => {
  
    const result = calculateStarAverage([mockReviews[0]]);
    assert.equal(result, 5, "The correct number should be 5")

  });

  // case: only last review
  it("should return the correct rating for last review", () => {
    const result = calculateStarAverage([mockReviews[2]])
    assert.equal(result, 1, " The correct number should be 1")

  });

  // case: first and second review
  it("it should return the correct average rating for first and second reviews", () => {
    const result = calculateStarAverage(mockReviews.slice(0, 2));
    assert.equal(result, 4, "The correct number should be 4");

  });

  // case: second and third review
  it("should return the correct average rating for second and third reviews", () => {
    const result = calculateStarAverage(mockReviews.slice(1, 3));
    assert.equal(result, 2, "The correct number should be 2 ")
  })


});