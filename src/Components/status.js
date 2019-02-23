import React from 'react';

class Status extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
          productStore: 'Amazon',
          productLocation: 'Chennai',
          productOwner: "Vimal"
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }
   
   componentDidMount() {
        this.setState({
            productStore: this.props.productStore,
            productLocation: this.props.productLocation
        });      
       // this.props.handleTest(this.state.productOwner);
    }
    
    handleOnClick() {
        this.props.handleTest(this.state.productOwner);
    }

    render()
    {
        return (
            <div>
                <h3>{this.state.productStore}</h3>
                <address>{this.state.productLocation}</address>
                <div> 
                  <button onClick={this.handleOnClick}>onClick</button>                    
                </div>
            </div>
       
        )
    }
}
export default Status;