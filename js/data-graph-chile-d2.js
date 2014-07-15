long_short_data = [ 
  {
    key: 'Dimensión Labor del Congreso o Asamblea',
    color: '#f5292e',
    values: [
      { 
        "label" : "2.1" ,
        "n_palabras" : 'Hola' ,
        "value" : 0.46
      } ,
      { 
        "label" : "2.2" ,
        "n_palabras" : "Existencia regulación transparencia y AI en el Congreso" ,
        "value" : 0.25
      } ,
      { 
        "label" : "2.3" ,
        "n_palabras" : "Reglamentación del cabildeo o Lobbying" ,
        "value" : 0.0
      } ,
      { 
        "label" : "2.4" ,
        "n_palabras" : "Registro de intereses" ,
        "value" : 0.35
      } ,
      { 
        "label" : "2.5" ,
        "n_palabras" : 818 ,
        "value" : 0.51
      } ,
      { 
        "label" : "1.6" ,
        "n_palabras" : 806 ,
        "value" : 0.43
      } ,
      { 
        "label" : "1.7" ,
        "n_palabras" : 789 ,
        "value" : 0.47
      } , 
      { 
        "label" : "1.8" ,
        "n_palabras" : 764 ,
        "value" : 0.59
      } , 
      { 
        "label" : "1.9" ,
        "n_palabras" : 764 ,
        "value" : 0.59
      } , 
      { 
        "label" : "1.10" ,
        "n_palabras" : 764 ,
        "value" : 0.59
      } , 
      { 
        "label" : "1.11" ,
        "n_palabras" : 764 ,
        "value" : 0.59
      } , 
      { 
        "label" : "1.12" ,
        "n_palabras" : 764 ,
        "value" : 0.59
      } , 
      { 
        "label" : "1.13" ,
        "n_palabras" : 764 ,
        "value" : 0.59
      } , 
      { 
        "label" : "1.14" ,
        "n_palabras" : 764 ,
        "value" : 0.59
      } , 
      { 
        "label" : "1.15" ,
        "n_palabras" : 764 ,
        "value" : 0.59
      } ,
      { 
        "label" : "1.16" ,
        "n_palabras" : 649 ,
        "value" : 0.32
      }
    ]
  },
];


var chart;
nv.addGraph(function() {
  chart = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 0, right: 0, bottom: 0, left: 30})
      .showValues(true)
      .showLegend(false)
      .tooltip(function(key, x, y, e, graph, n_palabras, link_ley) {
        var text_for_twitter = encodeURIComponent(y + '% de cumplimiento en ' + x + ',');
        return '<p>' +  e.point.n_palabras + '</p>'
               // '<p> De las ' + e.point.n_promesas + ' promesas en ' + x + ' entre ' + key + '.</p>' +
               // '<div><a target="_blank" href="'+ e.point.link_ley +'">¿Cómo cumple la promesa? </a></div>'
               // '<div style="float:right;"><a href="https://twitter.com/share?text='+text_for_twitter+'&via=ciudadanoi&hashtags=21mayo" target="_blank" class="twitter-share-button"><i class="fa fa-twitter"></i> Twittear</a></div>'
    })
      .barColor(d3.scale.category20().range())
      .transitionDuration(250)
      .stacked(false)
      .showControls(false);

  chart.valueFormat(d3.format('%'));
  chart.xAxis
      .showMaxMin(false)

  // chart.yAxis
  //     .tickFormat(d3.format('%'));

  // chart.forceY([0,1]);

  d3.select('#chartChileD2 svg')
      .datum(long_short_data)
      .call(chart);

  nv.utils.windowResize(chart.update);

  chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

  return chart;
});
