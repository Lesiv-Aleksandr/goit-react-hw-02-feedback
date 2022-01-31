import React from "react";
import PropTypes from "prop-types";
import {FeedbackListStyled,ButtonStyled} from './FeedbackOptionsStyled'

export default function FeedbackOptions({onHandleClick}){
return (
  <div>
  <FeedbackListStyled>
    <li>
      <ButtonStyled name="good" type="button" onClick={onHandleClick}>
        Good
      </ButtonStyled>
    </li>
    <li>
      <ButtonStyled name="neutral" type="button" onClick={onHandleClick}>
        Neutral
      </ButtonStyled>
    </li>
    <li>
      <ButtonStyled name="bad" type="button" onClick={onHandleClick}>
        Bad
      </ButtonStyled>
    </li>
  </FeedbackListStyled>
</div>
);

}



FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };