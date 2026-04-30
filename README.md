# Site PRF

Este é um site estático pronto para ser publicado no GitHub Pages.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Faça o clone local ou suba os arquivos diretamente.
3. Adicione todos os arquivos do projeto e faça commit:

```bash
git init
git add .
git commit -m "Publica site PRF"
```

4. Adicione o remote do GitHub e envie para o branch `main`:

```bash
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
git branch -M main
git push -u origin main
```

5. No GitHub, abra o repositório e vá em `Settings` > `Pages`.
6. Escolha a branch `main` e a pasta `/` (root).
7. Salve e aguarde alguns minutos.

## Observação

- O terminal atual não tem o comando `git`, então não foi possível fazer o push diretamente daqui.
- O arquivo `.nojekyll` já foi criado para garantir que o GitHub Pages sirva corretamente este site estático.
