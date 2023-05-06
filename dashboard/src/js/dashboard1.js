
$(function() {
    "use strict";
    // ============================================================== 
    // Biểu đồ bar
    // ============================================================== 
    var chart2 = new Chartist.Bar('.amp-pxl', {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: [
            [10, 8, 4, 8, 6, 8, 2],
            [2, 4, 2, 1, 4, 6, 2]
        ]
    }, {
        axisX: {
            // On the x-axis start means top and end means bottom
            position: 'end',
            showGrid: false
        },
        axisY: {
            // On the y-axis start means left and end means right
            position: 'start'
        },
        high: '12',
        low: '0',
        plugins: [
            Chartist.plugins.tooltip()
        ]
    });

    var chart = [chart2];

    // ============================================================== 
    // This is for the animation
    // ==============================================================

    for (var i = 0; i < chart.length; i++) {
        chart[i].on('draw', function(data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 500 * data.index,
                        dur: 500,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeInOutElastic
                    }
                });
            }
            if (data.type === 'bar') {
                data.element.animate({
                    y2: {
                        dur: 500,
                        from: data.y1,
                        to: data.y2,
                        easing: Chartist.Svg.Easing.easeInOutElastic
                    },
                    opacity: {
                        dur: 500,
                        from: 0,
                        to: 1,
                        easing: Chartist.Svg.Easing.easeInOutElastic
                    }
                });
            }
        });
    }

    // ============================================================== 
    // Biểu đồ tròn
    // ============================================================== 

    // var chart = c3.generate({
    //     bindto: '#visitor',
    //     data: {
    //         columns: [
    //             ['Không tập trung', 30],
    //             ['Ngáp', 10],
    //             ['Ngủ gật', 20],
    //             ['Tập Trung', 80],
    //         ],

    //         type: 'donut',
    //         onclick: function(d, i) { console.log("onclick", d, i); },
    //         onmouseover: function(d, i) { console.log("onmouseover", d, i); },
    //         onmouseout: function(d, i) { console.log("onmouseout", d, i); }
    //     },
    //     donut: {
    //         label: {
    //             show: false
    //         },
    //         title: "Thông tin",
    //         width: 20,

    //     },

    //     legend: {
    //         hide: true
    //             //or hide: 'data1'
    //             //or hide: ['data1', 'data2']
    //     },
    //     color: {
    //         pattern: ['#ffb22b', '#745af2', '#ff0000', '#1e88e5']
    //     }
    // });





});
