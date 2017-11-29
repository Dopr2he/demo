import echarts from 'echarts';

export default class PieChart {
    constructor(domId, dataArray) {
        this.chart = echarts.init(document.getElementById(domId));
        this.chart.setOption({
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                right: '10%',
                top: '30%',
                data: dataArray.map((item) => {
                    return item.name;
    }),
            textStyle: {
                fontSize: '12',
                    color: 'rgba(255, 255, 255, 0.5)'
            }
    },
        series:[{
            name: '事件类型',
            type: 'pie',
            radius: ['40%', '60%'],
            center: ['33%', '55%'],
            avoidLabelOverlap: false,
            color: ['#FFF36C', '#F2B449', '#068C6F', '#F08B48', '#A4E05A', '#49AD8F'],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '14'
                    },
                    formatter: "{b} \n {d}%"
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: dataArray
        }]
    });
        this.chart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
        });
        document.getElementById(domId).addEventListener('mouseover', () => {
            this.chart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0
        });
    });

        document.getElementById(domId).addEventListener('mouseout', () => {
            this.chart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
        });
    });
    }
}