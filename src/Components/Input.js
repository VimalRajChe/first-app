import React from 'react';

class Input extends React.Component{
    render()
    {
        return (
            <div>
            <label>{this.props.label}</label>
            <input type={this.props.typ} id={this.props.id}/>
            
           </div>
       
        )
    }
}
export default Input;