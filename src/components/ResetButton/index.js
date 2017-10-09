import React from 'react'
import PropTypes from 'prop-types';


const ResetButton = ({reset}) => (

    <div className="restart" onClick={() => {reset()}}>
        <i className="fa fa-repeat"></i>
    </div>
)

ResetButton.propTypes = {
  reset: PropTypes.func.isRequired,
}

export default ResetButton;
