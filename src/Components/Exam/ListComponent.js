import React from 'react';

class ListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          selectOption: '',
          lists: [{
                    name: 'Vimal',
                    id: 1
                  },
                  {
                    name: 'Raj',
                    id: 2
                  },
                  {
                    name: 'Kumar',
                    id: 3
                  }]
        };
        this.handleSelectionList = this.handleSelectionList.bind(this);
        this.handleChangeOption = this.handleChangeOption.bind(this);
    }

    handleSelectionList() {
        return this.state.lists.map(function(item,index) {
            return <option key={index} value={item.id}>{item.name}</option>
        });
    }   

    handleChangeOption() {
        console.log(this.refs.selectOption1.value, "Selection Value");
        this.setState({selectOption:this.refs.selectOption1.value});
    }

    render() {
       

        console.log(this.state.selectOption,"To check the selection value");

        if(this.state.selectOption == 3) {
            throw new Error("Crashed : Select Option Value 3");
        }

       return (
        <React.Fragment>
          <h3>{"List Component"}</h3>
          <select ref="selectOption1" name="selectionList" id="selectionList" onChange={this.handleChangeOption}>
            {this.handleSelectionList()}
          </select>  
        </React.Fragment>
        )
    }
}

export default ListComponent;
