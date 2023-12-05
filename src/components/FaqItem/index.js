import {Component} from 'react'
import './index.css'

const plusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  onClickButton = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderAnswerContainer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state
    if (isActive) {
      return (
        <div className="answer-container">
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  renderActiveButtonElement = () => {
    const {isActive} = this.state
    const activeButtonImgUrl = isActive ? minusIcon : plusIcon
    const activeButtonAltText = isActive ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.onClickButton}>
        <img
          src={activeButtonImgUrl}
          alt={activeButtonAltText}
          className="image"
        />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="list-element">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveButtonElement()}
        </div>
        {this.renderAnswerContainer()}
      </li>
    )
  }
}

export default FaqItem
