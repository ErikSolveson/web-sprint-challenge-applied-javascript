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

  //create the containging element for our header
  const header = document.createElement('div')
  const spanDate = document.createElement('span')
  const h1 = document.createElement('h1')
  const spanTemp = document.createElement('span')

  header.appendChild(spanDate)
  header.appendChild(h1)
  header.appendChild(spanTemp)

  header.classList.add('header')
  spanDate.classList.add('date')
  spanTemp.classList.add('temp')

  spanTemp.textContent = temp;
  h1.textContent = title;
  spanDate.textContent = date;

  return header
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  //create the header component
  const header = Header('Spring Is HERE', "May 15th, 2021", '75 Degrees F');

  //collect the insertion point from the DOM
  const insertionPoint = document.querySelector(selector)

  //add the header component to the DOM
  insertionPoint.appendChild(header)
}

export { Header, headerAppender }
