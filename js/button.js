$(document).ready(function(){
$('a.workLink').click(function(e) {
    console.log("hit the work button");	
    e.preventDefault();
    window.open('https://perfectsense.atlassian.net/issues/?filter=-1');
});

$('a.opsLink').click(function(e) {
    e.preventDefault();
    window.open('https://zabbix.psdops.com/dashboard.php');
});
$('a.playLink').click(function(e) {
    console.log("hit the play button");
    e.preventDefault();
    window.open('http://lifehacker.com/');
    window.open('https://www.buzzfeed.com/');
    window.open('http://deals.kinja.com/');
});
});
