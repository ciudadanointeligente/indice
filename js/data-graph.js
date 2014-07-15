long_short_data = [ 
  {
    key: 'Normatividad',
    color: '#f5292e',
    values: [
      { 
        "label" : "Argentina" ,
        "n_palabras" : 2160 ,
        "value" : 0.46
      } ,
      { 
        "label" : "Bolivia" ,
        "n_palabras" : 1679 ,
        "value" : 0.30
      } ,
      { 
        "label" : "Chile" ,
        "n_palabras" : 904 ,
        "value" : 0.49
      } ,
      { 
        "label" : "Colombia" ,
        "n_palabras" : 882 ,
        "value" : 0.35
      } ,
      { 
        "label" : "Ecuador" ,
        "n_palabras" : 818 ,
        "value" : 0.51
      } ,
      { 
        "label" : "Guatemala" ,
        "n_palabras" : 806 ,
        "value" : 0.43
      } ,
      { 
        "label" : "México" ,
        "n_palabras" : 789 ,
        "value" : 0.47
      } , 
      { 
        "label" : "Perú" ,
        "n_palabras" : 764 ,
        "value" : 0.59
      } ,
      { 
        "label" : "Venezuela" ,
        "n_palabras" : 649 ,
        "value" : 0.32
      }
    ]
  },
  {
    key: 'Labor del Congreso o Asamblea',
    color: '#9b3237',
    values: [
      { 
        "label" : "Argentina" ,
        "n_palabras" : 1246 ,
        "value" : 0.57
      },
      { 
        "label" : "Bolivia" ,
        "n_palabras" : 861 ,
        "value" : 0.24
      },
      { 
        "label" : "Chile" ,
        "n_palabras" : 42 ,
        "value" : 0.49
      },
      { 
        "label" : "Colombia" ,
        "n_palabras" : 1178 ,
        "value" : 0.46
      },
      { 
        "label" : "Ecuador" ,
        "n_palabras" : 1181 ,
        "value" : 0.42
      },
      { 
        "label" : "Guatemala" ,
        "n_palabras" : 1329 ,
        "value" : 0.52
      },
      { 
        "label" : "México" ,
        "n_palabras" : 301 ,
        "value" : 0.46
      }, 
      { 
        "label" : "Perú" ,
        "n_palabras" : 1324 ,
        "value" : 0.60
      },
      { 
        "label" : "Uruguay" ,
        "n_palabras" : 0 ,
        "value" : 0.67
      },
      { 
        "label" : "Venezuela" ,
        "n_palabras" : 1947 ,
        "value" : 0.12
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
        "value" : 0.17
      },
      { 
        "label" : "Bolivia" ,
        "n_palabras" : 1326 ,
        "value" : 0.13
      },
      { 
        "label" : "Chile" ,
        "n_palabras" : 506 ,
        "value" : 0.50
      },
      { 
        "label" : "Colombia" ,
        "n_palabras" : 522 ,
        "value" : 0.25
      },
      { 
        "label" : "Ecuador" ,
        "n_palabras" : 314 ,
        "value" : 0.36
      },
      { 
        "label" : "Guatemala" ,
        "n_palabras" : 1094 ,
        "value" : 0.32
      },
      { 
        "label" : "México" ,
        "n_palabras" : 339 ,
        "value" : 0.21
      }, 
      { 
        "label" : "Perú" ,
        "n_palabras" : 118 ,
        "value" : 0.32
      },
      { 
        "label" : "Venezuela" ,
        "n_palabras" : 0 ,
        "value" : 0.12
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
        "value" : 0.31
      },
      { 
        "label" : "Chile" ,
        "n_palabras" : 506 ,
        "value" : 0.65
      },
      { 
        "label" : "Colombia" ,
        "n_palabras" : 522 ,
        "value" : 0.45
      },
      { 
        "label" : "Ecuador" ,
        "n_palabras" : 314 ,
        "value" : 0.68
      },
      { 
        "label" : "Guatemala" ,
        "n_palabras" : 1094 ,
        "value" : 0.55
      },
      { 
        "label" : "México" ,
        "n_palabras" : 339 ,
        "value" : 0.33
      }, 
      { 
        "label" : "Perú" ,
        "n_palabras" : 118 ,
        "value" : 0.68
      },
      { 
        "label" : "Venezuela" ,
        "n_palabras" : 0 ,
        "value" : 0.27
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
      .tooltip(function(key, x, y, e, graph, n_palabras, link_ley) {
        var text_for_twitter = encodeURIComponent(y + '% de cumplimiento en ' + x + ',');
        return '<p>' +  e.point.n_palabras + ' palabras en el discurso</p>'
               // '<p> De las ' + e.point.n_promesas + ' promesas en ' + x + ' entre ' + key + '.</p>' +
               // '<div><a target="_blank" href="'+ e.point.link_ley +'">¿Cómo cumple la promesa? </a></div>'
               // '<div style="float:right;"><a href="https://twitter.com/share?text='+text_for_twitter+'&via=ciudadanoi&hashtags=21mayo" target="_blank" class="twitter-share-button"><i class="fa fa-twitter"></i> Twittear</a></div>'
    })
      // .barColor(d3.scale.category20().range())
      .transitionDuration(250)
      .stacked(false)
      .showControls(false);

  chart.valueFormat(d3.format('%'));
  chart.xAxis
      .showMaxMin(false)

  // chart.yAxis
  //     .tickFormat(d3.format('%'));

  // chart.forceY([0,1]);

  d3.select('#chart1 svg')
      .datum(long_short_data)
      .call(chart);

  nv.utils.windowResize(chart.update);

  chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

  return chart;
});
