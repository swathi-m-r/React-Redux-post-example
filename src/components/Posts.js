import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';

class Posts extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }

    }

  render() {
     
    const postitems = this.props.posts.map(post => (
        <div key = {post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p> 
        </div>
      ));
      
    return (
      <div>
        <h1>posts </h1>
        {postitems} 
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
 posts : state.posts.items,
 newPost : state.posts.item,
});

Posts.propTypes = {
fetchPosts : PropTypes.func.isRequired,
posts : PropTypes.array.isRequired,
newPost: PropTypes.object,

}

export default connect(mapStateToProps, {fetchPosts})(Posts);