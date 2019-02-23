import React from 'react';

class Mark extends React.Component {
    render() {
        return (
            <div>
                Tamil:{this.props.tamil} <br />
                English:{this.props.english} <br />
                Maths: {this.props.maths} <br />
                Social Science: {this.props.socialscience} <br />
                Science: {this.props.science} <br />
            </div>
        );
    }
}

export default Mark;