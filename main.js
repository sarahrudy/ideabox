var ideas = [];

var titleInput = document.querySelector('.title-box');
var bodyInput = document.querySelector('.body-box');
var saveBtn = document.querySelector('.save-btn');
var ideaCard = document.querySelector('.card-grid')
var inputArea = document.querySelector('.input-area')
var deleteCardBtn = document.querySelector('.star-delete-bar')
var deleteCardId = document.getElementById('deleteCardId')

window.addEventListener('load', disableSaveBtn)
inputArea.addEventListener('keypress', enableSaveBtn)
saveBtn.addEventListener('click', function() {
  addNewIdea(event);
})
ideaCard.addEventListener('click', cardBox);

function addNewIdea(event) {
  event.preventDefault();
  var newIdea = new Idea(titleInput.value, bodyInput.value);
  ideas.push(newIdea)
  renderCard();
  clearInput();
  disableSaveBtn();
}

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
