# 1. Using HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React</title>
</head>
<body>
    <div id="root">
        <h1>Hello World from HTML!</h1>
    </div>
</body>
</html> 

# 2. Using JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React</title>
</head>
<body>
    <div id="root"></div>
    <script>
        const heading = document.createElement('h1');
        heading.innerHTML='Hello World From JavaScript!';

        const root=document.getElementById('root');
        root.appendChild(heading)
    </script>
</body>
</html> 

# 3. Using React
React.createElement => React Element - JS Object =>HTMLElement(render)
a. Using CDN

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
  </head>
  <body>
    <div id="root"></div>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script>
        const heading = React.createElement('h1',{},'Hello World from React!');
        const root= ReactDOM.createRoot(document.getElementById('root'));
        root.render(heading);
    </script>
  </body>
</html>

# b. Nested element


 const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "I am h1 tag"),
  ),
);

ReactElement(Object)=>HTML(BROWSER Understands)
# c. Siblings 

 const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
        React.createElement("h2", { id: "child1" }, "I am first child"),
        React.createElement("h2", { id: "child2" }, "I am second child"),
    ]
  ));
# Need of JSX

-- React is not only written in JSX, it can be created by React.CreateElement. So, JSX will help us make easy to write the code.


-- Initially it render the root with Akshay and after it replaced by the Hello World! from React;


# EP-2: Igniting our app
1. create repo in github - food-delivery
2. initialise the local folder - git init
3. Change the master to main branch - git branch -M main -- github has the master as main branch
4. add the files to staging -  git add .
5. commit - git commit -m 'episode-1'
6. connect remote to local - git remote add origin https://github.com/PJVENKATESH-web/food-delivery.git
7. push the code from to local to remote - git push origin main



# what is the difference between caret(^) and tilde(~)
A new version came 
for minor version - caret is used (^)
for major version - tilde is used (~)

Always use the minor version (^)

Installing parcel bundler to our app

npm i -D parcel

npx parcel index.html

main is for libraries - Parcel apps uses index.html as entry
so 
change the script
"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  },

npm install react react-dom;

In App.js
import React from 'react';
import ReactDOM from 'react-dom/client';

imports and exports are not used by js engine of browser, so we need to add type='module' in the script
 <script type='module' src='App.js'></script>

# Parcel
- Dev Build
- local server
- Hot Module Replacement = HMR(fast of reloading the webpages)
- File Watching Algorithm (written in C++)
- Faster builds(because of caching in .parcel-cache)
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling- support older browser
- HTTPS hoisting
- Diagnostics
- Error Handling
- Tree Shaking - remove unused code
- Different dev and prod bundles

# JSX with react component function
function App(){

  return (
    <div>
      <h1>Hello World from React JSX!</h1>
    </div>
  )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

# JSX with react element passing to a variable

const App=<h1>Hello World from React JSX!</h1>
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(App)

# JSX(transpiled before it reaches the JS) - PARCEL - Babel(covert the code from JSX to react code)

# JSX=(Babel)=>React.createElement => ReactElement-JS Object =>HTMLElement(render)

<!-- React Element -->
const heading= (<h1 className='head' tabIndex='5'>Namaste React using JSX</h1>)

<!-- React Functional Component -->
const heading=()=>(<h1 className='heading'>Namaste React Functional Component</h1>)