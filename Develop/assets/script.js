// current date
document.getElementById("currentDay") .innerHTML=moment().format('LL');

//color coding for upcoming dates
var timeColor=function() {
    //current hour
    var hour=parseInt(moment().format('HH'));

    $(".time-block").each(function() {
        var dataHour=parseInt($(this).attr("id"));
        if (dataHour<hour) {
        }else if (dataHour===hour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
};


//save button
$('.saveBtn').click(function() {

    //pulls id from function above
    var hour = $(this).parent().attr("id");
    //pulls the desc of task assoc with id
    var task = $(this).siblings(".description").val();
    // saves time block to local storage
    localStorage.setItem(hour,task);

});

//pulls the hour and current task from local storage after refreshing
$("#9".description).val(localStorage.getItem(9));
$("#10".description).val(localStorage.getItem(10));
$("#11".description).val(localStorage.getItem(11));
$("#12".description).val(localStorage.getItem(12));
$("#13".description).val(localStorage.getItem(13));
$("#14".description).val(localStorage.getItem(14));
$("#15".description).val(localStorage.getItem(15));
$("#16".description).val(localStorage.getItem(16));
$("#17".description).val(localStorage.getItem(17));


timeColor();

// updates the task colors every 10 mins so user recognizes what is most imperative
setInterval(function() {
    timeColor();
}
,600000)
