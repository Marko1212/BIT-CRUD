import React, {Component} from 'react';  
import axios from 'axios';
import Post from './Post/Post';
import './postsList.css';



class PostsList extends Component {
    constructor(props){
        super(props);

        this.state={
            posts: []
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData(){
        axios.get('http://crud-api.hypetech.xyz/v1/posts',
        {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'B1tD3V'
            }
        }
        )
        .then(res =>{
            this.setState({
                posts: res.data
            })
        })
       
    }
    render() {  
        console.log(this.state.posts)
        return ( 
            
            <div className="postList">
                {this.state.posts.map((post, i) => 
                    <Post key={i} {...post} />
                )}
                
            </div>
            
         );
    }
}
 
export default PostsList;