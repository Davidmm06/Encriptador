function alfabeto(o,e){for(var r=0;r<o;r++)"a"===e[r]?e[r]=1:"b"===e[r]?e[r]=2:"c"===e[r]?e[r]=3:"d"===e[r]?e[r]=4:"e"===e[r]?e[r]=5:"f"===e[r]?e[r]=6:"g"===e[r]?e[r]=7:"h"===e[r]?e[r]=8:"i"===e[r]?e[r]=9:"j"===e[r]?e[r]=10:"k"===e[r]?e[r]=11:"l"===e[r]?e[r]=12:"m"===e[r]?e[r]=13:"n"===e[r]?e[r]=14:"ñ"===e[r]?e[r]=15:"o"===e[r]?e[r]=16:"p"===e[r]?e[r]=17:"q"===e[r]?e[r]=18:"r"===e[r]?e[r]=19:"s"===e[r]?e[r]=20:"t"===e[r]?e[r]=21:"u"===e[r]?e[r]=22:"v"===e[r]?e[r]=23:"w"===e[r]?e[r]=24:"x"===e[r]?e[r]=25:"y"===e[r]?e[r]=26:"z"===e[r]?e[r]=27:" "===e[r]&&(e[r]=e[r].charCodeAt(0))}function codificar(o){var e=[],r=o.value;r=r.toLowerCase();var t=Array.from(r);t.reverse();var c=t.length;alfabeto(c,t);for(var a=0;a<c;a++)t[a]%2==0&&(e[a]=a,2===t[a]?(t[a]="b",t[a]=t[a].charCodeAt(0)):4===t[a]?(t[a]="d",t[a]=t[a].charCodeAt(0)):6===t[a]?(t[a]="f",t[a]=t[a].charCodeAt(0)):8===t[a]?(t[a]="h",t[a]=t[a].charCodeAt(0)):10===t[a]?(t[a]="j",t[a]=t[a].charCodeAt(0)):12===t[a]?(t[a]="l",t[a]=t[a].charCodeAt(0)):14===t[a]?(t[a]="n",t[a]=t[a].charCodeAt(0)):16===t[a]?(t[a]="o",t[a]=t[a].charCodeAt(0)):18===t[a]?(t[a]="q",t[a]=t[a].charCodeAt(0)):20===t[a]?(t[a]="s",t[a]=t[a].charCodeAt(0)):22===t[a]?(t[a]="u",t[a]=t[a].charCodeAt(0)):24===t[a]?(t[a]="w",t[a]=t[a].charCodeAt(0)):26===t[a]&&(t[a]="y",t[a]=t[a].charCodeAt(0)));return t.unshift(c),e=e.filter(o=>null!=o),t=t.concat(e),output=t.join(","),console.log("vector unido: ",t),t}function decodificar(o){var e=(a=o.value.split(",").map(Number)).shift(),r=a.length,t=a.slice(e,r),c=t.length,a=a.slice(0,e);console.log("array1",a),console.log("arraytemp",t),console.log("longitud",e),console.log("longitudtotal",r),console.log("longitudtemp",c);for(var n=0;n<e;n++){for(var i=0;i<c;i++)n===t[i]&&(a[n]=String.fromCharCode(a[n]),console.log("letra",a[n]));1===a[n]?a[n]="a":3===a[n]?a[n]="c":5===a[n]?a[n]="e":7===a[n]?a[n]="g":9===a[n]?a[n]="i":11===a[n]?a[n]="k":13===a[n]?a[n]="m":15===a[n]?a[n]="ñ":17===a[n]?a[n]="p":19===a[n]?a[n]="r":21===a[n]?a[n]="t":23===a[n]?a[n]="v":25===a[n]?a[n]="x":27===a[n]&&(a[n]="z")}return a.reverse(),output=a.join(""),console.log("vector decodificado",a),a}function decodificar2(o,e){var r=o.length,t=e.length;console.log("longitud",r);for(var c=0;c<r;c++){for(var a=0;a<t;a++)c===e[a]&&(o[c]=String.fromCharCode(o[c]),console.log("letra",o[c]));1===o[c]?o[c]="a":3===o[c]?o[c]="c":5===o[c]?o[c]="e":7===o[c]?o[c]="g":9===o[c]?o[c]="i":11===o[c]?o[c]="k":13===o[c]?o[c]="m":15===o[c]?o[c]="ñ":17===o[c]?o[c]="p":19===o[c]?o[c]="r":21===o[c]?o[c]="t":23===o[c]?o[c]="v":25===o[c]?o[c]="x":27===o[c]&&(o[c]="z")}return o.reverse(),output=o.join(""),console.log("vector decodificado",o),o}function imprimir(o){console.log("valor de entrada",input.value),console.log("vector codificado",o),console.log("Tu mensaje codificado es ",output)}function ejecutar(){imprimir(array1=codificar(input)),alert("Tu menmsaje codificado es: "+output)}function ejecutar2(){decodificar(input),console.log(output),alert("El mensaje es: "+output)}var output,input=document.querySelector(".input"),array1=new Array;input.addEventListener("keypress",(function(o){"Enter"===o.key&&(ejecutar(),o.preventDefault())}));var codificarbtn=document.querySelector(".codificar");codificarbtn.onclick=ejecutar,document.querySelector(".decodificar").onclick=ejecutar2;
//# sourceMappingURL=App.js.map