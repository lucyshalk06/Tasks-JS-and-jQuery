 //Options Validation
$(document).ready(function() {
    $("#Signiin").click(function(){
        alert("Sign In Form not added in this form!!");
    });

    // let crtOpt = $("li")

    $("#ques1").click(function(){
        $("#rad2").css("border", "2px solid green");
        $("#validopt").html("Correct").css("color", "green");
    });
    $("#ques2").click(function(){
        $("#rad23").css("border", "2px solid green");
        $("#validopt2").html("Correct").css("color", "green");
    });
    $("#ques3").click(function(){
        $("#rad14").css("border", "2px solid green");
        $("#validopt3").html("Correct").css("color", "green");
    });
    $("#ques4").click(function(){
        $("#rad41").css("border", "2px solid green");
        $("#validopt4").html("Correct").css("color", "green");
    });
    $("#ques5").click(function(){
        $("#rad52").css("border", "2px solid green");
        $("#validopt5").html("Correct").css("color", "green");
    });
    $(".ques1").click(function(){
        $(".rad2").css("border", "2px solid green");
        $(".validopt").html("Correct").css("color", "green");
    });
});

 // $(document).ready(function() {
    // $("input:radio").change(function() {
    //     if($("#business").prop('checked') == true) {
    //     $(".BusinessForm").text("Correct");
    //     $(".TechnicalForm").html("Correct");
    //     $(".LoginForm").html("Correct");
    //     }else if($("#technical").prop('checked') == true) {
    //     $(".BusinessForm").hide();
    //     $(".TechnicalForm").show();
    //     $(".LoginForm").hide();
    //     }else if($("#login").prop('checked') == true) {
    //     $(".BusinessForm").hide();
    //     $(".TechnicalForm").hide();
    //     $(".LoginForm").show();
    //     }
    // });
    // });
