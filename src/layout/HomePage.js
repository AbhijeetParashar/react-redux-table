import React, { Component } from "react";
import TopBar from "../core/TopBar";
import Table from "../component/Table";
import { dispatchUsers, fetchUsers } from "../redux/action/UserAction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    if (!this.props.users.length) {
      this.props.fetchUsers();
    }
  }

  successHandler = () =>{
    toast.success('🦄 User Deleted !')
  }

  deleteUser(index) {
    let users = [...this.props.users];
    users.splice(index, 1);
    this.successHandler()
    this.props.dispatchUsers(users);
  }

  route = (path) => {
    this.props.history.replace(path);
  };

  render() {
    return (
      <div className="home-page">
        <TopBar title={"React Table"} />
        <div className="table">
          <Table
            userDate={[...this.props.users]}
            routeFunction={(path) => this.route(path)}
            deleteUser={(index) => {
              this.deleteUser(index);
            }}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxStore) {
  return {
    users: reduxStore.users ? reduxStore.users.data : [],
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { dispatchUsers: dispatchUsers, fetchUsers: fetchUsers },
    dispatch
  );
}
export default connect(mapStateToProps, matchDispatchToProps)(HomePage);
