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
                DisplayProductsPage();
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
        let ProductsButton = document.getElementById("ProductsBtn");
        ProductsButton.addEventListener("click", function (){
            location.href = "products.html";
        });
        let ServicesButton = document.getElementById("ServicesBtn");
        ServicesButton.addEventListener("click", function (){
            location.href = "services.html";
        });
        let AboutUsButton = document.getElementById("AboutUsBtn");
        AboutUsButton.addEventListener("click", function(){
            location.href = "about.html";
        });
        let ContactUsButton = document.getElementById("ContactUsBtn");
        ContactUsButton.addEventListener("click", function (){
            location.href = "contact.html"
        });

        // Paragraph creation using content injection
        let MainContent = document.getElementsByTagName("main")[0];
        let MainParagraph = document.createElement("p")
        MainParagraph.setAttribute("id", "MainParagraph")
        MainParagraph.setAttribute("class", "mt-3")
        MainParagraph.textContent = "Welcome to Rob and Rhys' website!"
        MainContent.appendChild(MainParagraph);

        // Template strings
        // let FirstString = "This is";
        // let SecondString = `${FirstString} the Main Paragraph.`;
        // MainParagraph.textContent = SecondString;

        // Create article
        // let Article = document.createElement("article");
        // let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is my Article Paragraph</p>`;
        // Article.setAttribute("class", "container")
        // Article.innerHTML = ArticleParagraph;
        // MainContent.appendChild(Article);
    }
    function DisplayProductsPage() {
        let HomeButton = document.getElementById("HomeBtn");
        HomeButton.addEventListener("click", function (){
            location.href = "index.html";
        });
    }
    function DisplayServicesPage() {
        let HomeButton = document.getElementById("HomeBtn");
        HomeButton.addEventListener("click", function (){
            location.href = "index.html";
        });
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

