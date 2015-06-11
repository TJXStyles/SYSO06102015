/*-------------------------------------------

    Title :  Shen Yun local 2015
    Usage :  common JS
    Edited:  2015-03-28

---------------------------------------------*/



/*  Ready
---------------------------------------------*/

jQuery(document).ready(function($) {

	// IE8 fixes

	if (ltIE9) {

		$('input[type="checkbox"] + label').prepend('<span class="before"></span>').click(function() { $(this).toggleClass('checked') });

	}


	// common elements

	$('[placeholder]')
		.placeholder()
		.addClass('js')
		.focus(function() {
			if (!Modernizr.placeholder) this.defaultValue = $(this).attr('placeholder');
			$(this).addClass('entered');
			if (!this.onblur) $(this).blur(function() { if (this.value == this.defaultValue) $(this).removeClass('entered') });
		});

});



/*  Browser Sniffing
---------------------------------------------*/

if (window.attachEvent || /Trident.+rv:/.test(navigator.userAgent)) {
	var version = /(?:MSIE\s|rv:)(\d+)/.exec(navigator.userAgent)[1];
	jQuery('html').addClass('ie').addClass('ie' + version);
	switch (version) {
		case  '8': var isIE8  = true; break;
		case  '9': var isIE9  = true; break;
		case '10': var isIE10 = true; break;
		case '11': var isIE11 = true; break;
	}
	if (version < 9) {
		var ltIE9 = true;
	}
	else {
		jQuery('html').addClass('newer');
	}
}
else if (window.opera) {
	jQuery('html').addClass('opera older');
}
else if (window.mozInnerScreenX != null) {
	jQuery('html').addClass('moz');
}
else if (window.webkitConvertPointFromNodeToPage || window.webkitStorageInfo) {
	jQuery('html').addClass('webkit')
	              .addClass(navigator.userAgent.indexOf('CriOS') != -1 ? 'chrome' : navigator.userAgent.indexOf('OPR') != -1 ? 'opera newer' : /android|chrome|safari/i.exec(navigator.userAgent).toString().toLowerCase())
	              .addClass(/(ipod|iphone|ipad)/i.exec(navigator.platform) ? 'ios ' + RegExp.$1.toString().toLowerCase() : '');
}



/*  Functions
---------------------------------------------*/

String.prototype.toInt = function() {
	return parseInt(this, 10);
}