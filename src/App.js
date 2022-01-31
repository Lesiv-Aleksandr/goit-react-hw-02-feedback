import React, { Component } from "react";
import StatisticsData from "./Components/StatisticsData/StatisticsData.jsx";
import Section from "./Components/Section/Section.jsx";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions.jsx";
import Notification from "./Components/Notification/Notification.jsx";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  ountPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const resultСalculationsPercentage = (this.state.good * 100) / total;
    return total !== 0 ? resultСalculationsPercentage.toFixed(0) : 0;
  };

  handleClick = (e) => {
    const { name } = e.currentTarget;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.ountPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onHandleClick={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <StatisticsData
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
