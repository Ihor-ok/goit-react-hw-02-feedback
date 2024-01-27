// import { Component } from 'react'
import PropTypes from 'prop-types';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions.jsx'
import Statistics from 'components/Statistics/Statistics.jsx'
import Notification from 'components/Notification/Notification.jsx'
import css from "./Section.module.css";



export default function Section({good, neutral, bad, goodOnClick, neutralOnClick, badOnClick, countTotalFeedback, countPositiveFeedbackPercentage}) {
    
  
  return (
    <div className={css.section}>
        <p className={css.title}>Please leave feedback</p>
        <FeedbackOptions
          goodOnClick={goodOnClick}
          neutralOnClick={neutralOnClick}
          badOnClick={badOnClick} />
        {good === 0 &&  neutral === 0 && bad === 0 ? <Notification /> : <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={countTotalFeedback}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage} />}
    </div>
        

  )
}

Section.propTypes = {
    neutral: PropTypes.number,
    bad: PropTypes.number,
    goodOnClick: PropTypes.func,
    neutralOnClick: PropTypes.func,
    badOnClick: PropTypes.func,
    countTotalFeedback: PropTypes.func,
    countPositiveFeedbackPercentage: PropTypes.func
    
}


// ------------------------------------------------------------
// class Section extends Component {
   
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
// }

  // goodOnClick = (evt) => {
  //   this.setState((prevState) => {return {good: prevState.good + 1}})
  // }

  // neutralOnClick = (evt) => {
  //   this.setState((prevState) => {return {neutral: prevState.neutral + 1}})
  // }

  // badOnClick = (evt) => {
  //    this.setState((prevState) => {return {bad: prevState.bad + 1}})
  // }

  // countTotalFeedback = ( good, neutral, bad ) => {
  //   return bad + neutral + good

  // }

  // countPositiveFeedbackPercentage = (good, neutral, bad) => {
  //   let positiveFeedbackPercentage = good/(good + neutral + bad)*100
        
  //   if (positiveFeedbackPercentage >= 0) {
  //     return Math.round(positiveFeedbackPercentage)
  //   }
    
  //   return 0
  // }


  
//   render() {
    


//     return (
    // <>
    //     <p>Please leave feedback</p>
    //     <FeedbackOptions
          // goodOnClick={this.goodOnClick}
          // neutralOnClick={this.neutralOnClick}
          // badOnClick={this.badOnClick} />
    //     {this.state.good === 0 &&  this.state.neutral === 0 && this.state.bad === 0 ? <Notification /> : <Statistics
    //       good={this.state.good}
    //       neutral={this.state.neutral}
    //       bad={this.state.bad}
          // countTotalFeedback={this.countTotalFeedback}
          // countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage} />}
    // </>
        

//   ) } 
// };

// export default Section