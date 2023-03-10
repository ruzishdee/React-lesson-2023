import { useEffect, useState } from "react"
import timerData from "../data/data"
import EditableTimerList from "./editableTimerList";
import Timer from "./timer"
import TimerForm from "./timerForm"
import { newTimer } from "./helper";
import ToggleableTimerForm from "./toggleableTimerform";
export default function TimerDashBorad() {

    const [timers, setTimers] = useState({ timers: [] });

    useEffect(() => {
        setInterval(() => setTimers({ timers: timerData }), 1000);
    }, []);

    function handleEditFormSubmit(timer) {
        updateTimer(timer)
    }
    function handleCreateFormSubmit(timer) {
        createTimer(timer)
    }
    function createTimer(timer) {
        const t = newTimer(timer);
        setTimers({
            timers: timers.timers.concat(t)
        })
    }

    function updateTimer(attributes) {
        setTimers({
            timers: timers.timers.map(timer => {
                if (timer.id === attributes.id) {
                    timer.title = attributes.title;
                    timer.prject = attributes.project;
                }
                return timer;
            })
        })
    }

    function handleTrashClick(timerId) {
        deleteTimer(timerId)
    }

    function onStartClick(timerId) {
        startTimer(timerId);
    }

    function onStopClick(timerId) {
        stopTimer(timerId)
    }
    function stopTimer(timerId) {
        const now = Date.now()
        setTimers({
            timers: timers.timers.map(timer => {
                if (timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince;
                    timer.elapsed = timer.elapsed + lastElapsed;
                    timer.runningSince = null
                }
                return timer;
            })
        })
    }

    function startTimer(timerId) {
        const now = Date.now()

        setTimers({
            timers: timers.timers.map(timer => {
                if (timer.id === timerId) {
                    timer.runningSince = now
                    return timer
                } else {
                    return timer
                }
            })
        })
    }

    function deleteTimer(timerId) {
        setTimers({
            timers: timers.timers.filter(t => t.id !== timerId),
        });
    }

    return (
        <div>
            <h1> Timers </h1>
            {
                timers.timers && (
                    <div>
                        <EditableTimerList
                            timers={timers.timers}
                            onTrashClick={handleTrashClick}
                            onStartClick={onStartClick}
                            onStopClick={onStopClick}
                            onFormSubmit={handleEditFormSubmit} />
                        <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
                    </div>
                )
            }

        </div>
    )

}