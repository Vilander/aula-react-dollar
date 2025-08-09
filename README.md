# Conversor de Dólar e Outras Calculadoras

Este projeto foi desenvolvido para facilitar conversões rápidas e práticas, como:

- **Conversão de dólar para real**
- **Conversão de centímetros para metros**
- **Conversão de metros para centímetros**

Tudo isso em uma interface intuitiva, construída com **React**, utilizando **componentes reutilizáveis**, **rotas dinâmicas** e **validação de formulários** com lógica condicional.

## Funcionalidades

### Conversor de Dólar
Permite calcular o valor em dólares com base na cotação atual e no valor em reais informado pelo usuário.

### Conversor de Metros para Centímetros
Converte valores de metros para centímetros.

### Conversor de Centímetros para Metros
Converte valores de centímetros para metros.

### Banner Interativo
Um banner com imagens ilustrativas que utiliza o componente de carrossel do Bootstrap.

### Navegação
Inclui um menu de navegação com links para as páginas principais: **Calculadoras** e **Sobre**.

### Rodapé
Um rodapé com informações sobre o desenvolvedor e links úteis.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces.
- **React Router**: Gerenciamento de rotas dinâmicas.
- **Bootstrap**: Framework CSS para estilização e componentes responsivos.
- **React Icons**: Biblioteca de ícones para React.
- **Vite**: Ferramenta de build para desenvolvimento rápido.

## Estrutura do Projeto
src/ ├── App.jsx # Componente principal do aplicativo ├── App.css # Estilos globais ├── Banner.jsx # Componente de banner ├── CalcDollar.jsx # Conversor de dólar ├── CalcCm.jsx # Conversor de metros para centímetros ├── CalcMetros.jsx # Conversor de centímetros para metros ├── Menu.jsx # Menu de navegação ├── Rodape.jsx # Rodapé ├── Titulo.jsx # Título principal ├── pages/ # Páginas do projeto │ ├── Home.jsx # Página inicial │ ├── Sobre.jsx # Página sobre o projeto │ ├── Layout.jsx # Layout padrão │ ├── NoPage.jsx # Página 404 └── assets/ # Imagens e ícones

## Como Executar o Projeto

1. **Instale as dependências**:
   ```sh
   npm install

2.**Inicie o servidor de desenvolvimento:**

npm run dev

3. **Acesse o projeto: Abra o navegador e acesse** 
```
http://localhost:5173
```

Desenvolvedor
Este projeto foi desenvolvido por Vilander Costa, estudante de Desenvolvimento Front-End no Senac Americana. Para mais informações, visite:

LinkedIn
Senac Americana
Licença
Este projeto está licenciado sob a MIT License.