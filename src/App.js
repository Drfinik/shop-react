import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Стул 1',
          img: '1.jpg',
          desc: 'lorem lorem lorem lorem lorem lorem lorem.',
          categoriy: 'lorem lorem lorem lorem lorem lorem',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стул 2',
          img: '2.jpg',
          desc: 'lorem lorem lorem lorem lorem lorem lorem.',
          categoriy: 'lorem lorem lorem lorem lorem lorem',
          price: '49.99'
        },
        {
          id: 3,
          title: 'Стул 3',
          img: '3.jpg',
          desc: 'lorem lorem lorem lorem lorem lorem lorem.',
          categoriy: 'lorem lorem lorem lorem lorem lorem',
          price: '49.99'
        },
        {
          id: 4,
          title: 'Стул 4',
          img: '4.jpg',
          desc: 'lorem lorem lorem lorem lorem lorem lorem.',
          categoriy: 'lorem lorem lorem lorem lorem lorem',
          price: '49.99'
        },
        {
          id: 5,
          title: 'Стул 5',
          img: '5.jpg',
          desc: 'lorem lorem lorem lorem lorem lorem lorem.',
          categoriy: 'lorem lorem lorem lorem lorem lorem',
          price: '49.99'
        },
        {
          id: 6,
          title: 'Стул 6',
          img: '6.jpg',
          desc: 'lorem lorem lorem lorem lorem lorem lorem.',
          categoriy: 'lorem lorem lorem lorem lorem lorem',
          price: '49.99'
        },
        {
          id: 7,
          title: 'Стул 7',
          img: '7.jpg',
          desc: 'lorem lorem lorem lorem lorem lorem lorem.',
          categoriy: 'lorem lorem lorem lorem lorem lorem',
          price: '49.99'
        },
        {
          id: 8,
          title: 'Стул 8',
          img: '8.jpg',
          desc: 'lorem lorem lorem lorem lorem lorem lorem.',
          categoriy: 'lorem lorem lorem lorem lorem lorem',
          price: '49.99'
        },
        {
          id: 9,
          title: 'Стул 9',
          img: '9.jpg',
          desc: 'lorem lorem lorem lorem lorem lorem lorem.',
          categoriy: 'lorem lorem lorem lorem lorem lorem',
          price: '49.99'
        }

      ]
    }
    this.addToOrder = this.addToOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    )
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true;
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
