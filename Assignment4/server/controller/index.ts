import express, {Request, Response, NextFunction} from "express";
import {UserDisplayName} from "../util";

export function DisplayHomePage(req : Request, res : Response, next : NextFunction) : void {
    res.render('index', {title: 'Home', page: 'home', displayName: UserDisplayName(req)});
}
export function DisplayAboutPage(req : Request, res : Response, next : NextFunction) : void {
    res.render('index', {title: 'About Us', page: 'about', displayName: UserDisplayName(req)});
}
export function DisplayProductPage(req : Request, res : Response, next : NextFunction) : void {
    res.render('index', {title: 'Projects', page: 'products', displayName: UserDisplayName(req)});
}
export function DisplayServicePage(req : Request, res : Response, next : NextFunction) : void {
    res.render('index', {title: 'Our Services', page: 'services', displayName: UserDisplayName(req)});
}
export function DisplayContactPage(req : Request, res : Response, next : NextFunction) : void {
    res.render('index', {title: 'Contact Us', page: 'contact', displayName: UserDisplayName(req)});
}
export function ProcessContactPage(req : Request, res : Response, next : NextFunction) : void {
    let name : string = req.body.fullName;
    let number : string = req.body.contactNumber;
    let email : string = req.body.email;
    let message : string = req.body.contactMessage;
    console.log(name);
    console.log(number);
    console.log(email);
    console.log(message);
    res.redirect('/')
}