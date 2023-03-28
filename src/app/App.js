import Header from '../head/head';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import ListTable from '../list/list';
import { Routes, Route } from "react-router-dom";
import Info from '../info/info';
import React, { Component } from 'react';
import Recognize from '../recognize/recognize';
import ChatAssist from '../chatbot/chat_assist';

export const socket = "http://localhost:3001";


// const papaConfig = {
//   complete: (results, file) => {
//     console.log('Parsing complete:', results, file);
//   },
//   download: true,
//   error: (error, file) => {
//     console.log('Error while parsing:', error, file);
//   },
//   delimiter: ";"
// };

// Papa.parse(siteListCSV, papaConfig)

class App extends Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      partList: [],
      filteredparts: [],
      class_filter: '',
      size_filter: '',
      standart_filter: ''
    }

    this.filterpartList = this.filterpartList.bind(this);
    this.filterclass = this.filterclass.bind(this);
    this.filtersize = this.filtersize.bind(this);
    this.filterstandart= this.filterstandart.bind(this);
    this.getAllparts = this.getAllparts.bind(this);
  }

  filterclass(event) {
    const class_filter = event.target.value.toLowerCase();
    this.setState({ class_filter }, () => this.filterpartList());
  }
  filtersize(event) {
    const size_filter = event.target.value.toLowerCase();
    this.setState({ size_filter }, () => this.filterpartList());
  }
 filterstandart(event) {
    const standart_filter = event.target.value.toLowerCase();
    this.setState({ standart_filter }, () => this.filterpartList());
  }


  // For filtering the part object w.r.t name
  filterpartList() {
    let parts = this.state.partList;
    let class_filter = this.state.class_filter;
    let size_filter = this.state.size_filter;
    let standart_filter = this.state.standart_filter;

    parts = parts.filter(function (part) {
      return ((part.class.toLowerCase().indexOf(class_filter) !== -1)&&
      (part.size.toLowerCase().indexOf(size_filter) !== -1)&&
      (part.standart.toLowerCase().indexOf(standart_filter) !== -1)); // returns true or false
    });
    this.setState({ filteredparts: parts });
  }

  getAllparts(e) {
    fetch(socket + '/parts')
      .then(response => response.json())
      .then(data => {this.setState({ partList: data, loading: false, filteredparts: data }); });
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
          <Route path="/" element={<ListTable data={this.state.filteredparts} filterevent={this.filterclass} filtersize={this.filtersize} filterstandart={this.filterstandart}/>} />
          <Route path="info" element={<Info />} />
          <Route path="recognize" element={<Recognize />} />
          <Route path="chat_assist" element={<ChatAssist />} />
        </Routes>

      </div>
    );
  }

}

export default App;
