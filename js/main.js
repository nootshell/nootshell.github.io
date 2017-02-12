add_script('./js/lib/counter.js');
//add_script('./js/lib/js.cookie.js');

window.addEventListener('load', function() {
	(window.italian_counter = new Counter((MODE_UP | MODE_DAYS), new Date('2016-11-27'), document.getElementById('italian_counter'), 4, 1000)).start();
}, false);
