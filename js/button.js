var workSites = [
	"https://perfectsense.atlassian.net/issues/?filter=-1"
	];

var opsSites = [
	"https://zabbix.psdops.com/dashboard.php",
	"https://beam-enterprise.psdops.com"
	];

var playSites = [
	"http://lifehacker.com/",
	"https://www.buzzfeed.com/",
	"http://deals.kinja.com/"
	];

$(document).ready(function(){
$('a.workLink').click(function(e) {
    console.log("hit the work button");	
    e.preventDefault();
    for (w in workSites) {
    	window.open(workSites[w]);
    }
});

$('a.opsLink').click(function(e) {
    e.preventDefault();
    for (o in opsSites) {
    	window.open(opsSites[o]);
    }
});
$('a.playLink').click(function(e) {
    console.log("hit the play button");
    e.preventDefault();
    for (p in playSites) {
    	window.open(playSites[p]);
    }
});
});
