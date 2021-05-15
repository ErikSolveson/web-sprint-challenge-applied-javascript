import axios from "axios"
//import { response } from "msw/lib/types"
// import { Header } from "./header"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

const card = document.createElement('div')
const headlineDiv = document.createElement('div')
const author = document.createElement('div')
const imgContainer = document.createElement('div')
const img = document.createElement('img')
const authorNameDiv = document.createElement('span')

card.appendChild(headlineDiv)
card.appendChild(author)
author.appendChild(imgContainer)
imgContainer.appendChild(img)
author.appendChild(authorNameDiv)

imgContainer.classList.add('img-container')
headlineDiv.classList.add('headline')
author.classList.add('author')
card.classList.add('card')

img.src = article.authorPhoto
headlineDiv.textContent = article.headline
authorNameDiv.textContent = article.authorName

card.addEventListener('click' , function() {
console.log(article.headline)
})

return card
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const insertionPoint = document.querySelector(selector)

  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
  .then((response) => {
console.log(response.data.articles.javascript.length)

//identify article topics
const articleTopics = response.data.articles;
// const articleTopicKeys = Object.keys(articleTopics)

//loop over each topic
// articleTopicKeys.forEach((topic) => {

//loop over each article in the topics
console.log('topic' ,typeof(topic))
console.log(articleTopics)

let holder = articleTopics.javascript;
holder.forEach((element) => {

  const card = Card(element)
  insertionPoint.appendChild(card)
});
 holder = articleTopics.bootstrap;
holder.forEach((element) => {


  const card = Card(element)
  insertionPoint.appendChild(card)
});
 holder = articleTopics.technology;
holder.forEach((element) => {

  const card = Card(element)
  insertionPoint.appendChild(card)
});
 holder = articleTopics.node;
holder.forEach((element) => {

  const card = Card(element)
  insertionPoint.appendChild(card)
});



  
// });

  }).catch(console.log('error'))
}

export { Card, cardAppender }
