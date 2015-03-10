var win1 = Titanium.UI.createWindow({
		title:'Select Color',
		backgroundColor:'#fff'
	});
	// open window
	win1.open();
	
var Teas = ['#F5F5DC','#FFE4B5','#FFE4C4','#D2B48C','#C3B091','#C3B091','#926F5B','#804000','#654321','#3D2B1F'];
allRows = [];
var theColours = Ti.UI.createTableView({});
for (var i=0; i<Teas.length; i++) {
	theRow = Ti.UI.createTableViewRow ({backgroundColor:
		Teas[i], height:50, TeaColour:Teas [i]});
		allRows.push(theRow);
}
theColours.setData(allRows);
win1.add(theColours);

function getVerdict(Colour) {
	var indicator = Colour.charAt (1);
	var msg;
	//Make a crude decision on the strength of the tea based on the 2nd character of the hex color
	switch(indicator) {
		case 'F':msg = 'Milky'; break;
		case 'D':msg = 'Nice'; break;
		case 'C':msg = 'Perfect'; break;
		case '9':msg = 'A bit strong'; break;
		case '8':msg = 'Builders tea'; break;
		case '6':msg = 'Send it back'; break;
		case '3':msg = 'No milk here'; break;
	}
	return msg;
};
function showTeaVerdict(_args) {
	var teaVerdict = Ti.UI.createWindow ({layout:'vertical'});
	
	teaVerdict.backgroundColor = _args;
	teaVerdict.msg = getVerdict(_args);
	var judgement = Ti.UI.createLabel
	({text:teaVerdict.msg, top:'50%'});
	var close = Ti.UI.createButton
	({title: 'Choose again', top:'25%'});
	close.addEventListener('click', function(e)
	{teaVerdict.close();
		//release the resources
		teaVerdict = null;
		});
	
	teaVerdict.add(judgement);
	teaVerdict.add(close);
	teaVerdict.open();
}
theColours.addEventListener('click', function(e)
{showTeaVerdict(e.source.TeaColour);});


var win2 = Titanium.UI.createWindow({
		title:'Select Color',
		backgroundColor:'#fff'
	});
	
var NavButton1 = Ti.UI.createButton({
title: 'Maps',
color: '#FFFFFF',
width: '100%',
top: 500,
height: 40,
backgroundColor: '#000000',
font: {
fontSize: '30sp',
fontWeight: 'bold'
},
});

win1.add(NavButton1);

NavButton1.addEventListener('click', function() {
win2.open();
});

var win2 = Titanium.UI.createWindow({  
    backgroundColor:'#FFF'
});

var NavButton2 = Ti.UI.createButton({
title: 'Tea',
color: '#FFFFFF',
top: 500,
width: '100%',
height: 40,
backgroundColor: '#000000',
font: {
fontSize: '30sp',
fontWeight: 'bold'
}
});

win2.add(NavButton2);

NavButton2.addEventListener('click', function() {
Ti.API.info('Clicked Home Button');
win2.close();
});







var Map = require('ti.map');
var mapview = Map.createView({mapType:Map.NORMAL_TYPE});

var Map = require('ti.map');
var win2 = Titanium.UI.createWindow();

var mountainView = Map.createAnnotation({
    latitude:37.390749,
    longitude:-122.081651,
    title:"Appcelerator Headquarters",
    subtitle:'Mountain View, CA',
    pincolor:Map.ANNOTATION_RED,
    myid:1 // Custom property to uniquely identify this annotation.
});

var mapview = Map.createView({
    mapType: Map.NORMAL_TYPE,
    region: {latitude:33.74511, longitude:-84.38993,
            latitudeDelta:0.01, longitudeDelta:0.01},
    animate:true,
    regionFit:true,
    userLocation:true,
    annotations:[mountainView]
});

win2.add(mapview);
// Handle click events on any annotations on this map.
mapview.addEventListener('click', function(evt) {
    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
});
win2.open();