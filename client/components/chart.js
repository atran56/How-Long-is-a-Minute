import React, { Component } from "react";
import c3 from "c3";

const Chart = (props) => {
    const userGuess = props.guess;
    const stats = props.stats;
    const countStats = [];
    const guessStats = [];
    let idx = 0;
    let foundIdx = 0;
    stats.forEach(stat => {
        countStats.push(stat.count)
        guessStats.push(stat.guess)
        if(stat.guess === userGuess) {
            foundIdx = idx;
        }
        idx ++;
    });
    var chart = c3.generate({
        bindto: "#chart",
        data: {
            columns: [
                ['Guess'].concat(countStats)
            ],
            colors: {
                Guess: function(d) {
                    return (d.index === foundIdx) ? '#00ff00': '#ff0000';
                    
                }
            },
            type: 'bar'
        },
        axis: {
            x: {
                type: 'category',
                categories: guessStats,
                label: {
                    text: 'Miliseconds',
                    position: 'outer-middle'
                }
            },
            y: {
                label: {
                    text: 'Frequency',
                    position: 'outer-middle'
                }
            }
        },
        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        }
    });
    return (
    <div id="chart" />
    )
};

export default Chart;



// const stats = props.stats
//     const column = ["Guess"]
//     const columnData = stats.map(stat => {
//         column.push(stat)
//     })
//     React.useEffect(() => {
//         c3.generate({
//             bindto: "#chart",
//             data: {
//                 columns: [
//                 {columnData}
//                 ],
//                 type: "bar",
//             },
//             axis: {
//                 y: {
//                     label: {
//                         text: 'Frequency',
//                         position: 'outer-middle'
//                     }
//                 }
//             }
//         });
//     })  
//     return <div id="chart" />;