import React from "react";
import PropTypes from "prop-types";
import NotificationStyled from './NotificationStyled.jsx'

export default function Notification({ message }){
  return (<NotificationStyled>{message}</NotificationStyled>);
};

  

Notification.propTypes = {
    message: PropTypes.string.isRequired,
    };
    