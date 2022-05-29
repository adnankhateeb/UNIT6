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