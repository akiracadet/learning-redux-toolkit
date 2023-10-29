import {useSelector} from 'react-redux'
import {selectPostIds} from './postsSlice'
import PostsExcerpt from './PostsExcerpt'
import {useGetPostsQuery} from './postsSlice'

export default function PostsList() {
  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery()

  const orderedPostIds = useSelector(selectPostIds)

  let content

  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = orderedPostIds.map((postId) => <PostsExcerpt key={postId} postId={postId} />)
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <section>
      {content}
    </section>
  )
}