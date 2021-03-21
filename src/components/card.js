import axios from "axios";

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
  // create all the elements
  const cardDiv = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgDiv = document.createElement("div");
  const img = document.createElement("img");
  const authorSpan = document.createElement("span");
  // create the structure
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(authorSpan);
  imgDiv.appendChild(img);
  // add any classes
  cardDiv.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgDiv.classList.add("img-container");
  // add the content
  headlineDiv.textContent = article.headline;
  authorSpan.textContent = article.authorName;
  img.src = article.authorPhoto;
  // add the event listener
  cardDiv.addEventListener("click", console.log(article.headline));
  return cardDiv;
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const addPoint = document.querySelector(selector);
  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((response) => {
      console.log(response.data.articles);
      response.data.articles.bootstrap.forEach((element) => {
        const card = Card(element);
        addPoint.appendChild(card);
      });
      response.data.articles.javascript.forEach((element) => {
        const card = Card(element);
        addPoint.appendChild(card);
      });
      response.data.articles.technology.forEach((element) => {
        const card = Card(element);
        addPoint.appendChild(card);
      });
      response.data.articles.jquery.forEach((element) => {
        const card = Card(element);
        addPoint.appendChild(card);
      });
      response.data.articles.node.forEach((element) => {
        const card = Card(element);
        addPoint.appendChild(card);
      });
    });
  // .catch(console.log("there was a problem"));
};

export { Card, cardAppender };
