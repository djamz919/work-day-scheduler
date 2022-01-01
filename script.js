var currentDate = moment().format('MMMM Do YYYY');
var currentHour = moment().hour();

$("#currentDay").html(currentDate);
console.log(currentHour);

var addText = function() {

}

var checkTime = function() {
    var timeDiff = $(this).attr("id")-currentHour;

    if (timeDiff < 0) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
    } 
    else if (timeDiff === 0) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else if (timeDiff > 0) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
}

//Event listeners
$(".saveBtn").on("click", addText);
$(".time-block").each(checkTime);