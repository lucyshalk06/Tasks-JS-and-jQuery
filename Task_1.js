function myValidation(){
    let username = $("#name1").val();
    if(username == ""){
        $("#name1").css("border","1px solid red");
        $("#inputValue").html("*Name Should be entered*").css("color", "red");
    }
    else if((username.length < 5) || (username.length > 30)){
        $("#inputValue").html("*Name should be within 5-30 characters*").css("color", "red");
    }
    else{
        $("#name1").css("border","2px solid green");
        $("#inputRight1").html(username);
        $("#uname").css({
            "backgroundColor":"#f5daee",
            "text-align":"center",
            "font-size":"20px",
            "color":"#4e6663",
            "height":"50px"
        });
        
    }
    // else{
    //     alert("Thank you for your interest !!")
    // }

    let email1 = $("#email").val();
    if(email1 == ""){
        $("#email").css("border","1px solid red");
        $("#inputValue1").html("*Email Should be entered*").css("color", "red");
    }
    else if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(myform.email1.value)){
        
        $("#email").css("border","2px solid green");
        $("#inputRight2").html(email1);
        $("#uemail").css({
            "backgroundColor":"#f5daee",
            "text-align":"center",
            "font-size":"20px",
            "color":"#4e6663",
            "height":"50px"
        });
    }
    else{
        $("#email").css("border","1px solid red");
        $("#inputValue1").html("*Should enter Valid Email-ID*").css("color", "red");
    }

    
    // Password
    let pwd = $("#pwd").val();
    if((pwd.length == "")||(pwd.length < 5)){
        $("#pwd").css("border","1px solid red");
        $("#inputValue2").html("*Password Should be entered*").css("color", "red");
    }
    else{
        $("#pwd").css("border","2px solid green");
        $("#inputRight3").html("Password Entered");
        $("#upwd").css({
            "backgroundColor":"#f5daee",
            "text-align":"center",
            "font-size":"20px",
            "color":"#4e6663",
            "height":"50px"
        });
    }

    // Comments
    let cmds = $("#comment").val();
    if((cmds.length == "")||(cmds.length < 5)){
        $("#comment").css("border","1px solid red");
        $("#inputValue3").html("*Kindly enter your comments here*").css("color", "red");
    }
    else{
        $("#comment").css("border","2px solid green");
        $("#inputRight4").html(cmds);
        $("#ucmds").css({
            "backgroundColor":"#f5daee",
            "text-align":"center",
            "font-size":"20px",
            "color":"#4e6663",
            "height":"50px"
        });
    }
    
    let emoji = "\uD83D\uDE00";
    if((username != "") && (email1 != "") && (pwd != "") && (cmds != "")){
        alert("Thank you for your interest!! .. Mrs."+ username + "  " + emoji);
    }
}