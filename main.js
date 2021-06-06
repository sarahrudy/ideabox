// Global variable is set as an empty array
var ideas = [];

// Query Selectors will go here

// when a user clicks save and there is information in both the title and body input fields
// then a new idea card with the provided title and body will appear on the idea list
// window.onLoad = newIdea;
var titleInput = document.querySelector('.title-box');
var bodyInput = document.querySelector('.body-box');
var saveBtn = document.querySelector('.save-btn');



// Event Listeners will go here
saveBtn.addEventListener('click', function(){
  addNewIdea(event);
})



// Function and Event Handlers will go here
// if title and body fields have input provided then a new idea card with the information will
// appear in the ideas array
function addNewIdea(event) {
  event.preventDefault();
  var newIdea = new Idea(titleInput.value, bodyInput.value);
  ideas.push(newIdea);
  console.log(titleInput.value);
  // if(titleInput.value && bodyInput.value) {
  // }
}
