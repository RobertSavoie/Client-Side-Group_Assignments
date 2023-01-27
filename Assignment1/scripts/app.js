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
        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Products":
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
        }
    }
    window.addEventListener("load", Start)

    /** @DisplayHomePage
     * This function displays the home page when user clicks the home button.
     */
    function DisplayHomePage() {

        DisplayNavbar();
        let a = document.getElementsByTagName("a")[1];
        a.setAttribute("class", "nav-link active")
        a.setAttribute("aria-current", "page")

        let ProjectsButton = document.getElementById("ProjectsBtn");
        ProjectsButton.addEventListener("click", function (){
            location.href = "projects.html";
        });
        let ServicesButton = document.getElementById("ServicesBtn");
        ServicesButton.addEventListener("click", function (){
            location.href = "services.html";
        });
        let AboutUsButton = document.getElementById("AboutUsBtn");
        AboutUsButton.addEventListener("click", function(){
            location.href = "about.html";
        });
        let HRButton = document.getElementById("HRBtn");
        HRButton.addEventListener("click", function(){
            location.href = "human-resources.html";
        });
        let ContactUsButton = document.getElementById("ContactBtn");
        ContactUsButton.addEventListener("click", function(){
            location.href = "contact.html";
        });

        // Mains
        let Main1 = document.getElementsByTagName("main")[0];
        let Main2 = document.getElementsByTagName("main")[1];
        // Headers
        let Header1 = document.createElement("h1")
        // Paragraphs
        let Paragraph1 = document.createElement("p")

        // Welcome header
        Header1.setAttribute("class", "mb-3")
        Header1.textContent = "Welcome to Our Website!"
        Main1.appendChild(Header1);

        // Welcome paragraph
        Paragraph1.setAttribute("class", "mt-3")
        Paragraph1.textContent = "Welcome to Rob and Rhys' website!"
        Main2.appendChild(Paragraph1);

        /** @DisplayFooterNave
         * This function displays the footer nav bar which contains the current date and partner names.
         */
        DisplayFooterNav();
    }

    /** @DisplayProjectsPage
     * This function displays the projects page on our website.
     */
    function DisplayProjectsPage() {

        DisplayNavbar();
        let a = document.getElementsByTagName("a")[2];
        a.setAttribute("class", "nav-link active")
        a.setAttribute("aria-current", "page")

        let HomeButton = document.getElementById("HomeBtn");
        HomeButton.addEventListener("click", function (){
            location.href = "index.html";
        });

        // Mains This generates the main tag in JavaScript
        let Main1 = document.getElementsByTagName("main")[0];
        let Main2 = document.getElementsByTagName("main")[1];
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
        Main2.appendChild(Paragraph1);
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

        DisplayFooterNav();
    }

    /** @DisplayServicePage
     * This function displays our services page.
     */
    function DisplayServicesPage() {

        DisplayNavbar();
        let a = document.getElementsByTagName("a")[3];
        a.setAttribute("class", "nav-link active")
        a.setAttribute("aria-current", "page")

        let HomeButton = document.getElementById("HomeBtn");
        HomeButton.addEventListener("click", function (){
            location.href = "index.html";
        });

        // Mains
        let Main1 = document.getElementsByTagName("main")[0];
        let Main2 = document.getElementsByTagName("main")[1];
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
        Main2.appendChild(Header2);
        Paragraph1.setAttribute("class", "mt-3")
        Paragraph1.appendChild(RobList1)
        Paragraph1.appendChild(RobList2)
        Paragraph1.appendChild(RobList3)
        Main2.appendChild(Paragraph1);

        // Rhys services
        let RhysList1 = document.createElement("li")
        let RhysList2 = document.createElement("li")
        let RhysList3 = document.createElement("li")
        RhysList1.textContent = "Cloud"
        RhysList2.textContent = "C#/Visual Studio"
        RhysList3.textContent = "Python"
        Header3.setAttribute("class", "rhysh1")
        Header3.textContent = "Rhys' Skills:"
        Main2.appendChild(Header3);
        Paragraph2.setAttribute("class", "mt-3")
        Paragraph2.appendChild(RhysList1)
        Paragraph2.appendChild(RhysList2)
        Paragraph2.appendChild(RhysList3)
        Main2.appendChild(Paragraph2);

        DisplayFooterNav();
    }

    /** @DisplayAboutUsPage
     * This function displays the About Us page on our website.
     */
    function DisplayAboutUsPage() {

        DisplayNavbar();
        let a = document.getElementsByTagName("a")[4];
        a.setAttribute("class", "nav-link active")
        a.setAttribute("aria-current", "page")

        let HomeButton = document.getElementById("HomeBtn");
        HomeButton.addEventListener("click", function (){
            location.href = "index.html";
        });

        // Mains
        let Main1 = document.getElementsByTagName("main")[0];
        let Main2 = document.getElementsByTagName("main")[1];
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
        Main2.appendChild(Header1)
        Main2.appendChild(Paragraph1);
        Main2.appendChild(Hr1);
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
        Main2.appendChild(Header2)
        Main2.appendChild(Paragraph3);
        Paragraph3.setAttribute("class", "mt-3")
        Paragraph3.textContent = "Rhys is a 2nd Year Student at Durham College currently enrolled in " +
            "the Computer Programing Course which is a 2 year course. Rhys Plans to graduate this semester!"
        Paragraph3.appendChild(Blank1);
        Paragraph3.appendChild(Blank2);
        Image2.setAttribute("class", "img-rhysabu")
        Image2.setAttribute("src", "images/rhyswithtt.png")
        Paragraph3.appendChild(Image2);

        DisplayFooterNav();
    }

    /** @DisplayHRPage
     * This function displays the Human Resources page on our website.
     */
    function DisplayHRPage() {
        DisplayNavbar();
        let a = document.getElementsByTagName("a")[5];
        a.setAttribute("class", "nav-link active")
        a.setAttribute("aria-current", "page")

        let HomeButton = document.getElementById("HomeBtn");
        HomeButton.addEventListener("click", function(){
            console.log("test");
        });

        let SubmitButton = document.getElementById("SubmitBtn");
        SubmitButton.addEventListener("click", function(){
            let Name = document.getElementById("name").value;
            let Number = document.getElementById("number").value;
            let Email = document.getElementById("email").value;
            let Message = document.getElementById("message").value;
            console.log(Name);
            console.log(Number);
            console.log(Email);
            console.log(Message)
            /// This sets the 3-second delay which will transfer user back to home page.
            setTimeout(() => {location.href="index.html"}, 3000);


        });

        // (main) This generates the main tag
        let Main1 = document.getElementsByTagName("main")[0];
        // let Main2 = document.getElementsByTagName("main")[1];
        // (h) this generates the h tag
        let Header1 = document.createElement("h1")

        Header1.setAttribute("class", "mb-3")
        Header1.textContent = "Human Resources"
        Main1.appendChild(Header1);

        DisplayFooterNav();
    }

    /** @DisplayContactUsPage
     * This function displays the Contact Us page on our website.
     */
    function DisplayContactUsPage() {
        DisplayNavbar();
        let a = document.getElementsByTagName("a")[6];
        a.setAttribute("class", "nav-link active")
        a.setAttribute("aria-current", "page")

        let HomeButton = document.getElementById("HomeBtn");
        HomeButton.addEventListener("click", function (){
            location.href = "index.html";
        });

        // (main) This generates the main tag
        let Main1 = document.getElementsByTagName("main")[0];
        let Main2 = document.getElementsByTagName("main")[1];
        // (h) This generates the header tag
        let Header1 = document.createElement("h1")
        let Header2 = document.createElement("h5")
        let Header3 = document.createElement("h5")
        // (hr) This generates the break line tag
        let Hr1 = document.createElement("hr")
        // (p) This generates the break line tag
        let Paragraph1 = document.createElement("p")
        let Paragraph2 = document.createElement("p")

        Header1.setAttribute("class", "mb-3")
        Header1.textContent = "Contact Us"
        Main1.appendChild(Header1);

        Header2.setAttribute("class", "mb-3")
        Header2.textContent = "Rob Savoie"
        Main2.appendChild(Header2);
        Paragraph1.textContent = "Email Address: robert.savoie1@dcmail.ca"
        Main2.appendChild(Paragraph1);

        Main2.appendChild(Hr1);

        Header3.setAttribute("class", "mb-3")
        Header3.textContent = "Rhys Thompson"
        Main2.appendChild(Header3);
        Paragraph2.textContent = "Email Address: rhys.thompson@dcmail.ca"
        Main2.appendChild(Paragraph2);

        DisplayFooterNav();
    }

    /** @DisplayNavbar
     * This function displays the top navbar on our website.
     */
    function DisplayNavbar(){
        // (Header) This generates the header tag
        let Header = document.getElementsByTagName("header")[0];
        // Nav
        let Nav = document.createElement("nav")
        // (div) This generates the div tag
        let Div1 = document.createElement("div")
        let Div2 = document.createElement("div")
        // (ul) this generates the ul tag
        let Ul = document.createElement("ul")
        // (li) this generates the li tag
        let Li1 = document.createElement("li")
        let Li2 = document.createElement("li")
        let Li3 = document.createElement("li")
        let Li4 = document.createElement("li")
        let Li5 = document.createElement("li")
        let Li6 = document.createElement("li")
        // (a) This generates the "a" tag
        let A1 = document.createElement("a")
        let A2 = document.createElement("a")
        let A3 = document.createElement("a")
        let A4 = document.createElement("a")
        let A5 = document.createElement("a")
        let A6 = document.createElement("a")
        let A7 = document.createElement("a")
        // (i) This generates the i tag
        let I1 = document.createElement("i")
        let I2 = document.createElement("i")
        let I3 = document.createElement("i")
        let I4 = document.createElement("i")
        let I5 = document.createElement("i")
        let I6 = document.createElement("i")
        let I7 = document.createElement("i")
        // Button This generates the button tag
        let Button1 = document.createElement("button")
        // Span. This generates the span tag
        let Span1 = document.createElement("span")
        let Span2 = document.createElement("span")
        let Span3 = document.createElement("span")
        let Span4 = document.createElement("span")
        let Span5 = document.createElement("span")
        let Span6 = document.createElement("span")
        let Span7 = document.createElement("span")
        let Span8 = document.createElement("span")

        // Navbar
        Nav.setAttribute("class", "navbar navbar-expand-lg")
        Header.appendChild(Nav);

        // First Div
        Div1.setAttribute("class", "container-fluid")
        Nav.appendChild(Div1);
        // Main Link
        A1.setAttribute("class", "navbar-brand")
        A1.setAttribute("href", "index.html")
        I1.setAttribute("class", "fa-solid fa-hippo")
        A1.appendChild(I1);
        Span2.textContent = " WEBD6201"
        A1.appendChild(Span2);
        Div1.appendChild(A1);
        // Main Button
        Button1.setAttribute("class", "navbar-toggler")
        Button1.setAttribute("type", "button")
        Button1.setAttribute("data-bs-toggle", "collapse")
        Button1.setAttribute("data-bs-target", "#navbarSupportedContent")
        Button1.setAttribute("aria-controls", "navbarSupportedContent")
        Button1.setAttribute("aria-expanded", "false")
        Button1.setAttribute("aria-label", "Toggle navigation")
        Div1.appendChild(Button1);
        // Span under button
        Span1.setAttribute("class", "navbar-toggler-icon")
        Button1.appendChild(Span1);

        // Second Div
        Div1.appendChild(Div2);
        // Unordered List
        Ul.setAttribute("class", "navbar-nav ms-auto mb-2 mb-lg-0")
        Div2.appendChild(Ul);
        // List Item 1
        Li1.setAttribute("class", "nav-item")
        Ul.appendChild(Li1);
        // Link 1
        A2.setAttribute("class", "nav-link")
        A2.setAttribute("href", "index.html")
        I2.setAttribute("class", "fa-solid fa-house")
        A2.appendChild(I2);
        Span3.textContent = " Home"
        A2.appendChild(Span3);
        Li1.appendChild(A2);
        // List Item 2
        Li2.setAttribute("class", "nav-item")
        Ul.appendChild(Li2);
        // Link 2
        A3.setAttribute("class", "nav-link")
        A3.setAttribute("href", "projects.html")
        I3.setAttribute("class", "fa-solid fa-inbox")
        A3.appendChild(I3);
        Span4.textContent = " Projects";
        A3.appendChild(Span4);
        Li2.appendChild(A3);
        // List Item 3
        Li3.setAttribute("class", "nav-item")
        Ul.appendChild(Li3);
        // Link 3
        A4.setAttribute("class", "nav-link")
        A4.setAttribute("href", "services.html")
        I4.setAttribute("class", "fa-solid fa-server")
        A4.appendChild(I4);
        Span5.textContent = " Services";
        A4.appendChild(Span5);
        Li3.appendChild(A4);
        // List Item 4
        Li4.setAttribute("class", "nav-item")
        Ul.appendChild(Li4);
        // Link 4
        A5.setAttribute("class", "nav-link")
        A5.setAttribute("href", "about.html")
        I5.setAttribute("class", "fa-solid fa-people-group")
        A5.appendChild(I5);
        Span6.textContent = " About Us";
        A5.appendChild(Span6);
        Li4.appendChild(A5);
        // List Item 5
        Li5.setAttribute("class", "nav-item")
        Ul.appendChild(Li5);
        // Link 5
        A6.setAttribute("class", "nav-link")
        A6.setAttribute("href", "human-resources.html")
        I6.setAttribute("class", "fa-solid fa-building-user")
        A6.appendChild(I6);
        Span7.textContent = " Human Resources";
        A6.appendChild(Span7);
        Li5.appendChild(A6);
        // List Item 6
        Li6.setAttribute("class", "nav-item")
        Ul.appendChild(Li6);
        // Link 6
        A7.setAttribute("class", "nav-link")
        A7.setAttribute("href", "contact.html")
        I7.setAttribute("class", "fa-solid fa-envelope")
        A7.appendChild(I7);
        Span8.textContent = " Contact Us";
        A7.appendChild(Span8);
        Li6.appendChild(A7);
    }

    /** @DisplayFooterNav
     * This function displays the bottom navbar on our website.
     */
    function DisplayFooterNav(){
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0')
        let yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        let Footer = document.getElementsByTagName("footer")[0];
        let Nav = document.createElement("nav")
        let Div = document.createElement("div")
        let Span1 = document.createElement("span")
        let Span2 = document.createElement("span")

        Nav.setAttribute("class", "navbar fixed-bottom navbar-light")
        Footer.appendChild(Nav);

        Div.setAttribute("class", "container-fluid")
        Nav.appendChild(Div);

        Div.appendChild(Span1);

        Span2.setAttribute("class", "robp1")
        Span2.textContent = "WEBD6201 - Assignment 1 | Rob & Rhys© " + today
        Div.appendChild(Span2);
    }
})();