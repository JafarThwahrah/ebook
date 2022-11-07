import React from 'react'

function Card(props) {
  return (
    <div className='m-3'>
        <div class="card text-bg-light mb-3" style={{ width: "18rem" }}>
        <div class="card-header">Language: {props.language}</div>
        <div class="card-body">
          <h5 class="card-title">Edition: {props.edition}</h5>
          <p class="card-text">
          Price: {props.price}USD
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card