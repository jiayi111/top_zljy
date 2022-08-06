$(function () {
    var now = new Date()
    function time() {
      
        t_div = document.getElementById('showtime');
        var now = new Date()
         
        t_div.innerHTML = "填表时间" + now.getFullYear()
         + "年" + (now.getMonth() + 1) + "月" + now.getDate()
         + "日" + now.getHours() + "时" + now.getMinutes()
         + "分" + now.getSeconds() + "秒";
       
        setTimeout(time, 1000);
    }
    time();
    t_span = document.getElementById('spantime');
    t_span.innerHTML = now.getFullYear()
     + "年" + (now.getMonth() + 1) + "月" + now.getDate()
     + "日";
	 t_span = document.getElementById('yue');
	 t_span.innerHTML = (now.getMonth() + 1) + "月"

});

// JavaScript Document