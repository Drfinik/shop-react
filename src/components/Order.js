import React, { Component } from 'react'
import { FaTrash } from "react-icons/fa";

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} alt={'photo ' + this.props.item.id}/>
        <h2>{this.props.item.title}</h2>            
        <b>{this.props.item.price}$</b>
        <FaTrash className='delete-bnt' onClick={() => this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order