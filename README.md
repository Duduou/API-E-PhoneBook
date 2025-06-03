# 📘 Especificações das Rotas da API EPhone\_Book

Todas as rotas da API seguem o padrão RESTful e retornam dados no formato JSON. Algumas exigem autenticação via JWT (Bearer Token).

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

---

### GET /estabelecimentos

* Lista todos os estabelecimentos (autenticado).
* **Header:** Authorization: Bearer <token>

---

### POST /estabelecimentos/\:id/foto-perfil

* Atualiza a foto de perfil do estabelecimento.
* **Form-Data:**

  * **arquivo**: (imagem)
* **Retorno:** dados do estabelecimento com `fotoPerfil`

---

### POST /estabelecimentos/\:id/fotos/upload

* Faz upload de imagem para a galeria.
* **Form-Data:**

  * **arquivo**: (imagem)
* **Retorno:** dados da foto associada

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
