<p align="center">
 <img width=100% height=auto src="./assets/Banner.png" alt="Ecoleta">
</p>

<h3 align="center">Ecoleta</h3>

---

Aplicação desenvolvida durante a **Next Level Week** da [Rocketseat](https://rocketseat.com.br) para ajudar as pessoas a encontrarem locais para descarte de lixo.


## 📝 Conteúdo

- [Sobre](#about)
- [Funcionalidades](#tools)
- [Instalação](#install)
- [Tecnologias utilizadas](#built_using)
- [Autores](#authors)
- [Screenshots](#screenshots)

## 🧐 Sobre <a name = "about"></a>

Na parte **Web** podemos cadastrar os pontos de coleta de lixo, com endereço, imagem do local, tipo de lixo recolhido e localização no mapa. Na parte **Mobile** podemos encontrar esses pontos cadastrados filtrando por cidade, estado e tipo de lixo. Esses locais aparecem em um mapa e clicando neles podemos visualizar os detalhes e entrar em contato por e-mail ou WhatsApp.<br /><br />

## 🔧 Funcionalidades <a name = "tools"></a>

- `Cadastro de pontos de coleta`
- `Envio de imagens`
- `Visualização dos pontos em mapa`

## 🏁 Instalação <a name = "install"></a>

Faça o download do projeto em .zip ou utilize git caso esteja instalado na máquina:
```
git clone https://github.com/agustinhopneto/ecoleta.git
```

Abra a pasta `server`, copie o arquivo `.env.example` e renomeie a cópia para `.env`, abra o arquivo copiado e edite as informações de ambiente.

Depois entre na pasta do projeto pelo terminal e execute:
```
cd server
npm install
```

Execute as migrations e seeds do banco de dados:
```
npm run migrate
npm run seed
```

Depoins inicie o back-end:
```
npm run start
```

Abra a pasta `web`, copie o arquivo `.env.example` e renomeie a cópia para `.env`, abra o arquivo copiado e edite as informações de ambiente.

Volte na pasta raiz do projeto e execute:
```
cd web
npm install
```

Depoins inicie o front-end:
```
npm run start
```

Abra o arquivo `mobile/src/services/api.ts`, e troque para o IP da sua máquina.

Volte na pasta raiz do projeto e execute:
```
cd mobile
npm install
```

Depoins inicie o mobile:
```
npm run start
```

Abra o app **Expo** no seu dispositivo móvel e scaneie o **QR Code**.

### Pré-requisitos

Para rodar o projeto é importante que tenha o [Node.js](nodejs.org) instalado na sua versão mais recente ou maior que `12.18.1`.

É necessário também ter o app [Expo](https://expo.io/) instalado no seu dispositivo móvel.

### Observações

- ``Sempre utilize o IP da sua máquina nos endereços.``

## ⛏️ Feito utilizando <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/)
- [ReactJS](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [EsLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [KnexJS](http://knexjs.org/)
- [Styled Components](https://styled-components.com/)

## 💻 Screenshots <a name = "screenshots"></a>

<p align="center">
 <img width=100% height=auto src="./assets/01.png" alt="Ecoleta">
</p>
<p align="center">
 <img width=100% height=auto src="./assets/02.png" alt="Ecoleta">
</p>
<p align="center">
 <img width=100% height=auto src="./assets/03.png" alt="Ecoleta">
</p>
<p align="center">
 <img width=100% height=auto src="./assets/04.png" alt="Ecoleta">
</p>

<p align="center">
  <div width=100% height=auto style="display:flex;flex-direction:row;justify-content:center">
      <img width=32% height=auto src="./assets/M01.png" alt="Ecoleta">
      <img width=32% height=auto src="./assets/M02.png" alt="Ecoleta">
      <img width=32% height=auto src="./assets/M03.png" alt="Ecoleta">
  </div>
</p>

## ✍️ Autor <a name = "authors"></a>

- [@agustinhopneto](https://linkedin.com/in/agustinhopneto)
