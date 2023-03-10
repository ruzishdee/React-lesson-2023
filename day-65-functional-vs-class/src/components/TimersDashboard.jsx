import { useEffect, useState } from "react";
import { newTimer } from "./Helpers";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm.jsx";
import timerData from '../data/data'
import React from "react";

class TimersDashboard extends React.Component {
  // const[timers, setTimers] = useState({ timers: [] });
  // const URL = "http://localhost:8080/timers";


  constructor() {
    super();
    this.state = {
      timers: []
    }
    this.handleCreateFormSubmit = this.handleCreateFormSubmit.bind(this)
    this.handleEditFormSubmit = this.handleEditFormSubmit.bind(this)
    this.handleTrashClick = this.handleTrashClick.bind(this)
    this.handleStartClick = this.handleStartClick.bind(this)
    this.handleStopClick = this.handleStopClick.bind(this)
    this.createTimer = this.createTimer.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.updateTimer = this.updateTimer.bind(this)
    this.deleteTimer = this.deleteTimer.bind(this)
  }

  componentDidMount() {
    setInterval(() => this.setState({ timers: timerData }), 1000)
  }

  // useEffect(() => {
  //   fetchTimersData();
  // }, []);
  // ! class bolgov
  // useEffect(() => {
  //   setInterval(() => setTimers({ timers: projects }), 1000);
  // }, []);
  // ? Class d ashiglaagui
  // async function fetchTimersData() {
  //   const FETCHED_DATA = await fetch(URL);
  //   const FETCHED_JSON = await FETCHED_DATA.json();
  //   console.log(FETCHED_JSON);
  //   setTimers({ timers: FETCHED_JSON.data });
  // }

  handleCreateFormSubmit(timer) {
    this.createTimer(timer);
  }

  handleEditFormSubmit(attrs) {
    this.updateTimer(attrs);
  }

  handleTrashClick(timerId) {
    this.deleteTimer(timerId);
  }

  handleStartClick(timerId) {
    console.log(timerId)
    this.startTimer(timerId);

  }

  handleStopClick(timerId) {
    this.stopTimer(timerId);
  }

  createTimer(timer) {
    const t = newTimer(timer);
    this.setState({ timers: this.state.timers.concat(t) });
  }

  startTimer(timerId) {
    const now = Date.now();
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          console.log(timer);
          timer.runningSince = now;
          return timer;
        } else {
          return timer;
        }
      }),
    });
  }

  stopTimer(timerId) {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          timer.elapsed = timer.elapsed + lastElapsed;
          timer.runningSince = null;
        }
        return timer;
      }),
    });
  }

  updateTimer(attrs) {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === attrs.id) {
          timer.title = attrs.title;
          timer.project = attrs.project;
        }
        return timer;
      }),
    });
  }

  deleteTimer(timerId) {
    this.setState({
      timers: this.state.timers.filter((t) => t.id !== timerId),
    });
  }
  render() {
    return (
      <div>
        <h1>Timers</h1>
        {this.state.timers && (
          <div>
            <EditableTimerList
              timers={this.state.timers}
              onFormSubmit={this.handleEditFormSubmit}
              onTrashClick={this.handleTrashClick}
              onStartClick={this.handleStartClick}
              onStopClick={this.handleStopClick}
            />
            <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
          </div>
        )}
      </div>
    );

  }
}

export { TimersDashboard }