# 📌 Sistema de Autenticação Fullstack (Login & Cadastro)

Aplicação fullstack completa para autenticação de usuários, com registro, login, proteção de rotas e interface responsiva. Projeto desenvolvido com foco em arquitetura simples.

---

## 🚀 Tecnologias utilizadas

### 🔹 Frontend
- React (Vite)
- Tailwind CSS (v4)
- Axios
- React Router DOM

### 🔹 Backend
- Node.js
- Express
- JSON Web Token (JWT)
- Bcrypt

---

## ⚙️ Funcionalidades

- ✅ Cadastro de usuários  
- ✅ Login com autenticação segura (JWT)  
- ✅ Proteção de rotas privadas  
- ✅ Logout  
- ✅ Interface responsiva (mobile + desktop)  
- ✅ Sidebar dinâmica (menu mobile + desktop)

---

## 🔐 Autenticação

- Senhas criptografadas com bcrypt  
- Tokens JWT com expiração  
- Middleware para validação de rotas protegidas  

---

## 🧱 Estrutura do Projeto


📦 projeto
┣ 📂 backend
┃ ┣ 📂 controllers
┃ ┣ 📂 middleware
┃ ┣ 📂 routes
┃ ┗ server.js
┣ 📂 frontend
┃ ┣ 📂 components
┃ ┣ 📂 pages
┃ ┣ 📂 services
┃ ┗ main.jsx
┗ README.md