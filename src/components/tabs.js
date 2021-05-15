import axios from 'axios'

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  //create the containging element for our tabs list
  const container = document.createElement('div')

  // add the css class for the containing element
  container.classList.add('topics')


  //loop over the supplied array and create, attach and populate each div
  topics.forEach(element => {
    const tab = document.createElement('div')
    container.appendChild(tab)
    tab.classList.add('tab')
    tab.textContent = element;
  });

  return container
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
const tabs = document.querySelector(selector)
axios.get(`https://lambda-times-api.herokuapp.com/topics`)
.then((response) => {
  const data = Tabs(response.data.topics);
  // console.log('this is the response: ' ,response)
  tabs.appendChild(data)
})
}

export { Tabs, tabsAppender }
