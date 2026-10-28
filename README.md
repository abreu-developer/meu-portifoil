# Abreu Developer — Back-end Developer Portfolio

Portfólio estático de Vitor Abreu, feito com HTML, CSS e JavaScript. Não requer servidor de aplicação, banco de dados, chaves ou serviços de IA. Projetos, stack e certificados são conteúdo local editável.

## Executar localmente

Abra `index.html` no navegador. Para testar como um site local, execute na raiz do projeto:

```sh
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`. O Python acima serve apenas para desenvolvimento local; não é necessário na hospedagem.

## Atualizar o conteúdo

- Projetos de estudo, filtros, status, descrições e tecnologias: edite o array `projects` em `assets/js/main.js`.
- Categorias da stack: edite o objeto `stack` no mesmo arquivo.
- Conteúdo principal e certificado: edite `index.html`.
- Detalhes do Em Pauta: `projects/empauta.html`.
- Foto do perfil: coloque o arquivo `foto.jpg` em `assets/images/perfil/`. O site já procura esse caminho e mostra as iniciais caso a foto ainda não esteja lá.
- Em Pauta: as imagens PNG que você adicionou em `assets/projetos/em-pauta/imagens/` já aparecem na galeria da página de detalhes. Para adicionar outras, coloque-as nessa pasta e inclua uma figura em `projects/empauta.html`. O vídeo de apresentação fica em `assets/projetos/em-pauta/videos/apresentacao.mp4`; o player tem controles e não inicia sozinho. A imagem `assets/projetos/em-pauta/imagens/inicio-destaque.png` aparece no destaque inicial e como pôster do vídeo.
- Projetos de estudo: não precisam de imagens. Cada card leva ao repositório correspondente no GitHub.
- O certificado aparece como imagem na página. O PDF não tem link no site. Para usar uma cópia própria da imagem em vez do endereço externo, coloque-a em `assets/certificados/` e atualize seu caminho no HTML.

Filtros de categoria, tecnologia, status e busca são gerados a partir dos dados dos projetos. Não há formulário de contato: os links sociais são os canais de contato fornecidos. O link GitHub do Em Pauta aponta para o repositório informado: https://github.com/abreu-developer/Em_Pauta_public/tree/main.

## Publicar pelo GitHub Pages

1. Crie um repositório no GitHub (público para usar GitHub Free) e copie a URL dele.
2. Na raiz deste projeto, inicialize o Git e envie os arquivos:

   ```sh
   git init
   git add .
   git commit -m "Publica portfólio Abreu Developer"
   git branch -M main
   git remote add origin URL_DO_SEU_REPOSITORIO
   git push -u origin main
   ```

   Troque `URL_DO_SEU_REPOSITORIO` pela URL HTTPS ou SSH mostrada no GitHub.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**, selecione `main` e a raiz (`/`), e salve.
5. Aguarde a publicação indicada em Pages. O `index.html` na raiz é a entrada do site.
6. Para atualizar, faça commit e push para a branch configurada; o Pages republica o conteúdo.

O projeto não usa variáveis de ambiente. Use caminhos relativos para arquivos do site, assim funciona tanto no domínio principal quanto em URL de projeto do Pages. O endereço padrão é HTTPS. Um domínio próprio é opcional: compre-o em um registrador, informe-o nas configurações de Pages e configure o DNS indicado pelo GitHub; HTTPS pode ser habilitado nas configurações depois da propagação DNS. A configuração de domínio tem [documentação oficial](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) e [orientações de HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).

## Domínio e custos

O site foi preparado para hospedagem estática. GitHub Pages publica sites de repositórios públicos no plano Free e oferece HTTPS. O domínio padrão não exige compra; domínio próprio tem custo definido pelo registrador. Conforme a [documentação atual de limites do Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits), o site publicado pode ter até 1 GB, há limite flexível de 100 GB mensais de banda e de 10 builds por hora. Pages é para sites estáticos, não para transações sensíveis ou serviços comerciais. Este portfólio não precisa de backend ou banco de dados. Mídias pesadas devem ficar em hospedagem apropriada para vídeo, para manter o repositório leve.

## Acessibilidade e manutenção

O site usa landmarks semânticos, link para pular ao conteúdo, navegação por teclado, rótulos para filtros, texto alternativo e suporte a movimento reduzido. Revise textos alternativos sempre que trocar imagens. Confira os links e mídias ao atualizar o conteúdo.

## Sobre impedir downloads

Os links para o PDF foram removidos. Porém, qualquer imagem ou arquivo publicado num site estático é entregue ao navegador e pode ser copiado por quem consegue visualizá-lo. Desativar o botão direito ou esconder a URL não impediria isso de verdade. Não publique arquivos que precisem permanecer privados; se não quiser que o certificado possa ser salvo, retire também a imagem do certificado.
