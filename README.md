# 📘 Especificações das Rotas da API EPhone\_Book

Para criação do usuário admin, crie o arquivo `seed.ts` na pasta do prisma, seu contedo deve ser:

<pre><code>
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashed = await bcrypt.hash('(TROCAR POR SENHA DO ADMIN)', 10);
  const admin = await prisma.usuario.create({
    data: {
      nome: '(TROCAR POR NOME DO ADMIN)',
      email: '(TROCAR POR EMAIL DO ADMIN)',
      senha: hashed,
      admin: true,
    }
  });
  console.log('Usuário admin criado:', admin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
</code></pre>

E o arquivo .env na raiz do projeto, deve definir os seguintes atributos:

- DATABASE_URL="file:./dev.db"
Url onde o banco de dados sqlite ficara salvo.

- JWT_SECRET="chaveDoBalacobaco"
Chave para criptografar e descriptografar os JWT.

- PORT=3000
Porta do pc onde rodará a API.

- HOST_PUBLIC="localhost"
Endreço ip onde rodará a API, localhost caso seja local.

Após isso rodar o comando `npm intall` no prompt e quando pronto rodar `npx prisma migrate dev --name init`.

Então após realizada a instalação, basta rodar `npm run dev` para subir o servidor;

---

## 🔐 Autenticação

### POST /register

* Cria um novo usuário comum.
* **Body:**

```json
{
  "nome": "João",
  "email": "joao@email.com",
  "senha": "senha123"
}
```

* **Retorno:**

```json
{
  "id": 1,
  "nome": "João",
  "email": "joao@email.com"
}
```

---

### POST /login

* Autentica e retorna um token JWT.
* **Body:**

```json
{
  "email": "joao@email.com",
  "senha": "senha123"
}
```

* **Retorno:**

```json
{
  "token": "<jwt-token>"
}
```

---

## 👤 Usuário

### POST /usuarios/foto

* Envia a foto de perfil do usuário.
* **Header:** Authorization: Bearer <token>
* **Form-Data:**

  * **arquivo**: (imagem)
* **Retorno:**

```json
{
  "id": 1,
  "foto": "http://localhost:3000/uploads/abc.jpg"
}
```

### GET /usuarios/foto

* Retorna a foto do usuário autenticado.
* **Header:** Authorization: Bearer <token>
* **Retorno:**

```json
{
  "foto": "http://localhost:3000/uploads/abc.jpg"
}
```

---

## 🏢 Estabelecimento

### POST /estabelecimentos

* Cria um novo estabelecimento.
* **Body:**

```json
{
  "nome": "Loja X",
  "descricao": "Loja de eletrônicos",
  "endereco": "Rua Y, 123",
  "latitude": -23.5,
  "longitude": -46.6
}
```

* **Retorno:** dados do estabelecimento criado

### GET /estabelecimentos

* Lista todos os estabelecimentos (autenticado).
* **Header:** Authorization: Bearer <token>

### POST /estabelecimentos/\:id/foto-perfil

* Atualiza a foto de perfil do estabelecimento.
* **Form-Data:**

  * **arquivo**: (imagem)
* **Retorno:** dados do estabelecimento com `fotoPerfil`

### POST /estabelecimentos/\:id/fotos/upload

* Faz upload de imagem para a galeria.
* **Form-Data:**

  * **arquivo**: (imagem)
* **Retorno:** dados da foto associada

### Subrotas: Telefones

* **POST /estabelecimentos/\:id/telefones** – Adiciona telefone
* **GET /estabelecimentos/\:id/telefones** – Lista telefones
* **DELETE /telefones/\:id** – Remove telefone

### Subrotas: Emails

* **POST /estabelecimentos/\:id/emails** – Adiciona email
* **GET /estabelecimentos/\:id/emails** – Lista emails
* **DELETE /emails/\:id** – Remove email

### Subrotas: Horário

* **POST /estabelecimentos/\:id/horario** – Cria horário de funcionamento
* **GET /estabelecimentos/\:id/horario** – Consulta horário
* **PUT /estabelecimentos/\:id/horario** – Atualiza horário
* **DELETE /estabelecimentos/\:id/horario** – Remove horário

---

## 🗂️ Categoria

### POST /categorias

* Cria nova categoria (admin).
* **Body:**

```json
{
  "nome": "Saúde",
  "imagem": "http://..."
}
```

### GET /categorias

* Lista todas as categorias.

### POST /categorias/\:id/imagem

* Atualiza a imagem da categoria.
* **Header:** Authorization: Bearer <admin-token>
* **Form-Data:**

  * **arquivo**: (imagem)
* **Retorno:** dados da categoria com imagem atualizada

### POST /categorias/\:id/tags

* Associa uma ou mais tags a uma categoria.
* **Body:**

```json
{
  "tagIds": [1, 2]
}
```

### DELETE /categorias/\:id/tags/\:tagId

* Remove a associação de uma tag da categoria.

### GET /categorias/\:id/tags

* Lista todas as tags associadas à categoria.

---

## 🏷️ Tag

### POST /tags

* Cria nova tag (admin).
* **Body:**

```json
{
  "nome": "24h"
}
```

### GET /tags

* Lista todas as tags.

---

## ⭐ Favoritos

### POST /favoritos/\:id

* Adiciona o estabelecimento aos favoritos do usuário autenticado.

### DELETE /favoritos/\:id

* Remove o estabelecimento dos favoritos.

### GET /favoritos

* Lista os estabelecimentos favoritos do usuário autenticado.

---

## 🧷 Associação

### POST /estabelecimentos/\:id/categorias

* Associa uma ou mais categorias.
* **Body:**

```json
{
  "categoriaIds": [1, 2]
}
```

### DELETE /estabelecimentos/\:id/categorias/\:categoriaId

* Remove a associação com a categoria

### POST /estabelecimentos/\:id/tags

* Associa uma ou mais tags.
* **Body:**

```json
{
  "tagIds": [3, 4]
}
```

### DELETE /estabelecimentos/\:id/tags/\:tagId

* Remove a associação com a tag

---

## 🔍 Busca pública

### GET /buscar?nome=padaria

* Busca por nome (parcial, sem autenticação)

### GET /buscar/categorias/\:id

* Lista estabelecimentos de uma categoria

### GET /buscar/tags/\:id

* Lista estabelecimentos de uma tag
