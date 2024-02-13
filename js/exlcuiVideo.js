
import {conectaApi} from "./conectaApi.js";

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
            
            window.location.href= "../pages/exclusao-concluida.html";
            
            // Exibir mensagem de sucesso ou redirecionar para outra página, se necessário
            console.log("Vídeo excluído com sucesso!");
           
        } else {
            console.log("Vídeo não encontrado.");
        }
    }
    
    formularioExcluir.addEventListener("submit", evento => excluirVideo(evento));
    
    });
    