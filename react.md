What is immutability?
An immutable value or object cannot be changed, so every update creates new value, leaving the old one untouched.


What does Object.freeze() do?
A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed.


Why is immutability required by Redux?
The main reason Redux is using immutability is that it doesn't have to traverse an object tree to check for the changes in every key value. Instead, it will only check the object's reference is changed or not in order to update DOM on state change.



How does Redux use shallow equality checking? ​
creates a reference to the current state slice referred to by each key;
calls the appropriate reducer and passes it the slice;
creates a reference to the possibly-mutated state slice that's returned by the reducer.


How does Redux compare to the React Context API?
Both are excellent tools for their own specific niche, Redux is overkill just to pass data from parent to child & Context API truly shines in this case.



What is webpack ?
Webpack is a free and open-source module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules.



What is treeshaking ?
Tree Shaking is a concept in development of eliminating dead code or unused code. Imagine your application as a tree. All the libraries, components, widgets & code represents leaves. All the unused code, imports & dead code represents the dead brown leaves.


What are some features of using webpack?
Entry. Webpack creates a graph of all of your application's dependencies. 
Output. Once you've bundled all of your assets together, we still need to tell Webpack where to bundle our application. 
Loaders. 
Plugins.


What is Conditional Rendering?
Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false. In React, it allows us to render different elements or components based on a condition. This concept is applied often in the following scenarios: Rendering external data from an API.


What is flux architecture?
Flux is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a unidirectional data flow. It's more of a pattern rather than a formal framework, and you can start using Flux immediately without a lot of new code.




What does React.memo mean?
React. memo is a higher order component. If your component renders the same result given the same props, you can wrap it in a call to React. memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.




What is Higher-order Components?
A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React's compositional nature. Concretely, a higher-order component is a function that takes a component and returns a new component.




What is reconciliation?
React provides a declarative API so that you don't have to worry about exactly what changes on every update. This makes writing applications a lot easier, but it might not be obvious how this is implemented within React.




Explain life cycle diagram with hooks?
A React component undergoes three phases in its lifecycle: mounting, updating, and unmounting.

The mounting phase is when a new component is created and inserted into the DOM or, in other words, when the life of a component begins. This can only happen once, and is often called “initial render.”
The updating phase is when the component updates or re-renders. This reaction is triggered when the props are updated or when the state is updated. This phase can occur multiple times, which is kind of the point of React.
The last phase within a component's lifecycle is the unmounting phase, when the component is removed from the DOM.





What does the cleanup function in useEffect do?
 Just like the name implies, the useEffect cleanup is a function in the useEffect Hook that allows us to tidy up our code before our component unmounts. When our code runs and reruns for every render, useEffect also cleans up after itself using the cleanup function.