const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você aceita participar desse quizz para compreender melhor seus sentimentos?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Você é uma pessoa sincera e extremamente realista,"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Uau,"
            }
        ]
    },
    {
        enunciado: "Você se considera na maioria das vezes, uma pessoa estressada ou calma?",
        alternativas: [
            {
                texto: "Estressada",
                afirmacao: "com as emoções muito a flor da pele!"
            },
            {
                texto: "Calma",
                afirmacao: "você é uma pessoa amigável e sabe lidar muito bem com suas emoções!"
            }
        ]
    },
    {
        enunciado: "Você se sente triste com que frequência?",
        alternativas: [
            {
                texto: "Com facilidade",
                afirmacao: "Obrigada pela interação com o quizz."
            },
            {
                texto: "Raramente!",
                afirmacao: "Muito obrigada pela interação com o quizz."
            }
        ]
    },
    {
        enunciado: "Você é uma pessoa otimista ou pessimista na maior parte do tempo?",
        alternativas: [
            {
                texto: "Pessimista, com certeza",
                afirmacao: "Dica: leve a vida com mais leveza..."
            },
            {
                texto: "Tento ser sempre otimista em meus dias!",
                afirmacao: "Mantenha seu divertidamente assim,"
            }
        ]
    },
    {
        enunciado: "E por fim, você se considera uma pessoa corajosa? ",
        alternativas: [
            {
                texto: "Sou medroso (a)!",
                afirmacao: "Seus dias serão melhores!!"
            },
            {
                texto: "Simmm!",
                afirmacao: "sempre alegre!"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Parabéns!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
