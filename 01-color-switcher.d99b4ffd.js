function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}document.querySelector("body").insertAdjacentHTML("afterbegin","\n<style>\nbutton {\n      height: 100px;\n      width: 200px;\n      text-transform: uppercase;\n      font-size: 40px;\n      cursor: pointer;\n        margin: 0;\n        position: absolute;\n        top: 40%;\n        -ms-transform: translateY(-50%, -50%);\n        transform: translateY(-50%, -50%);\n  }\n  button[data-start] {\n        left: 38%;\n  }\n    button[data-stop] {\n        left: 50%;\n  }\n  </style>");const n=document.querySelector("body"),e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");let r=null;e.disabled=!1,o.disabled=!0,e.addEventListener("click",(function(){e.disabled=!0,o.disabled=!1;const a=t();n.style.backgroundColor=a,r=setInterval((()=>{const e=t();n.style.backgroundColor=e}),1e3)})),o.addEventListener("click",(function(){clearInterval(r),e.disabled=!1,o.disabled=!0}));
//# sourceMappingURL=01-color-switcher.d99b4ffd.js.map
