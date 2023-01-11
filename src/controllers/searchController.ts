import { Request, Response } from "express";
import {Pet} from '../models/pet';
import {createMenuObjetct} from '../helpers/createMenuObjetc'

export const search= (req: Request, res: Response)=>{
    let query: string = req.query.q as string;
    let querySex: string= req.query.sex as string;
    let list: any=[]
    let checkQuerySexAll:boolean= false
    let checkQuerySexMas:boolean= false
    let checkQuerySexFem:boolean= false
    if(!query && querySex==='Todos'){
        res.redirect('/');
        return;
    }
    if(!query && querySex) {
        list= Pet.getFromSex(querySex)
    }else if(query && querySex==='Todos') {
        list= Pet.getFromName(query)
    }else if(query && querySex) {
        list= Pet.getFromNameAndSex(query, querySex)
    }
    
   
    if (querySex==="Masculino") {
        checkQuerySexMas= true
    }
    if (querySex==="Feminino") {
        checkQuerySexFem= true
    }
   
    res.render('pages/page',  {
        menu: createMenuObjetct(''),
        list,
        query,
        checkQuerySexFem,
        checkQuerySexMas
    });
}