# Cadastro de carro

**RF** => Requisitos funcionais
Deve ser possível cadastrar um novo carro.

**RN** => Regra de negócio
Não deve ser possível cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado, por padrão, com disponibilidade.
* O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carro

**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome da carro.

**RN**
O usuário não precisa estar logado no sitema.


# Cadastro de Especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.


# Cadastro de Imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro.

**RFN** => Regra não funcional de negocio
Utilizar o multer para upload dos arquivos.

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.


# Alguel de carro

**RF**
Deve ser possível cadastrar um aluguel

**RN**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastar um novo aluguel caso já exista um aberto para o mesmo carro.
O usuário deve estar logado na aplicação
Ao realizar um alguel, o status do carro deverá ser alterado para indisponível


# Devolução de carro

**RF**
Deve ser possível realizar a devolução de um carro

**RN**
Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa
Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
Ao realizar a devolução, deverá ser calculado o total do alguel.
Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.
Caso haja multa, deverá ser somado ao total do aluguel.
O usuário deve está logado na aplicação.


# Listagem de Alugueis para usuário

**RF**
Deve ser possível realizar a busca de todos os alugueis para o usuário

**RN**
O usuário deve estar logado na aplicação


# Recuperar Senha

**RF**
Deve ser possível o usuário recuperar a senha informando o email
O usuário deve receber um email com o passo a passo para a recuperação da senha
O usuário deve conseguri inserir uma nova senha

**RN**
O usuário precisa informar uma nova senha
O link enviado para a recuperação deve expirar em 3 horas