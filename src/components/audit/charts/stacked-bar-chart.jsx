import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const x_data_key = ['不适用', '总部', '总部和省', '省']
const data = [
    { name: '人工成本及劳务费', '不适用': 6, '总部': 1, '总部和省': 4, '省': 1 },
    { name: '管理层薪资管理', '不适用': 3, '总部': 0, '总部和省': 2, '省': 3 },
    { name: '会计信息质量', '不适用': 0, '总部': 0, '总部和省': 6, '省': 0 },
    { name: '资金管理', '不适用': 1, '总部': 3, '总部和省': 2, '省': 0 },
    { name: '业务合规性', '不适用': 24, '总部': 15, '总部和省': 3, '省': 5 },
    { name: '工程管理', '不适用': 13, '总部': 0, '总部和省': 1, '省': 4 },
    { name: '合同管理', '不适用': 7, '总部': 0, '总部和省': 6, '省': 0 },
    { name: '制度体系', '不适用': 1, '总部': 0, '总部和省': 0, '省': 0 },
    { name: '集体决策', '不适用': 6, '总部': 0, '总部和省': 0, '省': 0 },
    { name: '采购及招标管理', '不适用': 16, '总部': 1, '总部和省': 1, '省': 0 },
    { name: '系统权限', '不适用': 2, '总部': 0, '总部和省': 0, '省': 2 },
    { name: '履职待遇', '不适用': 3, '总部': 0, '总部和省': 27, '省': 5 },
    { name: '作风建设', '不适用': 0, '总部': 0, '总部和省': 8, '省': 0 },
]



const CustomizedAxisTick = React.createClass({
  render () {
    const {x, y, stroke, payload} = this.props;

   	return (
    	<g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dx={0} dy={16} textAnchor="end" fill="#666"
            transform="rotate(-35)">{payload.value}</text>
      </g>
    );
  }
});

const StackedBarChart = React.createClass({
    getDefaultProps() {
        return {
            height: 300,
            width: 600
        }
    },
    render() {
        return (
            <BarChart width={this.props.width} height={this.props.height} data={data}
                margin={{ top: 10, right: 10, left: 20, bottom: 55 }}>
                <XAxis dataKey="name" interval={0} tick={<CustomizedAxisTick/>} />
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Bar dataKey={x_data_key[0]} stackId="a" fill="#9857b3" />
                <Bar dataKey={x_data_key[1]} stackId="a" fill="#1abc9c" />
                <Bar dataKey={x_data_key[2]} stackId="a" fill="#3598db" />
                <Bar dataKey={x_data_key[3]} stackId="a" fill="#f9d012" />
            </BarChart>
        )
    }
})

export default StackedBarChart
