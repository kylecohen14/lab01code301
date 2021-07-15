import React from 'react';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';
import './style.css';
import data from './data.json';
import Selectedbeast from './Selectedbeast.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render () {
    return (
      <div className="app">
        <Header />
        <Main data={this.state.data}/>
        <Footer />
        <Selectedbeast data={this.state.data}/>
      </div>
    );
  }
}

export default App;
