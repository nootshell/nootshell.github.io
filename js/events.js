window.addEventListener('load', function() {
	var theClickables = document.querySelectorAll('[x-onclick]');
	
	if (theClickables && theClickables.length && theClickables.length > 0) {
		var element,
			fn;
		
		for (var i = theClickables.length; i-- > 0;) {
			element = theClickables[i];
			
			if (element) {
				fn = window[element.getAttribute('x-onclick')];
				if (typeof(fn) !== 'function') {
					continue;
				}
				
				element.addEventListener('click', fn);
			}
		}
	}
}, false);
