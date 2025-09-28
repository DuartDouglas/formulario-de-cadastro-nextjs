# App Formulário de cadastro

O aplicativo possui uma UI/UX para cadastro de CPF e CNPJ de usuários

- Quando for feito um `cadastro de CPF` o sistema utiliza a API do _Brasilapi_ para buscar os dados de endereço através do CEP
- Para `cadastros de CNPJ` também é utilizada a API da _Brasilapi_ para buscar os dados do CNPJ. Ela trás todos os dados inclusive endereço do CNPJ
- Todos os dados são exibidos em uma página de resumo final
- Nenhum dado é enviado para um banco de dados ou servidor

## Tecnologias utlizadas no projeto

- O projeto é desenvolvido utilizando o Framework NextJs e TypeScript
- Para as estilizações utilizei somente CSS e Tailwind
- Para os formulários optei por utlizar o react hook form (mesmo sendo um projeto simples já estou acostumado a utilizá-lo)
- Utilizei Context API para manter os dados globalmente e resgatálos na página de resumo
- Esse projeto faz solicitações diretas à api Brasil API: https://brasilapi.com.br/docs

## Etapas do projeto

- [x] Layout formulário CPF
- [x] Layout formulário CNPJ
- [x] Layout Formulário endereço
- [x] Selecionar opção do tipo de registro (CPF ou CNPJ) e mudar formulário
- [x] Validar dados do formulário
- [x] Salvar dados o formulário usando context API
- [x] Buscar dados na API de CEP
  - [x] Setar dados nos inputs
- [ ] Buscar dados na API de CNPJ
  - [ ] Setar dados nos inputs
- [ ] Exibir dados na tela de resumo
- [ ] Limpar dados e retorna para tela inicial
- [ ] Melhorar UI do tema em modo claro
- [ ] Validações avançadas dos inputs
