// Global variable is set as an empty array
var ideas = [];

// Query Selectors will go here

// when a user clicks save and there is information in both the title and body input fields
// then a new idea card with the provided title and body will appear on the idea list
// window.onLoad = ;
var titleInput = document.querySelector('.title-box');
var bodyInput = document.querySelector('.body-box');
var saveBtn = document.querySelector('.save-btn');
var ideaCard = document.querySelector('.card')
// will we need to use IDs here instead of class?

// Event Listeners will go here
// window.addEventListener('load', disableSaveBtn)
saveBtn.addEventListener('click', function () {
  addNewIdea(event);
  renderCard()
})
// saveBtn.addEventListener('keyup', addNewIdea)

// Function and Event Handlers will go here
function addNewIdea(event) {
  event.preventDefault();
  var newIdea = new Idea(titleInput.value, bodyInput.value);
  clearInput()

  ideas.push(newIdea)
  if(titleInput.value && bodyInput.value) {

  }
}

// Add disable function to saveBtn
// when we hover over the saveBtn AND (&&) EITHER (||) "title" or "input" fields are empty, the "Save" button should be disabled (lighter color and not a pointer when we hover over it)

// function disableSaveBtn() {
//   if (titleInput.value = "" || bodyInput.value = "") {
//     saveBtn.disabled = true
//   } else {
//     (titleInput.value && bodyInput.value)
//     saveBtn.disabled = false
//   }
// }

// function disableSaveBtn() {
//   if (titleInput.value && bodyInput.value) {
//     saveBtn.disabled = false
//   } else {
//     (!titleInput.value || !bodyInput.value)
//     saveBtn.disabled = true
//   }
// }
function clearInput() {
  titleInput.value = "";
  bodyInput.value = "";
}

function renderCard() {
  ideaCard.innerHTML = ""

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

// refactor:
// addNewIdea function to be cleaner
