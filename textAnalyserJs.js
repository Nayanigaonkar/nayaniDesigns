
$(document).ready(function () {

    $(".textAnalyzeBtn").click(function analyzeTest() {
        console.log("In function text analyzer");

        var textValue = $(".textArea").val();
        $(".textValueTd").html(textValue);


        var textCount = $(".textArea").val().length;
        $(".textCountTd").html(textCount);

    });

});
