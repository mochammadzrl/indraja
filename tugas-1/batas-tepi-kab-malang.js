//Batas Tepi Malang
var malang = ee.FeatureCollection('FAO/GAUL/2015/level2')
  .filter(ee.Filter.eq('ADM2_NAME','Malang'));

var style = 
{
  color: 'red',fillColor: '00000000',
  width: 2
};

Map.centerObject(malang,9);
Map.addLayer(malang.style(style),
{},'Batas Malang (Style)');
