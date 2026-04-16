import React from 'react';
import ReactDOM from 'react-dom/client';

// creating the React Element from JSX
//React.createElement => Object =>HTMLElement(render)
// const heading = React.createElement('h1',{},'Hello World from React!');
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// JSX 
function App(){

  return (
    <div>
      <h1>Hello World from React JSX!</h1>
    </div>
  )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />) 


