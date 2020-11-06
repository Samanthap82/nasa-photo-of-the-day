import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled, {keyframes} from 'styled-components'


import "./App.css";
import Text from './Text.js'
import {API_KEY, BASE_URL} from './Constants.js'

const kf = keyframes`
33% {
  transform: scale(.8);
}
66% {
  transform: scale(1.08);
}
`

const StyledApp = styled.div` 
/* child component of App, component being used */
    .allText {
      opacity: ${pr => pr.visibleText? '1' : '0'};
      transition: all .3s ease-in-out;
      animation: ${kf} 2s;
    }
  `

export default function App(){
  const [photoData, setPhotoData] = useState({})
  const [visibleText,setVisibleText] = useState(true)

  const makeVisible = () => {
    setVisibleText(!visibleText)
  }

  useEffect(() => {
    axios.get(`${BASE_URL}?${API_KEY}`)
    // to change date, add to url: &date=2020-09-10
      .then (res => {
        setPhotoData(res.data)
        console.log(res.data)
      })
      .catch (err => {
        debugger
      })
  }, [])

  
  return (
    <StyledApp className="App" visibleText={visibleText}> 
    {/* child component of App declared here, fed prop of visibleText */}

      <div className='backgroundImage'
        style={{backgroundImage: `url(${photoData.url})`, }}
        alt='NASA Picture of the Day'> 
        {/* <img src={photoData.url} alt="NASA Photo of the Day" />  */}
      
        <Text date = {photoData.date}
            title = {photoData.title}
            explanation = {photoData.explanation} />

        <button onClick={makeVisible}>
          {visibleText ? 'Hide text': 'Show text'}
        </button>
      </div>

    </StyledApp>
  );
}