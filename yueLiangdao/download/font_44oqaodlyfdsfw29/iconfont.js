(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-phone" viewBox="0 0 1024 1024">'+""+'<path d="M718.2336 0 254.464 0C212.8384 0 179.2 31.9232 179.2 71.168l0 881.5872C179.2 991.8976 212.8384 1024 254.464 1024l463.8208 0C760.0896 1024 793.6 991.8976 793.6 952.7552L793.6 71.168C793.4976 31.9232 760.0128 0 718.2336 0L718.2336 0zM475.0592 994.9952c-20.8128 0-37.6064-15.9488-37.6064-35.6864 0-19.5328 16.768-35.584 37.6064-35.584 20.7104 0 37.5552 16.0512 37.5552 35.584C512.5888 979.1232 495.744 994.9952 475.0592 994.9952L475.0592 994.9952zM750.4384 892.7488 222.2592 892.7488 222.2592 46.6688l528.2048 0L750.464 892.7488 750.4384 892.7488zM750.4384 892.7488"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-xiala" viewBox="0 0 1024 1024">'+""+'<path d="M536.378224 755.163135 0.021489 267.572058l1023.957021 0L536.378224 755.163135z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)