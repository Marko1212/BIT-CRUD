import { ENDPOINT_POSTS } from "../shared/constants";
import { getRequestPublic, postRequestPublic, getRequest, postRequest, putRequest, deleteRequest } from "./APIService";
import { userIdGet } from "./storageService";
import { Post } from "../entities/Post";
import { handleError } from "./errorService";



export const postsGet = (onSuccess) => {
  console.log('postsGet ...');
  let onFetchSuccess = (response) => {
    let postsRaw = response.data; // raw unprepared posts data
    // prepare posts using entities Post constructor
    let posts = postsRaw.map((post) => {
      const title = post.title;
      const subtitle = post.subtitle;
      const text = post.text;
      const imageUrl = post.imageUrl;
      const createdAt = post.createdAt;
      const preparedPost = new Post(title, subtitle, text, imageUrl, createdAt); // entities
      return preparedPost;
    });
    onSuccess(posts);
  }
  return getRequestPublic(ENDPOINT_POSTS, onFetchSuccess, handleError);
}


export const myPostsGet = (onSuccess) => {
  let url = ENDPOINT_POSTS + '?userId=' + userIdGet();
  return getRequest(url, onSuccess, handleError);
}


export const singlePostGet = (postId) => {
  let url = ENDPOINT_POSTS + '/' + postId;
  return getRequest(url)
    .then(response => {
      return response.map(
        (post) => {
          const title = post.title;
          const subtitle = post.subtitle;
          const text = post.text;
          const imageUrl = post.imageUrl;
          const createdAt = post.createdAt;

          const myPost = new Post(title, subtitle, text, imageUrl, createdAt);
          return myPost;
        })
    })
}


export const postCreate = (data) => {
  let onCreateSuccess = () => {
    // do nothing
  };
  return postRequest(ENDPOINT_POSTS, data, onCreateSuccess, handleError);
}


export const postUpdate = (postId) => {
  let url = ENDPOINT_POSTS + '/' + postId;
  return putRequest(url)
    .then(response => {
      return response.map(
        (post) => {
          const title = post.title;
          const subtitle = post.subtitle;
          const text = post.text;
          const imageUrl = post.imageUrl;
          const createdAt = post.createdAt;

          const myPost = new Post(title, subtitle, text, imageUrl, createdAt);
          return myPost;
        })
    })
}


export const postDelete = (postId, onSuccess) => {
  let url = ENDPOINT_POSTS + '/' + postId;
  return deleteRequest(url, onSuccess, handleError);
}
