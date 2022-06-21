import { Schema,Model, model, connection } from "mongoose";

type ArticleType = { 
    id_unb: number,
    status:boolean,
    ano: number,
    instituicao: string,
    edital: string,
    grande_area: string,
    subarea: string,
    orientador_nome: string,
    orientador_cpf: string,
    autor_nome: string,
    autor_cpf: string,
    co_autor_nome: string,
    co_autor_cpf: string,
    multiplos_autores_em: string,
    link_video: string,
    iframe_video: string,
    poster_status: string,
    poster_dia: string,
    poster_turno: string,
    poster_numero: number,
    poster_avaliador_cpf: string,
    poster_nota_1: number,
    poster_nota_2: number,
    poster_nota_3: number,
    poster_nota_4: number,
    poster_nota_5: number,
    mencao_honrosa: string,
    indicacao_premio_destaque: string,
    premio_destaque: string,
    justificativa: string,
    poster_inicio_avaliacao: string,
    poster_fim_avaliacao: string,
    resumo_status: string,
    resumo_inicio_avaliacao: string,
    resumo_fim_avaliacao: string,
    resumo_avaliador_cpf: string,
    resumo_titulo: string,
    resumo_titulo_nota: number,
    resumo_introducao: string,
    resumo_introducao_nota: number,
    resumo_metodologia: string,
    resumo_metodologia_nota: number,
    resumo_resultado: string,
    resumo_resultado_nota: number,
    resumo_conclusao: string,
    resumo_conclusao_nota: number,
    palavras_chaves: string,
    colaboradores: string
}

const schema = new Schema<ArticleType>({
    id_unb: Number,
    status:Boolean,
    ano: Number,
    instituicao: String,
    edital: String,
    grande_area: String,
    subarea: String,
    orientador_nome: String,
    orientador_cpf: String,
    autor_nome: String,
    autor_cpf: String,
    co_autor_nome: String,
    co_autor_cpf: String,
    multiplos_autores_em: String,
    link_video: String,
    iframe_video: String,
    poster_status: String,
    poster_dia: String,
    poster_turno: String,
    poster_numero: Number,
    poster_avaliador_cpf: String,
    poster_nota_1: Number,
    poster_nota_2: Number,
    poster_nota_3: Number,
    poster_nota_4: Number,
    poster_nota_5: Number,
    mencao_honrosa: String,
    indicacao_premio_destaque: String,
    premio_destaque: String,
    justificativa: String,
    poster_inicio_avaliacao: String,
    poster_fim_avaliacao: String,
    resumo_status: String,
    resumo_inicio_avaliacao: String,
    resumo_fim_avaliacao: String,
    resumo_avaliador_cpf: String,
    resumo_titulo: String,
    resumo_titulo_nota: Number,
    resumo_introducao: String,
    resumo_introducao_nota: Number,
    resumo_metodologia: String,
    resumo_metodologia_nota: Number,
    resumo_resultado: String,
    resumo_resultado_nota: Number,
    resumo_conclusao: String,
    resumo_conclusao_nota: Number,
    palavras_chaves: String,
    colaboradores: String
})

const modelName: string = 'Article';
const articleModel = connection && connection.models[modelName] ? (connection.models[modelName] as Model<ArticleType>) : model<ArticleType>(modelName, schema)

export default articleModel;

export const Article = {
    getAll:  ()=>{
        return  articleModel.find({status:true}).sort({ano:"desc"});
    },
    uploadMany: (y:string,d: string) => {
        let year = parseInt(y);
        let data = JSON.parse(d);
        
        data.forEach((element: { ano: number,status:boolean,poster_status:string,resumo_status:string }) => {
            element.ano = year;
            element.status = true;
            element.poster_status = "Pôster aguardando checkin";
            element.resumo_status = "Resumo pendente"
        });
        return articleModel.insertMany(data);
    },
    dataFormValues: async (id:string)=>{
        let condition = await articleModel.findOne({_id:id});
        let data;
        let edit;
        if (condition != undefined) {
            data = JSON.stringify(condition);
            edit = true;
        } else {
            data=JSON.stringify({})
            edit = false;
        }
        let result = {data,edit}
        console.log(result)
        return result;
    },
    findUpdateOrCreate: async (formData:any) => {
        formData.status = true;
        if (formData._id != undefined) {
            await articleModel.findOneAndUpdate({_id:formData._id },formData)
        } else {
            await articleModel.create(formData)
        }
    },
    del: async (id:string) => {
        await articleModel.findOneAndUpdate(
            {_id:id},
            {status:false}
        )    
    },
    search:async (textSearch:string) => {
        let e = await articleModel.find({status:true});
        let articles = e.filter(item=>
        item.ano.toString().toLowerCase().indexOf(textSearch)>-1 ||
        item.orientador_nome.toLowerCase().indexOf(textSearch)>-1 ||
        item.autor_nome.toLowerCase().indexOf(textSearch)>-1 ||
        item.autor_cpf.indexOf(textSearch)>-1||
        item.orientador_cpf.indexOf(textSearch)>-1
        )
        return articles
    }
}