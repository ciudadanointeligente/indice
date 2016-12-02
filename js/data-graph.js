long_short_data = [ 
  {
    key: 'Normatividad',
    color: '#8ac733',
    values: [
      { 
        "label" : "Argentina" ,
        "value" : 0.53
      } ,
      { 
        "label" : "Bolivia" ,
        "value" : 0.37
      } ,
      { 
        "label" : "Chile" ,
        "value" : 0.61
      } ,
      { 
        "label" : "Colombia" ,
        "value" : 0.44
      } ,
      { 
        "label" : "Ecuador" ,
        "value" : 0.63
      } ,
      { 
        "label" : "Guatemala" ,
        "value" : 0.51
      } ,
      { 
        "label" : "México" ,
        "value" : 0.67
      } , 
      { 
        "label" : "Perú" ,
        "value" : 0.56
      } ,
      { 
        "label" : "Venezuela" ,
        "value" : 0.38
      }
    ]
  },
  {
    key: 'Labor del Congreso o Asamblea',
    color: '#00a64b',
    values: [
      { 
        "label" : "Argentina" ,
        "value" : 0.55
      },
      { 
        "label" : "Bolivia" ,
        "value" : 0.27
      },
      { 
        "label" : "Chile" ,
        "value" : 0.69
      },
      { 
        "label" : "Colombia" ,
        "value" : 0.51
      },
      { 
        "label" : "Ecuador" ,
        "value" : 0.47
      },
      { 
        "label" : "Guatemala" ,
        "value" : 0.55
      },
      { 
        "label" : "México" ,
        "value" : 0.44
      }, 
      { 
        "label" : "Perú" ,
        "value" : 0.64
      },
      { 
        "label" : "Uruguay" ,
        "value" : 0.70
      },
      { 
        "label" : "Venezuela" ,
        "value" : 0.20
      }
    ]
  },
  {
    key: 'Presupuesto y Gestión Administrativa',
    color: '#006fbd',
    values: [
      { 
        "label" : "Argentina" ,
        "value" : 0.20
      },
      { 
        "label" : "Bolivia" ,
        "value" : 0.20
      },
      { 
        "label" : "Chile" ,
        "value" : 0.61
      },
      { 
        "label" : "Colombia" ,
        "value" : 0.48
      },
      { 
        "label" : "Ecuador" ,
        "value" : 0.46
      },
      { 
        "label" : "Guatemala" ,
        "value" : 0.41
      },
      { 
        "label" : "México" ,
        "value" : 0.28
      }, 
      { 
        "label" : "Perú" ,
        "value" : 0.47
      },
      { 
        "label" : "Venezuela" ,
        "value" : 0.06
      }
    ]
  },
  {
    key: 'Participación, atención ciudadana y rendición de cuentas',
    color: '#00b4f2',
    values: [
      { 
        "label" : "Argentina" ,
        "value" : 0.23
      },
      { 
        "label" : "Bolivia" ,
        "value" : 0.36
      },
      { 
        "label" : "Chile" ,
        "value" : 0.64
      },
      { 
        "label" : "Colombia" ,
        "value" : 0.46
      },
      { 
        "label" : "Ecuador" ,
        "value" : 0.71
      },
      { 
        "label" : "Guatemala" ,
        "value" : 0.56
      },
      { 
        "label" : "México" ,
        "value" : 0.38
      }, 
      { 
        "label" : "Perú" ,
        "value" : 0.73
      },
      { 
        "label" : "Venezuela" ,
        "value" : 0.24
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