function add_script(src) {
	var e = document.createElement('script');
	e.setAttribute('type', 'text/javascript');
	e.setAttribute('language', 'javascript');
	e.setAttribute('src', src);
	document.head.appendChild(e);
}

function set_theme_dark(enabled,setcookie) {
	window.theme_link.setAttribute('href', './style/override.' + (enabled ? 'dark' : 'none') + '.css');
	if (setcookie) {
		Cookies.set('theme_dark', (enabled ? 'y' : 'n'));
	}
}
