/**
 * Name: Rob Savoie & Rhys Thompson
 * Last Update: 1/25/2023
 * Current Update: 1/26/2023
 * File Name: app.js
 * Description: This is our JavaScript file using a different variety of different functions & tags.
 * In this assignment our group demonstrates the different types of logic used to create a basic webpage
 * including two navbars. The top navbar contains the websites name, 5 options for the user to choose from,
 * and the bottom navbar having our groups name plus the current date.
 */

"use strict";

//IIFE - Immediately Invoked Function Expression
//AKA  - Anonymous Self-Executing Function
(function(){
    /** @Start
     * This function loads all the information about the pages from JavaScript to our website.
     */
    function Start() {
        console.log("App Started!")

        AjaxRequest("GET", "header.html", LoadHeader);
        AjaxRequest("GET", "footer.html", LoadFooter);

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Projects":
                DisplayProjectsPage();
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutUsPage();
                break;
            case "Human Resources":
                DisplayHRPage();
                break;
            case "Contact Us":
                DisplayContactUsPage();
                break;
            case "Contact List":
                DisplayContactListPage();
                break;
            case "Edit Contact":
                DisplayEditContactPage();
                break;
            case "Login":
                DisplayLoginPage();
                break;
            case "Register":
                DisplayRegisterPage();
                break;
        }
    }
    window.addEventListener("load", Start)

    //
    //
    // Display Pages
    //
    //

    /** @DisplayHomePage
     * This function displays the home page when user clicks the home button.
     */
    function DisplayHomePage() {
        console.log("Home Page");

        $("*main").append(document.createElement("h1")).append(document.createElement("p"));
        $("*h1").addClass("mb-3").text("Welcome To Our Website!");
        $("*p").addClass("mt-3").text("Welcome to Rob and Rhys' website!");
    }

    /** @DisplayProjectsPage
     * This function displays the projects page on our website.
     */
    function DisplayProjectsPage() {

        // Mains This generates the main tag in JavaScript
        let Main1 = document.getElementsByTagName("main")[0];
        // Headers This generates the h1 and h2 tag in JavaScript
        let Header1 = document.createElement("h1")
        let Header2 = document.createElement("h1")
        let Header3 = document.createElement("h2")
        //  This generates the p tag in JavaScript
        let Paragraph1 = document.createElement("p")
        let Paragraph2 = document.createElement("p")
        let Paragraph3 = document.createElement("p")
        let Paragraph4 = document.createElement("p")
        let Paragraph5 = document.createElement("p")
        // Images. This generates the img tag in JavaScript
        let Image1 = document.createElement("img")
        let Image2 = document.createElement("img")
        let Image3 = document.createElement("img")
        let Image4 = document.createElement("img")
        let Image5 = document.createElement("img")
        let Image6 = document.createElement("img")
        // Blank row. Displays a blank row to create spacing.
        let Blank1 = document.createElement("br")
        let Blank2 = document.createElement("br")
        // Horizontal line. Displays dividing line between the headers, paragraphs and pictures.
        let Line1 = document.createElement("hr")
        let Line2 = document.createElement("hr")
        let Line3 = document.createElement("hr")

        // Rob's Projects. This line displays information about rob on the projects page.
        Main1.appendChild(Header1);
        Main1.appendChild(Paragraph1);
        Header1.setAttribute("class", "mb-3")
        Header1.textContent = "Rob and Rhys' Projects"
        Header2.setAttribute("class", "robh1")
        Header2.textContent = "Rob's Projects"
        Paragraph1.appendChild(Header2);
        Paragraph1.appendChild(Line1);
        Paragraph1.appendChild(Paragraph2);
        Paragraph2.textContent = "Here are all three of Rob's personal projects he has worked on over the years."
        // Projects paragraph Rob working with amazon
        Image1.setAttribute("class", "img-amazon")
        Image1.setAttribute("src", "images/amazon.png")
        Paragraph1.appendChild(Image1);
        Paragraph1.appendChild(Blank1);
        Paragraph1.appendChild(Blank2);
        // Projects paragraph Rob working with facebook
        Image2.setAttribute("class", "img-facebook")
        Image2.setAttribute("src", "images/Screen_of_Facebook.png")
        Paragraph1.appendChild(Image2);
        Paragraph1.appendChild(Blank1);
        Paragraph1.appendChild(Blank2);
        // Projects paragraph Rob working with twitter
        Image3.setAttribute("class", "img-twitter")
        Image3.setAttribute("src", "images/twitter.png")
        Paragraph1.appendChild(Image3);
        Paragraph1.appendChild(Blank1);
        Paragraph1.appendChild(Blank2);
        Paragraph1.appendChild(Paragraph3);
        Paragraph3.textContent = "Rob has worked for Amazon, Facebook, and Twitter working on their login pages."
        Paragraph1.appendChild(Line2);
        Paragraph1.appendChild(Header3);

        // Rhys' Projects!!!! This displays a small header for Rhys's projects
        Header3.setAttribute("class", "rhysh1")
        Header3.textContent = "Rhys's Projects"

        Paragraph1.appendChild(Header3);
        Paragraph1.appendChild(Line3);
        Paragraph1.appendChild(Paragraph4);
        Paragraph1.appendChild(Image4);
        Paragraph4.textContent = "Here are all three of Rhys's personal projects he has worked on over the years."
        //This row of code displays the Scaffold Image.
        Image4.setAttribute("class", "img-scaffold")
        Image4.setAttribute("src", "images/scaffold.png")
        Paragraph1.appendChild(Image4);
        Paragraph1.appendChild(Blank1);
        Paragraph1.appendChild(Blank2);
        // This row of code displays the Parkhub Image
        Image5.setAttribute("class", "img-parkhub")
        Image5.setAttribute("src", "images/parkhub.png")
        Paragraph1.appendChild(Image5);
        Paragraph1.appendChild(Blank1);
        Paragraph1.appendChild(Blank2);
        //This row of code displays the Winodows 7 Image
        Image6.setAttribute("class", "img-windows7")
        Image6.setAttribute("src", "images/windows7.png")
        Paragraph1.appendChild(Image6);
        Paragraph1.appendChild(Blank1);
        Paragraph1.appendChild(Blank2);
        Paragraph1.appendChild(Paragraph5);
        Paragraph5.textContent = "Rhys has worked on installing scaffold at scotia bank arena, designed an app called parkhub and installed windows 7 through a virtual machine."
    }

    /** @DisplayServicePage
     * This function displays our services page.
     */
    function DisplayServicesPage() {

        // Mains
        let Main1 = document.getElementsByTagName("main")[0];
        // Headers
        let Header1 = document.createElement("h1")
        let Header2 = document.createElement("h1")
        let Header3 = document.createElement("h1")
        // Paragraphs
        let Paragraph1 = document.createElement("p")
        let Paragraph2 = document.createElement("p")

        // Main Header
        Header1.setAttribute("class", "mb-3")
        Header1.textContent = "Services We Provide:"
        Main1.appendChild(Header1);

        // Rob's services
        let RobList1 = document.createElement("li")
        let RobList2 = document.createElement("li")
        let RobList3 = document.createElement("li")
        RobList1.textContent = "HTML/PHP/JavaScript"
        RobList2.textContent = "C#/Visual Studio"
        RobList3.textContent = "COBOL"
        Header2.setAttribute("class", "robh1")
        Header2.textContent = "Rob's Skills:"
        Main1.appendChild(Header2);
        Paragraph1.setAttribute("class", "mt-3")
        Paragraph1.appendChild(RobList1)
        Paragraph1.appendChild(RobList2)
        Paragraph1.appendChild(RobList3)
        Main1.appendChild(Paragraph1);

        // Rhys services
        let RhysList1 = document.createElement("li")
        let RhysList2 = document.createElement("li")
        let RhysList3 = document.createElement("li")
        RhysList1.textContent = "Cloud"
        RhysList2.textContent = "C#/Visual Studio"
        RhysList3.textContent = "Python"
        Header3.setAttribute("class", "rhysh1")
        Header3.textContent = "Rhys' Skills:"
        Main1.appendChild(Header3);
        Paragraph2.setAttribute("class", "mt-3")
        Paragraph2.appendChild(RhysList1)
        Paragraph2.appendChild(RhysList2)
        Paragraph2.appendChild(RhysList3)
        Main1.appendChild(Paragraph2);
    }

    /** @DisplayAboutUsPage
     * This function displays the About Us page on our website.
     */
    function DisplayAboutUsPage() {

        // Mains
        let Main1 = document.getElementsByTagName("main")[0];
        // Headers
        let Header1 = document.createElement("h1")
        let Header2 = document.createElement("h1")
        let Header3 = document.createElement("h1")
        // Paragraphs
        let Paragraph1 = document.createElement("p")
        let Paragraph2 = document.createElement("p")
        let Paragraph3 = document.createElement("p")
        // Break lines
        let Hr1 = document.createElement("hr")
        // Images
        let Image1 = document.createElement("img")
        let Image2 = document.createElement("img")
        //Blank
        let Blank1 = document.createElement("br")
        let Blank2 = document.createElement("br")

        Header3.setAttribute("class", "mb-3")
        Header3.textContent = "About Us"
        Main1.appendChild(Header3);

        // Rob's Paragraph. This describes information about Ron which includes an image of him.
        Header1.setAttribute("class", "robh1")
        Header1.textContent = "Rob Savoie"
        Main1.appendChild(Header1)
        Main1.appendChild(Paragraph1);
        Main1.appendChild(Hr1);
        Paragraph1.appendChild(Paragraph2);
        Paragraph2.setAttribute("class", "mt-3")
        Paragraph2.textContent = "Rob is a 2nd Year Student at Durham College currently enrolled in the Computer Programing Analysis program which is a 3 year course."
        Image1.setAttribute("class", "img-square")
        Image1.setAttribute("src", "images/Rob.jpg")
        Paragraph1.appendChild(Image1);
        Paragraph1.appendChild(Blank1);
        Paragraph1.appendChild(Blank2);

        // Rhys' Paragraph. This section describes the information about Rhys and includes an image of him.
        Header2.setAttribute("class", "rhysh1")
        Header2.textContent = "Rhys Thompson"
        Main1.appendChild(Header2)
        Main1.appendChild(Paragraph3);
        Paragraph3.setAttribute("class", "mt-3")
        Paragraph3.textContent = "Rhys is a 2nd Year Student at Durham College currently enrolled in " +
            "the Computer Programing Course which is a 2 year course. Rhys Plans to graduate this semester!"
        Paragraph3.appendChild(Blank1);
        Paragraph3.appendChild(Blank2);
        Image2.setAttribute("class", "img-rhysabu")
        Image2.setAttribute("src", "images/rhyswithtt.png")
        Paragraph3.appendChild(Image2);
    }

    /** @DisplayHRPage
     * This function displays the Human Resources page on our website.
     */
    function DisplayHRPage() {
        console.log("Display Human Resources Page");
        let Header = document.createElement("h1");
        $("*main").append(Header);
        $("*h1").addClass("mb-3").text("Human Resources");
    }

    /** @DisplayContactUsPage
     * This function displays the Contact Us page on our website.
     */
    function DisplayContactUsPage() {
        console.log("Display About Us Page");

        ContactFormValidation();

        let subscribeCheckbox = document.getElementById("subscriptionCheckbox");
        $("#SendBtn").on("click", function(event){
            event.preventDefault();
            if(subscribeCheckbox.checked){
                console.log("Checkbox checked!")
                AddContact(document.getElementById("fullName").value,
                    document.getElementById("contactNumber").value,
                    document.getElementById("email").value,
                    document.getElementById("message").value);
                location.href = "contact-list.html";
            }
        });

        // (main) This generates the main tag
        let Main1 = document.getElementsByTagName("main")[0];
        // (h) This generates the header tag
        let Header2 = document.createElement("h5")
        let Header3 = document.createElement("h5")
        // (hr) This generates the break line tag
        let Hr1 = document.createElement("hr")
        // (p) This generates the break line tag
        let Paragraph1 = document.createElement("p")
        let Paragraph2 = document.createElement("p")

        Header2.setAttribute("class", "mb-3")
        Header2.textContent = "Rob Savoie"
        Main1.appendChild(Header2);
        Paragraph1.textContent = "Email Address: robert.savoie1@dcmail.ca"
        Main1.appendChild(Paragraph1);

        Main1.appendChild(Hr1);

        Header3.setAttribute("class", "mb-3")
        Header3.textContent = "Rhys Thompson"
        Main1.appendChild(Header3);
        Paragraph2.textContent = "Email Address: rhys.thompson@dcmail.ca"
        Main1.appendChild(Paragraph2);
    }

    /**
     * @DisplayContactListPage
     * This function displays the contact list page.
     */
    function DisplayContactListPage(){
        console.log("Display Contact List Page")

        if(localStorage.length > 0){
            let contactList = document.getElementById("contactList");
            let data = "";
            // Add deserialized data from localStorage
            let keys = Object.keys(localStorage);
            // return a string array of keys
            let index = 1;
            for(const key of keys){
                let contactData = localStorage.getItem(key);
                let contact = new core.Contact();
                contact.deserialize(contactData);
                data += `<tr><th scope="row" class="text-center">${index}</th>
                         <td>${contact.FullName}</td>
                         <td>${contact.ContactNumber}</td>
                         <td>${contact.EmailAddress}</td>
                         <td>${contact.Message}</td>                         
                         <td class="text-center">
                            <button value="${key}" class="btn btn-primary btn-sm edit">
                            <i class="fa-solid fa-edit fa-sm"></i> Edit
                            </button>
                         </td>
                         <td>
                            <button value="${key}" class="btn btn-danger btn-sm delete">
                            <i class="fa-regular fa-trash-alt fa-sm"></i> Delete
                            </button>
                         </td>
                         </tr>`;
                index++;
            }
            contactList.innerHTML = data;
            $("#AddBtn").on("click", () => {location.href = "edit.html#add";});
            $("button.delete").on("click", function () {
                if(confirm("Are you sure you want to delete this contact?")){
                    localStorage.removeItem($(this).val());
                    location.href = "contact-list.html";
                }
            });
            $("button.edit").on("click", function () {
                location.href = "edit.html#" + $(this).val();

            });
        }
    }

    /**
     * @DisplayEditContactPage
     * This function displays the edit contact list page
     */
    function DisplayEditContactPage(){
        console.log("Display Edit Contact Page")

        ContactFormValidation();

        let page = location.hash.substring(1);

        switch(page){
            case "add":
                $("main>h1").text("Add Contact");
                $("#EditBtn").html(`<i class="fas fa-plus fa-sm"></i> Add`);

                $("#EditBtn").on("click", (event) => {
                    event.preventDefault();
                    AddContact(document.getElementById("fullName").value,
                        document.getElementById("contactNumber").value,
                        document.getElementById("email").value,
                        document.getElementById("message").value);
                    location.href = "contact-list.html";
                });

                $("#CancelBtn").on("click", () => {location.href = "contact-list.html";});
                break;
            default:{
                let contact = new core.Contact();
                contact.deserialize(localStorage.getItem(page));
                $("#fullName").val(contact.FullName);
                $("#contactNumber").val(contact.ContactNumber);
                $("#email").val(contact.EmailAddress);
                $("#message").val(contact.Message);
                $("#EditBtn").on("click", (event) => {
                    event.preventDefault();

                    contact.FullName = $("#fullName").val();
                    contact.ContactNumber = $("#contactNumber").val();
                    contact.EmailAddress = $("#email").val();
                    contact.Message = $("#message").val();

                    localStorage.setItem(page, contact.serialize());

                    location.href = "contact-list.html";
                });
                $("#CancelBtn").on("click", () => {location.href = "contact-list.html";});
                break;
            }
        }
    }

    /**
     * @DisplayLoginPage
     * This function displays the login page
     */
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

    /**
     * @DisplayRegisterPage
     * This function displays the register page
     */
    function DisplayRegisterPage(){
        console.log("Display Register Page")

        $("<div id='messageArea'></div>").insertAfter($("#heading")).hide();

        RegisterFormValidation();

        $("#registerBtn").on("click", function(event){
            event.preventDefault();
            let success = false;
            let newUser = new core.User();

            $.get("./data/user.json", function(data){

                for(const u of data.users){
                    if(email.value === u.EmailAddress){
                        $("#messageArea").addClass("alert alert-danger").text("Error: Email address already in use").show();
                        break;
                    }
                    if(username.value === u.Username){
                        $("#messageArea").addClass("alert alert-danger").text("Error: User already exists").show();
                        break;
                    }
                    else{
                        if(password.value === confirmPassword.value){
                            success = true;
                            break;
                        }
                        else{
                            $("#messageArea").addClass("alert alert-danger").text("Error: Passwords must match").show();
                        }
                    }
                }
                if(success){
                    newUser.FirstName = $("#firstName").val();
                    newUser.LastName = $("#lastName").val();
                    newUser.EmailAddress = $("#email").val();
                    newUser.Username = $("#username").val();
                    newUser.Password = $("#password").val();
                    data.users.push(newUser.toJSON());
                    $("#messageArea").removeAttr("class").hide();
                    location.href = "login.html";
                }
            });
        });
    }

    //
    //
    // Functions
    //
    //


    function AddContact(fullName, contactNumber, emailAddress, message){
        let contact = new core.Contact(fullName, contactNumber, emailAddress, message);
        if(contact.serialize()){
            let key = contact.FullName.substring(0,1) + Date.now();
            localStorage.setItem(key, contact.serialize());
        }
    }

    function CheckLogin(){
        if(sessionStorage.getItem("user")){
            $("#login").html(`<a id="logout" class="nav-link" href="#">
                            <i class="fa-solid fa-sign-out-alt"></i> Logout</a>`);

            $("<li class='nav-item'>" +
                "<a id='user' class='nav-link' href='#'></a>" +
                "</li>").insertAfter($("#contactli"));

            let user = new core.User();
            let userData = sessionStorage.getItem("user");
            user.deserialize(userData);

            $("#user").text(user.Username);
        }
        $("#logout").on("click", function(){
            sessionStorage.clear();
            location.href = "index.html";
        })
    }

    function ContactFormValidation(){
        // Validate full name
        ValidateField("#fullName",
            /^([A-Z][a-z]{1,3}\.?\s)?([A-Z][a-z]+)+([\s,-]([A-Z][a-z]+))*$/,
            "Please enter a valid first and last name (ex. Mr. Peter Parker)");
        // Validate Phone Number
        ValidateField("#contactNumber",
            /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]\d{4}$/,
            "Please enter a valid phone number (ex. 555 555-5555");
        // Validate Email Address
        ValidateField("#email",
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,10}$/,
            "Please enter a valid email address (ex. example@email.com");
    }

    function RegisterFormValidation(){
        ValidateField("#firstName",
            /^[a-zA-Z]{2,}$/,
            "Please enter a valid first and last name (ex. Mr. Peter Parker)");
        // Validate full name
        ValidateField("#lastName",
            /^[a-zA-Z]{2,}$/,
            "Here!");
        // Validate Phone Number
        ValidateField("#email",
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,10}$/,
            "Please enter a valid email address (ex. example@email.com");
        // Enter password validation
        ValidateField("#password",
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
            "Please enter a valid password. Must have a minimum of 6 characters, " +
            "1 letter, and one special character. (ex. ");
    }

    function ValidateField(inputFieldID, regularExpression, errorMessage){
        let messageArea = $("#messageArea");

        $(inputFieldID).on("blur", function(){

            let inputFieldText = $(this).val();
            if(!regularExpression.test(inputFieldText)){
                // fail validation
                $(this).trigger("focus").trigger("select"); // go back to the fullName text
                messageArea.addClass("alert alert-danger").text(errorMessage).show();

            }else{
                //pass validation
                messageArea.removeAttr("class").hide();
            }

        });
    }

    function CheckPassword(inputFieldID, regularExpression, errorMessage){
        let messageArea = $("#messageArea");
        let password = $("#password");
        let confirm_password = $("#confirmPassword");

        if (confirm_password !== 0){
            if (confirm_password === password){
                messageArea.removeAttr("class").hide();
            }else{
                $(this).trigger("focus").trigger("select"); // go back to the fullName text
                messageArea.addClass("alert alert-danger").text(errorMessage).show();
            }
        }

        $(inputFieldID).on("blur", function(){

            let inputFieldText = $(this).val();
            if(!regularExpression.test(inputFieldText)){
                // fail validation
                $(this).trigger("focus").trigger("select"); // go back to the fullName text
                messageArea.addClass("alert alert-danger").text(errorMessage).show();

            }else{
                //pass validation
                messageArea.removeAttr("class").hide();
            }

        });
    }


    function AjaxRequest(method, url, callback){
        // Step 1
        let xhr = new XMLHttpRequest();
        // Step 2
        xhr.addEventListener("readystatechange", ()=>{
            if(xhr.readyState === 4 && xhr.status === 200){
                if(typeof callback === "function"){
                    callback(xhr.responseText);
                }else{
                    console.error("Error: Please provide a valid function for callback")
                }
            }
        });
        // Step 3
        xhr.open(method, url);
        // Step 4
        xhr.send()
    }

    function LoadHeader(data){
        $("*header").append(data);
        $(`li>a:contains(${document.title})`).addClass("active");
        CheckLogin();
    }

    function LoadFooter(data){
        $("*footer").append(data);
    }
})();








//^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,10}$/