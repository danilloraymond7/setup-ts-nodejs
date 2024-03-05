# Setup-ts-nodejs

Este repositório fornece uma configuração simplificada para um projeto TypeScript Node.js, tornando o desenvolvimento e o deployment mais eficientes.

## Características

- **Suporte ao TypeScript**: Utilize o poder do TypeScript para tipagem estática e melhor organização do código.
- **Recarregamento Automático (Hot Reloading)**: Ative o recarregamento automático durante o desenvolvimento com o script `start:dev`.
- **Construções Eficientes**: Construa seu projeto com configuração mínima usando `tsup`.
- **Convenções de Commits**: Mantenha um formato de mensagem de commit consistente com `commitizen` e `cz-conventional-changelog`.
- **Hooks do Git**: Garanta qualidade e consistência do código com hooks pré-commit fornecidos pelo `husky`.

## Instalação

Para começar, clone este repositório e instale as dependências:

```bash
git clone https://github.com/your-username/setup-ts-nodejs.git
cd setup-ts-nodejs
npm install


## Uso

### Desenvolvimento

Execute o servidor de desenvolvimento com recarregamento automático:

```bash
npm run start:dev
```

### Build de Produção

Gere um build pronto para produção:

```bash
npm run build
```

### Commit de Alterações

Comite suas alterações usando o script `git-commit` fornecido:

```bash
npm run git-commit
```

### Docker

Execute a aplicação em um ambiente Docker:

```bash
docker-compose up -d


```

### makeFile

Execute a aplicação em um ambiente Docker usando makeFile

```bash
make up

## Autor

[Seu Nome](https://github.com/danilloraymond7)

Sinta-se à vontade para personalizar esta configuração de acordo com os requisitos específicos do seu projeto e contribuir para a comunidade de código aberto!
```

Essas instruções adicionam uma seção de Docker ao README, explicando como executar a aplicação em um ambiente Docker utilizando o Docker Compose.