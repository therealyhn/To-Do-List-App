import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import ToDoItem from "./model/ToDoItem";
import ToDo from "./model/ToDo";


class App extends React.Component {

  constructor(props) {
    super(props)

    this.toDo = new ToDo();

    this.state = {
      activeTab: -1,
      items: this.toDo.items
    }

    this.changeTab = this.changeTab.bind(this);
    this.examinePath = this.examinePath.bind(this);
    this.createItem = this.createItem.bind(this);
    this.changeItemState = this.changeItemState.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  changeTab = (tab) => {
    if (this.state.activeTab === tab) {
      return;
    }

    switch (tab) {
      case 1:
      default:
        this.setState({ activeTab: 1 });
        window.history.pushState(null, "Tab1", "#all-items");
        break;

      case 2:
        this.setState({ activeTab: 2 });
        window.history.pushState(null, "Tab2", "#pending-items");
        break;

      case 3:
        this.setState({ activeTab: 3 });
        window.history.pushState(null, "Tab3", "#completed-items");
        break;
    }

  }


  examinePath() {
    switch (window.location.hash) {
      case "#all-items": case "":
      default:
        this.setState({ activeTab: 1 });
        break;

      case "#pending-items":
      case 2:
        this.setState({ activeTab: 2 });
        break;

      case "#completed-items":
      case 3:
        this.setState({ activeTab: 3 });
        break;
    }
  }

  componentDidMount() {
    this.examinePath();
    window.onpopstate = this.examinePath;
  }

  createItem(content) {
    // alert(content);

    let item = new ToDoItem(content, new Date());
    let items = this.toDo.add(item);

    this.setState({ items: items });

  }

  changeItemState(item) {

    let items = this.toDo.changeState(item);

    this.setState({ items: items });
  }


  deleteItem(item) {

    let items = this.toDo.delete(item);

    this.setState({ items: items });
  }

  render() {
    return (
      <div id="app-container">
        <Header changeTab={this.changeTab} tab={this.state.activeTab}></Header>
        <Body tab={this.state.activeTab} items={this.state.items} onItemClick={this.changeItemState} onDelete={this.deleteItem}></Body>
        <Footer createItem={this.createItem}></Footer>
      </div>
    );
  }
}


export default App;
