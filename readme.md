
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?


ans: --> getElementById :  Finds one specific element by its ID
    --> getElementsByClassName : Finds multiple elements with the same class name
    --> querySelector : Finds the first match using CSS-style selectors.
    --> querySelectorAll: Finds all matches using CSS-style selectors


2. How do you **create and insert a new element into the DOM**?


ans: --> Use document.createElement() to make a new HTML element.
    --> Use appendChild() to place it somewhere on the page


3. What is **Event Bubbling** and how does it work?


Ans:we know that , --> Event Bubbling:  In JavaScript where an event starts at the target element and then moves upward through its parent elements in the DOM tree.


4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans: --> IT is a technique where you attach a single event listener to a parent element, and let it handle events for its child elements using event.target.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans: --> when we use preventDefault() then the default work is stoped of a browser.
and --> when we use stopPropagation() then the event do not arrive to parent element but only arrived where we clicked. 



