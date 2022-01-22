import React from 'react'

function Error(error) {
    console.log(error)
   
    return (
        
        <div>
            <div className="alert alert-danger" role="alert">
                {/* {error} */}
           
                <h1>error</h1>
                
            </div>
        </div>
    )
}

export default Error
