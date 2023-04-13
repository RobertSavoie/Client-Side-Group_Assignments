"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessContactPage = exports.DisplayContactPage = exports.DisplayServicePage = exports.DisplayProductPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const util_1 = require("../util");
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: (0, util_1.UserDisplayName)(req) });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About Us', page: 'about', displayName: (0, util_1.UserDisplayName)(req) });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProductPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'products', displayName: (0, util_1.UserDisplayName)(req) });
}
exports.DisplayProductPage = DisplayProductPage;
function DisplayServicePage(req, res, next) {
    res.render('index', { title: 'Our Services', page: 'services', displayName: (0, util_1.UserDisplayName)(req) });
}
exports.DisplayServicePage = DisplayServicePage;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: (0, util_1.UserDisplayName)(req) });
}
exports.DisplayContactPage = DisplayContactPage;
function ProcessContactPage(req, res, next) {
    let name = req.body.fullName;
    let number = req.body.contactNumber;
    let email = req.body.email;
    let message = req.body.contactMessage;
    console.log(name);
    console.log(number);
    console.log(email);
    console.log(message);
    res.redirect('/');
}
exports.ProcessContactPage = ProcessContactPage;
//# sourceMappingURL=index.js.map