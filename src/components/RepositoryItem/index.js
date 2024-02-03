// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {each} = props
  return (
    <li className="li">
      <img className="avatar" src={each.avatarUrl} alt={each.name} />
      <h2 className="heading">{each.name}</h2>
      <div className="details">
        <div className="detail">
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
          />
          <p className="p">{each.starsCount} stars</p>
        </div>
        <div className="detail">
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
          />
          <p className="p">{each.forksCount} forks</p>
        </div>
        <div className="detail">
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
          />
          <p className="p">{each.issuesCount} issues</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
