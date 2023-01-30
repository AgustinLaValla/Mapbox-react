import React from 'react'

export default function Loading() {
  return (
    <div className='loading-map d-flex justify-content-center align-items-center'>
      <div className='text-center'>
        <h3>Loading...</h3>
        <span>Getting your current location</span>
        <div className='mt-3'>
          <div className='spinner-border text-primary' style={{ width: '5rem', height: '5rem' }} role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      </div>
    </div>
  )
}
