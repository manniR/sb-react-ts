import * as React from "react";
import PostTypes from "post-types";
import Post from "../Post/Post";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postActions";
export interface IPostsState {
  posts: any;
}
export interface IPostsProps {
  postdata: [{}];
}

class Posts extends React.Component<{}, IPostsState> {
  public state = { posts: [] };
  componentWillMount() {
    this.props.fetchPosts();
  }

  public render(): JSX.Element {
    const entries = this.props.posts.map(post => (
      <div>
        <Post title={post.title} body={post.body} />
      </div>
    ));

    return <div>{entries}</div>;
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

export default connect(mapStateToProps, { fetchPosts })(Posts);
