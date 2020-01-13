import React from "react";
// import Column from "../../Components/Column/Column";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { postDelete } from "../../../services/postsService";
import { browserReload } from "../../../services/storageService";


const MyPostCard = ({ post, reload }) => {

  let deleteClicked = () => {
    console.log('click');
    let postId = post.id;
    postDelete(postId, () => {
      // call me when data are fetched successfully
      console.log('post deleted');
      // reload browser tab to show new list after deleting
      browserReload();
    });
  }

  let editClicked = () => {
    console.log('click edit');
    // ...
  }

  return (

    <div className="flex-row">

      <div className="col colauto">
        <h1 className="title">{post.title}</h1>
      </div>

      <div className="col colauto">
        <button type="button" className="btn-large" id="button" onClick={editClicked}><i className="fas fa-edit" aria-hidden="true"></i>Edit</button>
      </div>

      <div className="col colauto">
        <button type="button" className="btn-large" id="button" onClick={deleteClicked}><i className="fas fa-trash" aria-hidden="true"></i>Delete</button>
      </div>

    </div>
  );
}

export default MyPostCard;
