// ============================================
// PROJETO: Mona Lisa Interativa
// Descrição: Os olhos da Mona Lisa seguem o movimento do mouse
// Tecnologia: SVG + JavaScript
// ============================================

// Seleção dos elementos SVG
const irisEsquerda = document.querySelector('.iris-esquerda');
const irisDireita = document.querySelector('.iris-direita');
const monalizaSVG = document.querySelector('.mona-lisa');

// Posições iniciais das íris no SVG (coordenadas SVG)
const olhosConfig = {
    esquerda: {
        x: 205,
        y: 245,
        raioMaximo: 12
    },
    direita: {
        x: 295,
        y: 245,
        raioMaximo: 12
    }
};

// Variáveis de controle
let mousePos = { x: 0, y: 0 };
let isMouseInside = false;

// ============================================
// EVENT LISTENERS
// ============================================

// Detecta movimento do mouse
document.addEventListener('mousemove', (event) => {
    mousePos.x = event.clientX;
    mousePos.y = event.clientY;
    
    if (isMouseInside) {
        atualizarOlhos();
    }
});

// Detecta quando o mouse entra na janela
document.addEventListener('mouseenter', () => {
    isMouseInside = true;
});

// Detecta quando o mouse sai da janela
document.addEventListener('mouseleave', () => {
    isMouseInside = false;
    resetarOlhos();
});

// Detecta toque em dispositivos móveis
document.addEventListener('touchmove', (event) => {
    if (event.touches.length > 0) {
        const touch = event.touches[0];
        mousePos.x = touch.clientX;
        mousePos.y = touch.clientY;
        atualizarOlhos();
    }
}, { passive: true });

// Detecta fim do toque
document.addEventListener('touchend', () => {
    resetarOlhos();
});

// ============================================
// FUNÇÕES PRINCIPAIS
// ============================================

/**
 * Calcula a nova posição da íris baseada na posição do mouse
 * @param {Object} olhoPos - Posição do olho no SVG
 * @param {Object} mousePosScreen - Posição do mouse na tela
 * @returns {Object} Nova posição da íris em coordenadas SVG
 */
function calcularPosicaoIris(olhoPos, mousePosScreen) {
    // Obtém a posição e tamanho do SVG na tela
    const svgRect = monalizaSVG.getBoundingClientRect();
    
    // Calcula o centro do SVG
    const svgCenterX = svgRect.left + svgRect.width / 2;
    const svgCenterY = svgRect.top + svgRect.height / 2;
    
    // Distância do mouse em relação ao centro do SVG
    const distX = mousePosScreen.x - svgCenterX;
    const distY = mousePosScreen.y - svgCenterY;
    
    // Distância total (hipotenusa)
    const distancia = Math.sqrt(distX * distX + distY * distY);
    
    // Calcula o ângulo entre o olho e o mouse (em radianos)
    const angulo = Math.atan2(distY, distX);
    
    // Posição da íris dentro do raio máximo
    const novaX = olhoPos.x + Math.cos(angulo) * olhoPos.raioMaximo;
    const novaY = olhoPos.y + Math.sin(angulo) * olhoPos.raioMaximo;
    
    return { x: novaX, y: novaY };
}

/**
 * Atualiza a posição das íris de acordo com o movimento do mouse
 */
function atualizarOlhos() {
    // Calcula nova posição para a íris esquerda
    const novaIrisEsquerda = calcularPosicaoIris(
        olhosConfig.esquerda,
        mousePos
    );
    
    // Calcula nova posição para a íris direita
    const novaIrisDireita = calcularPosicaoIris(
        olhosConfig.direita,
        mousePos
    );
    
    // Atualiza a posição usando o atributo cx e cy do SVG
    atualizarPosicaoIris(irisEsquerda, novaIrisEsquerda);
    atualizarPosicaoIris(irisDireita, novaIrisDireita);
}

/**
 * Atualiza a posição de um elemento iris específico
 * @param {Element} irisElement - Elemento da íris (SVG circle)
 * @param {Object} novaPosicao - Nova posição {x, y}
 */
function atualizarPosicaoIris(irisElement, novaPosicao) {
    irisElement.setAttribute('cx', novaPosicao.x);
    irisElement.setAttribute('cy', novaPosicao.y);
}

/**
 * Reseta os olhos para a posição original/neutra
 */
function resetarOlhos() {
    atualizarPosicaoIris(irisEsquerda, olhosConfig.esquerda);
    atualizarPosicaoIris(irisDireita, olhosConfig.direita);
}

// ============================================
// INICIALIZAÇÃO
// ============================================

// Inicializa os olhos na posição correta ao carregar a página
window.addEventListener('load', () => {
    resetarOlhos();
    console.log('🎨 Mona Lisa Interativa carregada com sucesso!');
});

// Garante que os olhos estão na posição correta
resetarOlhos();

// ============================================
// FUNÇÕES AUXILIARES DE DEBUG (opcional)
// ============================================

/**
 * Função para debug: mostra a posição do mouse
 */
function debugMousePos() {
    console.log(`Mouse: X=${mousePos.x}, Y=${mousePos.y}`);
}

/**
 * Função para debug: mostra a configuração dos olhos
 */
function debugOlhosConfig() {
    console.log('Configuração dos olhos:', olhosConfig);
}

// Descomente para usar as funções de debug
// document.addEventListener('keydown', (e) => {
//     if (e.key === 'd') debugMousePos();
//     if (e.key === 'c') debugOlhosConfig();
// });
