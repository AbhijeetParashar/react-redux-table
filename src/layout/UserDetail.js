import React, { Component } from "react";
import TopBar from "../core/TopBar";
import axios from "axios";
import './UserDetail.scss';
import Card from "../core/Card"

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    let userId = this.props.match.params.id;
    const url = "https://jsonplaceholder.typicode.com/users/" + userId;
    axios.get(url).then((res) => {
      const user = res.data;
      this.setState({ user: user });
    });
  }
  componentWillUnmount() { }
  goHome = () => {
    this.props.history.replace("/");
  };
  render() {
    let { user } = this.state;
    return (
      <div className="user-detail-page">
        <TopBar
          backButtonRequired={true}
          backClick={() => { this.goHome(); }}
          title={"User Detail"} 
        />
        <div className="user-detail-container">
        <Card user={user}/>
        </div>
      </div>
    );
  }
}
export default UserDetail;
