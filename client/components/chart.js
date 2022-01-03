import React, { Component } from "react";
import c3 from "c3";

const Chart = (props) => {
    const stats = props.stats;
    const countStats = [];
    const guessStats = [];
    stats.forEach(stat => {
        countStats.push(stat.count)
        guessStats.push(stat.guess)
    });
    var chart = c3.generate({
        bindto: "#chart",
        data: {
            columns: [
                ['Guess'].concat(countStats)
            ],
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