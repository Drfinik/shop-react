import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    const reversedItems = this.props.items.slice().reverse();
    return (
      <main>
        {reversedItems.map(el => (
           <Item key={el.id} item={el}/> 

        ))}
      </main>
    )
  }
}

export default Items