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

/**
 *
 *
 *
 * <div id='parent'>
 *      <div id='child'>
 *          <h1></h1>
 *      </div>
 * </div>
 *
 *
 const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "I am h1 tag"),
  ),
);
 *
 */



ReactElement(Object)=>HTML(BROWSER Understands)

# c. Siblings 
/**
 *
 *
 *
 * <div id='parent'>
 *      <div id='child'>
 *          <h2>I'm first child</h2>
 *           <h2>I'm second child</h2>
 *      </div>
 * </div>
 *
 *
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

 *
 */

# Need of JSX

React is not only written in JSX, it can be created by React.CreateElement. So, JSX will help us make easy to write the code.


<body>
    <div id="root">
        <h1>Akshay</h1>
    </div>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="./App.js"></script>

-- Initially it render the root with Akshay and after it replaced by the Hello World! from React;

