$(document).ready(function () {
        $('form').on("submit", function (e) {
            e.preventDefault();
            console.log("submitted");
        $(".p-title").text($(".title-box").val());
        $(".p-by").text($(".by-box").val());
            $(".p-sub").text($(".sub-box").val());
            $(".p-date").text($(".date-box").val())
        });
    }
);
function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
}
function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}