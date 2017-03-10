/* ================================
Week 6 Assignment: Midterm Function Signatures
================================ */



//
// var mouseHover = function() {
// //checks state. if appropriate state. adds a popup.
//
//

$("#button-next").mouseenter(function(){
    if (state == 1) {
      var popup1 = L.popup()
          .setLatLng([34.627060, -84.194503])
          .setContent('<p>Welcome to Georgia. Starting point for most Thru-hikers.</p>')
          .openOn(map);
    }
  });


    else (state == 2) {
      var popup2 = L.popup()
          .setLatLng([45.904061, -68.921801])
          .setContent('<p>Welcome to Georgia. Starting point for most Thru-hikers.</p>')
          .openOn(map);
        }
});





// var eachFeature = function(feature, layer) {
//   layer.on('click', function (e) {
//     var bounds = this.getBounds();
//     map.fitBounds(bounds);
//   });
// };
//
// //Calling my CartoDB dataset
// var getDataFunction = function (tableName, sqlStatement){
// var sql = new cartodb.SQL({ user: 'eneedham', format: 'geojson' });
// sql.execute("SELECT * FROM " + tableName + " WHERE " + sqlStatement).done(function(geojson) {
//    theLayer = L.geoJson(geojson, {
//        onEachFeature: eachFeature,
//        fillColor: "#BC8112",
//        color: "#434343",
//        weight: 3
//       }).addTo(map).addData(geojson);
// });
// };
//
// var defaultViewFunc = function(){
//     // $('#intro').show();
//     // $('#results').hide();
//     map.setView([40.000, -75.1090], 11);
// };
