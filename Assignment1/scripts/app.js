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
            case "Contact Us":
                DisplayContactUsPage();
                break;
        }
    }
    window.addEventListener("load", Start)

    function DisplayHomePage() {
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

    }

    function DisplayProjectsPage() {
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
        // Images
        let Image1 = document.createElement("img")
        let Image2 = document.createElement("img")
        // Blank row
        let Blank1 = document.createElement("br")
        let Blank2 = document.createElement("br")
        // Horizontal line
        let Line1 = document.createElement("hr")
        let Line2 = document.createElement("hr")

        // Rob's Projects
        Main1.appendChild(Paragraph1);
        Header1.setAttribute("class", "mb-5")
        Header1.textContent = "Rob and Rhys' Projects"
        Paragraph1.appendChild(Header1);
        Header2.setAttribute("class", "robh1")
        Header2.textContent = "Rob's Projects"
        Paragraph1.appendChild(Header2);
        Paragraph1.appendChild(Line1);
        Image1.setAttribute("class", "img-timetable")
        Image1.setAttribute("src", "images/screenshot6.png")
        Paragraph1.appendChild(Image1);
        Paragraph1.appendChild(Blank1);
        Paragraph1.appendChild(Blank2);

        // Rhys' Projects
        Main1.appendChild(Paragraph2);
        Header3.setAttribute("class", "rhysh1")
        Header3.textContent = "Rhys' Projects"
        Paragraph2.appendChild(Header3);
        Paragraph2.appendChild(Line2);
        Image2.setAttribute("class", "img-timetable")
        Image2.setAttribute("src", "images/screenshot6.png")
        Paragraph2.appendChild(Image2);
    }
    function DisplayServicesPage() {
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
    }
    function DisplayAboutUsPage() {
        let HomeButton = document.getElementById("HomeBtn");
        HomeButton.addEventListener("click", function (){
            location.href = "index.html";
        });

        // Rob's Paragraph
        let RobContent = document.getElementsByTagName("main")[0];
        let RobParagraph = document.createElement("p")
        RobParagraph.setAttribute("id", "MainParagraph")
        RobParagraph.setAttribute("class", "mt-3")
        RobParagraph.textContent = "Rob's Paragraph"
        RobContent.appendChild(RobParagraph);

        // Rhys' Paragraph
        let RhysContent = document.getElementsByTagName("main")[0];
        let RhysParagraph = document.createElement("p")
        RhysParagraph.setAttribute("id", "MainParagraph")
        RhysParagraph.setAttribute("class", "mt-3")
        RhysParagraph.textContent = "Rhys' Paragraph"
        RhysContent.appendChild(RhysParagraph);
    }
    function DisplayContactUsPage() {
        let HomeButton = document.getElementById("HomeBtn");
        HomeButton.addEventListener("click", function (){
            location.href = "index.html";
        });
    }


})();

