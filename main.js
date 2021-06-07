// Global variable is set as an empty array
var ideas = [];

// Query Selectors will go here

// when a user clicks save and there is information in both the title and body input fields
// then a new idea card with the provided title and body will appear on the idea list
// window.onLoad = newIdea;
var titleInput = document.querySelector('.title-box');
var bodyInput = document.querySelector('.body-box');
var saveBtn = document.querySelector('.save-btn');
var ideaCard = document.querySelector('.card')
console.log(ideaCard);
// will we need to use IDs here instead of class?



// Event Listeners will go here
saveBtn.addEventListener('click', function () {
  addNewIdea(event);
  renderCard()


})



// Function and Event Handlers will go here
// if title and body fields have input provided then a new idea card with the information will
// appear in the ideas array
function addNewIdea(event) {
  event.preventDefault();
  var newIdea = new Idea(titleInput.value, bodyInput.value);
  titleInput.value = "";
  bodyInput.value = "";

  ideas.push(newIdea);
  if(titleInput.value && bodyInput.value) {

  }
}

function renderCard() {
  ideaCard.innerHTML = "";

  for (var i = 0; i < ideas.length; i++) {
    if (!ideas[i].includes)
      ideaCard.innerHTML +=
        `<article class="card">
          <div class="star-delete-bar">
            <input type="image" src="assets/star.svg" class="empty-star" id="emptyStarId" alt=""/>
            <input type="image" src="assets/star-active.svg" class="save-star hidden" id="saveStarID" alt="" />
            <input type="image" src="assets/delete.svg" class="delete-card" id="deleteCardId" alt=""/>
          </div>
            <div class="idea-text-container">
              <h3>${ideas[i].title}</h3>
              <p>${ideas[i].body}</p>
            </div>
          <button class="cross-icon-comment">
            <img src="assets/comment.svg" alt="">Comment
          </button>
        </article>`
  }



}
