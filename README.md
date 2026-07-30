# Manual do Relacionamento Saudável — Página de Vendas

Página de vendas oficial do infoproduto **Manual do Relacionamento Saudável**, do psicólogo **João Chesca**.

Site estático (HTML + CSS + JS) — pronto para hospedagem gratuita no **GitHub Pages** com domínio próprio via **Cloudflare**.

---

## 📁 Estrutura do projeto

```
manual-relacionamento-saudavel/
├── index.html              ← Página principal (17 blocos)
├── css/
│   └── styles.css          ← Identidade visual completa
├── js/
│   └── main.js             ← FAQ, animações, VSL
├── assets/
│   ├── logo-nome.png       ← Logo + nome (usada no header e footer)
│   ├── logo-principal.png  ← Logo principal
│   ├── icone-marca.png     ← Ícone (favicon e apoio)
│   └── identidade-visual.png
├── .nojekyll               ← Evita processamento Jekyll do GitHub Pages
├── CNAME                   ← Aqui você coloca seu domínio
└── README.md               ← Este arquivo
```

---

## 🎬 Como incorporar sua VSL

Abra `index.html` e procure por:

```html
<!-- SUBSTITUIR pelo iframe/embed do seu player de VSL -->
```

Está dentro de `.video-frame` no **Bloco 01**. Cole o embed do seu player (YouTube, Vimeo, Panda Video, Vturb, VideoHub, etc.).

**Exemplo YouTube:**
```html
<iframe
  src="https://www.youtube.com/embed/SEU_VIDEO_ID?autoplay=0&rel=0"
  title="Manual do Relacionamento — VSL"
  frameborder="0"
  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
  allowfullscreen>
</iframe>
```

**Exemplo Panda Video / Vturb (script):**
```html
<script src="https://scripts.converteai.net/..../player.js"></script>
```
E remova o placeholder do `.video-thumb`.

---

## 🔗 Links do CTA (checkout)

Todos os botões que devem levar ao checkout têm `href="#oferta"` ou `href="#"`.

Faça um **Find & Replace** no `index.html` para trocar por sua URL de checkout (Hotmart, Kiwify, Cakto, Eduzz, Kirvano, etc.):

- Encontrar: `href="#"`
- Substituir: `href="https://pay.seucheckout.com/manual-relacionamento"`

---

## 🚀 Deploy no GitHub Pages + Cloudflare

### 1. Publicar no GitHub

1. Crie um novo repositório público no GitHub (ex.: `manual-relacionamento`).
2. Faça upload dos arquivos desta pasta na raiz do repositório.
3. Vá em **Settings → Pages**.
4. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
5. Salve. O GitHub gerará uma URL do tipo:
   `https://seuusuario.github.io/manual-relacionamento/`

### 2. Configurar seu domínio no Cloudflare

Você tem duas opções:

**Opção A — Domínio raiz (ex.: `seudominio.com.br`)**

No painel do Cloudflare (aba **DNS**), adicione:

| Tipo  | Nome | Conteúdo               | Proxy    |
| ----- | ---- | ---------------------- | -------- |
| A     | @    | 185.199.108.153        | Ativado  |
| A     | @    | 185.199.109.153        | Ativado  |
| A     | @    | 185.199.110.153        | Ativado  |
| A     | @    | 185.199.111.153        | Ativado  |
| CNAME | www  | seuusuario.github.io   | Ativado  |

**Opção B — Subdomínio (ex.: `manual.seudominio.com.br`)**

| Tipo  | Nome    | Conteúdo             | Proxy   |
| ----- | ------- | -------------------- | ------- |
| CNAME | manual  | seuusuario.github.io | Ativado |

### 3. Configurar o CNAME no repositório

Edite o arquivo `CNAME` (na raiz) e coloque **apenas o seu domínio**, sem `https://` e sem `/`:

```
manual.seudominio.com.br
```

Depois, no GitHub: **Settings → Pages → Custom domain**, digite o mesmo domínio e clique em **Save**.

Marque **Enforce HTTPS** (aparece após a validação, pode levar alguns minutos).

### 4. SSL/TLS no Cloudflare

Em **SSL/TLS → Overview**, selecione **Full**. Aguarde 5–10 minutos e o site já estará acessível pelo seu domínio com HTTPS.

---

## 🎨 Identidade Visual

- **Vermelho principal:** `#E31E24`
- **Vermelho escuro:** `#B3131A`
- **Off-white:** `#F7F3EF`
- **Preto grafite:** `#1C1C1C`
- **Cinza médio:** `#6F6F6F`

- **Títulos:** Playfair Display
- **Textos, botões:** Montserrat

Fontes carregadas via Google Fonts (CDN).

---

## ✅ Checklist antes de publicar

- [ ] Substituir o placeholder de vídeo pelo embed real da VSL
- [ ] Trocar todos os `href="#"` pelo link real do checkout
- [ ] Substituir depoimentos fictícios por depoimentos reais
- [ ] Trocar as fotos placeholder do João pelas fotos oficiais
- [ ] Adicionar links reais em Termos de uso, Política de privacidade e Contato (no rodapé)
- [ ] Adicionar pixel/tags de conversão (Meta Pixel, Google Ads, GA4) antes do `</body>`
- [ ] Configurar `CNAME` com o domínio final
- [ ] Testar em desktop e mobile

---

## 📊 Onde colocar pixels de conversão

Antes do `</body>` no `index.html`, adicione seus scripts de:
- **Meta Pixel** (Facebook)
- **Google Analytics 4**
- **Google Ads**
- **UTMify / Utmify** (para rastreamento de campanhas)
- **Hotjar** ou **Clarity** (heatmaps)

---

## 🖼️ Substituir as fotos do João

Coloque as fotos oficiais em `assets/` (ex.: `joao-hero.jpg`, `joao-especialista.jpg`) e substitua no `index.html`:

Procure por `<div class="joao-photo-placeholder">` e troque por:

```html
<img src="assets/joao-hero.jpg" alt="Psicólogo João Chesca" class="joao-photo" />
```

---

Feito com atenção à identidade visual do produto.
