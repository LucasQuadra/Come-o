function toggleMode(){
    const html= document.documentElement
    html.classList.toggle('ligth')

    // pegar a tag img
    const img= document.querySelector("#profile img")
    // substituir a imagem
     if(html.classList.contains('ligth')) {
    // se tiver sem ligth mode, adcionar a imagem ligth mode
    img.setAttribute('src','__MACOSX/Avatar.png')
    
    }else{

     }
    // se tiver ligth mode, manter a imagem normal
    img.setAttribute('src','projeto/avatar-light.png')
    

}


