long_short_data = [ 
  {
    key: 'Normatividad',
    color: '#8ac733',
    values: [
      { 
        "label" : "Argentina" ,
        "n_palabras" : 2160 ,
        "value" : 0.52
      } ,
      { 
        "label" : "Bolivia" ,
        "n_palabras" : 1679 ,
        "value" : 0.34
      } ,
      { 
        "label" : "Chile" ,
        "n_palabras" : 904 ,
        "value" : 0.62
      } ,
      { 
        "label" : "Colombia" ,
        "n_palabras" : 882 ,
        "value" : 0.42
      } ,
      { 
        "label" : "Ecuador" ,
        "n_palabras" : 818 ,
        "value" : 0.62
      } ,
      { 
        "label" : "Guatemala" ,
        "n_palabras" : 806 ,
        "value" : 0.49
      } ,
      { 
        "label" : "México" ,
        "n_palabras" : 789 ,
        "value" : 0.70
      } , 
      { 
        "label" : "Perú" ,
        "n_palabras" : 764 ,
        "value" : 0.59
      } ,
      { 
        "label" : "Venezuela" ,
        "n_palabras" : 649 ,
        "value" : 0.43
      }
    ]
  },
  {
    key: 'Labor del Congreso o Asamblea',
    color: '#00a64b',
    values: [
      { 
        "label" : "Argentina" ,
        "n_palabras" : 1246 ,
        "value" : 0.55
      },
      { 
        "label" : "Bolivia" ,
        "n_palabras" : 861 ,
        "value" : 0.27
      },
      { 
        "label" : "Chile" ,
        "n_palabras" : 42 ,
        "value" : 0.69
      },
      { 
        "label" : "Colombia" ,
        "n_palabras" : 1178 ,
        "value" : 0.51
      },
      { 
        "label" : "Ecuador" ,
        "n_palabras" : 1181 ,
        "value" : 0.48
      },
      { 
        "label" : "Guatemala" ,
        "n_palabras" : 1329 ,
        "value" : 0.55
      },
      { 
        "label" : "México" ,
        "n_palabras" : 301 ,
        "value" : 0.44
      }, 
      { 
        "label" : "Perú" ,
        "n_palabras" : 1324 ,
        "value" : 0.64
      },
      { 
        "label" : "Venezuela" ,
        "n_palabras" : 1947 ,
        "value" : 0.22
      }
    ]
  },
  {
    key: 'Presupuesto y Gestión Administrativa',
    color: '#006fbd',
    values: [
      { 
        "label" : "Argentina" ,
        "n_palabras" : 713 ,
        "value" : 0.20
      },
      { 
        "label" : "Bolivia" ,
        "n_palabras" : 1326 ,
        "value" : 0.20
      },
      { 
        "label" : "Chile" ,
        "n_palabras" : 506 ,
        "value" : 0.59
      },
      { 
        "label" : "Colombia" ,
        "n_palabras" : 522 ,
        "value" : 0.48
      },
      { 
        "label" : "Ecuador" ,
        "n_palabras" : 314 ,
        "value" : 0.46
      },
      { 
        "label" : "Guatemala" ,
        "n_palabras" : 1094 ,
        "value" : 0.41
      },
      { 
        "label" : "México" ,
        "n_palabras" : 339 ,
        "value" : 0.28
      }, 
      { 
        "label" : "Perú" ,
        "n_palabras" : 118 ,
        "value" : 0.47
      },
      { 
        "label" : "Uruguay" ,
        "n_palabras" : 0 ,
        "value" : 0.70
      },
      { 
        "label" : "Venezuela" ,
        "n_palabras" : 0 ,
        "value" : 0.17
      }
    ]
  },
  {
    key: 'Participación, atención ciudadana y rendición de cuentas',
    color: '#00b4f2',
    values: [
      { 
        "label" : "Argentina" ,
        "n_palabras" : 713 ,
        "value" : 0.23
      },
      { 
        "label" : "Bolivia" ,
        "n_palabras" : 1326 ,
        "value" : 0.36
      },
      { 
        "label" : "Chile" ,
        "n_palabras" : 506 ,
        "value" : 0.64
      },
      { 
        "label" : "Colombia" ,
        "n_palabras" : 522 ,
        "value" : 0.46
      },
      { 
        "label" : "Ecuador" ,
        "n_palabras" : 314 ,
        "value" : 0.71
      },
      { 
        "label" : "Guatemala" ,
        "n_palabras" : 1094 ,
        "value" : 0.56
      },
      { 
        "label" : "México" ,
        "n_palabras" : 339 ,
        "value" : 0.38
      }, 
      { 
        "label" : "Perú" ,
        "n_palabras" : 118 ,
        "value" : 0.73
      },
      { 
        "label" : "Venezuela" ,
        "n_palabras" : 0 ,
        "value" : 0.28
      }
    ]
  }
];


var chart;
nv.addGraph(function() {
  chart = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 0, right: 0, bottom: 0, left: 230})
      .showValues(true)
      .tooltip(false)
      // .barColor(d3.scale.category20().range())
      .transitionDuration(250)
      .stacked(false)
      .showControls(false);

  chart.valueFormat(d3.format('%'));
  chart.xAxis
      .showMaxMin(false)

  // chart.yAxis
  //     .tickFormat(d3.format('%'));

  chart.forceY([0,1]);

  d3.select('#chart1 svg')
      .datum(long_short_data)
      .call(chart);

  nv.utils.windowResize(chart.update);

  chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

  return chart;
});
