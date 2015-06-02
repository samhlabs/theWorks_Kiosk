/*!
  hey, [be]Lazy.js - v1.2.2 - 2014.05.04 
  A lazy loading and multi-serving image script
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
!function(e){"function"==typeof define&&define.amd?define(e):window.Blazy=e()}(function(){"use strict";function e(e){if(!document.querySelectorAll){var n=document.createStyleSheet();document.querySelectorAll=function(e,t,r,o,s){for(s=document.all,t=[],e=e.replace(/\[for\b/gi,"[htmlFor").split(","),r=e.length;r--;){for(n.addRule(e[r],"k:v"),o=s.length;o--;)s[o].currentStyle.k&&t.push(s[o]);n.removeRule(0)}return t}}y=!0,w=[],m=e||{},m.error=m.error||!1,m.offset=m.offset||100,m.success=m.success||!1,m.selector=m.selector||".b-lazy",m.separator=m.separator||"|",m.container=m.container?document.querySelectorAll(m.container):!1,m.errorClass=m.errorClass||"b-error",m.breakpoints=m.breakpoints||!1,m.successClass=m.successClass||"b-loaded",m.src=d=m.src||"data-src",g=window.devicePixelRatio>1,b=f(r,25),C=f(i,50),i(),u(m.breakpoints,function(e){return e.width>=window.screen.width?(d=e.src,!1):void 0}),t()}function t(){c(m.selector),y&&(y=!1,m.container&&u(m.container,function(e){a(e,"scroll",b)}),a(window,"resize",C),a(window,"resize",b),a(window,"scroll",b)),r()}function r(){for(var t=0;h>t;t++){var r=w[t];(o(r)||s(r))&&(e.prototype.load(r),w.splice(t,1),h--,t--)}0===h&&e.prototype.destroy()}function n(e){if(e.offsetWidth>0&&e.offsetHeight>0){var t=e.getAttribute(d)||e.getAttribute(m.src);if(t){var r=t.split(m.separator),n=r[g&&r.length>1?1:0],o=new Image;u(m.breakpoints,function(t){e.removeAttribute(t.src)}),e.removeAttribute(m.src),o.onerror=function(){m.error&&m.error(e,"invalid"),e.className=e.className+" "+m.errorClass},o.onload=function(){"img"===e.nodeName.toLowerCase()?e.src=n:e.style.backgroundImage='url("'+n+'")',e.className=e.className+" "+m.successClass,m.success&&m.success(e)},o.src=n}else m.error&&m.error(e,"missing"),e.className=e.className+" "+m.errorClass}}function o(e){var t=e.getBoundingClientRect(),r=p+m.offset;return t.left>=0&&t.right<=v+m.offset&&(t.top>=0&&t.top<=r||t.bottom<=r&&t.bottom>=0-m.offset)}function s(e){return-1!==(" "+e.className+" ").indexOf(" "+m.successClass+" ")}function c(e){var t=document.querySelectorAll(e);h=t.length;for(var r=h;r--;w.unshift(t[r]));}function i(){p=window.innerHeight||document.documentElement.clientHeight,v=window.innerWidth||document.documentElement.clientWidth}function a(e,t,r){e.attachEvent?e.attachEvent&&e.attachEvent("on"+t,r):e.addEventListener(t,r,!1)}function l(e,t,r){e.detachEvent?e.detachEvent&&e.detachEvent("on"+t,r):e.removeEventListener(t,r,!1)}function u(e,t){if(e&&t)for(var r=e.length,n=0;r>n&&t(e[n],n)!==!1;n++);}function f(e,t){var r=0;return function(){var n=+new Date;t>n-r||(r=n,e.apply(w,arguments))}}var d,m,v,p,w,h,g,y,b,C;return e.prototype.revalidate=function(){t()},e.prototype.load=function(e){s(e)||n(e)},e.prototype.destroy=function(){m.container&&u(m.container,function(e){l(e,"scroll",b)}),l(window,"scroll",b),l(window,"resize",b),l(window,"resize",C),h=0,w.length=0,y=!0},e});

/**
 * Add Modernizr test for box sizing
 */
Modernizr.addTest("boxsizing", function(){
	return Modernizr.testAllProps("boxSizing") && (document.documentMode === undefined || document.documentMode > 7);
});

/**
 * Change the width of all elements to account for border-box
 */
$(function(){
	if(!($('html').hasClass('boxsizing'))){
		$('*').each(function(){
			if($(this).css('display')=='block'){
				var f, a, n;
				f = $(this).outerWidth();
				a = $(this).width();
				n = a-(f-a);
				$(this).css('width', n);
			}
		});
	}
});


;(function() {
    // Initialize
			
    var bLazy = new Blazy({ 
        breakpoints: [{}]
      , success: function(element){
	    setTimeout(function(){
		// We want to remove the loader gif now.
		// First we find the parent container
		// then we remove the "loading" class which holds the loader image
		var parent = element.parentNode;
		parent.className = parent.className.replace(/\bloading\b/,'');
	    }, 200);
        }
   });
})();

$(function(){
    $('.full-height').css({'height':(($(window).height()))+'px'});
    $(window).resize(function(){
    $('.full-height').css({'height':(($(window).height()))+'px'});
    });
});