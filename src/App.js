import React from "react";
import Header from "./componets/Header"
import Footer from "./componets/Footer"
import Items from "./componets/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: '1.jpg',
          desc: 'lorem lorem lorem lorem lorem lorem lorem.',
          categoriy: 'lorem lorem lorem lorem lorem lorem',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стул серый',
          img: '2.jpg',
          desc: 'lorem lorem lorem lorem lorem lorem lorem.',
          categoriy: 'lorem lorem lorem lorem lorem lorem',
          price: '49.99'
        },
        {
          id: 3,
          title: 'Стул серый',
          img: '3.jpg',
          desc: 'lorem lorem lorem lorem lorem lorem lorem.',
          categoriy: 'lorem lorem lorem lorem lorem lorem',
          price: '49.99'
        },
        {
          id: 4,
          title: 'Стул серый',
          img: '4.jpg',
          desc: 'lorem lorem lorem lorem lorem lorem lorem.',
          categoriy: 'lorem lorem lorem lorem lorem lorem',
          price: '49.99'
        },
        {
          id: 5,
          title: 'Стул серый',
          img: '5.jpg',
          desc: 'lorem lorem lorem lorem lorem lorem lorem.',
          categoriy: 'lorem lorem lorem lorem lorem lorem',
          price: '49.99'
        },
        {
          id: 6,
          title: 'Стул серый',
          img: '6.jpg',
          desc: 'lorem lorem lorem lorem lorem lorem lorem.',
          categoriy: 'lorem lorem lorem lorem lorem lorem',
          price: '49.99'
        },
        {
          id: 7,
          title: 'Стул серый',
          img: '7.jpg',
          desc: 'lorem lorem lorem lorem lorem lorem lorem.',
          categoriy: 'lorem lorem lorem lorem lorem lorem',
          price: '49.99'
        },
        {
          id: 8,
          title: 'Стул серый',
          img: '8.jpg',
          desc: 'lorem lorem lorem lorem lorem lorem lorem.',
          categoriy: 'lorem lorem lorem lorem lorem lorem',
          price: '49.99'
        },
        {
          id: 9,
          title: 'Стул серый',
          img: '9.jpg',
          desc: 'lorem lorem lorem lorem lorem lorem lorem.',
          categoriy: 'lorem lorem lorem lorem lorem lorem',
          price: '49.99'
        }
        
      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items}/>
        <Footer />
      </div>
    )
  }
}

export default App;
