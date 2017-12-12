$(function() {
	var index10_chart1 = { //图表展示容器，与div的id保持一致
		chart: { //指定图表的类型，默认是折线图（line）
			plotBackgroundColor: null, //绘图区背景颜色
			plotBorderWidth: null, //绘图区边框宽度
			plotShadow: false //绘图投影
		},
		colors: ['#54c7fc', '#ffb54d', '#ff7466', '#44db5e'],
		title: { //头部
			text: ''
		},
		tooltip: { //数据提示框
			//单个点的格式化函数
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: { //图例事件，图例默认的点击行为是显示或隐藏当前数据列
			pie: {
				allowPointSelect: false,
				//cursor: 'pointer',
				dataLabels: { //数据标签
					enabled: true, //通过设置 legend.enabled = true | false 来打开或关闭图例
					color: '',
					connectorColor: 'blue', //连接线颜色
					format: '<b>{point.name}</b>: {point.percentage:.2f} %'
				}
			}
		},
		series: [{
			type: 'pie', //pie：饼图
			name: 'Browser share',
			data: [
				['卓越', 234],
				['非常满意', 91],
				['满意', 42],
				['一般', 3],
			]
		}]
	};
	var index10_option1 = Highcharts.chart('index10-container1', index10_chart1);

	var index10_chart2 = { //图表展示容器，与div的id保持一致
		chart: { //指定图表的类型，默认是折线图（line）
			plotBackgroundColor: null, //绘图区背景颜色
			plotBorderWidth: null, //绘图区边框宽度
			plotShadow: false //绘图投影
		},
		colors: ['#54c7fc', '#ffb54d', '#ff7466', '#44db5e'],
		title: { //头部
			text: ''
		},
		tooltip: { //数据提示框
			//单个点的格式化函数
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: { //图例事件，图例默认的点击行为是显示或隐藏当前数据列
			pie: {
				allowPointSelect: false,
				//cursor: 'pointer',
				dataLabels: { //数据标签
					enabled: true, //通过设置 legend.enabled = true | false 来打开或关闭图例
					color: '',
					connectorColor: 'blue', //连接线颜色
					format: '<b>{point.name}</b>: {point.percentage:.2f} %',
				}
			}
		},
		series: [{
			type: 'pie', //pie：饼图
			name: 'Browser share',
			data: [
				['卓越',217],
				['非常满意',75],
				['满意', 70],
				['一般', 8],
			]
		}]
	};
	var index10_option2 = Highcharts.chart('index10-container2', index10_chart2);

	var index10_chart3 = { //图表展示容器，与div的id保持一致
		chart: { //指定图表的类型，默认是折线图（line）
			plotBackgroundColor: null, //绘图区背景颜色
			plotBorderWidth: null, //绘图区边框宽度
			plotShadow: false //绘图投影
		},
		colors: ['#54c7fc', '#ffb54d', '#ff7466', '#44db5e'],
		title: { //头部
			text: ''
		},
		tooltip: { //数据提示框
			//单个点的格式化函数
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: { //图例事件，图例默认的点击行为是显示或隐藏当前数据列
			pie: {
				allowPointSelect: false,
				//cursor: 'pointer',
				dataLabels: { //数据标签
					enabled: true, //通过设置 legend.enabled = true | false 来打开或关闭图例
					color: '',
					connectorColor: 'blue', //连接线颜色
					format: '<b>{point.name}</b>: {point.percentage:.2f} %',
				}
			}
		},
		series: [{
			type: 'pie', //pie：饼图
			name: 'Browser share',
			data: [
				['卓越', 220],
				['非常满意', 81],
				['满意', 58],
				['一般',11],
			]
		}]
	};
	var index10_option3 = Highcharts.chart('index10-container3', index10_chart3);

	var index10_chart4 = { //图表展示容器，与div的id保持一致
		chart: { //指定图表的类型，默认是折线图（line）
			plotBackgroundColor: null, //绘图区背景颜色
			plotBorderWidth: null, //绘图区边框宽度
			plotShadow: false //绘图投影
		},
		colors: ['#54c7fc', '#ffb54d', '#ff7466', '#44db5e'],
		title: { //头部
			text: ''
		},
		tooltip: { //数据提示框
			//单个点的格式化函数
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: { //图例事件，图例默认的点击行为是显示或隐藏当前数据列
			pie: {
				allowPointSelect: false,
				//cursor: 'pointer',
				dataLabels: { //数据标签
					enabled: true, //通过设置 legend.enabled = true | false 来打开或关闭图例
					color: '',
					connectorColor: 'blue', //连接线颜色
					format: '<b>{point.name}</b>: {point.percentage:.2f} %',
				}
			}
		},
		series: [{
			type: 'pie', //pie：饼图
			name: 'Browser share',
			data: [
				['卓越', 222],
				['非常满意',96],
				['满意', 48],
				['一般', 4],
			]
		}]
	};
	var index10_option4 = Highcharts.chart('index10-container4', index10_chart4);
})