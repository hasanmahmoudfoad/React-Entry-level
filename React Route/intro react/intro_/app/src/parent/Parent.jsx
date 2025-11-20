import React, { Component } from 'react'
import Child1 from '../child1/Child1'


export default class Parent extends Component {
  state={
      product: [
        {id:2347, name:'Iphone 14 pro',  category:'Mobile Phone', price: 56000, sale: true, stock:32, imgUrl:'https://m.media-amazon.com/images/I/61wummVixDL._AC_UF894,1000_QL80_.jpg',},
        {id:2487, name:'Samsung Galaxy S26', category:'Mobile Phone', price: 24500, sale: false, stock:62, imgUrl:'https://www.androidheadlines.com/wp-content/uploads/2025/11/Samsung-Galaxy-S26-Plus-AH-exclusive-color-variations-10-1420x947.webp'},
        {id:2634, name:'HP Laserjet p1102', category:'Printers', price: 4300, sale: false, stock:13, imgUrl:'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c02931689.png'},
        {id:2893, name:'Samsung G5', category:'Screens', price: 8700, sale: false, stock:320, imgUrl:'https://api.delta-computer.net/storage/products/$2y$12$tmsbOR4AX0ngtKuOuy44i.dRC2RMrM5WKBym1XmUw2rLSu2nlxLcW.webp'},
        {id:2045, name:'Nikon Z-6II', category:'Camera', price: 62000,sale: true, stock:6, imgUrl:'https://www.nikon-mea.com/media/wysiwyg/z6II/hero-product_Z6II.png'},
        {id:4345, name:'Hyper-X Cloud Alpha', category:'Headphones', price: 6450, sale: false, stock:17, imgUrl:'https://m.media-amazon.com/images/I/71pFeJFdJQL.jpg'}
      ]
    }
    deleteProduct(IdParam){
      // Deep copy 
      let deepDelete = [...this.state.product]

      // Action (delete)
      deepDelete = deepDelete.filter((el, i)=>{
        console.log(`el.id = ${el.id} , IdParam = ${IdParam} index = ${i}`);
        if (el.id !== i){
         return el.id !== IdParam 
        }
      })

      // Use setState
      this.setState({product:deepDelete})
    }
    updateProductIncrement(index){
      let deepUpdate = [...this.state.product];
      deepUpdate[index].stock ++;
      this.setState({product:deepUpdate});
    }
    updateProductDecrement(index){
      let deepUpdate = [...this.state.product];
      deepUpdate[index].stock --;
      this.setState({product:deepUpdate});
    }

  render() {
   let allProducts = this.state.product.map((pr, i)=>{
    return (
      pr.price < 120000 ?<Child1 
      key={i} 
      index={i} 
      deleteProduct={()=> this.deleteProduct(pr.id)} 
      updateProductIncrement={()=> this.updateProductIncrement(i)} 
      updateProductDecrement={()=> this.updateProductDecrement(i)} 
      inncomingProduct={pr} />:''
    )
  })
    
    return (
      <>
      <div className='container'>
        <div className='row  g-3 bg-secondary'>
          {allProducts}
        </div>
      </div>

      </>
    )
  }
}
