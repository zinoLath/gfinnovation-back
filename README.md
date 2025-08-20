# Teste Prático - Controle de Investimentos

Entrega do front-end do teste prático de controle de investimentos.
Para rodar o projeto, clone ele, rode:

´´´bash
npm init
npx prisma generate
npx prisma migrate dev
´´´

O migrate dev é utilizando em ambiente local, caso queira executar um deploy, utilize 

´´´bash
npx prisma db push
´´´

E então, execute

´´´bash
npm start
´´´

Não esqueça de fazer sua própria .env, de acordo com .example.env

Para ver a documentação, rode o projeto e entre em /api-docs

## Tecnologias

Backend: Node.js
ORM: Prisma
