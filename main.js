class Idea {
  constructor(title, body, star, id){
    this.title = title;
    this.body = body;
    this.star = false;
    this.id = id;
  }

function saveToStorage() {
  var idea = {
    title: this.title,
    body: this.body,
    star: this.star,
    id: this.id
    }
  var stringIdea = JSON.stringify(idea)
  localStorage.setItem(`savedIdea${this.id}`, stringIdea)
  }

function deleteFromStorage() {
  localStorage.removeItem(`savedIdea${this.id}`)
  }
} 
