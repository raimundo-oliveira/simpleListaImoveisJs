function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';

}

function adicionar() {

    var titulo = document.getElementById('titulo');
    var descricao = document.getElementById('descricao');
    var quartos = document.getElementById('quartos');
    var vagaG = document.getElementById('vagaG');
    var areaT = document.getElementById('areaT');
    var areaC = document.getElementById('areaC');
    var local = document.getElementById('localidade');
    var preco = document.getElementById('preco');
    var image = document.getElementById('image');

        // alerta o valor do campo
    let lista = document.getElementById('lista').innerHTML;
    

          lista += "<li>"+"Titulo: " +titulo.value+ "<br>"+
                        "Descrição" +descricao.value+ "<br>"+
                        "Quartos" +quartos.value+ "<br>"+
                        "Vaga D Garagem" +vagaG.value+ "<br>"+
                        "Área do Terreno" +areaT.value+ "<br>"+
                        "Área Contruída" +areaC.value+ "<br>"+
                        "Localidade" +local.value+ "<br>"+
                        "Preço" +preco.value+ "<br>"+ "<img src='' id= 'imagem'>"+
                 "</li>" + "<hr>"   
        
        document.getElementById('lista').innerHTML = lista;

        limparCampus();

    
    Mudarestado("minhaDiv");
}

function limparCampus() {
    var titulo = document.getElementById('titulo').value = null;
    var descricao = document.getElementById('descricao').value = null;
    var quartos = document.getElementById('quartos').value = null;
    var vagaG = document.getElementById('vagaG').value = null;
    var areaT = document.getElementById('areaT').value = null;
    var areaC = document.getElementById('areaC').value = null;
    var local = document.getElementById('localidade').value = null;
    var preco = document.getElementById('preco').value = null;
    var image = document.getElementById('image').value = null;
}