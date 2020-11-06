import React from 'react';


export default function Text({date,title,explanation}){
    return(
        <div className='allText'>
          <header className='top-sect'>
            <h3>NASA's Astronomy Picture of the Day<br></br>{date}</h3>
            <h1>{title}</h1> 
          </header>
            <article className='bottom-sect'>
            <p> {
                explanation} </p>
            </article>
        </div>
    )
}