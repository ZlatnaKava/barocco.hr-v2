export const getMapSrc = (lat, long) =>
         `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=16&size=800x400&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&scale=1&style=feature:road|color:0xffffFF|visibility:simplified`
