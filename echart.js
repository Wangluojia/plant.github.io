function createChart() {

    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;
    
    option = {
        // backgroundColor: '#2c343c',
    
        title: {
            text: '诗经植物',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },
    
        tooltip: {
            trigger: 'item'
        },
    
        visualMap: {
            show: false,
            min: 1,
            max: 50,
            inRange: {
                colorLightness: [0.3, 1]
            }
        },
        series: [
            {
                name: '植物种类',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [
                    {value: 30, name: '野草'},
                    {value: 20, name: '水果'},
                    {value: 17, name: '药材'},
                    {value: 12, name: '木材'},
                    {value: 9, name: '花卉'},
                    {value: 5, name: '染料'},
                    {value: 5, name: '谷物'},
                    {value: 4, name: '纤维'}
             
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    color: 'rgba(255, 255, 255, 0.5)'
                },
                labelLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                itemStyle: {
                    color: '#c2aa64',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
    
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };
    
    option && myChart.setOption(option);
    }
    // 获取按钮元素
    var toggleButton = document.getElementById('intorcefloat');
    // 获取图表容器元素
    var chartContainer = document.getElementById('main');
    
    // 给按钮添加点击事件监听器
    toggleButton.addEventListener('click', function() {
        // 如果图表当前可见，则隐藏图表
        if (chartContainer.style.display === 'block') {
            chartContainer.style.display = 'none';
        } else {
            // 否则重新加载图表并显示
            createChart();
            chartContainer.style.display = 'block';
        }
    });

