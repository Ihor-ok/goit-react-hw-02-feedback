import { Component } from 'react'
import Section from 'components/Section/Section.jsx'

class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
}
  
  goodOnClick = (evt) => {
    this.setState((prevState) => {return {good: prevState.good + 1}})
  }

  neutralOnClick = (evt) => {
    this.setState((prevState) => {return {neutral: prevState.neutral + 1}})
  }

  badOnClick = (evt) => {
     this.setState((prevState) => {return {bad: prevState.bad + 1}})
  }

  countTotalFeedback = ( good, neutral, bad ) => {
    return bad + neutral + good

  }

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    let positiveFeedbackPercentage = good/(good + neutral + bad)*100
        
    if (positiveFeedbackPercentage >= 0) {
      return Math.round(positiveFeedbackPercentage)
    }
    
    return 0
  }
  
  render() {
    return (
      <>
        <Section
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        goodOnClick={this.goodOnClick}
        neutralOnClick={this.neutralOnClick}
        badOnClick={this.badOnClick}
        countTotalFeedback={this.countTotalFeedback}
        countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}/>
      </>)

  }
 
  
};


export default App