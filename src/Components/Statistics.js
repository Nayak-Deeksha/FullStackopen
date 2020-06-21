import React from "react";
import Statistic from "./Statistic";

const Statistics = (props) => {
    let good = Number(props.good),
        bad = Number(props.bad),
        neutral = Number(props.neutral);

    const total = good + bad + neutral,
        avg = (good + bad * -1) / (total),
        pos = (good / (total)) * 100

    if (total !== 0)
        return <table>
            <tbody>
                <Statistic text="good" value={good} />
                <Statistic text="neutral" value={neutral} />
                <Statistic text="bad" value={bad} />
                <Statistic text="all" value={total} />
                <Statistic text="average" value={avg} />
                <Statistic text="positive-percentage" value={pos} />
            </tbody>
        </table>
    else return <div>No feedback given</div>
}

export default Statistics;