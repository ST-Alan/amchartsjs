am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
var chart = root.container.children.push(
  am5percent.PieChart.new(root, {
    endAngle: 270
  })
);

// Create series
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
var series = chart.series.push(
  am5percent.PieSeries.new(root, {
    valueField: "value",
    categoryField: "category",
    endAngle: 270
  })
);

series.states.create("hidden", {
  endAngle: -90
});

// Set data
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
series.data.setAll([{
  category: "Lithuania",
  value: 501.9
}, {
  category: "Czechia",
  value: 301.9
}, {
  category: "Ireland",
  value: 201.1
}, {
  category: "Germany",
  value: 165.8
}, {
  category: "Australia",
  value: 139.9
}, {
  category: "Austria",
  value: 128.3
}, {
  category: "UK",
  value: 99
}]);

//series.appear(tiempo que demora la transición de aparecer, tiempo que se retrasa antes de verse)
//Por defecto está en el tema
series.appear(1000, 100);


// Animaciones del gráfico de torta
// series.animate({
//   key: "startAngle",
//   to: 180,
//   loops: Infinity, - Cantidad de veces que se realiza la animación. Si no se establece se anima el gráfico una sola vez
//   duration: 2000, - Duración de la animación en milisegundos
//   easing: am5.ease.yoyo(am5.ease.cubic)
// });

series.animate({
  key: "startAngle",
  to: 180,
  loops: 1,
  duration: 2000,
  easing: am5.ease.yoyo(am5.ease.cubic)
});

//Ocultar logo
// root._logo.dispose();

});