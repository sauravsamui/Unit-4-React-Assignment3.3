import React from 'react'
import style from "./Cardstyle.module.css"
const CardDetails = ({details}) => {
   
  return (
    <div className={style.big_div} style={{backgroundColor:details.heading=="Amazon Gift"?"orange":"grey"}}>
        <div className={style.logo}>
            <h2>{details.date}</h2>
            <img className={style.img} src={details.logo} alt="" />
        </div>
        <h3 className={style.case}>{details.case}</h3>
        <h1 style={{fontSize:"50px"}}>{details.heading}</h1>
        <h1 style={{fontSize:"50px"}}>{details.sub_heading}</h1>
        <div className={style.logo}>
            <h2>{details.device}</h2>
            <h1 style={{fontSize:"35px"}}>→</h1>
        </div>
    </div>
  )
}

export default CardDetails