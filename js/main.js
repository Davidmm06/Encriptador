function alfabeto(e,r){for(var t=0;t<e;t++)"a"===r[t]?r[t]=1:"b"===r[t]?r[t]=2:"c"===r[t]?r[t]=3:"d"===r[t]?r[t]=4:"e"===r[t]?r[t]=5:"f"===r[t]?r[t]=6:"g"===r[t]?r[t]=7:"h"===r[t]?r[t]=8:"i"===r[t]?r[t]=9:"j"===r[t]?r[t]=10:"k"===r[t]?r[t]=11:"l"===r[t]?r[t]=12:"m"===r[t]?r[t]=13:"n"===r[t]?r[t]=14:"ñ"===r[t]?r[t]=15:"o"===r[t]?r[t]=16:"p"===r[t]?r[t]=17:"q"===r[t]?r[t]=18:"r"===r[t]?r[t]=19:"s"===r[t]?r[t]=20:"t"===r[t]?r[t]=21:"u"===r[t]?r[t]=22:"v"===r[t]?r[t]=23:"w"===r[t]?r[t]=24:"x"===r[t]?r[t]=25:"y"===r[t]?r[t]=26:"z"===r[t]?r[t]=27:" "===r[t]&&(r[t]=r[t].charCodeAt(0))}function codificar(e){var r=[],t=e.value;t=t.toLowerCase();var a=Array.from(t);a.reverse();var o=a.length;alfabeto(o,a);for(var c=0;c<o;c++)a[c]%2==0&&(r[c]=c,2===a[c]?(a[c]="b",a[c]=a[c].charCodeAt(0)):4===a[c]?(a[c]="d",a[c]=a[c].charCodeAt(0)):6===a[c]?(a[c]="f",a[c]=a[c].charCodeAt(0)):8===a[c]?(a[c]="h",a[c]=a[c].charCodeAt(0)):10===a[c]?(a[c]="j",a[c]=a[c].charCodeAt(0)):12===a[c]?(a[c]="l",a[c]=a[c].charCodeAt(0)):14===a[c]?(a[c]="n",a[c]=a[c].charCodeAt(0)):16===a[c]?(a[c]="o",a[c]=a[c].charCodeAt(0)):18===a[c]?(a[c]="q",a[c]=a[c].charCodeAt(0)):20===a[c]?(a[c]="s",a[c]=a[c].charCodeAt(0)):22===a[c]?(a[c]="u",a[c]=a[c].charCodeAt(0)):24===a[c]?(a[c]="w",a[c]=a[c].charCodeAt(0)):26===a[c]&&(a[c]="y",a[c]=a[c].charCodeAt(0)));return a.unshift(o),r=r.filter(e=>null!=e),a=a.concat(r),output=a.join(","),a}function decodificar(e){for(var r=(c=e.value.split(",").map(Number)).shift(),t=c.length,a=c.slice(r,t),o=a.length,c=c.slice(0,r),n=0;n<r;n++){for(var u=0;u<o;u++)n===a[u]&&(c[n]=String.fromCharCode(c[n]));1===c[n]?c[n]="a":3===c[n]?c[n]="c":5===c[n]?c[n]="e":7===c[n]?c[n]="g":9===c[n]?c[n]="i":11===c[n]?c[n]="k":13===c[n]?c[n]="m":15===c[n]?c[n]="ñ":17===c[n]?c[n]="p":19===c[n]?c[n]="r":21===c[n]?c[n]="t":23===c[n]?c[n]="v":25===c[n]?c[n]="x":27===c[n]&&(c[n]="z")}return c.reverse(),output=c.join(""),c}function decodificar2(e,r){for(var t=e.length,a=r.length,o=0;o<t;o++){for(var c=0;c<a;c++)o===r[c]&&(e[o]=String.fromCharCode(e[o]));1===e[o]?e[o]="a":3===e[o]?e[o]="c":5===e[o]?e[o]="e":7===e[o]?e[o]="g":9===e[o]?e[o]="i":11===e[o]?e[o]="k":13===e[o]?e[o]="m":15===e[o]?e[o]="ñ":17===e[o]?e[o]="p":19===e[o]?e[o]="r":21===e[o]?e[o]="t":23===e[o]?e[o]="v":25===e[o]?e[o]="x":27===e[o]&&(e[o]="z")}return e.reverse(),output=e.join(""),e}function ejecutar(){array1=codificar(input),document.getElementsByClassName("input")[0].value=output}function ejecutar2(){decodificar(input),document.getElementsByClassName("input")[0].value=output}
//# sourceMappingURL=main.js.map
