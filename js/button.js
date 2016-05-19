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
$('a.link').mouseenter(function () {
    console.log("mouse enter");
    $(this).data('timeout', setTimeout(function () {
        setSubVisible();
    }, 500));
}).mouseleave(function () {
    clearTimeout($(this).data('timeout'));
    $(this).data('timeout', setTimeout(function () {
        setSubInVisible();
    }, 500));
});
createSubmenu();
});
function setSubInVisible() {
	console.log("set to invisible");
	$("ul.submenu").fadeOut(1000);
}
function setSubVisible() {
	console.log("set to visible");
	$("ul.submenu").fadeIn(1000);
}

function createSubmenu() {
	var getLocation = function(href) {
    		var l = document.createElement("a");
    		l.href = href;
    		return l;
		};
	for (p in playSites) {
	var a = $("<a />", {
		class : "fa fa-lg fa-circle",
		href : playSites[p],
		target : "_blank"
	});
	li = $("<li />", {
		class: "sub"
	});
	var l = getLocation(playSites[p]);
	var span = $("<span />", {
		text : l.hostname
	});
	li.append(a);
	//li.append(span);
	$('ul.submenu').append(li);
	}
}
