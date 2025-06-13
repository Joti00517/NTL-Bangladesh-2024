// Load geoBoundaries Admin Boundaries and select ADM0 for whole country
var admin0 = ee.FeatureCollection("WM/geoLab/geoBoundaries/600/ADM0");

// Filter for Bangladesh
var Bangladesh = admin0.filter(ee.Filter.eq('shapeName', 'Bangladesh'));
var geometry = Bangladesh.geometry();

// Load VIIRS Nighttime Lights Annual Composite
var ntlCollection = ee.ImageCollection("NOAA/VIIRS/DNB/ANNUAL_V22");

// Time one year like 2024
var ntl2024 = ntlCollection
  .filter(ee.Filter.date('2024-01-01', '2025-01-01'))
  .select('average')  // Select the average radiance band
  .first(); // Annual composites contain one image per year

// Check image metadata
print('2024 NTL Image:', ntl2024);

// Visualization parameters
var ntlVisParams = {
  min: 0,
  max: 50,
  palette: ['#252525','#ffffd4','#fee391','#fec44f','#fe9929','#ec7014','#cc4c02','#8c2d04']
};

// Add to map
Map.centerObject(Bangladesh, 6);
Map.addLayer(Bangladesh, {}, 'Bangladesh Boundary');
Map.addLayer(ntl2024.clip(geometry), ntlVisParams, 'NTL 2024');

// // Export to Drive
// Export.image.toDrive({
//   image: ntl2024.clip(geometry),
//   description: 'NTL_Average_2024_Bangladesh',
//   folder: 'GEE_Exports',
//   region: geometry,
//   scale: 500,
//   maxPixels: 1e13
// });
