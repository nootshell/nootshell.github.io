window.addEventListener('load', function() {
	var ic = document.getElementById('italian_counter');
	if (ic) {
		window.italian_counter = ic;
		window.italian_counter_date = new Date('2016-11-27');
		window.italian_counter_timestamp = window.italian_counter_date.getTime();

		var func = null;
		window.italian_counter_handle = setInterval(func = function() {
			var secs = (Math.round(((new Date()).getTime() - window.italian_counter_timestamp) / 10) / 100);
			var days = (secs / (60*60*24));
			window.italian_counter.innerText = days.toFixed(5);
		}, 200);
		func();
	}
}, false);
