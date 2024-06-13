// import React from "react";
import { Button } from "react-bootstrap";
import chevronRight from "../../../assets/image/icons/chevron-right.svg";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "@/assets/css/Services/timer.css";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 100,
  strokeWidth: 6,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div className="date">{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const Timer = () => {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 281695; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  return (
    <div className="timer">
      <div className="timer__title">
        <h2>
          Срок действия <br /> спецпредложения:
        </h2>
      </div>
      <div className="circle">
        <CountdownCircleTimer
          {...timerProps}
          colors="rgb(255, 149, 73)"
          duration={daysDuration}
          initialRemainingTime={remainingTime}
        >
          {({ elapsedTime }) => (
            <span style={{ color: "white" }}>{renderTime("дня", getTimeDays(daysDuration - elapsedTime))}</span>
          )}
        </CountdownCircleTimer>
        <h2>:</h2>
        <CountdownCircleTimer
          {...timerProps}
          colors="rgb(255, 149, 73)"
          duration={daySeconds}
          initialRemainingTime={remainingTime % daySeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
          })}
        >
          {({ elapsedTime }) => (
            <span style={{ color: "white" }}>{renderTime("часов", getTimeHours(daySeconds - elapsedTime))}</span>
          )}
        </CountdownCircleTimer>
        <h2>:</h2>
        <CountdownCircleTimer
          {...timerProps}
          colors="rgb(255, 149, 73)"
          duration={hourSeconds}
          initialRemainingTime={remainingTime % hourSeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
          })}
        >
          {({ elapsedTime }) => (
            <span style={{ color: "white" }}>{renderTime("минут", getTimeMinutes(hourSeconds - elapsedTime))}</span>
          )}
        </CountdownCircleTimer>
        <h2>:</h2>
        <CountdownCircleTimer
          {...timerProps}
          colors="rgb(255, 149, 73)"
          duration={minuteSeconds}
          initialRemainingTime={remainingTime % minuteSeconds}
          onComplete={(totalElapsedTime) => ({
            shouldRepeat: remainingTime - totalElapsedTime > 0,
          })}
        >
          {({ elapsedTime }) => (
            <span style={{ color: "white" }}>{renderTime("секунд", getTimeSeconds(elapsedTime))}</span>
          )}
        </CountdownCircleTimer>
      </div>
      <div className="items__btn">
        <Button>
          Узнать цену с выгодами <img src={chevronRight} alt="image" />
        </Button>
      </div>
    </div>
  );
};

export default Timer;
