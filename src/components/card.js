import axios from 'axios'

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
  //creating cards
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  let headlineDiv = document.createElement('div');
  headlineDiv.classList.add('headline');
  headlineDiv.textContent = article.headline;
  cardDiv.appendChild(headlineDiv);

  let authorDiv = document.createElement('div');
  authorDiv.classList.add('author');

  let imgCont = document.createElement('div');
  imgCont.classList.add('img-container');

  let authorImg = document.createElement('img');
  authorImg.src = article.authorPhoto;

  let authorName = document.createElement('span');
  authorName.textContent = `By ${article.authorName}`;
  
  imgCont.appendChild(authorImg);
  authorDiv.appendChild(imgCont);
  authorDiv.appendChild(authorName);
  cardDiv.appendChild(authorDiv);

  cardDiv.addEventListener('click', function() {
    console.log(article.headline);
  })

  return cardDiv
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
  //appending card to cardcontainer
  //I cannot figure out how to foreach the articles I will need to work on it some more and contact support.
  axios 
  .get('https://lambda-times-api.herokuapp.com/articles') 
  .then(response => response.json())
  .then(data => document.querySelector(selector).appendChild(Card(data.articles)))
}
//document.querySelector(selector).appendChild(Card(response))
export { Card, cardAppender }