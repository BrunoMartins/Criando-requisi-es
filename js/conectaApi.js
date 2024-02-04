async function listaVideos(){//pegando a lista de videos do json-server
    const conexao = await fetch ("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criarVideo(titulo,descricao,url,imagem){//alimenta a lista do json server com novos videos enviados
    const conexao = await fetch ("http://localhost:3000/videos",{
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body:JSON.stringify({
            titulo:titulo,
            descricao:`${descricao} mil vizualizações`,
            url:url,
            imagem:imagem
        })
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {// dessa forma podemos importar a variavel em outras paginas e utilizar suas funções
    listaVideos,
    criarVideo,
    buscaVideo
}