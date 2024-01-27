import css from "./Statistics.module.css";

export default function Statistics({good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage}) {
    
  
  return (
    <>
        <p className={css.title_statistics}>Statistics</p>
        <div className={css.statistic}> 
          <p className={css.title_statistic}>Good: {good}</p>
          <p className={css.title_statistic}>Neutral: {neutral}</p>
          <p className={css.title_statistic}>Bad: {bad}</p>
        </div>
        
        <p>Total: {countTotalFeedback(good, neutral, bad)}</p>
        <p>Positive feedback: {countPositiveFeedbackPercentage(good, neutral, bad)}%</p>
        
    </>
        

  )
};