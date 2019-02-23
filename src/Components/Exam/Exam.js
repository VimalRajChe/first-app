import React from 'react';
import Student from './Student';
import Mark from './Mark';

class Exam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          someCondition: "quartely"
        };
    }


    render()
    {
        return (
            <div>
                <h1>Exam Result</h1>
                <Student />
                { this.state.someCondition === "quartely" ?
                <div>
                <h4>Quartely Exam</h4>
                <Mark tamil="80" english="80" maths="90" socialscience="99" science="100" />
                </div>
                : 
                <div>
                <h4>Halfly Exam</h4>
                <Mark tamil="70" english="90" maths="90" socialscience="97" science="100" />
                
                <h4>Main Exam</h4>
                <Mark tamil="90" english="70" maths="80" socialscience="99" science="100" />
                </div>
                }
            </div>
        );
    }
}

export default Exam;