/*******************************************************************************
**                                                                            **
**   The MIT License                                                          **
**                                                                            **
**   Copyright 2017 icecubetray                                               **
**                                                                            **
**   Permission is hereby granted, free of charge, to any person              **
**   obtaining a copy of this software and associated documentation files     **
**   (the "Software"), to deal in the Software without restriction,           **
**   including without limitation the rights to use, copy, modify, merge,     **
**   publish, distribute, sublicense, and/or sell copies of the Software,     **
**   and to permit persons to whom the Software is furnished to do so,        **
**   subject to the following conditions:                                     **
**                                                                            **
**   The above copyright notice and this permission notice shall be           **
**   included in all copies or substantial portions of the Software.          **
**                                                                            **
**   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,          **
**   EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF       **
**   MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.   **
**   IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY     **
**   CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,     **
**   TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE        **
**   SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.                   **
**                                                                            **
********************************************************************************
**
**  Notes:
**    -
**
*/

var MODE_UP		= 1;
var MODE_MILLIS = 2;
var MODE_SECS	= (  4 | MODE_MILLIS );
var MODE_MINS	= (  8 | MODE_SECS	 );
var MODE_HOURS	= ( 16 | MODE_MINS	 );
var MODE_DAYS	= ( 32 | MODE_HOURS	 );

var Counter = class {
	constructor(mode, date, element, decimals, interval, on_func) {
		this.up = (mode ? ((mode & MODE_UP) == MODE_UP) : false);
		this.mode = (mode & MODE_DAYS);
		this.date = date;
		this.date_timestamp = this.date.getTime();
		this.element = element;
		this.decimals = decimals;
		this.interval = interval;

		this.func = function(instance) {
			var t = ((instance.up ? (new Date()).getTime() : instance.date_timestamp) - (instance.up ? instance.date_timestamp : (new Date()).getTime()));

			if ((instance.mode & MODE_SECS) == MODE_SECS) {
				t /= 1000;
			}
			if ((instance.mode & MODE_MINS) == MODE_MINS) {
				t /= 60;
			}
			if ((instance.mode & MODE_HOURS) == MODE_HOURS) {
				t /= 60;
			}
			if ((instance.mode & MODE_DAYS) == MODE_DAYS) {
				t /= 24;
			}

			if (on_func) {
				on_func(instance, t);
			} else {
				instance.element.innerText = t.toFixed(instance.decimals);
			}
		};
	}

	start() {
		if (this.handle) {
			clearInterval(this.handle);
		}

		var _this = this,
			func = this.func;

		this.handle = setInterval(function() { func(_this); }, this.interval);
		this.func(this);

		return this.handle;
	}
};
