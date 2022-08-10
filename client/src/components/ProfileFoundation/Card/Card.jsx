import React, { useState } from 'react'

import Chart from 'react-apexcharts';
import { CircularProgressbar } from 'react-circular-progressbar';
import { motion, AnimateSharedLayout } from "framer-motion/dist/framer-motion";
import 'react-circular-progressbar/dist/styles.css';
import { MdDisabledByDefault } from 'react-icons/md';

import '../Card/Card.css'

const Card = (props) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <AnimateSharedLayout>
            {expanded ? (
                <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
            ) : (
                <CompactCard param={props} setExpanded={() => setExpanded(true)} />
            )}
        </AnimateSharedLayout>
    );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
    const Png = param.png;
    return (
        <motion.div
            className="CompactCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
            }}
            layoutId="expandableCard"
            onClick={setExpanded}
        >
            <div className="radialBar">
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
                <span className='spanTitle'> {param.title} </span>
            </div>
            <div className="detail">
                <Png />
                <span> {param.value} </span>
                {param.title === 'Donaciones' && <span> Ultimo mes </span>}
            </div>
        </motion.div>
    );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {

    // Documantacion ACA
    // https://apexcharts.com/docs/options/plotoptions/area/
    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto",
            },

            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },

            fill: {
                colors: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["white"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: true,
            },
            // xaxis: {
            //     type: "datetime",
            //     categories: [
            //         "2018-09-19T00:00:00.000Z",
            //         "2018-09-19T01:30:00.000Z",
            //         "2018-09-19T02:30:00.000Z",
            //         "2018-09-19T03:30:00.000Z",
            //         "2018-09-19T04:30:00.000Z",
            //         "2018-09-19T05:30:00.000Z",
            //         "2018-09-19T06:30:00.000Z",
            //     ],
            // },
        },
    };

    return (
        <motion.div
            className="ExpandedCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
            }}
            layoutId="expandableCard"
        >
            <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
                <MdDisabledByDefault onClick={setExpanded} className='close' />
            </div>
            <span>{param.title}</span>
            <div className="chartContainer">
                <Chart options={data.options} series={param.series} type="area" />
            </div>
            {param.title === 'Donaciones' && <span> Último mes </span>}
        </motion.div>
    );
}

export default Card;