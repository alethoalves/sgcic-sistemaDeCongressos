import { query, Request, Response } from 'express';
import {Edition} from '../models/Edition'

let menu = {editions:true,articles:false}

export const editions =  async (req: Request, res: Response)=>{
    let editions = await Edition.getAll();
    res.render('./pages/admin/editions',{dataEdition:editions,menu});
};

export const formEdition =  async (req: Request, res: Response)=>{    
    let dataForm = await Edition.findByYear(req.params.year);
    res.render('./pages/admin/formEdition',{dataForm,menu});
};

export const edition = async (req: Request, res: Response) => {
    let formData = req.body;
    await Edition.findUpdateOrCreate(formData.year,formData)
    res.redirect('/admin');
}

export const del = async (req: Request, res: Response) => {
    await Edition.del(req.params.year)
    res.redirect('/admin');
}

export const search = async (req: Request, res: Response) => {
    let editions = await Edition.searchEditions(req.body.text)
    res.render('./pages/admin/editions',{dataEdition:editions,textSearch:req.body.text,menu});
}