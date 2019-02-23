import React from 'react';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

export default ( {post, onDelete } ) => {
  
  debugger;
  return (    
    <div style={ styles }>
      <h2>{ post.title }</h2>
      <p>{ post.content }</p>
      <button className="btn btn-danger" type="button" onClick={() => onDelete(post.id) } >
        Remove
      </button>
    </div>
  );
};
