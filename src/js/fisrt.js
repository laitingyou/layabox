/**
 * Created by lty on 2017/4/26.
 */
(function(){
var a=123,b=4;
function add (a,b) {

    var h1=document.getElementsByTagName('h1')[0].innerHTML=a+b;
    console.log(h1);
};
add(a,b);
})();