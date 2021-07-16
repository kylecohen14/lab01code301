import React from 'react';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';
import './style.css';
import data from './data.json';
import Selectedbeast from './Selectedbeast.js';
import BeastForm from './BeastForm.js';
// import Button from "react-bootstrap/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastData: data,
      showModal: false,
      selectBeast: {},
      selectForm: {},
      selectHorns: ''
    };
  }
  submitForm = e => {
    e.preventDefault();
    let selectForm = data.find(value => value.horns);
    this.setState({selectForm});
  }
  showAsModal = (beast) => {
    console.log(beast);
    let selectBeast = data.find(value => value.title === beast);
    this.setState({selectBeast,showModal: true });
  }
    closeModal = () => {
      this.setState({showModal: false});
    }
    filterHorns = (e) => {
      e.preventDefault();
      let horns = data.filter((value) => value.horns === parseInt(this.state.selectHorns));
      this.setState({beastData: horns});
    }
    selectForm = e => {
      this.setState({selectHorns: e.target.value});
    }
    render () {
      return (
        <div className="app">
          <Header />
          <BeastForm
            selectForm={this.selectForm}
            formSubmited={this.submitForm}
            filterHorns={this.filterHorns}/>
          <Main
            // data={horns}
            data={this.state.beastData}
            showAsModal={this.showAsModal}/>
          <Selectedbeast
            selectBeast={this.state.selectBeast}
            modalOn={this.state.showModal}
            closeModal ={this.closeModal}
          />
          <Footer />
          {/* <Button onClick={this.selectedHorns}/> */}
        </div>
      );
    }
}

export default App;

//  dont forget to add form into the render
