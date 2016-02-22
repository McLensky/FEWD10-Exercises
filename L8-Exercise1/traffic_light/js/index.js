//Implement the red light using jQuery. Don't forget to add the script tags.

$(document).ready(function () {
    $('#stopButton').click(function () {
        $('.bulb').css('background-color', 'black');
        $('#stopLight').css('background-color', 'red');
    });
});

$(document).ready(function () {
    $('#slowButton').click(function () {
        $('.bulb').css('background-color', 'black');
        $('#slowLight').css('background-color', 'orange');
    });
});

$(document).ready(function () {
    $('#goButton').click(function () {
        $('.bulb').css('background-color', 'black');
        $('#goLight').css('background-color', 'green');
    });
});