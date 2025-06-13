# NightTime Lights (NTL) Bangladesh 2024
Nighttime Light Analysis of Bangladesh (2024) using VIIRS &amp; Google Earth Engine Api
Why it matters?
Nighttime light imagery is a powerful proxy for:

Urban growth
Infrastructure development
Energy access
Population distribution
Disaster impact assessment

🛰️ Data Source:
NOAA VIIRS DNB (Day/Night Band) Annual Composite
🛠️ Processed in Google Earth Engine
Here's an image added which was cartography and layout done using Arcmap:

![Image Alt](https://github.com/Joti00517/NTL-Bangladesh-2024/blob/d921bb357cdf27aeadbfd3802ec9f158e2d87f72/NTL_2024_01.jpg)

Here's an example screenshot:

![Image Alt](https://github.com/Joti00517/NTL-Bangladesh-2024/blob/cfc83b9713e2069ee9a736e48d56f69e0af1a466/NTL_2024_GEE.jpg)

# 📊 Workflow Summary

1. **Data Source**:  
   - NOAA/VIIRS/DNB/ANNUAL_V22  
   - geoBoundaries (ADM0 for Bangladesh)

2. **Processing in Google Earth Engine (GEE)**:  
   - Image filtering for 2024  
   - Clipping to Bangladesh boundary  
   - Exporting raster for visualization

3. **Cartographic Styling in ArcMap**:  
   - Import GEE-exported raster  
   - Apply symbology, scale bars, legend, and annotations  
   - Export as high-resolution map
