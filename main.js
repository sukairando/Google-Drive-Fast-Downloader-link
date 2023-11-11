window.onload = function(){
document.getElementById("checkButton").onclick = function(){
var str2 = document.getElementById("link2").value;
var str = str2;
document.getElementById("result").innerHTML = "リンク　https://drive.google.com/uc?id="+str+"&export=download";
}
}
