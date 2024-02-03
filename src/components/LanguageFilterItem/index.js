// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {each, activeId, onClickLanguage} = props
  const className = activeId === each.id ? 'f-btn active' : 'f-btn'
  const onClickBtn = () => {
    onClickLanguage(each.id)
  }
  return (
    <li>
      <button onClick={onClickBtn} className={className} type="button">
        {each.language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
