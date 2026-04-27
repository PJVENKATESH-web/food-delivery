import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor is called')
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/PJVENKATESH-web");
    const json = await data.json();
    console.log('ComponentDidMount is called')
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate(){
    console.log('ComponentDidUpdate is called')
  }
  componentWillUnmount(){
    console.log('ComponentWillUnmount is called') 
  }
  render() {
    const { avatar_url, name, location } = this.state.userInfo;
    // debugger;
    console.log('Render is called')
    return (
      <div className="user-card">
        <div className="user-image">
          <img src={avatar_url} />
        </div>
        <div className="user-details">
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h4>Contact: potnuru.jhonson@gmail.com</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
