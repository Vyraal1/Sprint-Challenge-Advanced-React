# Self Study Questions

1. Why would you use class component over function components (removing hooks from the question)?
   When you want access to life cycle methods because functions can't have methods, or if it also needs a binding such as `this`.
2. Name three lifecycle methods and their purposes.
   `componentDidMount` - invoked immediately after a component is mounted, if a component needs to make a call to an endpoint to get initial data, it will usually go here
   `componentDidUpdate` - invoked after updating occurs for a component, but not for the initial render. If you want to have a component update after a form submission (such as a search bar), logic for that goes here
   `render` - used to actually render the React element by either returning the react element, an array and fragment, string and numbers, portals
3. What is the purpose of a custom hook?
   A custom hook allows you to re-use logic and greatly DRY up your code. It is similar to how components can be used to reduce the amount of markup written.
4. Why is it important to test our apps?
   It is important to test our apps for many reasons, some of which are:
   - writing tests can be self documenting when you reference code in the future.
   - helps making refactoring much easier in the future
   - allows you to trust that the code does what is needed without going too deep
   - helps you really think about how the code should look like, and edge cases
