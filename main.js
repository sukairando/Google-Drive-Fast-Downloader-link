window.onload = function(){
document.getElementById("checkButton").onclick = function(){
var str1 = document.getElementById("link1").value;
var str2 = document.getElementById("link2").value;
var str3 = document.getElementById("link3").value;
var str = str1 + str2 +str3;
document.getElementById("result").innerHTML = "リンク"+str+";
}
}
