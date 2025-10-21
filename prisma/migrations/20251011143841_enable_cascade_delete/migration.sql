-- DropForeignKey
ALTER TABLE `categoriaestabelecimento` DROP FOREIGN KEY `CategoriaEstabelecimento_estabelecimentoId_fkey`;

-- DropForeignKey
ALTER TABLE `email` DROP FOREIGN KEY `Email_estabelecimentoId_fkey`;

-- DropForeignKey
ALTER TABLE `estabelecimento` DROP FOREIGN KEY `Estabelecimento_usuarioId_fkey`;

-- DropForeignKey
ALTER TABLE `favorita` DROP FOREIGN KEY `Favorita_estabelecimentoId_fkey`;

-- DropForeignKey
ALTER TABLE `favorita` DROP FOREIGN KEY `Favorita_usuarioId_fkey`;

-- DropForeignKey
ALTER TABLE `foto` DROP FOREIGN KEY `Foto_estabelecimentoId_fkey`;

-- DropForeignKey
ALTER TABLE `horario` DROP FOREIGN KEY `Horario_estabelecimentoId_fkey`;

-- DropForeignKey
ALTER TABLE `tagestabelecimento` DROP FOREIGN KEY `TagEstabelecimento_estabelecimentoId_fkey`;

-- DropForeignKey
ALTER TABLE `telefone` DROP FOREIGN KEY `Telefone_estabelecimentoId_fkey`;

-- DropIndex
DROP INDEX `Email_estabelecimentoId_fkey` ON `email`;

-- DropIndex
DROP INDEX `Estabelecimento_usuarioId_fkey` ON `estabelecimento`;

-- DropIndex
DROP INDEX `Favorita_estabelecimentoId_fkey` ON `favorita`;

-- DropIndex
DROP INDEX `Foto_estabelecimentoId_fkey` ON `foto`;

-- DropIndex
DROP INDEX `Telefone_estabelecimentoId_fkey` ON `telefone`;

-- AddForeignKey
ALTER TABLE `Estabelecimento` ADD CONSTRAINT `Estabelecimento_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Foto` ADD CONSTRAINT `Foto_estabelecimentoId_fkey` FOREIGN KEY (`estabelecimentoId`) REFERENCES `Estabelecimento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Telefone` ADD CONSTRAINT `Telefone_estabelecimentoId_fkey` FOREIGN KEY (`estabelecimentoId`) REFERENCES `Estabelecimento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Email` ADD CONSTRAINT `Email_estabelecimentoId_fkey` FOREIGN KEY (`estabelecimentoId`) REFERENCES `Estabelecimento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoriaEstabelecimento` ADD CONSTRAINT `CategoriaEstabelecimento_estabelecimentoId_fkey` FOREIGN KEY (`estabelecimentoId`) REFERENCES `Estabelecimento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TagEstabelecimento` ADD CONSTRAINT `TagEstabelecimento_estabelecimentoId_fkey` FOREIGN KEY (`estabelecimentoId`) REFERENCES `Estabelecimento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Horario` ADD CONSTRAINT `Horario_estabelecimentoId_fkey` FOREIGN KEY (`estabelecimentoId`) REFERENCES `Estabelecimento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Favorita` ADD CONSTRAINT `Favorita_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Favorita` ADD CONSTRAINT `Favorita_estabelecimentoId_fkey` FOREIGN KEY (`estabelecimentoId`) REFERENCES `Estabelecimento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
