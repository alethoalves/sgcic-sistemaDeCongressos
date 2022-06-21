import { query, Request, Response } from 'express';
import {Article} from '../models/Article';

let menu = {editions:false,articles:true} 

export const articles =  async (req: Request, res: Response)=>{
    let articles = await Article.getAll();
    res.render('./pages/admin/articles',{dataArticle:articles,menu});
};

export const formUpload =  async (req: Request, res: Response)=>{
    res.render('./pages/admin/formArticleUpload',{menu});
};

export const upload =  async (req: Request, res: Response)=>{
    await Article.uploadMany(req.body.year,req.body.data)
    res.redirect('/admin/articles')
};

export const formArticle =  async (req: Request, res: Response)=>{
    let id = req.params.id;
    let values = await Article.dataFormValues(id)
    res.render('./pages/admin/formArticle',{data:values.data,edit:values.edit,id,menu});
};
export const submitFormArticle =  async (req: Request, res: Response)=>{
    let formData = req.body;
    await Article.findUpdateOrCreate(formData)
    res.redirect('/admin/articles')
};
export const del = async (req: Request, res: Response) => {
    let id = req.params.id;
    await Article.del(id);
    res.redirect('/admin/articles')
}
export const search = async (req: Request, res: Response) => {
    let textSearch = req.body.text.toLowerCase();
    let articles = await Article.search(textSearch);
    res.render('./pages/admin/articles',{dataArticle:articles,textSearch,menu});
}
