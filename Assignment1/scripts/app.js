"use strict";

//IIFE - Immediately Invoked Function Expression
//AKA  - Anonymous Self-Executing Function
(function(){

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

        // Mains
        let Main1 = document.getElementsByTagName("main")[0];
        // Headers
        let Header1 = document.createElement("h1")
        // Paragraphs
        let Paragraph1 = document.createElement("p")

        // Welcome header
        Header1.setAttribute("class", "mb-5")
        Header1.textContent = "Welcome to Our Website!"
        Main1.appendChild(Header1);

        // Welcome paragraph
        Paragraph1.setAttribute("class", "mt-3")
        Paragraph1.textContent = "Welcome to Rob and Rhys' website!"
        Main1.appendChild(Paragraph1);

        DisplayFooterNav();
    }

    function DisplayProjectsPage() {
        DisplayNavbar();
        let a = document.getElementsByTagName("a")[2];
        a.setAttribute("class", "nav-link active")
        a.setAttribute("aria-current", "page")

        let HomeButton = document.getElementById("HomeBtn");
        HomeButton.addEventListener("click", function (){
            location.href = "index.html";
        });

        // Mains
        let Main1 = document.getElementsByTagName("main")[0];
        // Headers
        let Header1 = document.createElement("h1")
        let Header2 = document.createElement("h1")
        // let Header3 = document.createElement("h1")
        // Paragraphs
        let Paragraph1 = document.createElement("p")
        let Paragraph2 = document.createElement("p")
        let Paragraph3 = document.createElement("p")
        // Images
        let Image1 = document.createElement("img")
        let Image2 = document.createElement("img")
        let Image3 = document.createElement("img")
        // Blank row
        let Blank1 = document.createElement("br")
        let Blank2 = document.createElement("br")
        // Horizontal line
        let Line1 = document.createElement("hr")
        // let Line2 = document.createElement("hr")

        // Rob's Projects
        Main1.appendChild(Paragraph1);
        Header1.setAttribute("class", "mb-5")
        Header1.textContent = "Rob and Rhys' Projects"
        Paragraph1.appendChild(Header1);
        Header2.setAttribute("class", "robh1")
        Header2.textContent = "Rob's Projects"
        Paragraph1.appendChild(Header2);
        Paragraph1.appendChild(Line1);
        Paragraph1.appendChild(Paragraph2);
        Paragraph2.textContent = "Here are all three of Rob's personal projects he has worked on over the years. "
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




        // Rhys' Projects
        // Main1.appendChild(Paragraph2);
        // Header3.setAttribute("class", "rhysh1")
        // Header3.textContent = "Rhys' Projects"
        // Paragraph2.appendChild(Header3);
        // Paragraph2.appendChild(Line2);
        // Image3.setAttribute("class", "img-timetable")
        // Image3.setAttribute("src", "images/screenshot6.png")
        // Paragraph2.appendChild(Image2);

        DisplayFooterNav();
    }
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
        // Headers
        let Header1 = document.createElement("h1")
        let Header2 = document.createElement("h1")
        let Header3 = document.createElement("h1")
        // Paragraphs
        let Paragraph1 = document.createElement("p")
        let Paragraph2 = document.createElement("p")

        // Main Header
        Header1.setAttribute("class", "mb-5")
        Header1.textContent = "Services we provide:"
        Main1.appendChild(Header1);

        // Rob's services
        let RobList1 = document.createElement("li")
        let RobList2 = document.createElement("li")
        let RobList3 = document.createElement("li")
        RobList1.textContent = "HTML/PHP"
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
        RhysList1.textContent = "HTML/PHP"
        RhysList2.textContent = "C#/Visual Studio"
        RhysList3.textContent = "COBOL"
        Header3.setAttribute("class", "rhysh1")
        Header3.textContent = "Rhys' Skills:"
        Main1.appendChild(Header3);
        Paragraph2.setAttribute("class", "mt-3")
        Paragraph2.appendChild(RhysList1)
        Paragraph2.appendChild(RhysList2)
        Paragraph2.appendChild(RhysList3)
        Main1.appendChild(Paragraph2);

        DisplayFooterNav();
    }
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
        // Headers
        let Header1 = document.createElement("h1")
        let Header2 = document.createElement("h1")
        // Paragraphs
        let Paragraph1 = document.createElement("p")
        let Paragraph2 = document.createElement("p")
        // Break lines
        let Hr1 = document.createElement("hr")

        // Rob's Paragraph
        Header1.setAttribute("class", "robh1")
        Header1.textContent = "Rob's Paragraph"
        Main1.appendChild(Header1)
        Paragraph1.setAttribute("class", "mt-3")
        Paragraph1.textContent = "Rob's Paragraph"
        Main1.appendChild(Paragraph1);
        Main1.appendChild(Hr1);

        // Rhys' Paragraph
        Header2.setAttribute("class", "rhysh1")
        Header2.textContent = "Rhys' Paragraph"
        Main1.appendChild(Header2);
        Paragraph2.setAttribute("id", "MainParagraph")
        Paragraph2.setAttribute("class", "mt-3")
        Paragraph2.textContent = "Rhys' Paragraph"
        Main1.appendChild(Paragraph2);

        DisplayFooterNav();
    }

    function DisplayHRPage() {
        DisplayNavbar();
        let a = document.getElementsByTagName("a")[5];
        a.setAttribute("class", "nav-link active")
        a.setAttribute("aria-current", "page")

        let HomeButton = document.getElementById("HomeBtn");
        HomeButton.addEventListener("click", function (){
            location.href = "index.html";
        });

        DisplayFooterNav();
    }

    function DisplayContactUsPage() {
        DisplayNavbar();
        let a = document.getElementsByTagName("a")[6];
        a.setAttribute("class", "nav-link active")
        a.setAttribute("aria-current", "page")

        let HomeButton = document.getElementById("HomeBtn");
        HomeButton.addEventListener("click", function (){
            location.href = "index.html";
        });

        DisplayFooterNav();
    }

    function DisplayNavbar(){
        // Header
        let Header = document.getElementsByTagName("header")[0];
        // Nav
        let Nav = document.createElement("nav")
        // Div
        let Div1 = document.createElement("div")
        let Div2 = document.createElement("div")
        // UL
        let Ul = document.createElement("ul")
        // Li
        let Li1 = document.createElement("li")
        let Li2 = document.createElement("li")
        let Li3 = document.createElement("li")
        let Li4 = document.createElement("li")
        let Li5 = document.createElement("li")
        let Li6 = document.createElement("li")
        // A
        let A1 = document.createElement("a")
        let A2 = document.createElement("a")
        let A3 = document.createElement("a")
        let A4 = document.createElement("a")
        let A5 = document.createElement("a")
        let A6 = document.createElement("a")
        let A7 = document.createElement("a")
        // I
        let I1 = document.createElement("i")
        let I2 = document.createElement("i")
        let I3 = document.createElement("i")
        let I4 = document.createElement("i")
        let I5 = document.createElement("i")
        let I6 = document.createElement("i")
        let I7 = document.createElement("i")
        // Button
        let Button1 = document.createElement("button")
        // Span
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

        Span1.setAttribute("class", "navbar-brand")
        Span1.textContent = "WEBD6201 - Assignment 1 - Rob & Rhys©"
        Div.appendChild(Span1);

        Span2.setAttribute("class", "navbar-brand")
        Span2.textContent = today
        Div.appendChild(Span2);
    }

})();

