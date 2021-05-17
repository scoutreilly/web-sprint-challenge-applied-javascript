const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  let pageHeader = document.createElement('div');
  pageHeader.classList.add('header');
  let pageDate = document.createElement('span');
  pageDate.classList.add('date');
  pageDate.textContent = date;
  let pageTitle = document.createElement('h1');
  pageTitle.textContent = title;
  let pageTemp = document.createElement('span');
  pageTemp.classList.add('temp');
  pageTemp.textContent = temp;

  pageHeader.appendChild(pageDate);
  pageHeader.appendChild(pageTitle);
  pageHeader.appendChild(pageTemp);
  return pageHeader
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  document.querySelector('.header-container').appendChild(Header('I am a title', '05-25-2021', 'temperature?'));
}

export { Header, headerAppender }
