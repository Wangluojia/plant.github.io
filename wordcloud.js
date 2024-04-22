
// //词云 
    // 初始化 echarts 实例
     var myChart1= echarts.init(document.getElementById('wordcloud'));
    
    // 指定图表的配置项和数据
     var option1 = {
        series: [{
            
            type: 'wordCloud', // 指定类型为词云图表
            shape: 'diamond', // 指定词云形状为圆形
            left: 'center', // 词云图表居中显示
            top: 'center', // 词云图表居中显示
            width: '100%', // 词云图表宽度占容器宽度的 70%
            height: '100%', // 词云图表高度占容器高度的 80%
            textStyle: { // 文字样式
                fontFamily: 'Arial, sans-serif', // 字体
                fontWeight: 'bold', // 字重
                color: '#ffffff', // 颜色，可以使用颜色名称、RGB、RGBA、十六进制等格式
            },
            emphasis: { // 高亮样式
                shadowBlur: 10, // 阴影模糊大小
                shadowColor: '#333', // 阴影颜色
            },
            
            data: [ // 词云数据
                { name: '桑', value: 25 },
                { name: '葛', value: 14 },
                { name: '棘',  value: 12},
                { name: '黍', value: 10 },
                { name: '荼', value: 5 },
                { name: '杞', value: 5 },
                { name: '楚', value: 4},
                { name: '榛', value: 4 },
                { name: '萧', value: 4 },
                { name: '葑', value: 3},
                { name: '葭', value: 3 },
                { name: '菽', value: 3},
                { name: '苇', value: 3},
                { name: '蘩', value: 3 },
                { name: '薇', value: 3},
                { name: '苓', value: 2 },
                { name: '樗', value: 2 },
                { name: '檀', value: 2 },
                { name: '毂', value: 2 },
                { name: '杻', value: 2 },
                { name: '瓠', value: 2 },
                { name: '莠', value: 2 },
                { name: '菅', value: 2 },
                { name: '杨', value: 2 },
                { name: '蒲', value: 2 },
                { name: '蓼', value: 2 },
                { name: '栩', value: 2 },
                { name: '苕', value: 2 },
                { name: '稷', value: 2 },
                { name: '杻', value: 2 },
                { name: '蕨', value: 2 },
                { name: '莠', value: 2 },
                { name: '杜', value: 2 },
                { name: '椒', value: 2 },
                { name: '栲', value: 2 },
                { name: '木瓜', value: 1},
                { name: '果蠃', value: 1},
                { name: '六', value: 1},
                { name: '蘋', value: 1},
                { name: '木桃', value: 1},
                { name: '椅', value: 1},
                { name: '芣苢', value: 1},
                { name: '棫', value: 1},
                { name: '粟', value: 1},
                { name: '蓬', value: 1},
                { name: '枸', value: 1},
                { name: '蔹', value: 1},
                { name: '菲', value: 1},
                { name: '纪', value: 1},
                { name: '谖草', value: 1},
                { name: '枌',  value: 1},
                { name: '荍', value: 1 },
                { name: '藟', value: 1 },
                { name: '秬', value: 1 },
                { name: '桃花', value: 1 },
                { name: '苹', value: 1},
                { name: '菡萏', value: 1},
                { name: '蒌', value: 1},
                { name: '蒿', value: 1},
                { name: '朴樕',  value: 1},
                { name: '荍', value: 1 },
                { name: '条', value: 1 },
                { name: '葍', value: 1 },
                { name: '纻', value: 1 },
                { name: '甘棠', value: 1 },
                { name: '芩', value: 1},
                { name: '柞', value: 1},
                { name: '莪', value: 1},
                { name: '重', value: 1},
                { name: '芄兰', value: 1},
                { name: '枢', value: 1},
                { name: '扶苏', value: 1},
                { name: '唐', value: 1},
                { name: '菼', value: 1},
                { name: '蔚',  value: 1},
                { name: '荠', value: 1 },
                { name: '穋', value: 1 },
                { name: '蓷', value: 1 },
                { name: '稌', value: 1 },
                { name: '庐', value: 1},
                { name: '藻', value: 1},
                { name: '唐棣', value: 1},
                { name: '桧、松', value: 1},
                { name: '苦',  value: 1},
                { name: '栎', value: 1 },
                { name: '茹', value: 1 },
                { name: '来牟', value: 1 },
                { name: '绿', value: 1 },
                { name: '瓜苦', value: 1 },
                { name: '壶', value: 1 },
                { name: '蓫', value: 1 },
                { name: '芹', value: 1 },
                { name: '芑', value: 1 },
                { name: '蝱', value: 1},
                { name: '莞', value: 1},
                { name: '游龙', value: 1},
                { name: '蔓', value: 1},
                { name: '卷耳',  value: 1},
                { name: '茨', value: 1 },
                { name: '覃', value: 1 },
                { name: '木李', value: 1 },
                { name: '艾', value: 1 },
                { name: '稙', value: 1 },
                { name: '葽',  value: 1},
                { name: '莱', value: 1 },
                { name: '台', value: 1 },
                { name: '稺', value: 1 },
                { name: '舜华', value: 1 },
                { name: '楰', value: 1 },
                { name: '荇菜', value: 1 },
                { name: '匏', value: 1 },
                { name: '麻', value: 1 },
                { name: '茑', value: 1 },
                { name: '桐', value: 1},
                { name: '勺药', value: 1},
                { name: '棣', value: 1},
                { name: '檖', value: 1},
                { name: '堂',  value: 1},
                // 更多词条
            ]
        }],
            tooltip: { // 提示框配置
            show: true, // 显示提示框
            trigger: 'item', // 触发类型为项
            formatter: function (params) { // 格式化提示框内容
                return '词条: ' + params.name + '<br/>值: ' + params.value;
            }
        }
    };
    
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);

// 获取点击触发词云的按钮元素
var triggerButton = document.getElementById('intorcefloat2');

// 标识词云的显示状态，默认为隐藏
var isWordCloudVisible = false;

// 点击事件处理函数
function toggleWordCloud() {
    if (isWordCloudVisible) {
        // 如果词云当前是显示状态，则隐藏词云
        document.getElementById('wordcloud').style.display = 'none';
        isWordCloudVisible = false;
    } else {
        // 如果词云当前是隐藏状态，则显示词云
        document.getElementById('wordcloud').style.display = 'block';
        isWordCloudVisible = true;
    }
}

// 添加点击事件监听器
triggerButton.addEventListener('click', toggleWordCloud);
