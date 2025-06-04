-- CreateTable
CREATE TABLE "Horario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "estabelecimentoId" INTEGER NOT NULL,
    "dom" TEXT,
    "seg" TEXT,
    "ter" TEXT,
    "qua" TEXT,
    "qui" TEXT,
    "sex" TEXT,
    "sab" TEXT,
    CONSTRAINT "Horario_estabelecimentoId_fkey" FOREIGN KEY ("estabelecimentoId") REFERENCES "Estabelecimento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Favorita" (
    "usuarioId" INTEGER NOT NULL,
    "estabelecimentoId" INTEGER NOT NULL,

    PRIMARY KEY ("usuarioId", "estabelecimentoId"),
    CONSTRAINT "Favorita_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Favorita_estabelecimentoId_fkey" FOREIGN KEY ("estabelecimentoId") REFERENCES "Estabelecimento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Horario_estabelecimentoId_key" ON "Horario"("estabelecimentoId");
