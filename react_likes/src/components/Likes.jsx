

const Likes = (props) => {
  return (
    <div>
      <h1>Total Likes: {props.totalLikes}</h1>
      <button onClick={props.addLike}><img alt="button background" src={props.likeIcon} /></button>
      <button onClick={props.removeLike}><img alt="button background" src={props.dislikeIcon} /></button>
    </div>
  )
}

export default Likes
