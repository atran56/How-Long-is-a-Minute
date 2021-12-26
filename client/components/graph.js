import React, { Component } from "react";
import c3 from "c3";

const Graph = () => {
    React.useEffect(() => {
        c3.generate({
        bindto: "#chart",
        data: {
            columns: [
            ["Guess", 30, 200, 100, 400, 150, 250]
            ],
            type: "bar",
        },
        axis: {
            y: {
                label: {
                    text: 'Frequency',
                    position: 'outer-middle'
                }
            }
        }
    });
    }, []);

    return <div id="chart" />;
};

export default Graph;