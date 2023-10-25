import {useSelector} from 'react-redux'
import {selectAllUsers} from '../users/usersSlice'

export default function PostAuthor({userId}) {
  const users = useSelector(selectAllUsers)
  const author = users.find((users) => users.id === userId)

  return (
    <span>{author ? author.name : 'Unknown author'}</span>
  )
}