$(".save").click(function(){
    var time=$(this).siblings("textarea").attr("id");
    console.log(time)
    var text=$(this).siblings("textarea").val();
    console.log(text)

    localStorage.setItem(time, text)
})

$("textarea").each(function(){
    var timeFromPage = $(this).attr("id");
    var currentHour = moment().hours();
    if (timeFromPage == currentHour){
        $(this).addClass("present")
    }
    else if (timeFromPage < currentHour) {
        $(this).addClass("past")
    }
    else {
        $(this).addClass("future")
    }

}) 






$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));

