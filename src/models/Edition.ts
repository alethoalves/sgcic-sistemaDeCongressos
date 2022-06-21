import { Schema,Model, model, connection } from "mongoose";

type EditionType = {
    year: number,
    name: string,
    status: string
}

const schema = new Schema<EditionType>({
    year: Number,
    name: String, 
    status: String
})

const modelName: string = 'Edition';
const editionModel = connection && connection.models[modelName] ? (connection.models[modelName] as Model<EditionType>) : model<EditionType>(modelName, schema)
export default editionModel;

export const Edition = {
    getAll: async () =>{
        let editions = await editionModel.find({}).sort({year:"desc"});
        return editions;
    },
    findByYear:async (year:string)=>{
        let edition = await editionModel.findOne({year:parseInt(year)});
        let newForm;
        let editForm;
        if (edition != undefined) {
            newForm = false;
            editForm = true;
        } else {
            newForm = true;
            editForm = false;
        }
        let dataForm = {data:edition,new:newForm,edit:editForm};
        return dataForm;
    },
    findUpdateOrCreate: async (year:string,data:any)=>{
        let formData = data;
        let filter = {year: parseInt(year)};
        let newOrUpdate = formData;
        let insertType = await editionModel.findOne(filter);
        if (insertType != undefined) {
            //Editar registro
            await editionModel.findOneAndUpdate(filter, newOrUpdate)
        } else {
            //Inserir novo registro
            await editionModel.create(newOrUpdate)
        }
    },
    del: async (year:string)=>{
        let del = {year: parseInt(year)};
        await editionModel.deleteOne(del);
    },
    searchEditions: async (textSearch: string)=>{
        let e = await editionModel.find({});
        let editions = e.filter(item=>
            item.year.toString().toLowerCase().indexOf(textSearch)>-1 ||
            item.name.toLowerCase().indexOf(textSearch)>-1 ||
            item.status.toLowerCase().indexOf(textSearch)>-1
        )
        return editions;
    }
}