### Alunos

Daniel dos Reis Braz
Guilherme Augusto Leite Santos
Vinicius Ramos Rocha

### Como executar

1. Instalar Node.js https://nodejs.org/en/
2. Executar o comando "npm install" no terminal do projeto
3. Para executar os testes "npm run test"
    - Para visualizar os reports gerados pelos testes unitários abra o arquivo no diretório do projeto "coverage/lcov-report/index.html"
    - Depois de abrir o reporte acesse o realtório de testes do "index.js". Dentro desse relatório vão conter a cobertura de testes geradas
4. Para executar os testes de mutação "npm run test:mutation"
    - Para visualizar os reports gerados pelo teste de mutação, abra o aquivo na pasta do projeto "reports/mutation/html/index.html"
    - Depois de abrir o report acesse o relatório de testes do "index.js". Dentro desse relatório vão conter os mutantes gerados, basta selecionar os filtros

### Localização dos arquivos

-   O código dos métodos implementados estão no arquivo "index.js"
-   O testes dos métodos implementados estão no arquivo "tests/index.spec.js"
