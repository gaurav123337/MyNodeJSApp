import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import PostItem from './PostItem';
import Pagination from './Pagination';

const Posts = () => {
const posts =useSelector((state) => state.posts);
const dispatch = useDispatch();

const postItem = posts.map((post) => <PostItem post={post} />)

  return (
    <div className="col-lg-8">
						<div className="blog-box list-style">
              {postItem}
              <Pagination />
    	</div>
					</div>
  );
};

Posts.propTypes = {};

export default Posts;
