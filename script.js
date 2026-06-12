// Seleciona os elementos das íris
const irisEsquerda = document.querySelector('.iris-esquerda');
const irisDireita = document.querySelector('.iris-direita');
const monalizaSVG = document.querySelector('.mona-lisa');

// Posições iniciais dos olhos
const olhoEsquerda = { x: 160, y: 150 };
const olhoDireita = { x: 240, y: 150 };

// Raio máximo que a íris pode se mover
const raioMaximo = 8;

// Evento de movimento do mouse
document.addEventListener('mousemove', (event) => {
    atualizarOlhos(event.clientX, event.clientY);
});

// Evento de toque para dispositivos móveis
document.addEventListener('touchmove', (event) => {
    const touch = event.touches[0];
    atualizarOlhos(touch.clientX, touch.clientY);
});

// Função para calcular a posição da íris
function calcularPosicaoIris(posicaoOlho, posicaoMouse) {
    // Calcula a distância entre o olho e o mouse
    const distanciaX = posicaoMouse.x - posicaoOlho.x;
    const distanciaY = posicaoMouse.y - posicaoOlho.y;
    const distancia = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
    
    // Calcula o ângulo
    const angulo = Math.atan2(distanciaY, distanciaX);
    
    // Calcula a posição da íris (dentro do raio máximo)
    const novaX = posicaoOlho.x + Math.cos(angulo) * raioMaximo;
    const novaY = posicaoOlho.y + Math.sin(angulo) * raioMaximo;
    
    return { x: novaX, y: novaY };
}

// Função para atualizar a posição dos olhos
function atualizarOlhos(mouseX, mouseY) {
    // Obtém a posição do SVG na página
    const svgRect = monalizaSVG.getBoundingClientRect();
    const svgCenterX = svgRect.left + svgRect.width / 2;
    const svgCenterY = svgRect.top + svgRect.height / 2;
    
    // Calcula as posições das novas íris
    const novaIrisEsquerda = calcularPosicaoIris(
        {
            x: svgCenterX - (svgRect.width / 2) * (160 / 400),
            y: svgCenterY - (svgRect.height / 2) * (150 / 500)
        },
        { x: mouseX, y: mouseY }
    );
    
    const novaIrisDireita = calcularPosicaoIris(
        {
            x: svgCenterX + (svgRect.width / 2) * (160 / 400),
            y: svgCenterY - (svgRect.height / 2) * (150 / 500)
        },
        { x: mouseX, y: mouseY }
    );
    
    // Atualiza as posições das íris usando transform
    const offsetIrisEsquerda = {
        x: novaIrisEsquerda.x - olhoEsquerda.x,
        y: novaIrisEsquerda.y - olhoEsquerda.y
    };
    
    const offsetIrisDireita = {
        x: novaIrisDireita.x - olhoDireita.x,
        y: novaIrisDireita.y - olhoDireita.y
    };
    
    irisEsquerda.setAttribute(
        'transform',
        `translate(${offsetIrisEsquerda.x}, ${offsetIrisEsquerda.y})`
    );
    
    irisDireita.setAttribute(
        'transform',
        `translate(${offsetIrisDireita.x}, ${offsetIrisDireita.y})`
    );
}

// Função para atualizar olhos quando o mouse sai da janela
document.addEventListener('mouseleave', () => {
    resetarOlhos();
});

// Função para resetar os olhos para a posição inicial
function resetarOlhos() {
    irisEsquerda.setAttribute('transform', 'translate(0, 0)');
    irisDireita.setAttribute('transform', 'translate(0, 0)');
}

// Inicializa os olhos na posição correta
resetarOlhos();
