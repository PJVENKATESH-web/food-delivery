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

# Namaste Food
/*
 *AppLayout
 *-Header
 *--Logo
 *--Nav Items
 *-Body
 *--Search
 *--Restaurant Container
 *---RestaurantCard
 *----Image|Name of Res|Star Rating|Cuisines|DeliveryTime
 *-Footer
 *--Copywright|Links|address|Contact
 *
 */

# Two types od Export/Import
 
 -Default Export/Import

 export default Component;
 import Component from 'path';

 -Named Export/Import

 export const Component;
 import {Component} from 'path;


# React Hooks
(Normal JS utility functions)
-useState() - State Variables
-useEffect() - executing the callback function after rendering the component

# Login/Logout

1 way of updating either log in or log out
  const [btnName,setBtnName]=useState('Log In');

  <button className="login-logOut"
          onClick={()=>{
            setBtnName(btnName==='Log In'?'Log Out':'Log In')
          }>{btnName}</button>


  <button className="login-logOut"
          onClick={()=>{
            btnName==='Log In'? setBtnName('Log Out'):setBtnName('Log In')
          }>{btnName}</button>

2nd way of updating either login or log out

  const [btnName,setBtnName]=useState(false);
  <button className="login-logout" onClick={()=>{setBtnName(!btnName)}}>
            {btnName ? 'Log Out':'Log In'}
          </button>

# Search Filter

<div className="search">
          <input type="text" className="search-box" placeholder="Search Restaurant..."
            value={searchText}
            onChange={(e) => { setSearchText(e.target.value)}}
          />
          <button
            className="search-button"
            onClick={() => {
              const filteredRestaurants=listOfRestaurants.filter((res) =>
                res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants)
            }}
          >
            Search
          </button>
        </div>

<!-- Whenever state variable updates, react triggers a reconcilliation cycle(re-renders the component)
DOM Manipulation is expensive and react is more efficient in it -->

# useEffect 

1. If no dependency array => useEffect is called on every render
useEffect(()=>{})
2. If dependency array is empty =[]=> useEffect is called on initial render(just once)
useEffect(()=>{},[])
3. If dependency array is [btnName] =>called everytime btnName is updated
useEffect(()=>{},[btnName])

# useState usecases
Never create state variable outside of the component, it is used for creating local state variables in the functional component

Never create state varaible in the conditional statements(if-else),loops(for),functions(()=>{})
if(){
  const [searchText,setSearchText]=useState('');
}

# 2 Types of Routing
 - Client Side Routing => not making the network call, it just loads the component.
 - Server Side Routing => make the network call, get the Component data 


# Class Based Components:
In About Component, there is a child class based component UserClass

When the UserClass is mounted/loaded/intantiated, first constructor(props) is called and second render() is called

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Button Increase
        </button>
        <button
          onClick={() => {
            this.setState((prevState) => {
              if (prevState.count > 0) {
                return { count: prevState.count - 1 };
              }
              return null; // no update
            });
          }}
        >
          Button Decrease
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: potnuru.jhonson@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

Component DidMount- it will called after the component is render in the DOM(like useEffect) - used for API Calls
<!-- 

- Parent Constructor
- Parent Render 
  - Jhonson Constructor
  - Jhonson Render
  - Aarvi Constructor
  - Aarvi Render
  - Jhonson DidMount
  - Aarvi DidMount
-Parent DidNount -->


class About extends Component{
  constructor(props){
    super(props);
    console.log('Parent Constructor is called')
  }  
  componentDidMount(){
    console.log('Parent componentDidMount is called')
  }
  render(){
    console.log('Parent Render is called')
    return(
      <div>
      <h2>About Us</h2>
      <h3>This is a Foody App</h3>
      <UserClass name={'Jhonson (first class)'} location={'Chapara(first)'}/>
      <UserClass name={'Aarvi (second class)'} location={'Narasanapeta(second)'}/>
    </div>
    )
  }
}

==
Parent Constructor is called
About.js:17 Parent Render is called
UserClass.js:6 Jhonson (first class) Constructor is called
UserClass.js:17 Jhonson (first class) is called
UserClass.js:6 Aarvi (second class) Constructor is called
UserClass.js:17 Aarvi (second class) is called
UserClass.js:12 Jhonson (first class)Child ComponentDidMount is called
UserClass.js:12 Aarvi (second class)Child ComponentDidMount is called
About.js:14 Parent componentDidMount is called

React life CYcle method
-Render Phase - Commit Phase

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# github user api = https://docs.github.com/en/rest/users?apiVersion=2026-03-10

https://api.github.com/users/PJVENKATESH-web

Mounting
-Constructor is called(have dummy)
-Render is called(have dummy)
-Component DidMount is called
  - <API Call>
  - <this.setState> - state variable is updated

Update
  - render(API data)
  -  <HTML(new API data)> - user will see

  - Component DidUpdate is called 


# Code Splitting|Chunking|on Demand Loading|Lazy Loading|

When you are loading an application, at that time if some components are not required in the initial render, then you can use this process to make the load efficiency faster.

we have named import which provided by react i.e lazy

import {lazy} from 'react';
const Grocery = lazy(() => {
  return import('./components/Grocery');
});

Syntax	Return
() => import(...)	✅ implicit return
() => { import(...) }	❌ undefined
() => { return import(...) }	✅ correct