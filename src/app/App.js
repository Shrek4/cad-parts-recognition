import Header from '../head/head';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import ListTable from '../list/list';
import { Routes, Route } from "react-router-dom";
import Info from '../info/info';
import React, { Component } from 'react';
import $ from 'jquery';

const socket = "http://localhost:3001";

class App extends Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      partList: [],
      filteredparts: [],
      q: ''
    }

    this.filterpartList = this.filterpartList.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const q = event.target.value.toLowerCase();
    this.setState({ q }, () => this.filterpartList());
  }


  // For filtering the part object w.r.t name
  filterpartList() {
    let parts = this.state.partList;
    let q = this.state.q;

    parts = parts.filter(function (part) {
      return part.class.toLowerCase().indexOf(q) !== -1; // returns true or false
    });
    this.setState({ filteredparts: parts });
  }

  // AJAX request to get all the parts
  getAllparts() {
    $.ajax({
      url: socket + '/parts',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ partList: data }, function () {
          this.setState({ loading: false });
          this.setState({ filteredparts: data });
          // Logging the response
          //console.log(this.state);
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
      }
    });
  }

  componentWillMount() {
    this.getAllparts();
  }

  componentDidMount() {
    this.getAllparts();
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="Loader"></div>
      )
    }
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ListTable data={this.state.filteredparts} filterevent={this.onChange}/>} />
          <Route path="info" element={<Info />} />
        </Routes>

      </div>
    );
  }

}

export default App;
