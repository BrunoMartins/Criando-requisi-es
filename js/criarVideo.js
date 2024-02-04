import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento){//funçao que vai dar valor através dos inputs para cada item:titulo,descricao,url,imagem
    evento.preventDefault();
    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() *10).toString();// math random sorteia um numero entre 0 e 10 e math floor arredonda. Depois é transformado em string para poder ir na descricao

    await conectaApi.criarVideo(titulo,descricao,url,imagem);// coleta os valores das variaveis para passar como parametro para a função

    window.location.href= "../pages/envio-concluido.html";//redireciona para outra página caso tenha carregado o vídeo corretamente


}

formulario.addEventListener("submit", evento => criarVideo(evento));