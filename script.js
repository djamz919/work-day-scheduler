var currentDate = moment().format('MMMM Do YYYY'); //date to display in calendar
var currentHour = moment().hour(); //military time in hours
var savedText = {
    "9": {
        textDescription: ""
    },
    "10": {
        textDescription: ""
    },
    "11": {
        textDescription: ""
    },
    "12": {
        textDescription: ""
    },
    "13": {
        textDescription: ""
    },
    "14": {
        textDescription: ""
    },
    "15": {
        textDescription: ""
    },
    "16": {
        textDescription: ""
    },
    "17": {
        textDescription: ""
    }
}

$("#currentDay").html(currentDate);
console.log(currentHour);

var addText = function() {
    var textDescription = $(this).siblings(".description").val().trim();
    var timeId = ($(this).attr("id")).split(":")[0];
    console.log(timeId + ": " + textDescription);
    savedText[timeId].textDescription = textDescription;
    console.log(savedText)
    localStorage.setItem("savedTasks", JSON.stringify(savedText));
}

var loadText = function() {
    var savedTasks = localStorage.getItem("savedTasks");

    if (savedTasks) {
        savedTasks = JSON.parse(savedTasks);
        savedText = savedTasks;
        for (var i = 9; i < 18; i++) {
            $("#" + i + " .description").val(savedText[i].textDescription);
        }
    }
}

// function to update classes based on time
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

//Call function upon load
loadText();