import React from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

class PostComponent extends React.Component {
    

   /**  constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);   
    } */

    state = {
      title:'',
      content:''
  };

    
    
    /**
     * Set the title, content state values
     */
    handleOnChangeEvent = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    /***
     * This function handle clear the state values such as title, content.
     */
    handleReset() {
       if(this.state.title.trim() && this.state.content.trim()) {
           this.setState({title:'',
                          content:''             
                         });
       }
    }

    /**
     * This function to handle the form submit.
     */
    handleSubmit = (e) => {
       e.preventDefault();
       console.log(this.state.title, this.state.content);
       if(this.state.title !== '' && this.state.content !== '') {
        debugger;
        this.props.addOnPost(this.state);
      }
    }

    render() {
       if(this.state.title !== "") {
        console.log(this.state.title, "Title");
        console.log(this.state.content, "Content");
      }

        return (
            <div>
                <div>
          <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
              <input
              type="text"
              placeholder="Title"
              className="form-control"
              name="title"
              onChange={ this.handleOnChangeEvent }
              value={ this.state.title }
            />
          </div>
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="content"
              className="form-control"
              name="content"
              onChange={ this.handleOnChangeEvent }
              value={ this.state.content }>
            </textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Add Post</button>
            <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
              Reset
            </button>
          </div>
        </form>
      </div>



            {/* <Container>
                <h3>Post Component</h3>
              <Row>
                <Col md={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" ref="title" placeholder="Enter post title" name="title" 
                          value={this.state.title}
                          id="title" 
                          onChange={this.handleOnChangeEvent}
                        />
                    </Form.Group>

                    <Form.Group controlId="formContent">
                        <Form.Label>Content</Form.Label>
                        <Form.Control type="textarea" value={this.state.content} ref="content" placeholder="Enter post content" name="content" id="content" 
                          onChange={this.handleOnChangeEvent}
                        />
                    </Form.Group>
            
                    <Button variant="primary" type="submit">Submit</Button>
                    
                    <Button variant="warning" type="button" onClick={this.handleReset}>Reset</Button>
                </Form>;
                </Col>
                <Col md={6}>
                     <Alert key="success" variant="success">
                        List Posts
                     </Alert>
                </Col>
                </Row>
                </Container>
            </div> */}
            </div>
        );
    }
}

export default PostComponent;