function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';

}
//titulo, descricao, quartos, vagaG, areaT, areaCst,local, preco, path
function imoveis(titulo, descricao, quartos, vagaG, areaT, areaCst,local, preco, path){
    const imovelList = 
        {
            titulo: titulo, 
            descricao: descricao, 
            quartos: quartos, 
            vagaG: vagaG, 
            areaT: areaT, 
            areaCst: areaCst,
            local: local, 
            preco: preco, 
            path: path
        };
    
    //alert(imovelList);
    return imovelList;



}

function adicionar() {

    var titulo = document.getElementById('titulo').value;
    var descricao = document.getElementById('descricao').value;
    var quartos = document.getElementById('quartos').value;
    var vagaG = document.getElementById('vagaG').value;
    var areaT = document.getElementById('areaT').value;
    var areaC = document.getElementById('areaC').value;
    var local = document.getElementById('localidade').value;
    var preco = document.getElementById('preco').value;
    var path = document.getElementById('image').value;

    let list = [];
    list = new imoveis(titulo, descricao, quartos, vagaG, areaT, areaC,local, preco, path);

    limparCampus();

    Mudarestado("minhaDiv");

   show(list);
}

function show(lista) {
    
    let l = document.getElementById('lista').innerHTML;

    l += "<li>"+"Titulo: " +lista.titulo+ "<br>"+
                  "Descrição: " +lista.descricao+ "<br>"+
                  "Quartos: " +lista.quartos+ "<br>"+
                  "Vaga D Garagem: " +lista.vagaG+ "<br>"+
                  "Área do Terreno: " +lista.areaT+ "<br>"+
                  "Área Contruída: " +lista.areaC+ "<br>"+
                  "Localidade: " +lista.local+ "<br>"+
                  "Preço: " +lista.preco+ "<br>"+"<br>"+ 
                  "<img src='"+lista.path+"' id='imagem'>"+
           "</li>" + "<hr>"   
  
  document.getElementById('lista').innerHTML = l;
  
  //document.getElementById("imagem").src = lista.path;
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
    var path = document.getElementById('image').value = null;
}

function validacao(f) {

	//Verificação de campo vazio 
    if(f.titulo.value == null || f.descricao.value == null || f.quartos.value == null || f.vagaG.value == null
    || f.areaT.value == null || f.areaC.value == null || f.localidade.value == null 
    || f.preco.value == null || f.image.value == "") {    
        alert("Preencha todos os campos!");
        f.nome.focus();
        return false;
    }
    else{
        adicionar();
    }
}
