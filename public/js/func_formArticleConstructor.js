function formArticleConstructor(q,data) {
    let html='';
    formModel.forEach(formModel => {
        html += 
        `<fieldset id="formArticle_${formModel.legend}">
            <legend>${formModel.legend}</legend>`
        formModel.labels.forEach(labels => {
            switch (labels.label_type ) {
               
                case "input": if (labels.view != false) {
                    html += 
                    `<label ${(labels.disabled)?"disabled":""}>
                                            ${labels.legend}
                                            <div id=${labels.type}>
                                            <input
                                            name="${labels.name}"
                                            onclick="contarNotas()"
                                            ${(labels.readonly)?"readonly":""} 
                                            ${(labels.disabled)?"disabled":""} 
                                            placeholder="${labels.placeholder}"
                                            ${(labels.required)?"required":""} 
                                            oninput="${labels.oninput}"
                                            value="${(data._id!=undefined)?(data[`${labels.name}`]!=undefined?data[`${labels.name}`]:""):""}" 
                                            type="${labels.type}" 
                                            maxlength="${labels.maxlength}"
                                            minlength="${labels.minlength}"
                                            max="${labels.max}"
                                            min="${labels.min}"
                                            step="${labels.step}"
                                            >
                                            ${labels.type == "range" 
                                            ? 
                                            `<span id="${labels.name}">${(data[`${labels.name}`]!=undefined)?data[`${labels.name}`]:"5"}</span>`
                                            :""}
                                            </div>
                    </label>`
                } 
                    
                
                    break;
                case "select": html+=`
                                    <div id="legenda_id_${labels.name}" class="legenda">${labels.legend}</div>
                                    <div id="select_id_${labels.name}" class="selectInput">
                                    <select  name="${labels.name}" 
                                    ${(labels.required)?"required":""}
                                    >
                                    <option ${(data._id!=undefined)?"":"selected "}></option>
                                    `
                                    labels.options.forEach(options => {
                                    html+=
                                    `<option 
                                        ${(data._id!=undefined)?(data[`${labels.name}`]==options)?" selected ":"":""}
                                        value="${options}">${options}</option>`
                                    });html+=`</select></div>` 
                    break;
                case "textarea": html +=`<label>
                                            ${labels.legend} <br>
                                            <textarea 
                                                name="${labels.name}"
                                                ${(labels.readonly)?"readonly":""} 
                                                placeholder="${labels.placeholder}"
                                                ${(labels.required)?"required":""} 
                                                oninput="${labels.oninput}"
                                                value="${(data._id!=undefined)?(data[`${labels.name}`]!=undefined?data[`${labels.name}`]:""):""}" 
                                                type="${labels.label_type}" 
                                                maxlength="${labels.maxlength}"
                                                minlength="${labels.minlength}"
                                            ></textarea>
                                        </label>`
                    break;
                default:
                    break;
            }
        });
        html += `</fieldset>`;
    });
    
    
    if (data._id != undefined) {
        html+=`
        <div class="btns">
            <input class="btn-blue" type="submit" value="Salvar">
            <a href="/admin/article/delete/${data._id}" class="btn-danger">Excluir</a>
        </div>
        `
        let x = document.querySelectorAll("input")
        x.forEach(x=>{
            if (x.value == "undefined") {
                x.value = ""
            }
        })
    } else {
        html+=`
        <div class="btns">
            <input class="btn-blue" type="submit" value="Salvar">
        </div>
        `
        
    }
    
    document.querySelector(q).innerHTML = html;
    
}

