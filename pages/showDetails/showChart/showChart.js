// pages/showDetails/showChart/showChart.js


var Bmob = require('../../../utils/Bmob-1.7.0.min.js');
const app = getApp();
var lineChart = null;
var startPos = null;
var wxCharts = require('../../../utils/wxcharts.js');


Page({
  data: {
  },
  touchHandler: function (e) {
    lineChart.scrollStart(e);
  },
  moveHandler: function (e) {
    lineChart.scroll(e);
  },
  touchEndHandler: function (e) {
    lineChart.scrollEnd(e);
    lineChart.showToolTip(e, {
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },
  createSimulationData: function () {
    var categories = [];
    var data = [];
    for (var i = 0; i < 25; i++) {
      console.log(i);
      categories.push(+i + '点');
      data.push(Math.random() * 30);
    }

    return {
      categories: categories,
      data: data
    }
  },
  onLoad: function (e) {
    var windowWidth = 500;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    var simulationData = this.createSimulationData();
    lineChart = new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: simulationData.categories,
      animation: false,
      series: [{
        name: '设备实时温度',
        data: simulationData.data,
        format: function (val, name) {
          return val.toFixed(2) + '度';
        }
      }],
      xAxis: {
        disableGrid: false
      },
      yAxis: {
        title: '实时温度 (摄氏度)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: windowWidth,
      height: 200,
      dataLabel: true,
      dataPointShape: true,
      enableScroll: true,
      extra: {
        lineStyle: 'curve'
      }
    });
  }
});