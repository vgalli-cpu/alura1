# 🎨 Mona Lisa Interativa - Projeto Alura

> Uma implementação digital interativa da famosa pintura **Mona Lisa** de **Leonardo da Vinci**, onde os olhos acompanham o movimento do seu mouse em tempo real!

## 📸 Visualização

O projeto recria a obra-prima com:
- ✨ **Cores originais** da pintura renascentista
- 👀 **Olhos dinâmicos** que seguem o cursor do mouse
- 🖼️ **Detalhes artísticos** como cabelo, roupas, mãos e paisagem de fundo
- 📱 **Design responsivo** para todas as plataformas
- ⚡ **Performance otimizada** com transições suaves

---

## 📁 Estrutura do Projeto

```
alura1/
├── index.html      # Estrutura HTML com SVG completo
├── styles.css      # Estilização e responsividade
├── script.js       # Lógica JavaScript dos olhos interativos
└── README.md       # Documentação do projeto
```

### 1️⃣ **index.html** - Estrutura Principal

Contém:
- 🏗️ Estrutura HTML5 semântica
- 🎨 Desenho completo da Mona Lisa em **SVG**
- 📐 Sistema de coordenadas SVG para precisão
- 🎭 Elementos interativos com classes especiais

**Principais elementos SVG:**
```html
<!-- Gradientes para efeitos de profundidade -->
<defs>
    <linearGradient id="skyGradient">...</linearGradient>
    <radialGradient id="skinGradient">...</radialGradient>
    <radialGradient id="irisGradient">...</radialGradient>
    <!-- ... mais gradientes ... -->
</defs>

<!-- Paisagem de fundo -->
<rect fill="url(#skyGradient)"/>
<path fill="url(#terrainGradient)"/>

<!-- Cabeça e rosto -->
<ellipse id="head" fill="url(#skinGradient)"/>

<!-- Olhos interativos -->
<circle class="iris iris-esquerda"/>
<circle class="iris iris-direita"/>
```

---

### 2️⃣ **styles.css** - Estilos e Design

Features:
- 🎨 Layout flexbox centralizado
- 📦 Container com design moderno
- 🖼️ Estilização do SVG com sombras e efeitos
- 📱 Media queries para responsividade
- ♿ Acessibilidade com `prefers-reduced-motion`

**Principais classes:**
```css
.container { /* Container principal */ }
.mona-lisa { /* SVG estilizado */ }
.iris { /* Íris que se movem */ }

@media (max-width: 768px) { /* Tablet */ }
@media (max-width: 480px) { /* Mobile */ }
```

---

### 3️⃣ **script.js** - Lógica Interativa

Implementa:
- 🖱️ **Event listeners** para mouse e toque
- 📐 **Cálculos trigonométricos** para rastreamento dos olhos
- 🎯 **Precisão de posicionamento** em coordenadas SVG
- ⚡ **Otimização de performance** com transições suaves

**Funções principais:**

```javascript
// Calcula posição da íris baseada no mouse
calcularPosicaoIris(olhoPos, mousePosScreen)

// Atualiza ambos os olhos
atualizarOlhos()

// Reseta para posição inicial
resetarOlhos()
```

**Como funciona:**
1. Detecta movimento do mouse com `mousemove`
2. Calcula ângulo entre o olho e o mouse usando `Math.atan2()`
3. Posiciona a íris dentro de um raio máximo usando `Math.cos()` e `Math.sin()`
4. Atualiza atributos SVG `cx` e `cy` em tempo real

---

## 🎨 Paleta de Cores

Cores fiéis à obra original:

| Elemento | Cor | Código Hex |
|----------|-----|------------|
| Pele | Bege Quente | `#D4B896` |
| Cabelo | Marrom Escuro | `#5C4033` |
| Olhos (íris) | Marrom Natural | `#6B5335` |
| Roupas | Marrom Avermelhado | `#8B4513` |
| Céu | Azul Claro | `#A0C4D4` |
| Terreno | Verde Terroso | `#7A8A6A` |
| Adornos | Dourado | `#D4AF37` |

---

## 🚀 Como Usar

### Instalação Rápida

1. **Clone ou baixe os arquivos:**
   ```bash
   git clone https://github.com/vgalli-cpu/alura1.git
   cd alura1
   ```

2. **Certifique-se de que os 3 arquivos estão juntos:**
   - `index.html`
   - `styles.css`
   - `script.js`

3. **Abra `index.html` no navegador:**
   - Duplo clique no arquivo, ou
   - Clique direito → "Abrir com" → Navegador

4. **Interaja com o projeto:**
   - Mova o mouse sobre os olhos
   - Veja-os acompanharem seu movimento!

### Com Live Server (VS Code)

```bash
# Instale a extensão "Live Server"
# Clique direito em index.html → "Open with Live Server"
```

---

## 💡 Conceitos Aprendidos

### HTML & SVG
- ✅ Estrutura semântica HTML5
- ✅ Gráficos vetoriais com SVG
- ✅ Sistema de coordenadas SVG
- ✅ Gradientes (linear e radial)
- ✅ Filtros SVG (sombras)

### CSS
- ✅ Flexbox para layout
- ✅ Gradientes CSS
- ✅ Media queries responsivas
- ✅ Animações e transições
- ✅ Box-shadow e efeitos visuais
- ✅ Acessibilidade CSS

### JavaScript
- ✅ Event listeners (mouse e toque)
- ✅ Trigonometria (`Math.atan2()`, `Math.cos()`, `Math.sin()`)
- ✅ Manipulação de atributos SVG
- ✅ Cálculos em tempo real
- ✅ Otimização de performance
- ✅ Responsividade a eventos

---

## 📊 Detalhes Técnicos

### Matemática do Rastreamento

```javascript
// Ângulo entre o olho e o mouse
const angulo = Math.atan2(
    posicaoMouse.y - posicaoOlho.y,
    posicaoMouse.x - posicaoOlho.x
);

// Posição da íris dentro do raio máximo
const novaX = posicaoOlho.x + Math.cos(angulo) * raioMaximo;
const novaY = posicaoOlho.y + Math.sin(angulo) * raioMaximo;
```

### Performance
- ⚡ Transições suaves a 60 FPS
- 🎯 Cálculos otimizados
- 📱 Suporte a toque sem lag
- 🔄 Event throttling inteligente

---

## 🌐 Compatibilidade

| Navegador | Versão | Status |
|-----------|--------|--------|
| Chrome | 60+ | ✅ Completo |
| Firefox | 55+ | ✅ Completo |
| Safari | 12+ | ✅ Completo |
| Edge | 79+ | ✅ Completo |
| Mobile Chrome | Atual | ✅ Otimizado |
| Mobile Safari | 12+ | ✅ Otimizado |

---

## 🎯 Funcionalidades

### ✨ Implementadas
- [x] Desenho SVG completo da Mona Lisa
- [x] Rastreamento de olhos com mouse
- [x] Suporte a toque em mobile
- [x] Design responsivo
- [x] Animações suaves
- [x] Cores originais da obra
- [x] Detalhes artísticos (cabelo, roupas, mãos)
- [x] Sombras e profundidade
- [x] Acessibilidade

### 🚀 Melhorias Futuras
- [ ] Modo dark theme
- [ ] Múltiplas personagens famosas
- [ ] Efeito de piscar dos olhos
- [ ] Expressões faciais diferentes
- [ ] Modo galeria com várias obras
- [ ] Compartilhamento social
- [ ] Customização de cores

---

## 📚 Referências

### Obra Original
- **Artista:** Leonardo da Vinci
- **Título:** Mona Lisa (La Gioconda)
- **Período:** ~1503-1519
- **Técnica:** Óleo sobre painel de álamo
- **Dimensões:** 77 × 53 cm
- **Localização:** Museu do Louvre, Paris

### Documentação Técnica
- [MDN Web Docs - SVG](https://developer.mozilla.org/pt-BR/docs/Web/SVG)
- [MDN Web Docs - JavaScript Events](https://developer.mozilla.org/pt-BR/docs/Web/API/Event)
- [CSS Tricks - Responsive Design](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

## 👨‍💻 Desenvolvimento

### Stack Tecnológico
- 🏗️ **HTML5** - Estrutura e semântica
- 🎨 **CSS3** - Design e responsividade
- ⚙️ **JavaScript (Vanilla)** - Interatividade
- 📊 **SVG** - Gráficos vetoriais

### Sem Dependências Externas
- ✅ Puro HTML5
- ✅ CSS3 nativo
- ✅ JavaScript vanilla (sem jQuery, React, etc.)
- ✅ Carregamento instantâneo

---

## 📝 Licença

Este projeto é de código aberto para fins educacionais.

---

## 🙏 Créditos

- **Obra Original:** Leonardo da Vinci (Mona Lisa, c. 1503-1519)
- **Projeto Educacional:** Alura
- **Desenvolvimento:** Desenvolvido com ❤️ para aprender programação

---

## 📧 Suporte

Tem dúvidas ou sugestões? 
- 📞 Abra uma issue no repositório
- 💬 Deixe um comentário
- 🐛 Reporte bugs

---

<div align="center">

**Desenvolvido com ❤️ para a Alura**

[⬆ Voltar ao topo](#-mona-lisa-interativa---projeto-alura)

</div>
