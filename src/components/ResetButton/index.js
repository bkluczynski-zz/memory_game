import React from 'react'

const ResetButton = ({reset}) => (

    <div className="restart" onClick={() => {reset()}}>
        <i className="fa fa-repeat"></i>
    </div>
)

export default ResetButton;
