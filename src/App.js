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
      data: data,
      showModal: false,
      selectBeast: {},
    };
  }
  showAsModal = (beast) => {
    console.log(beast);
    let selectBeast = data.find(value => value.title === beast);
    this.setState({selectBeast,showModal: true });
  }
    closeModal = () => {
      this.setState({showModal: false});
    }



    render () {
      return (
        <div className="app">
          <Header />
          <Main data={this.state.data}
            showAsModal={this.showAsModal}/>
          <Selectedbeast selectBeast={this.state.selectBeast}
            modalOn={this.state.showModal}
            closeModal ={this.closeModal}
          />
          <Footer />
        </div>
      );
    }
}

export default App;
