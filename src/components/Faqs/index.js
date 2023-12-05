import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="faqs-container">
          <h1 className="main-heading">Faqs</h1>
          <ul className="faqs-list">
            {faqsList.map(eachFaq => (
              <FaqItem faqDetails={eachFaq} key={eachFaq.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
