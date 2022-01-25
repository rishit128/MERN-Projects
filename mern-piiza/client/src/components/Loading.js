import React from 'react'

function Loading() {
    return (
        <div className='text-center'>
            <div style={{height:'100px' , width:'100px' , marginTop:'100px'}} className="spinner-border" role="status" style={{height:'80px', width:'80px'}}>
  <span className="sr-only">Loading...</span>
</div>
            
        </div>
    )
}

export default Loading
