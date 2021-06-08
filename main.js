// Global variable is set as an empty array
var ideas = [];

// Query Selectors will go here
// window.onLoad = ;
var titleInput = document.querySelector('.title-box');
var bodyInput = document.querySelector('.body-box');
var saveBtn = document.querySelector('.save-btn');
var ideaCard = document.querySelector('.card-grid')
var inputArea = document.querySelector('.input-area')
// var deleteCardBtn = document.querySelector('.star-delete-bar')
// var deleteCardId = document.getElementById('deleteCardId')
// will we need to use IDs here instead of class?

// Event Listeners will go here
window.addEventListener('load', disableSaveBtn)
inputArea.addEventListener('keypress', enableSaveBtn)
saveBtn.addEventListener('click', function() {
  addNewIdea(event);
})
ideaCard.addEventListener('click', cardBox);
// saveBtn.addEventListener('keyup', addNewIdea)

// Function and Event Handlers will go here
function addNewIdea(event) {
  event.preventDefault();
  var newIdea = new Idea(titleInput.value, bodyInput.value);
  ideas.push(newIdea)
  renderCard();
  clearInput();
  disableSaveBtn();
}

// Add disable function to saveBtn
// when we hover over the saveBtn AND (&&) EITHER (||) "title" or "input" fields are empty, the saveBtn should be disabled (lighter color and not a pointer when we hover over it)

function enableSaveBtn () {
  if (titleInput.value && bodyInput.value) {
    saveBtn.disabled = false;
    saveBtn.classList.remove('disable-save-btn');
  }
  if (!titleInput.value || !bodyInput.value) {
    saveBtn.disabled = true;
  }
}

function disableSaveBtn() {
  saveBtn.disabled = true
  saveBtn.classList.add('disable-save-btn')
}

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
              <textarea>${ideas[i].body}</textarea>
            </div>
          <button class="cross-icon-comment">
            <img src="assets/comment.svg" alt="">Comment
          </button>
        </article>`
  }
}

function deleteCard(event) {
  var index = event.target.classList[1];
  var removedCard = ideas.splice(index, 1)[0];
  removedCard.deleteFromStorage(removedCard.id);
}
// function deleteCard(event) {
//   if (event.target.classList.contains("delete-card")) {
//     event.target.closest("card").remove();
//   }
// };

function favoriteCard(event) {

  if (event.target.classList.contains("empty-star")) {
    event.target.classList.toggle("save-star")
  }
}

function cardBox(event) {
  event.preventDefault();
  if (event.target.classList.contains("delete-card")) {
    deleteCard(event);
    renderCard();
  }
  if (event.target.classList.contains("empty-star") ||
  event.target.classList.contains("save-star")) {
    favoriteCard(event)

  }
}


// If article card .contains the id, then removeItem
// refactor:
