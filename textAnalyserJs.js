$(document).ready(function () {
    $(".textAnalyzeBtn").click(function analyzeTest() {
        console.log("In function text analyzer");

        var textValue = $(".textArea").val();

        var textCount = $(".textArea").val().length;

        // $(".textOutpputDiv").value = getComputedStyle(".textArea").getPropertyValue("font-family");

        $(".textOutputDiv").html("<b> Your Input </b> :" + textValue +
            " </br> <b> Input Length </b>: " + textCount +
            "</br> <b> Input Type </b>: " + typeof textValue);

    });

});
