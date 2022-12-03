import React from 'react';
import PropTypes from "prop-types";

function Button({children,version,type,isDisabled}){
	return(

<button type={type} className={`btn-${version}`} disabled={isDisabled}>Submit
</button>

		)

}
Button.defaultProps={
  type:"button",
  version:"secondary",
  isDisabled:true,

}
Button.propTypes={
  type:PropTypes.string,
  children:PropTypes.node.isRequired,
  version:PropTypes.string,
  isDisabled:PropTypes.bool,
}



export default Button;
