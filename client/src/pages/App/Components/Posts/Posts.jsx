import React, { useEffect, useState } from 'react'
import Post from './Post'

import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts, getPostStatus, getPostsError, fetchPosts } from '../../../../features/posts/postsSlice'

const Posts = () => {

  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostStatus);
  const error = useSelector(getPostsError);


  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === 'loading') {
    content = <p>"Loading ... "</p>;
  } else if (postStatus === 'succeeded') {
    content = posts.map(post => <Post key={post._id} post={post} />);
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>
  }


  return (
    <div className='w-full min-h-screen my-8 flex flex-col items-center gap-6 px-3 md:px-3'>
      {content}
    </div>
  )
}

export default Posts