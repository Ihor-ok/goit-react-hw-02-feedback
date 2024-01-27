import css from "./FeedbackOptions.module.css";

export default function FeedbackOptions({goodOnClick, neutralOnClick, badOnClick}) {
    return (
    <>
        <button className={css.good} onClick={()=>{goodOnClick()}}>good</button>
        <button className={css.neutral} onClick={()=>{neutralOnClick()}}>neutral</button>
        <button className={css.bad} onClick={()=>{badOnClick()}}>bad</button>
       
    </>

  )
};