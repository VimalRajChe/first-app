import React from 'react';

class ErrorComponent extends React.Component {

    constructor(props) {
       super(props);
       this.state= {
           error:'',
           errorInfo:'error'
       };
    }

    componentDidCatch(error,errorInfo) {
        console.log("Call ComponentDidCatch!");
        this.setState({error:error,errorInfo:errorInfo});
    }
    
    render() {
        if(this.state.errorInfo) {
        console.log(this.state.errorInfo,"ErrorInfo Console Log");
        return (
            <div>
               <h3>{"Error Component"}</h3>
               <h4>{"Error : "} {this.state.error.toString()}</h4>
               <h4>{"Error Info : "} {this.state.errorInfo.componentStack} </h4>
            </div>
        );
        }
        return this.props.children;
    }
}

export default ErrorComponent;