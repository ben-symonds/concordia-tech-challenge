console.log("To infinity and beyond.");

// write your JavaScript here
const rating = document.getElementById("input-text");
const button = document.getElementById("input-btn");
const commentSection = document.getElementById("comment-box");

function createEventListener() {
  button.addEventListener("click", submitRating);
}

createEventListener();

function submitRating() {
  if (rating.value !== "") {
    commentSection.innerHTML = `<p> You said that it was ${rating.value}</p>`;
  } else {
    commentSection.innerHTML = "";
  }
}
