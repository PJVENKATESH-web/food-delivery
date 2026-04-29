import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log('constructor is called')
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
    // console.log('ComponentDidMount is called')
    this.setState({
      userInfo: json,
    });
  }
  // componentDidUpdate(){
  //   console.log('ComponentDidUpdate is called')
  // }
  // componentWillUnmount(){
  //   console.log('ComponentWillUnmount is called') 
  // }
  render() {
    const { avatar_url, name, location } = this.state.userInfo;
    // debugger;
    // console.log('Render is called')
    return (
      <div className="user-card w-100 flex items-center border-red-400 border-2 rounded-lg m-8">
        <div className="user-image w-36 object-fill">
          <img src={avatar_url} />
        </div>
        <div className="user-details text-xs">
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h4>Contact: potnuru.jhonson@gmail.com</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
