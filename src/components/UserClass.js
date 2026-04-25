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
