import uuidv4 from 'uuid/v4';
import { CREATE_NEW_POST, DELETE_POST } from './types';

export const createPost = ({title,content}) => ({
       type: CREATE_NEW_POST,
       payload: {
         id: uuidv4(),
         title: title,
         content: content
       }  
});

export const deletePost = id => ({
  type: DELETE_POST,
  payload: {
    id
  }
});