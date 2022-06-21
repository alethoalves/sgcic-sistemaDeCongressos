let formModel = [
    {legend:"Dados gerais",
        labels:[
            {legend:"_id",
                label_type:"input", // input|select
                options:[],
                type:"text", // text|number|hidden
                name:"_id",
                readonly: true,
                placeholder:"",
                required: false,
                oninput:"",
                maxlength:"",
                minlength:""
            },
            {legend:"id_unb",
                label_type:"input", // input|select
                options:[],
                type:"text", // text|number|hidden
                name:"id_unb",
                readonly: false,
                placeholder:"",
                required: false,
                oninput:"",
                maxlength:"",
                minlength:""
            },
            {legend:"Resumo vinculado ao congresso de",
                label_type:"select", // input|select
                options:[2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030],
                type:"", // text|number|hidden
                name:"ano",
                readonly: false,
                placeholder:"",
                required: false,
                oninput:"",
                maxlength:"",
                minlength:"",
                step:""
            },
            {legend:"Resumo vinculado à instituição:",
                label_type:"select", // input|select
                options:["UNB","UNICEUB","UDF","UCB","IESB","IFG-AGUAS_LINDAS","IFB"],
                type:"", // text|number|hidden
                name:"instituicao",
                readonly: false,
                placeholder:"",
                required: true,
                oninput:"",
                maxlength:"",
                minlength:""
            },
            {legend:"Resumo vinculado ao EDITAL:",
                label_type:"select", // input|select
                options:["PIBIC","PIBITI","PIBIC-AF","PIBIC-EM"],
                type:"", // text|number|hidden
                name:"edital",
                readonly: false,
                placeholder:"",
                required: true,
                oninput:"",
                maxlength:"",
                minlength:""
            },
            {legend:"Grande Área:",
                label_type:"select", // input|select
                options:["Artes e Humanidades","Saúde e Vida","Exatas e Tecnológicas"],
                type:"", // text|number|hidden
                name:"grande_area",
                readonly: false,
                placeholder:"",
                required: true,
                oninput:"",
                maxlength:"",
                minlength:""
            },
            {legend:"Subárea:",
                label_type:"select", // input|select
                options:
                ["Administração",
                    "Agronomia",
                    "Antropologia",
                    "Arqueologia",
                    "Arquitetura e Urbanismo",
                    "Astronomia",
                    "Ciência da Computação",
                    "Ciência da Informação",
                    "Ciência e Tecnologia de Alimentos",
                    "Ciência Política",
                    "Ciências Biológicas",
                    "Comunicação",
                    "Demografia",
                    "Direito",
                    "Economia",
                    "Educação",
                    "Educação Física",
                    "Enfermagem",
                    "Engenharia Aeroespacial",
                    "Engenharia Agrícola",
                    "Engenharia Biomédica",
                    "Engenharia Civil",
                    "Engenharia de Materiais e Metalúrgica",
                    "Engenharia de Minas",
                    "Engenharia de Produção",
                    "Engenharia de Transportes",
                    "Engenharia Elétrica",
                    "Engenharia Mecânica",
                    "Engenharia Naval e Oceânica",
                    "Engenharia Nuclear",
                    "Engenharia Química",
                    "Engenharia Sanitária",
                    "Farmácia",
                    "Filosofia",
                    "Física",
                    "Fisioterapia e Terapia Ocupacional",
                    "Fonoaudiologia",
                    "GeoCiências",
                    "Geografia",
                    "História",
                    "Lingüística, Letras e Artes",
                    "Matemática",
                    "Medicina",
                    "Medicina Veterinária",
                    "Museologia",
                    "Nutrição",
                    "Oceanografia",
                    "Odontologia",
                    "Planejamento Urbano e Regional",
                    "Probabilidade e Estatística",
                    "Psicologia",
                    "Química",
                    "Recursos Florestais e Engenharia Florestal",
                    "Recursos Pesqueiros e Engenharia de Pesca",
                    "Saúde Coletiva",
                    "Serviço Social",
                    "Sociologia",
                    "Zootecnia"],
                type:"", // text|number|hidden
                name:"subarea",
                readonly: false,
                placeholder:"",
                required: true,
                oninput:"",
                maxlength:"",
                minlength:""
            }
        ]
    },
    {legend:"Dados do(a) orientador(a)",
        labels:[
            {legend:"Nome",
                label_type:"input", // input|select
                options:[],
                type:"text", // text|number|hidden
                name:"orientador_nome",
                readonly: false,
                placeholder:"Digite o nome",
                required: true,
                oninput:"",
                maxlength:"",
                minlength:""
            },
            {legend:"CPF",
                label_type:"input", // input|select
                options:[],
                type:"text", // text|number|hidden
                name:"orientador_cpf",
                readonly: false,
                placeholder:"Digite o CPF, apenas números",
                required: true,
                oninput:"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(11, this.maxLength);",
                maxlength:"11",
                minlength:"11"
            }
        ]
    },
    {legend:"Dados do(s) autor(es)",
        labels:[
            {legend:"Nome do autor",
                label_type:"input", // input|select
                options:[],
                type:"text", // text|number|hidden
                name:"autor_nome",
                readonly: false,
                placeholder:"Digite o nome do autor",
                required: true,
                oninput:"",
                maxlength:"",
                minlength:""
            },
            {legend:"CPF do autor",
                label_type:"input", // input|select
                options:[],
                type:"text", // text|number|hidden
                name:"autor_cpf",
                readonly: false,
                placeholder:"Digite o CPF, apenas números",
                required: true,
                oninput:"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(11, this.maxLength);",
                maxlength:"11",
                minlength:"11"
            },
            {legend:"Nome do co-autor",
                label_type:"input", // input|select
                options:[],
                type:"text", // text|number|hidden
                name:"co_autor_nome",
                readonly: false,
                placeholder:"Digite o nome do co-autor",
                required: false,
                oninput:"",
                maxlength:"",
                minlength:""
            },
            {legend:"CPF do co-autor",
                label_type:"input", // input|select
                options:[],
                type:"text", // text|number|hidden
                name:"co_autor_cpf",
                readonly: false,
                placeholder:"Digite o CPF, apenas números",
                required: false,
                oninput:"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(11, this.maxLength);",
                maxlength:"11",
                minlength:"11"
            },
            {legend:"Múltiplos autores",
                label_type:"input", // input|select
                options:[],
                type:"text", // text|number|hidden
                name:"multiplos_autores_em",
                readonly: false,
                placeholder:"Digite o nome dos autores (PIBIC - Ensino Médio)",
                required: false,
                oninput:"",
                maxlength:"",
                minlength:""
            }
        ]
    },
    {legend:"Dados do vídeo",
        labels:[
            {legend:"Link do vídeo enviado pelo usuário",
                label_type:"input", // input|select
                options:[],
                type:"url", // text|number|hidden
                name:"link_video",
                readonly: false,
                placeholder:"https://",
                required: false,
                oninput:"",
                maxlength:"",
                minlength:""
            },
            {legend:"Código &lt;frame&gt;",
                label_type:"textarea", // input|select|textarea
                options:[],
                type:"", // text|number|hidden
                name:"iframe_video",
                readonly: false,
                placeholder:"Digite o código iframe",
                required: false,
                oninput:"",
                maxlength:"",
                minlength:""
            }
        ]
    },
    {legend:"Dados do Pôster",
        labels:[
            {legend:"Status de apresentação",
                label_type:"select", // input|select
                options:["Pôster aguardando checkin","Pôster aguardando avaliação","Pôster em avaliação","Pôster avaliado"],
                type:"", // text|number|hidden
                name:"poster_status",
                readonly: false,
                placeholder:"",
                required: false,
                oninput:"",
                maxlength:"",
                minlength:""
            },
            {legend:"Dia",
                label_type:"input", // input|select|textarea
                options:[],
                type:"text", // text|number|hidden
                name:"poster_dia",
                readonly: false,
                placeholder:"Digite o dia da apresentação do pôster",
                required: false,
                oninput:"",
                maxlength:"",
                minlength:""
            },
            {legend:"Turno",
                label_type:"input", // input|select|textarea
                options:[],
                type:"text", // text|number|hidden
                name:"poster_turno",
                readonly: false,
                placeholder:"Digite o turno da apresentação do pôster",
                required: false,
                oninput:"",
                maxlength:"",
                minlength:""
            },
            {legend:"Nº do pôster",
                label_type:"input", // input|select|textarea
                options:[],
                type:"number", // text|number|hidden
                name:"poster_numero",
                readonly: false,
                placeholder:"Digite o número do tótem/pôster",
                required: false,
                oninput:"",
                maxlength:"",
                minlength:""
            },
            {legend:"CPF do avaliador do pôster",
                label_type:"input", // input|select|textarea
                options:[],
                type:"text", // text|number|hidden
                name:"poster_avaliador_cpf",
                readonly: false,
                placeholder:"CPF do avaliador",
                required: false,
                oninput:"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(11, this.maxLength);",
                maxlength:"11",
                minlength:""
            },
            {legend:"Qualidade do material de exposição",
                label_type:"input", // input|select|textarea
                options:[],
                type:"range", // text|number|hidden
                name:"poster_nota_1",
                readonly: false,
                placeholder:"Notas entre 0 e 10",
                required: true,
                oninput:"javascript:(Number(this.value)>10)?this.value=10:this.value ; (Number(this.value)<0)?this.value=0:this.value ; document.getElementById(this.name).innerHTML= this.value",
                maxlength:"",
                minlength:"",
                max:"10",
                min:"0",
                step:"0.5"
            },
            {legend:"Clareza e exposição",
                label_type:"input", // input|select|textarea
                options:[],
                type:"range", // text|number|hidden
                name:"poster_nota_2",
                readonly: false,
                placeholder:"Notas entre 0 e 10",
                required: true,
                oninput:"javascript:(Number(this.value)>10)?this.value=10:this.value ; (Number(this.value)<0)?this.value=0:this.value ; document.getElementById(this.name).innerHTML= this.value",
                maxlength:"",
                minlength:"",
                max:"10",
                min:"0",
                step:"0.5"
            },
            {legend:"Domínio dos conceitos",
                label_type:"input", // input|select|textarea
                options:[],
                type:"range", // text|number|hidden
                name:"poster_nota_3",
                readonly: false,
                placeholder:"Notas entre 0 e 10",
                required: true,
                oninput:"javascript:(Number(this.value)>10)?this.value=10:this.value ; (Number(this.value)<0)?this.value=0:this.value ; document.getElementById(this.name).innerHTML= this.value",
                maxlength:"",
                minlength:"",
                max:"10",
                min:"0",
                step:"0.5"
            },
            {legend:"Capacidade de responder aos questionamentos",
                label_type:"input", // input|select|textarea
                options:[],
                type:"range", // text|number|hidden
                name:"poster_nota_4",
                readonly: false,
                placeholder:"Notas entre 0 e 10",
                required: true,
                oninput:"javascript:(Number(this.value)>10)?this.value=10:this.value ; (Number(this.value)<0)?this.value=0:this.value ; document.getElementById(this.name).innerHTML= this.value",
                maxlength:"",
                minlength:"",
                max:"10",
                min:"0",
                step:"0.5"
            },
            {legend:"Capacidade de exposição dentro do tempo",
                label_type:"input", // input|select|textarea
                options:[],
                type:"range", // text|number|hidden
                name:"poster_nota_5",
                readonly: false,
                placeholder:"Notas entre 0 e 10",
                required: true,
                oninput:"javascript:(Number(this.value)>10)?this.value=10:this.value ; (Number(this.value)<0)?this.value=0:this.value ; document.getElementById(this.name).innerHTML= this.value",
                maxlength:"",
                minlength:"",
                max:"10",
                min:"0",
                step:"0.5"
            },
            {legend:"Início da avaliação do pôster",
                label_type:"input", // input|select|textarea
                options:[],
                type:"text", // text|number|hidden
                name:"poster_inicio_avaliacao",
                readonly: false,
                disabled:false,
                placeholder:"",
                required: false,
                oninput:"",
                maxlength:"",
                minlength:""
            },
            {legend:"Fim da avaliação do pôster",
                label_type:"input", // input|select|textarea
                options:[],
                type:"text", // text|number|hidden
                name:"poster_fim_avaliacao",
                readonly: false,
                disabled:false,
                placeholder:"",
                required: false,
                oninput:"",
                maxlength:"",
                minlength:""
            }
        ]
    },
    {legend:"Dados do resumo",
        labels:[
            {legend:"Status do resumo",
                label_type:"select", // input|select
                options:["Resumo pendente","Resumo aguardando avaliação","Resumo em avaliação","Resumo avaliado"],
                type:"", // text|number|hidden
                name:"resumo_status",
                readonly: false,
                placeholder:"",
                required: false,
                oninput:"",
                maxlength:"",
                minlength:""
            },
            {legend:"Início da avaliação do resumo",
                label_type:"input", // input|select|textarea
                options:[],
                type:"text", // text|number|hidden
                name:"resumo_inicio_avaliacao",
                readonly: false,
                disabled:false,
                placeholder:"",
                required: false,
                oninput:"",
                maxlength:"",
                minlength:""
            },
            {legend:"Fim da avaliação do resumo",
                label_type:"input", // input|select|textarea
                options:[],
                type:"text", // text|number|hidden
                name:"resumo_fim_avaliacao",
                readonly: false,
                disabled:false,
                placeholder:"",
                required: false,
                oninput:"",
                maxlength:"",
                minlength:""
            },
            {legend:"CPF do avaliador",
                label_type:"input", // input|select
                options:[],
                type:"text", // text|number|hidden
                name:"resumo_avaliador_cpf",
                readonly: false,
                placeholder:"Digite o CPF, apenas números",
                required: false,
                oninput:"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(11, this.maxLength);",
                maxlength:"11",
                minlength:"11"
            },
            {legend:"Título",
                label_type:"input", // input|select
                options:[],
                type:"text", // text|number|hidden
                name:"resumo_titulo",
                readonly: false,
                placeholder:"Título do resumo",
                required: false,
                oninput:"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(255, this.maxLength);",
                maxlength:"255",
                minlength:""
            },
            {legend:"Nota título",
                label_type:"input", // input|select|textarea
                options:[],
                type:"range", // text|number|hidden
                name:"resumo_titulo_nota",
                readonly: false,
                placeholder:"Notas entre 0 e 10",
                required: true,
                oninput:"javascript:(Number(this.value)>10)?this.value=10:this.value ; (Number(this.value)<0)?this.value=0:this.value ; document.getElementById(this.name).innerHTML= this.value",
                maxlength:"",
                minlength:"",
                max:"10",
                min:"0",
                step:"0.5"
            },
            {legend:"Introdução",
                label_type:"textarea", // input|select|textarea
                options:[],
                type:"", // text|number|hidden
                name:"resumo_introducao",
                readonly: false,
                placeholder:"Digite a introdução (até 1000 caracteres)",
                required: false,
                oninput:"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(1000, this.maxLength);",
                maxlength:"1000",
                minlength:""
            },
            {legend:"Nota introdução",
                label_type:"input", // input|select|textarea
                options:[],
                type:"range", // text|number|hidden
                name:"resumo_introducao_nota",
                readonly: false,
                placeholder:"Notas entre 0 e 10",
                required: true,
                oninput:"javascript:(Number(this.value)>10)?this.value=10:this.value ; (Number(this.value)<0)?this.value=0:this.value ; document.getElementById(this.name).innerHTML= this.value",
                maxlength:"",
                minlength:"",
                max:"10",
                min:"0",
                step:"0.5"
            },
            {legend:"Metodologia",
                label_type:"textarea", // input|select
                options:[],
                type:"text", // text|number|hidden
                name:"resumo_metodologia",
                readonly: false,
                placeholder:"Metodologia (até 1000 caracteres)",
                required: false,
                oninput:"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(1000, this.maxLength);",
                maxlength:"1000",
                minlength:""
            },
            {legend:"Nota metodologia",
                label_type:"input", // input|select|textarea
                options:[],
                type:"range", // text|number|hidden
                name:"resumo_metodologia_nota",
                readonly: false,
                placeholder:"Notas entre 0 e 10",
                required: true,
                oninput:"javascript:(Number(this.value)>10)?this.value=10:this.value ; (Number(this.value)<0)?this.value=0:this.value ; document.getElementById(this.name).innerHTML= this.value",
                maxlength:"",
                minlength:"",
                max:"10",
                min:"0",
                step:"0.5"
            },
            {legend:"Resultado",
                label_type:"textarea", // input|select
                options:[],
                type:"text", // text|number|hidden
                name:"resumo_resultado",
                readonly: false,
                placeholder:"Resultado (até 1000 caracteres)",
                required: false,
                oninput:"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(1000, this.maxLength);",
                maxlength:"1000",
                minlength:""
            },
            {legend:"Nota resultados",
                label_type:"input", // input|select|textarea
                options:[],
                type:"range", // text|number|hidden
                name:"resumo_resultado_nota",
                readonly: false,
                placeholder:"Notas entre 0 e 10",
                required: true,
                oninput:"javascript:(Number(this.value)>10)?this.value=10:this.value ; (Number(this.value)<0)?this.value=0:this.value ; document.getElementById(this.name).innerHTML= this.value",
                maxlength:"",
                minlength:"",
                max:"10",
                min:"0",
                step:"0.5"
            },
            {legend:"Conclusão",
                label_type:"textarea", // input|select
                options:[],
                type:"text", // text|number|hidden
                name:"resumo_conclusao",
                readonly: false,
                placeholder:"Conclusão (até 1000 caracteres)",
                required: false,
                oninput:"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(1000, this.maxLength);",
                maxlength:"1000",
                minlength:""
            },
            {legend:"Nota conclusão",
                label_type:"input", // input|select|textarea
                options:[],
                type:"range", // text|number|hidden
                name:"resumo_conclusao_nota",
                readonly: false,
                placeholder:"Notas entre 0 e 10",
                required: true,
                oninput:"javascript:(Number(this.value)>10)?this.value=10:this.value ; (Number(this.value)<0)?this.value=0:this.value ; document.getElementById(this.name).innerHTML= this.value",
                maxlength:"",
                minlength:"",
                max:"10",
                min:"0",
                step:"0.5"
            },
            {legend:"Palavras-chaves",
                label_type:"textarea", // input|select
                options:[],
                type:"text", // text|number|hidden
                name:"palavras_chaves",
                readonly: false,
                placeholder:"Palavras-chaves (até 255 caracteres)",
                required: false,
                oninput:"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(255, this.maxLength);",
                maxlength:"255",
                minlength:""
            },
            {legend:"Colaboradores",
                label_type:"textarea", // input|select
                options:[],
                type:"text", // text|number|hidden
                name:"colaboradores",
                readonly: false,
                placeholder:"Palavras-chaves (até 255 caracteres)",
                required: false,
                oninput:"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(255, this.maxLength);",
                maxlength:"255",
                minlength:""
            }
            
            
        ]
    },
    {legend:"Premiação",
        labels:[
            {legend:"Indicar ao prêmio destaque",
                label_type:"select", // input|select
                options:["SIM","NÃO"],
                type:"", // text|number|hidden
                name:"indicacao_premio_destaque",
                readonly: false,
                placeholder:"",
                required: false,
                oninput:"",
                maxlength:"",
                minlength:""
            },
            {legend:"Indicar à menção honrosa",
                label_type:"select", // input|select
                options:["SIM","NÃO"],
                type:"", // text|number|hidden
                name:"mencao_honrosa",
                readonly: false,
                placeholder:"",
                required: false,
                oninput:"",
                maxlength:"",
                minlength:""
            }
            
        ]
    },
]