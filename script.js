const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você juntou um dinheiro guardado e nao sabia oque fazer, mas um colega seu te conta sobre investimentos e ele te pergunta se você estaria interessado em começar?",
        alternativas: [
            {
                texto: "Tenho interesse em começar a investir.",
                afirmacao: "Mesmo não sabendo se realmente compensa, você decidi aprender e começar a investir. "
            },
            {
                texto: "Não tenho interesse em começar a investir.",
                afirmacao: "Por não saber muito sobre o assunto ficou com medo de começar e aprender."
            }
        ]
    },
    {
        enunciado: "você estava navegando pela internet até que você encontra um anúncio sobre DayTrade, e por curiosidade você entra para ver como é o curso e vê que ele garante que você irá ganhar um renda extra. Como você prossegue?",
        alternativas: [
            {
                texto: "Sabendo que investimentos são boas formas de renda extra você decidi ingressar no curso para aprender sobre DayTrade.",
                afirmacao: "Confiante no forncedor do curso você entra no curso de DayTrade confiante que irá ter uma renda extra."
            },
            {
                texto: "Não sabendo muito sobre inventimentos você tem medo de começar o curso, mas ainda assim se cadastra no curso pois uma renda extra seria muito útil.",
                afirmacao: "Mesmo com medo do que te espera, você entra no curso pela renda extra."
            }
        ]
    },
    {
        enunciado: "Você se encontra com um amigo que sabe bastante sobre investimentos, enquanto vocês conversam, você pergunta a ele alguns bons investimentos. Então ele te passa dois investimentos, um deles tem um alto risco, mas um alto retorno e o outro tem um baixo risco, mas um baixo retorno. Qual deles você escolheria?",
        alternativas: [
            {
                texto: "Eu escolheria um investimento com alto risco com um alto retorno, pois, me sinto confortável em assumir riscos maiores para ter ganhos maiores .",
                afirmacao: "Como você se sente confortável com altos riscos para altos retornos e você descobre que é um investidor agressivo."
            },
            {
                texto: "Eu escolheria um investimento com baixo risco com pouco retorno, pois, tenho medo de perder meu patrimônio, ou seja, prefiro preservar meu patrimônio.",
                afirmacao: "Como você não se sente confortável com altos risco, prefere preservar seu patrimônio e você descobre que é um investidor conservador."
            }
        ]
    },
    {
        enunciado: "Ao final da conversa, seu amigo te convida para entrar no mercado de ações, que ele me mostraria os primeiros passos de como funciona. Como você prossegue?",
        alternativas: [
            {
                texto: "Digo que quero entrar, pois tenho grandes expectativas nesse mercado e espero grandes lucros.",
                afirmacao: "Você não exita em conhecer mais sobre esse mercados e suas expectativas de lucros."
            },
            {
                texto: "Você não tem interesse em conhcer sobre o mercado, pois, prefere continuar com outros tipos de investimentos que já tem conhecimento.",
                afirmacao: "Você prefere ficar fora do mercado de ações e continuar com investimentos já conhecidos."
            }
        ]
    },
    {
        enunciado: "Depois de anos aprendendo e investindo você tem uma ideia, abrir um curso sobre investimentos para repassar seus conhecimentos e experiências para outras pessoas, que como você no começo não sabia por onde começar. Oque você irá fazer?",
        alternativas: [
            {
                texto: "Acho uma boa ideia, tem muitas pessoas que querem começar e não sabem como, por isso irei fazer um curso para poder ajudar essas pessoas.",
                afirmacao: "No final, você ajudou outras pessoas a começarem a investir."
            },
            {
                texto: "Não acho uma ideia, pois, não tenho tanto conhecimento para ajudar as pessoas.",
                afirmacao: "No final, você se achou incapaz de ensinar outras pessoas sobre o assunto."
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
    caixaPerguntas.textContent = "Em 2035...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
