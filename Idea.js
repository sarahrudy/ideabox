class Idea {
  constructor(title, body, star) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = star || false;
  }

saveToStorage() {
  localStorage.setItem("savedIdea", JSON.stringify(this))
  // this is the entire object of Idea
  // JSON.stringify(this) is the var stringifiedIdea
  // might also need to stringify this.id
  }

deleteFromStorage() {
  localStorage.removeItem(`savedIdea${this.id}`)
  }
// iterate over ids and delete specific id of idea we want to delete

updateIdea() {
}
  //should be able to update the idea’s title, body, or starred state
}
