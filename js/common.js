function getCurrentMonthLast(){
    var date= new Date();
    var currentMonth=date.getMonth();
    var nextMonth=++currentMonth;
    var nextMonthFirstDay=new Date(date.getFullYear(),nextMonth,1);
    var oneDay=1000*60*60*24;
    var lastTime = new Date(nextMonthFirstDay-oneDay);
    var month = parseInt(lastTime.getMonth()+1);
    var day = lastTime.getDate();
    var yf =date.getMonth()+1;
    if (month < 10) {
        month = '0' + month
    }
    if (day < 10) {
        day = '0' + day
    }
    $('.month-m').text(month);
    $('.day-m').text(day);
    $('.year-m').text(date.getFullYear());
    $('.year-m-1').text(date.getFullYear()-1);
    $('.year-m2').text(date.getFullYear()+1);
    if(yf>=6){
      $('.sxn-m').text("下半年");
    }else{
      $('.sxn-m').text("上半年");
    }
}


window.onload = getCurrentMonthLast ;

