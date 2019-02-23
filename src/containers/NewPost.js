import { connect } from 'react-redux';
import { createPost } from '../actions';
import PostComponent from '../Components/PostComponent';

const mapDispatchToProps = dispatch => {
    return {
        addOnPost: post => {
            dispatch(createPost(post))
        }
    }
} 

export default connect(null, mapDispatchToProps)(PostComponent)
