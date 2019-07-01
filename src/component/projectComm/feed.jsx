import React, { Component } from "react";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import http from '../../services/httpServices';
import config from '../../apiConfig/config.json'

/*******/


class FeedCom extends Component {

   state = {
    posts: []
  };
	constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      posts: []
      
    };
  }

  async componentDidMount() {

    // axios.get(apiUrl)
    //   .then(res => {
    //     const posts = res.data;
    //     this.setState({ posts });
    //     console.log(posts);
     
    //   });

      //new way to call api
    const {data:posts} = await http.get('https://jsonplaceholder.typicode.com/posts');
    this.setState({ posts });
    //console.log(posts);
    
  }

  //old way to call api
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users/1/posts")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           items: result
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of import Table from './nestedComponent/table';   
          //a catch() bloimport Posts from '../learning/posts';
          //click so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  // }

  handleAdd = async()=> {
    const obj = {title:'qa',body:'body'};
    const {data:post} = await http.post(config.apiUrl, obj);
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
    //console.log(posts);
  };

  handleUpdate = async post => {

    post.title = "updatedd";
    // //for all data
    await http.put(config.apiUrl + "/" + post.id, post);
    
    //for single
    //axios.patch(apiUrl+"/"+{title: post.title});
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = {...post};
    this.setState({ posts });
    // console.log(posts);

  };

  handleDelete = async post => {
    const orignalPosts = this.state.posts;
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });
    try{
      await http.delete(config.apiUrl + "/" + post.id);
    }catch(ex){

      if(ex.response && ex.response.status === 400)
        alert("ther is somethink worng");
      this.setState({ posts:orignalPosts });
    }
    console.log("delete2")

  };


    render() {

      
    // this is use condaiton for data show
	  //  const { error, isLoaded, items, posts } = this.state;
	  //   if (error) {
	  //     return <div>Error: {error.message}</div>;
	  //   } else if (!isLoaded) {
	  //     return <div>Loading...</div>;
	  //   } else {
	      return (
	      	<div className="container">
            <ToastContainer/>
            <button onClick={this.handleAdd} className="btn btn-primary p-3 col-4">Add</button>
            <hr/>
            <br/>
              
            <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              {this.state.posts.map(post => (
	            <tr key={post.id}>
	              <td>{post.id}</td>
	              <td> {post.title}</td>
                <td>
                  <button onClick={()=>this.handleUpdate(post)}className="btn btn-dark m-2">update</button>
                  <button onClick={()=>this.handleDelete(post)}className="btn btn-danger m-2">Delete</button>
                </td>
	            </tr>
            ))}
            </tbody>
            </table>
           
          <hr/>
	        {/* <ul>
	          {items.map(item => (
	            <li key={item.id}>
	              <p>{item.title}</p>
	              <p> {item.body}</p>
	            </li>
	          ))}
	        </ul> */}
	        </div>
	      );
	    }
 	  }
// }

export default FeedCom;