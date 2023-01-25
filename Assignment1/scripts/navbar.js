"use strict";

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
    // A
    let A1 = document.createElement("a")
    let A2 = document.createElement("a")
    let A3 = document.createElement("a")
    let A4 = document.createElement("a")
    let A5 = document.createElement("a")
    let A6 = document.createElement("a")
    // I
    let I1 = document.createElement("i")
    let I2 = document.createElement("i")
    // Button
    let Button1 = document.createElement("button")
    // Span
    let Span1 = document.createElement("span")

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
    A1.textContent = I1 + " WEBD6201"
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
    A2.textContent = "Home";
    Li1.appendChild(A2);
    // List Item 2
    Li2.setAttribute("class", "nav-item")
    Ul.appendChild(Li2);
    // Link 2
    A3.setAttribute("class", "nav-link")
    A3.setAttribute("href", "projects.html")
    A3.textContent = "Projects";
    Li2.appendChild(A3);
    // List Item 3
    Li3.setAttribute("class", "nav-item")
    Ul.appendChild(Li3);
    // Link 3
    A4.setAttribute("class", "nav-link")
    A4.setAttribute("href", "services.html")
    A4.textContent = "Services";
    Li3.appendChild(A4);
    // List Item 4
    Li4.setAttribute("class", "nav-item")
    Ul.appendChild(Li4);
    // Link 4
    A5.setAttribute("class", "nav-link")
    A5.setAttribute("href", "about.html")
    A5.textContent = "About Us";
    Li4.appendChild(A5);
    // List Item 5
    Li5.setAttribute("class", "nav-item")
    Ul.appendChild(Li5);
    // Link 5
    A6.setAttribute("class", "nav-link")
    A6.setAttribute("href", "#")
    A6.textContent = "Human Resources";
    Li5.appendChild(A6);

}

function FooterNav(){

    // <nav className="navbar fixed-bottom navbar-light">
    //     <div className="container-fluid">
    //         <a id="bottomnav" className="navbar-brand" href="#">WEBD6201 - Assignment 1 - Rob & Rhys &copy; </a>
    //     </div>
    // </nav>

    let Nav = document.createElement("nav")
    let Div = document.createElement("div")
    let P1 = document.createElement("p")

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0')
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    let nav = document.getElementById("bottomnav");
    let a = document.createElement("a")
    nav.appendChild(a);
    a.textContent = today
}