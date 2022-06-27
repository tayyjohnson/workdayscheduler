// current date
document.getElementById("currentDay") .innerHTML=moment().format('LL');

//color coding for upcoming dates
var timeColor=function() {
    var hour=parseInt(moment().format('HH'));
    
    //apply new class if task is in the past/present/future
    if(moment().isAfter(hour)) {
        $(descriptionE1).addclass("description-item-warning")
    }
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
$("#1".description).val(localStorage.getItem(1));
$("#2".description).val(localStorage.getItem(2));
$("#3".description).val(localStorage.getItem(3));
$("#4".description).val(localStorage.getItem(4));
$("#5".description).val(localStorage.getItem(5));


timeColor();

// updates the task colors every 10 mins so user recognizes what is most imperative
setInterval(function() {
    timeColor();
}
,600000)
