function CarregarFilmes(){
    let = filmes = ["imagens/chegada.png","imagens/escola.png","imagens/yerster.png","imagens/aranhaverso.jpg", "imagens/batman.jpg","imagens/venom.jpeg"]
    // arrey-->variavel com sub-divisões (indices)
    

    // for laço de repetição
    for(let controle = 0 ; controle < 6 ; controle = controle + 1){
        document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes[controle] + ">"
    }
}
