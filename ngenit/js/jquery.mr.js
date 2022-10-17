/*================///Client Dashboard page ///==============*/
//-------Sidebar Show Hide
$('#click_advance').click(function () {
    $('#display_advance').toggle('1000');
    // $("i", this).toggleClass("fa-solid fa-chevron-left fa-solid fa-align-left");
});

$(".fa-chevron-left").show();
$(".fa-align-left").hide();
function my() {
    $(".fa-align-left").show();
    $(".fa-chevron-left").hide();
    $("#cls").addClass('col-xl-12')
}
function my2() {
    $(".fa-chevron-left").show();
    $("#display_advance").show();
    $(".fa-align-left").hide();
    if ($("#cls").hasClass('col-xl-12')) {
        $("#cls").removeClass('col-xl-12');
    }

}
//---------Sidebar list Show Hide----------
$(document).ready(function () {
    $(".accordion-heading").click(function () {
        if ($(".accordion-body").is(':visible')) {
            $(".accordion-body").slideUp(600);
            $(".plusminus").text('+')
        }
        else {
            $(this).next(".accordion-body").slideDown(600);
            $(this).children(".plusminus").text('-');
        }
    });
});
