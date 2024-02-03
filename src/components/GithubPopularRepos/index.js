import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    repos: [],
    activeId: languageFiltersData[0].id,
    isLoading: true,
    error: false,
  }

  componentDidMount() {
    this.getPopularRepos()
  }

  getPopularRepos = async () => {
    const {activeId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeId}`
    const response = await fetch(url)
    const data = await response.json()
    const repos = data.popular_repos.map(each => ({
      name: each.name,
      id: each.id,
      issuesCount: each.issues_count,
      forksCount: each.forks_count,
      starsCount: each.stars_count,
      avatarUrl: each.avatar_url,
    }))

    if (response.ok === true) {
      this.setState({repos, isLoading: false})
    } else {
      this.setState({error: true, isLoading: false})
    }
  }

  onClickLanguage = id => {
    this.setState({activeId: id, isLoading: true}, this.getPopularRepos)
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderRepoList = () => {
    const {repos} = this.state
    return (
      <ul className="i-list">
        {repos.map(each => (
          <RepositoryItem key={each.id} each={each} />
        ))}
      </ul>
    )
  }

  renderError = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <p>Something Went Wrong</p>
    </div>
  )

  render() {
    const {activeId, isLoading, error} = this.state
    return (
      <div className="bg">
        <h1>Popular</h1>
        <ul className="l-list">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              onClickLanguage={this.onClickLanguage}
              activeId={activeId}
              key={each.id}
              each={each}
            />
          ))}
        </ul>
        {isLoading ? this.renderLoader() : this.renderRepoList()}
        {error === true && this.renderError()}
      </div>
    )
  }
}

export default GithubPopularRepos
