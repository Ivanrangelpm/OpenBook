//var ambiente_processo = 'producao';
 var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config({ path: caminho_env });
const chatIA = new GoogleGenerativeAI("minha-Chave");


var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var forumRouter = require("./src/routes/forum");
var livroRouter = require("./src/routes/livro");
var bobiaRouter = require("./src/routes/bobia");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/forum", forumRouter);
app.use("/livro", livroRouter);
app.use("/bobia", bobiaRouter);

app.listen(PORTA_APP, function () {
    console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n`);
});

const conversa = 'Faça uma recomendação conforme o pedido a seguir :'
const finalConversa = `A recomendação precisa estar como esse exemplo, responda APENAS com as auterações nos <p> : 
        <div class="containerResposta">
          <div class="cardRecomendacao">
            <h2>Nome do Livro: </h2> <p id="tituloLivro">O Código Da Vinci</p>
            <h2>Autor:</h2> <p>Robert Langdon</p>
          </div>
          <div class="cardRecomendacao">
            <h2>Gênero:</h2> <p>Suspense</p>
            <h2>Ano de Publicação</h2> <p>Março de 2003</p>  
          </div>
        </div>
        <div class="containerDescricao">
          <h2>Descrição:</h2>
          <p>Experimente "O Código Da Vinci" de Dan Brown. Este romance de ação e suspense segue o estudioso de simbologia Robert Langdon enquanto ele decifra um enigma antigo que pode levar à descoberta de um segredo há muito perdido que pode abalar os alicerces do Cristianismo. Com uma trama envolvente, personagens cativantes e reviravoltas inesperadas, "O Código Da Vinci" oferece uma leitura emocionante e envolvente.</p>
        </div>

`

app.post("/perguntar", async (req, res) => {
    const pergunta = req.body.pergunta;
  

    var pergCompleta = `${conversa} ${pergunta} ${finalConversa}`
    console.log(pergCompleta)
    try {
        const resultado = await gerarResposta(pergCompleta);
        res.json( { resultado } );
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }

});

// função para gerar respostas usando o gemini
async function gerarResposta(mensagem) {
    // obtendo o modelo de IA
    const modeloIA = chatIA.getGenerativeModel({ model: "gemini-pro" });

    try {
        // gerando conteúdo com base na pergunta
        const resultado = await modeloIA.generateContent(`Em um paragráfo responda: ${mensagem}`);
        const resposta = await resultado.response.text();
        
        console.log(resposta);

        return resposta;
    } catch (error) {
        console.error(error);
        throw error;
    }
}