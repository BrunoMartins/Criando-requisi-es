import {conectaApi} from "./conectaApi.js";

document.addEventListener("DOMContentLoaded", () => {

const formularioSubstituir = document.querySelector("[data-formulario-substituir]");

async function substituirVideo (evento){
    evento.preventDefault();

    const urlVideoSubstituir = document.querySelector("[data-url-substituir]").value;

const listaApi = await conectaApi.listaVideos();

const videoParaSubstituir = listaApi.find(video => video.url === urlVideoSubstituir);

const imagem = document.querySelector("[data-imagem-novo]").value;
    const url = document.querySelector("[data-url-novo]").value;
    const titulo = document.querySelector("[data-titulo-novo]").value;
    const descricao = Math.floor(Math.random() *10).toString();




if(videoParaSubstituir){
    await fetch(`http://localhost:3000/videos/${videoParaSubstituir.id}`, {
        method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    titulo:titulo,
                    descricao:`${descricao} mil vizualizações`,
                    url:url,
                    imagem:imagem
                })
            });        
}

window.location.href= "../pages/substituicao-concluida.html";
   
}

formularioSubstituir.addEventListener("submit", evento => substituirVideo(evento));


});

