# ArqueoTech

Sistema de Identificação de Artefatos Arqueológicos usando Inteligência Artificial

## Descrição do Projeto

O ArqueoTech é uma aplicação web desenvolvida para auxiliar na identificação de artefatos arqueológicos, especificamente vasos de gargalo e cariátides, utilizando técnicas de machine learning. O sistema permite análise em tempo real através de webcam ou upload de imagens.

## Tecnologias Utilizadas

### Frontend
- HTML5, CSS3, JavaScript
- TensorFlow.js
- Teachable Machine
- Google Fonts (Poppins)

### Backend
- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Token)
- Bcrypt.js

## Instruções de Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/arqueotech.git
cd arqueotech
```

2. **Instale as dependências do backend**
```bash
cd backend
npm install
```

3. **Instale as dependências do frontend**
```bash
cd ../frontend
npm install
```

## Como Executar o Projeto

1. **Inicie o servidor backend**
```bash
cd backend
npm run dev
```

2. **Inicie o frontend**
```bash
cd frontend
npm start
```

3. **Acesse a aplicação**
- Abra o navegador em `http://localhost:3000`

## Estrutura de Arquivos

```
arqueotech/
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── Analysis.js
│   │   └── User.js
│   ├── routes/
│   │   ├── analysis.js
│   │   └── auth.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── css/
│   │   ├── js/
│   │   └── html/
│   └── public/
│       ├── assets/
│       └── models/
│
└── README.md
```
