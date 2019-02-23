import React from 'react';
import ErrorComponent from './ErrorComponent';
import ListComponent from './ListComponent';

class Student extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
                        employeeName: 'Vimal',
                        student: [
                        {
                            studentID: '001',
                            studentName: 'Vimal'
                        },
                        {
                            studentID: '001',
                            studentName: 'Vimal'
                        }],
                        address: 'India',
                        data: 'raj',
                        preLoader: true,
                        error: null                      
                     };
        this.handleOnclickFour = this.handleOnclickFourSample.bind();    
        this.handlComponentShouldUpdate = this.handlComponentShouldUpdate.bind();
        this.handleUserProfile = this.handleUserProfile.bind(this);
        this.handleFragment = this.handleFragment.bind(this);
    }

handleOnclickFourSample() {
    console.log("HandleOnclickFourSample");
}

componentDidMount() {   
    
    fetch('https://randomuser.me/api/?results=6')
         .then(response => response.json())
         .then(data => {         
            this.setState({data:data.results, preLoader:false})        
        }).catch(error => this.setState({error}));
    console.log(this.state.data);
   
    /** let states = this.state.student[0];
    console.log(states.studentID, "Check the states student Id");
    let i = 0;
    setInterval(() => {
        this.setState({employeeName: 'Raj' });
        i++;
        console.log(this.state.employeeName, "ComponentDidMount");
     }, 3000);
    */ 
 
     
    ///this.setState(() => this.forceUpdate({ states.studentID : 'Chennai' }));
}

shouldComponentUpdate(nextProps, nextState) {
    return true;
  //  return nextState.employeeName !== this.state.employeeName ? true : false;
}

handleOnclick() {
    console.log("welcome");
}

handleOnclickTwo() {
    console.log("HandleOnClick Two");
}

handleOnclickThree(e) {
    console.log(e.target.value, "Event Target Name");
    console.log("HandleOnClick Three");
}

handleOnclickFour() {
    console.log("HandleOnClick Four");
}

handleOnclickFive() {
    console.log("HandleOnClick Five");
}

handlComponentShouldUpdate() {

    return true;
 //this.setState({employeeName:'Raj'});
 //console.log(this.state.employeeName);
    //setInterval(this.setState({ employeeName : 'Raj' })
    //  console.log(this.state.employeeName, "setInterval Function");
  //, 3000);
}

handleUserProfile() {
    let userData = this.state.data.map(function(item,index) {
        return (
            <tr key={index}>
               <td>{item.name.first} {" "} {item.name.last}</td>
               <td>{item.gender}</td>
               <td>{item.phone}</td>
               <td><img src={item.picture.thumbnail} title="profile user image" alt="profile user image" /></td>
            </tr>
        );
    });

    return userData;
}

handleFragment() {
    return (
        <React.Fragment>
            <td>{"Vimal"}</td>
            <td>{"Raj"}</td>
        </React.Fragment>
    );
}

render() {
        
   let stud = this.state.student.map(function(item,index) {
           return (
               <div key={index}>
              Student ID: {item.studentID}
              Student Name: {item.studentName}
               </div>
           );
        });
        
    console.log(this.state.employeeName, "Rerender this component");

    const { preLoader } = this.state.preLoader;

  return (
            <div>
               <h3>{"Example for Fragments"}</h3>
                <table>
                    <thead>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        <tr> {this.handleFragment()} </tr>
                    </tbody>
                </table>
                {"************************************"}
                { (this.state.preLoader === true) ? "Loading ......." : 
                <div>
                    {
                    console.log(this.state.data, "Data from Server")}
                    <table>
                        <thead>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Mobile Number</th>
                            <th>Profile Image</th>
                        </thead>
                        <tbody>
                            {this.handleUserProfile()}
                        </tbody>
                    </table>
                    </div> }
            
                    {stud}
                    {this.state.address}        
                <div>
                    
                    <button id="handleOnclick" onClick={this.handleOnclick}>Click Me!</button>
                    <button id="handleOnclick" onClick={this.handleOnclickTwo.bind()}>Click Me!</button>
                    <button id="handleOnclick" name="handleOnclickThree" value="Clickme!" onClick={(e) => this.handleOnclickThree(e)}>Click Me!</button>
                    <button id="handleOnclick" onClick={this.handleOnclickFour}>Click Me!</button>

                {/** Use ComponentShouldUpdate */ }

                {/*this.handlComponentShouldUpdate()*/} 
                
                </div>   
                 
                {"******************************"} 
                
                <ErrorComponent>
                <ListComponent />               
                </ErrorComponent>
             </div>
             );
    }
}

export default Student;