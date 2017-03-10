// styles colors
var regionStyle = function(feature) {
        switch (feature.properties.atc_region) {
            case 'Mid-Atlantic': return {color: "green"};
            case 'New England': return {color: "red"};
            case 'South': return {color: "yellow"};
            case 'Virginia': return {color: "blue"};
        }
    };

  var defaultStyle = function(feature) {
    return feature;
  };

  var surfaceStyle = function(feature) {
    if (feature.properties.surface === 'Native') {
      return {color: "green"};
    }
    else return {color: "red"};
      };


/* ================================
Week 6 Assignment: Slide Model
================================ */
var obj0 = {title: "Welcome to the Appalachian Trail",
 subTitle: "This will be a guide to some of the highlights of this 2,200 mile trial",
 text: "",
 zoom: 5,
 latLng: [40.052664, -75.051316],
 style: defaultStyle};

var obj1 = {title: "Starting point",
  subTitle: "Most people start the trail in Georgia",
  text: "Most thru-hikers walk northward from Georgia to Maine, and generally start out in early spring and follow the warm weather as it moves north.[1] These 'north-bounders' are also called NOBO (NOrthBOund) or GAME (Georgia(GA)-to-Maine(ME)), while those heading in the opposite direction are termed 'south-bounders' (also SOBO or MEGA)",
  zoom: 10,
  latLng: [34.627060, -84.194503],
  style: defaultStyle};

var obj2 = {title: "This is where the trail ends",
 subTitle: "Mt katadin ME",
 text: "You made it to Maine!!",
 zoom: 7,
 latLng: [45.904061, -68.921801],
 style: defaultStyle};

var obj3 = {title: "Regions along the trail",
  subTitle: "Four distinct regions",
  text: "The trail passes through four distinct regions: The South, 'Virginia', Mid-atlantic, and the North East" ,
  zoom: 5,
  latLng: [40.052664, -75.051316],
  style: regionStyle};


var obj4 = {title: "Walking surface",
  subTitle: "Most of the trail is natural / dirt",
  text: "But there are a number of sections where it crosses over a bridge, through a town or along a highway for a bit",
  zoom: 5,
  latLng: [40.052664, -75.051316],
  style: surfaceStyle};

var obj5 = {title: "Thanks for joining for the AT tour",
  subTitle: "",
  text: "Hope you learned something about the AT!",
  zoom: 5,
  latLng: [40.052664, -75.051316],
  style: surfaceStyle};

var array = [obj0, obj1, obj2, obj3, obj4, obj5];
// console.log(array);
