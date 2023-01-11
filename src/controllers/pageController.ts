import { Request, Response } from "express";
import {createMenuObjetct} from '../helpers/createMenuObjetc'
import {Pet} from '../models/pet'

export const home= (req: Request, res: Response)=>{
    let list = Pet.getAll();
    res.render('pages/page', {
        menu: createMenuObjetct('all'),
        banner: {
            title: 'Todos os animais',
            background:'allanimals.jpg'
        }, 
        list
    });
}
export const dogs= (req: Request, res: Response)=>{
    let list = Pet.getFromType('dog')
    res.render('pages/page', {
        menu: createMenuObjetct('dog'),
        banner: {
            title: 'Cachorros',
            background:'banner_dog.jpg'
        },
        list
    });
}
export const cats= (req: Request, res: Response)=>{
    let list = Pet.getFromType('cat')
    res.render('pages/page', {
        menu: createMenuObjetct('cat'),
        banner: {
            title: 'Gatos',
            background:'banner_cat.jpg'
        }, 
        list
    });
}
export const fishes= (req: Request, res: Response)=>{
    let list = Pet.getFromType('fish')
    res.render('pages/page', {
        menu: createMenuObjetct('fish'),
        banner: {
            title: 'Peixeis',
            background:'banner_fish.jpg'
        },
        list
    });
}
