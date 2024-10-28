const perguntas = [
    {
        enunciado: "Questão Matemática: Qual das alternativas corresponde à equação correta de uma função de 1º grau?",
        alternativas: [
            {
                texto: "𝑦=2𝑥2−3",
                pontos: 0
            },
            {
                texto: "𝑦=5𝑥+1",
                pontos: 200
            }
        ]
    },
    {
        enunciado: "Qual é o valor de x na equação 3x+7=16?",
        alternativas: [
            {
                texto: "2",
                pontos: 0
            },
            {
                texto: "3",
                pontos: 200
            }
        ]
    },
    {
        enunciado: "Em relação às figuras de linguagem, qual é a definição correta de metáfora?",
        alternativas: [
            {
                texto: "Uso de palavras que imitam sons.",
                pontos: 0
            },
            {
                texto: "Substituição de um termo por outro com o qual possui uma relação de semelhança implícita.",
                pontos: 200
            }            
        ]
    },
    {
        enunciado: "Na estrutura de um período composto por subordinação, uma oração subordinada substantiva objetiva direta desempenha que função?",
        alternativas: [
            {
                texto: "Predicativo.",
                pontos: 200
            },
            {
                texto: "Objeto direto.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Segundo Sócrates, qual era o principal objetivo da filosofia?",
        alternativas: [
            {
                texto: "Acumular conhecimento científico.",
                pontos: 1
            },
            {
                texto: "Buscar a verdade por meio do questionamento contínuo.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Para Platão, o mundo sensível é",
        alternativas: [
            {
                texto: "O único mundo verdadeiro e imutável.",
                pontos: 0
            },
            {
                texto: "Uma ilusão que esconde o mundo das ideias.",
                pontos: 200
            }
        ]
    },
    {
        enunciado: "O que define um movimento uniforme?",
        alternativas: [
            {
                texto: "Velocidade constante e aceleração variável.",
                pontos: 0
            },
            {
                texto: "Velocidade constante e aceleração nula",
                pontos: 200
            }
        ]
    },
    {
        enunciado: "De acordo com a 1ª Lei de Newton (Princípio da Inércia), um objeto em repouso tende a:",
        alternativas: [
            {
                texto: "Permanecer em movimento com aceleração constante.",
                pontos: 0
            },
            {
                texto: "Permanecer em repouso, a menos que uma força externa atue sobre ele.",
                pontos: 1
            }
        ]
    },
    {
        enunciado: "Qual das alternativas representa corretamente o gráfico de uma função afim, f(x)=ax+b, quando o coeficiente angular 𝑎 é negativo?",
        alternativas: [
            {
                texto: "O gráfico é uma parábola com concavidade para cima.",
                pontos: 0
            },
            {
                texto: "O gráfico é uma parábola com concavidade para baixo.",
                pontos: 200
            }
        ]
    },
    {
        enunciado: "Para Aristóteles, a virtude está relacionada ao:",
        alternativas: [
            {
                texto: "Excesso de emoções e paixões.",
                pontos: 0
            },
            {
                texto: "Meio-termo entre os extremos de comportamento.",
                pontos: 200
            }
        ]
    },
    {
        enunciado: "A aceleração da gravidade na superfície da Terra é aproximadamente:",
        alternativas: [
            {
                texto: "8,8 m/s²",
                pontos: 0
            },
            {
                texto: "9,8 m/s²",
                pontos: 200
            }
        ]
    },
    {
        enunciado: "Qual é a função da conjunção “mas” na frase: “Estudou muito, mas não passou no exame?",
        alternativas: [
            {
                texto: "Expressar contraste.",
                pontos: 200
            },
            {
                texto: "Estabelecer uma conclusão.",
                pontos: 0
            }
        ]
    }
];

let pontos = 0;
let perguntaAtual = 0;

// Função para embaralhar as perguntas
function embaralharPerguntas(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const iniciarBtn = document.querySelector('.iniciar-btn');
const novamenteBtn = document.querySelector('.novamente-btn');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

iniciarBtn.addEventListener('click', iniciarQuiz);
novamenteBtn.addEventListener('click', reiniciarQuiz);

function iniciarQuiz() {
    pontos = 0;
    perguntaAtual = 0;
    embaralharPerguntas(perguntas); // Embaralha as perguntas
    iniciarBtn.style.display = 'none';
    caixaResultado.style.display = 'none';
    exibirPergunta();
}

function exibirPergunta() {
    if (perguntaAtual < perguntas.length) {
        const pergunta = perguntas[perguntaAtual];
        caixaPerguntas.innerHTML = `<h2>${pergunta.enunciado}</h2>`;
        caixaAlternativas.innerHTML = '';

        pergunta.alternativas.forEach((alternativa, index) => {
            const btn = document.createElement('button');
            btn.textContent = alternativa.texto;
            btn.className = 'alternativa-btn';
            btn.addEventListener('click', () => verificarResposta(alternativa.pontos));
            caixaAlternativas.appendChild(btn);
        });
    } else {
        mostrarResultado();
    }
}

function verificarResposta(pontosGanhos) {
    if (pontosGanhos > 0) {
        pontos += pontosGanhos;
        alert('Resposta correta! Você ganhou ' + pontosGanhos + ' pontos.');
    } else {
        alert('Resposta errada! Você ainda pode chegar ao ranking.');
    }
    perguntaAtual++;
    exibirPergunta();
}

function mostrarResultado() {
    let nivel = '';
    if (pontos >= 800) {
        nivel = 'Ouro';
    } else if (pontos >= 400) {
        nivel = 'Prata';
    } else if (pontos > 0) {
        nivel = 'Bronze';
    } else {
        nivel = 'Nenhum';
    }

    textoResultado.textContent = `Você acumulou ${pontos} pontos e seu nível é: ${nivel}.`;
    caixaResultado.style.display = 'block';
    caixaPerguntas.innerHTML = '';
    caixaAlternativas.innerHTML = '';
}

function reiniciarQuiz() {
    iniciarBtn.style.display = 'block';
    caixaResultado.style.display = 'none';
    caixaPerguntas.innerHTML = '';
    caixaAlternativas.innerHTML = '';
}
