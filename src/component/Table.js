import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import LaunchIcon from "@material-ui/icons/Launch";
import DeleteIcon from "@material-ui/icons/Delete";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Table extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props.userDate;
    const columns = [
      {
        Header: "Id",
        accessor: "id",
        Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
      },
      {
        Header: "Name",
        accessor: "name",
        Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
      },
      {
        Header: "User Name",
        accessor: "username",
        sortable: false,
        Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
      },
      {
        Header: "Email",
        accessor: "email",
        Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
      },
      {
        Header: "Address",
        accessor: "address[city]",
        sortable: false,
        Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
      },
      {
        Header: "Phone No",
        accessor: "phone",
        sortable: false,
        Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
      },
      {
        Header: "Website",
        accessor: "website",
        sortable: false,
        Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
      },
      {
        Header: "Company Name",
        accessor: "company[name]",
        sortable: false,
        Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
      },
      {
        Header: "Action",
        sortable: false,
        Cell: (row) => (
          <div style={{ textAlign: "center" }}>
            <LaunchIcon
              className="open"
              color="primary"
              onClick={() =>
                this.props.routeFunction("user/" + row.original.id)
              }
            ></LaunchIcon>
            <DeleteIcon
              className="delete"
              color="secondary"
              onClick={() => {
                this.props.deleteUser(row.index);
              }}
            ></DeleteIcon>
            <ToastContainer
              position="bottom-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        ),
      },
    ];
    return (
      <ReactTable
        columns={columns}
        data={this.props.userDate}
        defaultPageSize={5}
      ></ReactTable>
    );
  }
}

export default Table;
