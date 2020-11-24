// Creating map object
var myMap = L.map("map", {
  center: [10.0522, 30.2437],
  zoom: 2,
  static: 'Yes'
});
// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 3,
  zoomOffset: -1,
  id: "mapbox/light-v10",
  accessToken: API_KEY
}).addTo(myMap);

var link = "../static/data/start.geojson";
d3.json(link, function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data).addTo(myMap);
});


var slider_GDP = d3.select("#slider10");
var slider_GDP2 = d3.select("#slider20");
var slider_GDP3 = d3.select("#slider30");
var slider_gendergap = d3.select("#slider11");
var slider_gendergap2 = d3.select("#slider21");
var slider_gendergap3 = d3.select("#slider31");
var slider_powerdist  = d3.select("#slider12");
var slider_powerdist2  = d3.select("#slider22");
var slider_powerdist3  = d3.select("#slider32");
var slider_democracy = d3.select("#slider13");
var slider_democracy2 = d3.select("#slider23");
var slider_democracy3 = d3.select("#slider33");
var slider_unemployment = d3.select("#slider14");
var slider_unemployment2 = d3.select("#slider24");
var slider_unemployment3 = d3.select("#slider34");
var happiness = d3.select("#happinessRating").text()
var valueSpan1 = d3.select('.valueSpan1');

// var Developed_countries = ["Luxembourg","Switzerland","Ireland","Norway","Iceland","Singapore","United States","Qatar","Denmark",
//                        "Australia","Netherlands","Sweden","Austria","Hong Kong","Finland","Germany","Canada","Belgium","Israel",
//                        "United Arab Emirates","United Kingdom","New Zealand","France","Japan","Italy","Kuwait","South Korea","Spain"] 

var developed_factors = ["Gender Gap",	"Power Distance",	"Democracy (value)",	"GDP per Cap",	"Buddhist",	"Immunization, Pol3 (% of one-year-old children)",	"Probability of dying among children ages 5-9 years (per 1,000)",	"Immunization, measles second dose (% of children by the nationally recommended age)",	"Probability of dying among youth ages 20-24 years (per 1,000)",	"Percentage of enrolment in lower secondary education in private institutions (%)"]
var developing_factors = ["GDP per Cap",	"Region_Latin America and Caribbean",	"Urbanization (rate)",	"Prison (per 100k)",	"Muslim",	"Stillbirth rate (per 1,000 total births)",	"Unemployment (%)",	"Holiday (Paid Days)",	"Homicide per 100k",	"Internet users (per 100 people)"]
var underdeveloped_factors = ["Probability of dying among adolescents ages 15-19 years (per 1,000)",	"Life expectancy at birth, female (years)",	"GDP per Cap",	"Buddhist",	"Probability of dying among adolescents ages 10-14 years (per 1,000)",	"Number of under-five deaths, female",	"Percentage of students in upper secondary general education who are female (%)",	"Age dependency ratio, old",	"Survival to age 65, female (% of cohort)",	"Number of infant deaths, female"]



function predict_developed() {
  var slider_GDP = d3.select("#slider10");
  var GDP_var = slider_GDP.node().value
  var slider_gendergap = d3.select("#slider11");
  var gender_var = slider_gendergap.node().value;
  var slider_powerdist  = d3.select("#slider12");
  var powerdist_var = slider_powerdist.node().value;
  var slider_democracy = d3.select("#slider13");
  var democracy_var = slider_democracy.node().value;
  var slider_unemployment = d3.select("#slider14");
  var unemployment_var = slider_unemployment.node().value;
  var happiness = d3.select("#happinessRating")
  happiness.text((20.6678753 + 0.339313064*gender_var +	0.005733453*powerdist_var+	0.0817029796*democracy_var+	0.0000038013303*GDP_var +	-0.0119318095*4.460714+	-0.169208238*83.877277+	-0.306708*2.90272+	0.123678531*43.201923+	0.0298041247*92.481969+	-0.00230462604*20.637344+	0.0276495569*8.628571+	0.0662814533*1.691071+	0.23932274*1.651037+	-0.00614714256*12.333519+	-0.178125132*48.516071+	-0.0119860879*unemployment_var+	-0.000767185692*22.109564))
  var valueSpan = d3.select('.valueSpan');
  valueSpan.text('$' + slider_GDP.node().value)
  var valueSpan1 = d3.select('.valueSpan1');
  valueSpan1.text(slider_gendergap.node().value)
  var valueSpan2 = d3.select('.valueSpan2');
  valueSpan2.text(slider_powerdist.node().value)
  var valueSpan3 = d3.select('.valueSpan3');
  valueSpan3.text(slider_democracy.node().value)
  var valueSpan4 = d3.select('.valueSpan4');
  valueSpan4.text(slider_unemployment.node().value)

}

slider_GDP.on("input change", predict_developed);
slider_gendergap.on("input change", predict_developed);
slider_powerdist.on("input change", predict_developed);
slider_democracy.on("input change", predict_developed);
slider_unemployment.on("input change", predict_developed);

function predict_developing() {
  var slider_GDP2 = d3.select("#slider20");
  var GDP_var2 = slider_GDP2.node().value
  var slider_gendergap2 = d3.select("#slider21");
  var gender_var2 = slider_gendergap2.node().value;
  var slider_powerdist2  = d3.select("#slider22");
  var powerdist_var2 = slider_powerdist2.node().value;
  var slider_democracy2 = d3.select("#slider23");
  var democracy_var2 = slider_democracy2.node().value;
  var slider_unemployment2 = d3.select("#slider24");
  var unemployment_var2 = slider_unemployment2.node().value;
  var happiness = d3.select("#happinessRating")
  // happiness.text((7.20858377+0.0000436001162*GDP_var2+	0.649892936*latin_var+	-0.00000438269722*urban_var+	0.000916975114*prisoner_var+	0.00408376106*27.62557+	0.0013198268*77.465804+	-0.0309684699*unemployment_var2+	-0.0170685775*28.006329+	0.00218685798*7.436076+	-0.000266126924*59.587128+	0.0217996724*49.747762+	0.022154222*53.176273+	-0.0309722649*0.890385+	-0.0118951106*49.653165+	-0.0738213445*49.170035+	0.000559339639*6.483244+	0.00288623086*4.716948+	-0.00471223511*54.366087+	0.00808978118*99.184332+	-0.00385583168*24.260545+	-0.187830495*0.996516+	0.000041561858*1155.336959+	-0.155274792*1.350043))
  var valueSpan5 = d3.select('.valueSpan5');
  valueSpan5.text('$' + slider_GDP2.node().value)
  var valueSpan6 = d3.select('.valueSpan6');
  valueSpan6.text(slider_gendergap2.node().value)
  var valueSpan7 = d3.select('.valueSpan7');
  valueSpan7.text(slider_powerdist2.node().value);
  var valueSpan8 = d3.select('.valueSpan8');
  valueSpan8.text(slider_democracy2.node().value);
  var valueSpan9 = d3.select('.valueSpan9');
  valueSpan9.text(slider_unemployment2.node().value);

}

slider_GDP2.on("input change", predict_developing);
slider_gendergap2.on("input change", predict_developing);
slider_powerdist2.on("input change", predict_developing);
slider_democracy2.on("input change", predict_developing);
slider_unemployment2.on("input change", predict_developing);

function predict_underdeveloped() {
  var slider_GDP = d3.select("#slider30");
  var GDP_var = slider_GDP.node().value
  var slider_gendergap = d3.select("#slider31");
  var gender_var = slider_gendergap.node().value;
  var slider_powerdist  = d3.select("#slider32");
  var powerdist_var = slider_powerdist.node().value;
  var slider_democracy = d3.select("#slider33");
  var democracy_var = slider_democracy.node().value;
  var slider_unemployment = d3.select("#slider34");
  var unemployment_var = slider_unemployment.node().value;
  var happiness = d3.select("#happinessRating")
  happiness.text((4.40 + 0.339313064*gender_var +	0.005733453*powerdist_var+	0.0817029796*democracy_var+	0.0000038013303*GDP_var +	-0.0119318095*4.460714+	-0.169208238*83.877277+	-0.306708*2.90272+	0.123678531*43.201923+	0.0298041247*92.481969+	-0.00230462604*20.637344+	0.0276495569*8.628571+	0.0662814533*1.691071+	0.23932274*1.651037+	-0.00614714256*12.333519+	-0.178125132*48.516071+	-0.0119860879*unemployment_var+	-0.000767185692*22.109564))
  var valueSpan = d3.select('.valueSpan');
  valueSpan.text('$' + slider_GDP.node().value)
  var valueSpan1 = d3.select('.valueSpan1');
  valueSpan1.text(slider_gendergap.node().value)
  var valueSpan2 = d3.select('.valueSpan2');
  valueSpan2.text(slider_powerdist.node().value)
  var valueSpan3 = d3.select('.valueSpan3');
  valueSpan3.text(slider_democracy.node().value)
  var valueSpan4 = d3.select('.valueSpan4');
  valueSpan4.text(slider_unemployment.node().value)
  
}

slider_GDP3.on("input change", predict_underdeveloped);
slider_gendergap3.on("input change", predict_underdeveloped);
slider_powerdist3.on("input change", predict_underdeveloped);
slider_democracy3.on("input change", predict_underdeveloped);
slider_unemployment3.on("input change", predict_underdeveloped);


function dropdownUpdate() {
  var dropdown = d3.select('#selDataset').property("value");
  var sli_developed = d3.select('#developed_sliders')
  var sli_developing = d3.select('#developing_sliders')
  var sli_underdeveloped = d3.select('#underdeveloped_sliders')
  var developed_list = d3.select('#developed_factors')
  var developing_list = d3.select('#developing_factors')
  var underdeveloped_list = d3.select('#underdeveloped_factors')
  var happiness = d3.select("#happinessRating")
  if (dropdown === "Developing") {
    sli_developed.node().style.display = "none"
    sli_developing.node().style.display = "inline"
    sli_underdeveloped.node().style.display = "none"
    // default = 5.45
    developed_list.node().style.display = "none"
    developing_list.node().style.display = "inline"
    underdeveloped_list.node().style.display = "none"

    // x.forEach((item) => {
    //   item.remove();
    // });
    // developing_factors.forEach((country) => {
    //   var opt = country_list.append("option");
    //   opt.text(country);
    // });
  }
  else if (dropdown === "Developed") {
    sli_developed.node().style.display = "inline"
    sli_developing.node().style.display = "none"
    sli_underdeveloped.node().style.display = "none"
    happiness.text((20.6678753 + 0.339313064*0.7 +	0.005733453*40+	0.0817029796*8+	0.0000038013303*50000 +	-0.0119318095*4.460714+	-0.169208238*83.877277+	-0.306708*2.90272+	0.123678531*43.201923+	0.0298041247*92.481969+	-0.00230462604*20.637344+	0.0276495569*8.628571+	0.0662814533*1.691071+	0.23932274*1.651037+	-0.00614714256*12.333519+	-0.178125132*48.516071+	-0.0119860879*6.5+	-0.000767185692*22.109564))
    developed_list.node().style.display = "inline"
    developing_list.node().style.display = "none"
    underdeveloped_list.node().style.display = "none"
  }
  else if (dropdown === "Underdeveloped") {
    sli_developed.node().style.display = "none"
    sli_developing.node().style.display = "none"
    sli_underdeveloped.node().style.display = "inline"
    developed_list.node().style.display = "none"
    developing_list.node().style.display = "none"
    underdeveloped_list.node().style.display = "inline"
  }  

}


d3.select('#selDataset').on("change", dropdownUpdate);

console.log(7.0858377+0.0000436001162*9124.017443+	0.649892936*0.265823+	-0.00000438269722*65.37013+	0.000916975114*195.772152+	0.00408376106*27.62557+	0.0013198268*77.465804+	-0.0309684699*8.474359+	-0.0170685775*28.006329+	0.00218685798*7.436076+	-0.000266126924*59.587128+	0.0217996724*49.747762+	0.022154222*53.176273+	-0.0309722649*0.890385+	-0.0118951106*49.653165+	-0.0738213445*49.170035+	0.000559339639*6.483244+	0.00288623086*4.716948+	-0.00471223511*54.366087+	0.00808978118*99.184332+	-0.00385583168*24.260545+	-0.187830495*0.996516+	0.000041561858*1155.336959+	-0.155274792*1.350043)

// var country_list = d3.select('#country_list')
// console.log(country_list.selectAll("option")).