# App Formulário de cadastro

O aplicativo possui uma UI/UX para cadastro de CPF e CNPJ de usuários

- Quando for feito um `cadastro de CPF` o sistema utiliza a API do _Brasilapi_ para buscar os dados de endereço através do CEP
- Para `cadastros de CNPJ` também é utilizada a API da _Brasilapi_ para buscar os dados do CNPJ. Ela trás todos os dados inclusive endereço do CNPJ

## Alguns dados sobre o projeto

- O projeto é desenvolvido utlizando o Framework NextJs e TypeScript
- Para as estilizações é somente CSS e Tailwind
- Esse projeto faz solicitações diretas à api Brasil API: https://brasilapi.com.br/docs

## Etapas do projeto

- [x] Layout formulário CPF
- [ ] Layout formulário CNPJ
- [x] Layout Formulário endereço
- [x] Selecionar opção do tipo de registro (CPF ou CNPJ) e mudar formulário
- [ ] Validar dados do formulário
- [ ] Salvar dados o formulário usando context API
- [ ] Resgatar dados em uma última tela e limpar os dados de context
