import React from "react";
import PropTypes from "prop-types";
import {SectionItemList} from '../Section/SectionTitleStyled';

export default function StatisticsData ({good,neutral,bad,total,positivePercentage}){
return (
    <SectionItemList>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad:{bad}</p>
            <p>Total:{total}</p>
            <p>Percentage:{positivePercentage}%</p>
    </SectionItemList>
            
);
};

StatisticsData.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  };

