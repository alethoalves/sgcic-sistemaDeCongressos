function contarNotas() {
    let arrayNotas = document.querySelectorAll('[type="range"]');
    let nota = 0;
    
    document.getElementById('formArticle_Premiação').style.display = 'none'
    document.getElementById('legenda_id_indicacao_premio_destaque').style.display = 'none'
    document.getElementById('select_id_indicacao_premio_destaque').style.display = 'none'
    document.getElementById('legenda_id_mencao_honrosa').style.display = 'none'
    document.getElementById('select_id_mencao_honrosa').style.display = 'none'
    arrayNotas.forEach(element => {
        nota+=Number(element.value);
    });
    if (nota >= 80 & nota <100) {
        document.querySelector('[name=indicacao_premio_destaque]').value=''
        document.getElementById('formArticle_Premiação').style.display = ''
        document.getElementById('legenda_id_mencao_honrosa').style.display = ''
        document.getElementById('select_id_mencao_honrosa').style.display = ''
    } else if(nota == 100){
        document.querySelector('[name=mencao_honrosa]').value=''
        document.getElementById('formArticle_Premiação').style.display = ''
        document.getElementById('legenda_id_indicacao_premio_destaque').style.display = ''
        document.getElementById('select_id_indicacao_premio_destaque').style.display = ''
    } else if(nota<80){
        document.querySelector('[name=mencao_honrosa]').value=''
        document.querySelector('[name=indicacao_premio_destaque]').value=''
    }
    console.log(nota);
}