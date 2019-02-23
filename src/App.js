import React from 'react';
import Status from './Components/status';
import NewPost from './containers/NewPost';
import ListPost from './containers/ListPost';

class App extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
        firstName: 'Vimal',
        lastName: 'Raj',
        productOwner: '',
        product: [
                  { 
                    productName: 'Apple', 
                    productPrice: 1000, 
                    productAvailable: "Yes"
                  },
                  {
                    productName: "SAMSUNG",
                    productPrice: 900,
                    productAvailable: "Yes" 
                  },
                  {
                    productName: "Moto",
                    productPrice: 800,
                    productAvailable: "No"
                  }]
                
    };
    this.getProductInfo = this.getProductInfo.bind(this);
    this.handleTest = this.handleTest.bind(this);
  }

  componentWillMount() {
    console.log(this.state.firstName);
  }

  componentDidMount() {
    console.log(this.state.firstName);
  }

  //componentShouldUpdate() {
    //return true
  //}

  getProductInfo() {
    console.log("getProductInfo");
    
    let data = this.state.product.map(function(item,index) {
      return (
        <tr key={index}>
           <td>{item.productName}</td>
           <td>{item.productPrice}</td>
           <td>{item.productAvailable}</td>
        </tr>
      );
    });

    return data;
  }

  handleTest(data) {
    debugger;
    console.log(data);
    this.setState({productOwner:data});
  }

  render() {
    const getProductInfo = this.state.product.map(function(item,index) {
      //debugger;
      return (
        <tr key={index}>
           <td>{item.productName}</td>
           <td>{item.productPrice}</td>
           <td>{item.productAvailable}</td>
        </tr>
      );
    }); 

    return (
     <div>
       <NewPost />
       <ListPost />
       { /** <Status productStore="Flipkart" productLocation="Bangalore" handleTest={this.handleTest}/>
       <h5> { this.state.productOwner !== "" ? "Product Owner : " + this.state.productOwner : "On the process get data from child to parent"} </h5>
       <table>
         <thead>
          <th>Product Name</th>
          <th>productPrice</th>
          <th>productAvailable</th>
         </thead>
         <tbody>
            {getProductInfo}
  
         </tbody>
    </table> */ }
     </div>
    );
  }
}

export default App;


