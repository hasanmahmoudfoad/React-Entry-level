import React, { Component } from 'react'

export default class Child1 extends Component {


  render() {
    //  let pr= this.props.inncomingProduct
    // console.log(pr.price);
    let { id, name, category, price, stock, sale, imgUrl } = this.props.inncomingProduct;

    return (
      <div className='col-4'>
        <div className='bg-light text-start p-3' >
          <div className='my-3 text-center'>
            <img src={imgUrl} alt={name} width='300' height='300' />
          </div>
          <h4 className=''>Name <span className='text-secondary'>{name}</span></h4>
          <h4 className=''>Category : <span className='text-secondary'>{category}</span></h4>
          <h4 className=''>Price: <span className='text-secondary'>{price} </span>
            {sale ? <span className='bg-danger h6 ms-2 p-1 text-white'>Sale</span> : ""}
          </h4>
          <h4 className=''>Stock: <span className='text-secondary'>{stock}</span></h4>
          <div className='text-center'>
            <button onClick={this.props.deleteProduct} className='btn btn-danger m-3'>Delete</button>
            <button onClick={this.props.updateProductIncrement} className='btn btn-info m-3'>+1</button>
            <button onClick={this.props.updateProductDecrement} className='btn btn-info m-3'>-1</button>
          </div>

        </div>
      </div>
    )
  }
}
