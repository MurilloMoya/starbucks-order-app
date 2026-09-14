# ☕ Starbucks Landing Page (Clone) — Portfólio

Landing page inspirada no site da Starbucks, desenvolvida como projeto de portfólio, com back-end e banco de dados integrados.

> ⚠️ Este é um projeto de estudo/portfólio, sem relação com a Starbucks Corporation e sem fins comerciais. Não é um projeto de cliente/produção.

## 🎯 Objetivo

Praticar e demonstrar habilidades de desenvolvimento full stack através da recriação de uma landing page visualmente rica, com front-end (HTML, CSS e JavaScript) contendo animações e interações elaboradas, integrado a um back-end em **Python (FastAPI)** e banco de dados **PostgreSQL**.

## 🚀 Tecnologias utilizadas

**Front-end**
- **HTML5**
- **CSS3** (variáveis CSS, Flexbox, animações com `@keyframes`, transições, media queries para responsividade)
- **JavaScript** (Vanilla JS — `fetch`, `IntersectionObserver`, `requestAnimationFrame`)
- **Font Awesome** (ícones)
- **Google Fonts** (Poppins, Mulish, Open Sans)

**Back-end**
- **Python**
- **FastAPI** (API REST)
- **SQLAlchemy** (ORM)
- **Pydantic** (validação de dados)
- **PostgreSQL** (banco de dados relacional)

## ✨ Funcionalidades

**Front-end / UX**
- Scroll Reveal (fade-in/out ao entrar na tela)
- Smooth Scroll com easing customizado
- Scrollspy (destaque do item de menu conforme a seção visível)
- Back to Top Button com fade e slide-in
- Micro-interações em botões (hover lift / press)
- Elevação de cards no hover
- Zoom suave em imagens no hover
- Animação de flutuação (float) em loop
- Menu mobile com slide toggle / accordion

**Sistema de pedidos (full stack)**
- Listagem de produtos carregada dinamicamente do banco de dados via API
- Criação de pedidos, calculando preço por tamanho (Pequeno/Médio/Grande) e quantidade
- Exclusão de pedidos, refletindo tanto na interface quanto no banco de dados
- Consulta de pedidos com nome do produto e preço unitário/total via `JOIN` (view `orders_detalhado`)

## 🗄️ Modelagem do banco de dados

- **`products`**: catálogo de produtos, com preços por tamanho (`price_small`, `price_medium`, `price_large`)
- **`orders`**: pedidos realizados, referenciando o produto via chave estrangeira (`product_id`)
- **`orders_detalhado`** (view): junta `orders` e `products` para exibir nome do produto, preço unitário e preço total sem duplicar dados

## 🔌 Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/products` | Lista todos os produtos disponíveis |
| POST | `/orders` | Cria um novo pedido |
| DELETE | `/orders/{order_id}` | Remove um pedido pelo ID |

## 📁 Estrutura do projeto

```
LanginPage_Starbucks_BC_PY/
├── index.html
├── src/
│   ├── css/
│   │   ├── syles.css
│   │   ├── variables.css
│   │   └── navbar.css
│   ├── js/
│   │   └── script.js
│   └── images/
└── Back-end/
    ├── main.py
    ├── database.py
    ├── models.py
    └── schemas.py
```

## 🗺️ Status do projeto

- [x] Landing page front-end (HTML/CSS/JS)
- [x] Back-end em Python (FastAPI)
- [x] Banco de dados PostgreSQL
- [x] Integração front-end + back-end (CRUD de pedidos)
- [ ] Deploy (front-end e back-end hospedados)

**Próximo passo:** publicar o projeto online. O front-end pode ser hospedado na Vercel; o back-end (FastAPI) e o banco (PostgreSQL) precisam de um serviço que suporte aplicações Python, como Render ou Railway.

## 💻 Como rodar localmente

### Pré-requisitos
- Python 3.10+
- PostgreSQL instalado e rodando

### 1. Clone o repositório
```bash
git clone https://github.com/MurilloMoya/nome-do-repo.git
cd nome-do-repo
```

### 2. Configure o banco de dados
Crie um banco no PostgreSQL:
```sql
CREATE DATABASE starbucks_db;
```

### 3. Configure o back-end
```bash
cd Back-end
pip install fastapi uvicorn sqlalchemy psycopg2-binary python-dotenv
```

Crie um arquivo `.env` na pasta `Back-end` com suas credenciais:
```env
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=5432
DB_NAME=starbucks_db
```

Rode a API:
```bash
uvicorn main:app --reload
```
A API estará disponível em `http://localhost:8000` (documentação interativa em `http://localhost:8000/docs`).

### 4. Abra o front-end
Abra o `index.html` no navegador (ou use a extensão *Live Server* no VSCode) com a API já rodando.

## 🙌 Créditos

- **Base do front-end (HTML/CSS/JS) e animações**: desenvolvida a partir de conteúdo de [**Larissa Kich**](https://www.youtube.com/watch?v=ik-njdH5Q5c&t=1626s).
- **Melhorias e ajustes no front-end**: autoria própria (Murillo).
- **Back-end (Python/FastAPI) e banco de dados (PostgreSQL)**: autoria própria (Murillo).

## 👤 Autor

**Murillo Moya Martins**

---

*Projeto desenvolvido com fins de estudo e portfólio.*
