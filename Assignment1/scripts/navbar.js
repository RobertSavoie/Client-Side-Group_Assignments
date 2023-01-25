// <header>
// <nav className="navbar navbar-expand-lg">
//     <div className="container-fluid">
//         <a className="navbar-brand" href="index.html"><i className="fa-solid fa-hippo"></i> WEBD6201</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
//                 data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
//                 aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                     <a className="nav-link" href="index.html"><i className="fa-solid fa-house"></i> Home</a>
//                 </li>
//                 <li id="projectsnav" className="nav-item">
//                     <a className="nav-link" href="projects.html"><i className="fa-solid fa-inbox"></i> Projects</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link active" aria-current="page" href="services.html"><i
//                         className="fa-solid fa-bell-concierge"></i> Services</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="about.html"><i className="fa-solid fa-people-group"></i> About Us</a>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </nav>
// <header>

function DisplayNavbar(){

    let Header = document.getElementsByTagName("header")[0];
    let Nav = document.createElement("nav")
    Header.appendChild(Nav);
    Nav.setAttribute("class", "navbar navbar-expand-lg")

    let Div1 = document.createElement("div")
    Nav.appendChild(Div1);
    Div1.setAttribute("class", "container-fluid")

    let A1 = document.createElement("a")
    let I1 = document.createElement("i")
    Div1.appendChild(A1);
    A1.setAttribute("class", "navbar-brand")
    A1.setAttribute("href", "index.html")
    I1.setAttribute("class", "fa-solid fa-hippo")
    A1.textContent = I1 + " WEBD6201"

    let Button1 = document.createElement("button")
    Div1.appendChild(Button1);
    Button1.setAttribute("class", "navbar-toggler")
    Button1.setAttribute("type", "button")
    Button1.setAttribute("data-bs-toggle", "collapse")
    Button1.setAttribute("data-bs-target", "#navbarSupportedContent")
    Button1.setAttribute("aria-controls", "navbarSupportedContent")
    Button1.setAttribute("aria-expanded", "false")
    Button1.setAttribute("aria-label", "Toggle navigation")

    let Span1 = document.createElement("span")
    Button1.appendChild(Span1);
    Span1.setAttribute("class", "navbar-toggler-icon")

    let Div2 = document.createElement("div")
    Div1.appendChild(Div2);

    let Ul = document.createElement("ul")
    Div2.appendChild(Ul);

    let Li1 = document.createElement("li")
    Ul.appendChild(Li1);
    let A2 = document.createElement("a")
    A2.setAttribute("class", "nav-link")
    A2.setAttribute("href", "#")
    Li1.appendChild(A2);

    let Li2 = document.createElement("li")
    Ul.appendChild(Li2);
    let A3 = document.createElement("a")
    A3.setAttribute("class", "nav-link")
    A3.setAttribute("href", "#")
    Li2.appendChild(A3);

    let Li3 = document.createElement("li")
    Ul.appendChild(Li3);
    let A4 = document.createElement("a")
    A4.setAttribute("class", "nav-link")
    A4.setAttribute("href", "#")
    Li3.appendChild(A4);

    let Li4 = document.createElement("li")
    Ul.appendChild(Li4);
    let A5 = document.createElement("a")
    A5.setAttribute("class", "nav-link")
    A5.setAttribute("href", "#")
    Li4.appendChild(A5);

    let Li5 = document.createElement("li")
    Ul.appendChild(Li5);
    let A6 = document.createElement("a")
    A6.setAttribute("class", "nav-link")
    A6.setAttribute("href", "#")
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