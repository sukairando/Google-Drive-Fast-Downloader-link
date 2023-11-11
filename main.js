window.onload = function(){
document.getElementById("checkButton").onclick = function(){
var str2 = document.getElementById("link2").value;
var str = str2;
document.getElementById("result").innerHTML = "リンク　https://drive.google.com/uc?id="+str+"&export=download";
<script>
        var str = document.getElementById('text').value
        var regexp_url = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g; // ']))/;正規表現（/〜/）を解釈してくれないエディタ等で自動整形を崩さないため。
        var regexp_makeLink = function(all, url, h, href) {
        return '<a href="h' + href + '" target="_blank">' + url + '</a>';
        }
        var textWithLink = str.replace(regexp_url, regexp_makeLink);
        document.getElementById('result').innerHTML = textWithLink
        }
</script>
}
}
