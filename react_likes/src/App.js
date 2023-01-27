import './App.css'
import { useState } from 'react'
import Likes from './components/Likes'
import Icon1 from './images/5172567_heart_like_love_icon.png'
import Icon2 from './images/9068924_dislike_two_icon.png'

function App() {
  const [totalLikes, updateTotalLikes] = useState(0)

  const addLike = () => {
    let newTotal = totalLikes + 1
    updateTotalLikes(newTotal)
  }
  const removeLike = () => {
    if (totalLikes > 0) {
      let newTotal = totalLikes - 1
      updateTotalLikes(newTotal)
    }
  }

  return (
    <div className="App">
      <Likes
        totalLikes={totalLikes}
        addLike={addLike}
        removeLike={removeLike}
        likeIcon={Icon1}
        dislikeIcon={Icon2}
      />
    </div>
  )
}

export default App
