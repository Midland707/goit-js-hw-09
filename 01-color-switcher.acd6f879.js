!function(){const o=document.querySelector("body"),t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let n=null;t.addEventListener("click",(function(){console.log("Start"),n=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;o.style.backgroundColor=t,console.log(`Random color =${t}`)}),1e3)})),e.addEventListener("click",(function(){console.log("Stop"),clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.acd6f879.js.map
