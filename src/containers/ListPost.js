import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions';
import ListComponent from '../Components/ListComponent';

function publishToProps({posts, onDelete}) {
    return ( 
        posts.map(post => {
            return (<ListComponent post={post} onDelete={onDelete} key={post.id}/>);
        })                
 );
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: id => {
            dispatch(deletePost(id))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(publishToProps);

/** export default connect((state) => {
    let posts = state.posts;
    //return (posts);
})(ListComponent)*/