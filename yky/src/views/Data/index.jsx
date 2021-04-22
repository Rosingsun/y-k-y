import React, { Component } from 'react';
import * as echarts from 'echarts';
import s from "./style.module.scss";

export default class Data extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[5, 20, 36, 10, 10, 20]
    }
  }
  componentDidMount() {
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
      title: { text: '数据展示' },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: this.state.data
      }]
    });
  }
  render() {
    return (
      <div className={s.body}>
        <div id="main" style={{ width: 400, height: 400 }}></div>
        <div id="main" style={{ width: 400, height: 400 }}></div>
      </div>
    )
  }
}
