
# Analisador Léxico Pascal

## Ferramentas necessárias para a execução do projecto

Recomenda-se o uso do [VS Code](https://code.visualstudio.com/download) para poder fazer a execução do projecto, junto a instalação do plug-in do VS Code [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), podendo instalar também directamente do VS Code.

Também poderá fazer a instalação de IDEs dedicadas para o desenvolvimento como WebStorm, PHPStorm, entre outras, que poderá executar o ficheiro index.html utilizando algum protocolo.

### Por que executar usando Live Server ou IDE dedicada para web ou que possa executar usando um protocolo como http?

Sem que seja utilizado uma das ferramentas mencionadas no ponto acima, ele dará um erro de CORS, exibindo a seguinte mensagem :"Access to script at 'file:///Analisador-Lexico/js/main.js' from origin 'null' has been blocked by CORS policy" porque os navegadores têm uma restrição de segurança que impede que um script seja carregado a partir de um arquivo local (file://) quando ele é executado em um ambiente de origem nula (null origin).

Essa restrição é aplicada para evitar potenciais ataques de segurança, como a execução de scripts maliciosos que estejam armazenados localmente em um computador.

Caso queira poder executar o ficheiro index.html sem fazer a instalação das ferramentas citadas acima, poderá desabilitar temporariamente a segurança do navegador. Porém, essa opção não é recomendada, mas pode ser útil durante o desenvolvimento ou para fins de teste. Você pode desativar temporariamente a segurança do navegador para permitir o carregamento de scripts locais. No entanto, lembre-se de reativar a segurança do navegador quando não precisar mais dessa funcionalidade.

No Google Chrome, por exemplo, você pode iniciar o Chrome com a opção --disable-web-security para desativar temporariamente a política de mesma origem. No entanto, tenha cuidado ao fazer isso, pois desativar a segurança do navegador pode expor seu computador a possíveis riscos.


## Estrutura de directórios do projecto

Para poder abrir correctamente o projecto, os directórios devem estar na seguinte ordem:

 - Analisador-Lexico
    - Analisador/
    - css/
    - icon/
    - images/
    - js/
    - Pages/
    - index.css
    - index.html
    - main.js
    - README.md

Caso faça a extração da pasta que contém o projecto, deverá 'extrair aqui', para que seja extraído de forma correcta.   

## Execução do projecto

Após todas etapas concluídas com sucesso, poderá executar o ficheiro index.html usando o Live Server ou a IDE escolhida que seja dedicada a plataforma web

## Link do repositório do analisador léxico
https://github.com/StanleyNhampossa/Analisador-Lexico-Pascal.git

## Membros do grupo 
- [Hermon Yuran Sulemangy Carlos da Cruz](https://github.com/HermonYurandaCruz)
- [Malagy Camur Cassimo Malagy Júnior](https://github.com/MalagyCassimo)
- [Stanley Carmelita Aníbal Nhampossa](https://github.com/StanleyNhampossa)