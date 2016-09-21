import React from 'react'
import { PieChart, Pie, Sector } from 'recharts'
const data_one = [{ name: '85%', value: 85 }, { name: 'Group B', value: 15 }]
const data_two = [{ name: '60%', value: 60 }, { name: 'Group B', value: 40 }]
const data_three = [{ name: '70%', value: 70 }, { name: 'Group B', value: 30 }]

const renderActiveShape = (props) => {
    // const RADIAN = Math.PI / 180
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle,
        fill, payload } = props
    // const sin = Math.sin(-RADIAN * midAngle)
    // const cos = Math.cos(-RADIAN * midAngle)
    // const sx = cx + (outerRadius + 10) * cos
    // const sy = cy + (outerRadius + 10) * sin
    // const mx = cx + (outerRadius + 30) * cos
    // const my = cy + (outerRadius + 30) * sin
    // const ex = mx + (cos >= 0 ? 1 : -1) * 22
    // const ey = my
    // const textAnchor = cos >= 0 ? 'start' : 'end'

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
                />


        </g>
    )
}

const TwoLevelPieChart = React.createClass({
    getDefaultProps() {
        return {
            height: 400,
            width: 800,
            state: 's1'
        }
    },
    getInitialState() {
        return {
            activeIndex: 0,
        }
    },
    componentDidMount() {
        document.getElementsByClassName('recharts-pie-sector')[1].getElementsByTagName('path')[0].setAttribute('fill', '#d5eeff')
    },
    renderContent() {
        let state = this.props.state
        let data
        if (state == 's1') {
            data = data_one
        } else if (state == 's2') {
            data = data_two
        } else if (state == 's3') { 
            data = data_three

        }
        return (
            <div>
                <PieChart width={parseInt(this.props.width) } height={parseInt(this.props.height) } >
                    <Pie
                        activeIndex={this.state.activeIndex}
                        activeShape={renderActiveShape}
                        data={data}
                        cx={100}
                        cy={100}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#3598db"/>
                </PieChart>
            </div>
        )

    },
    render() {
        return (
            <div>
                {this.renderContent() }
            </div>
        )
    }
})


export default TwoLevelPieChart
