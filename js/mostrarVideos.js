import {conectaApi} from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard (titulo, descricao, url,imagem){//função para construir os cards de cada vídeo
    const video = document.createElement("li");
    video.className = "videos__item"
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
    title=${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${imagem}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>
`
return video;
}

async function listaVideos(){
    const listaApi = await conectaApi.listaVideos();// tem que chamar a funçao para conseguir usar o await, essa funçao vem do arquivo conectaApi.js
    listaApi.forEach(element => lista.appendChild(constroiCard(element.titulo, element.descricao, element.url, element.imagem)));//criando o card para cada elemento dentro da lista
}

listaVideos();

document.addEventListener("DOMContentLoaded", () => {
const formularioExcluir = document.querySelector("[data-formulario-remover]");

async function excluirVideo(evento) {
    evento.preventDefault();
    
    // Obtém a URL do vídeo a ser excluído do campo de entrada
    const urlVideoExcluir = document.querySelector("[data-url-remover]").value;

    // Obtém a lista de vídeos da API
    const listaApi = await conectaApi.listaVideos();

    // Procura o vídeo com a URL correspondente
    const videoParaExcluir = listaApi.find(video => video.url === urlVideoExcluir);

    // Se o vídeo for encontrado, exclua-o
    if (videoParaExcluir) {
        // Faça a solicitação para excluir o vídeo
        await fetch(`http://localhost:3000/videos/${videoParaExcluir.id}`, {
            method: "DELETE"
        });

        // Atualize a lista de vídeos na tela após a exclusão
        await listaVideos();
        
        // Exibir mensagem de sucesso ou redirecionar para outra página, se necessário
        console.log("Vídeo excluído com sucesso!");
    } else {
        console.log("Vídeo não encontrado.");
    }
}

formularioExcluir.addEventListener("submit", evento => excluirVideo(evento));

});
