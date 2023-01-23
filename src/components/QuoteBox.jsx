import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({quote, newQuote, color}) => {
  
    
  
    return (
    <div className='box' style={{color: color}} >
        <i className='bx bxs-quote-left'></i>
        <p> {quote.quote} </p>
        <h3> {quote.author}</h3>
        <QuoteButton newQuote={newQuote} color={color}  />
    </div>
  )
}

export default QuoteBox