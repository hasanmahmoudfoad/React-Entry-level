import { Component } from "react"
import SwiperComponent from "../Sliders/SimpleSlider"
import Parent from "../parent/Parent"

export default class Home extends Component{
    state={
        productName: 'Toshiba c3',
        price: 3000,
        type: 'Mobile Phone'
    }
    render(){
        return(
            <>
            <div className="my-5">
              <SwiperComponent />
            </div>
            <Parent/>
            <div className="my-5">
              <h1 className="text-cecnter">Products</h1>
              <div className="p-3 bg-info w-50 m-auto my-5">
                <h3><i className="fa-solid fa-skull-crossbones"></i>{this.state.productName} </h3> 
                <h3><i className="fa-solid fa-skull-crossbones"></i>{this.state.price} </h3> 
                <h3><i className="fa-solid fa-skull-crossbones"></i>{this.state.type} </h3> 
              </div>
            </div>

            </>
        )
    }
}