function DisplayLoginPage(){
    console.log("Display Login Page")

    let messageArea = $("#messageArea");
    messageArea.hide();
    $("#loginBtn").on("click", function(){

        let success = false;
        let newUser = new core.User();

        $.get("./data/user.json", function(data){

            for(const u of data.users){
                if(userName.value === u.Username && password.value === u.Password){
                    success = true;
                    newUser.fromJSON(u);
                    break;
                }
            }
            if(success){
                sessionStorage.setItem("user", newUser.serialize());
                messageArea.removeAttr("class").hide();
                location.href = "contact.html";
            }
            else{
                $("#userName").trigger("focus").trigger("select");
                messageArea.addClass("alert alert-danger").text("Error: Failed to authenticate").show();
            }
        });
    });
    $("#cancelBtn").on("click", function(){
        document.forms[0].reset();
        location.href = "index.html";
    })
}