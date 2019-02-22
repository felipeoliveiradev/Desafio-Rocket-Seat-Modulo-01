<h1>Este Projeto é um exercicio para a Rocket Seat </h1>

<h2>Oque foi pedido?</h2>
<hr />
<p>Foi pedido que na aplicação tivesse um campo de formulário, que mediante ao número colocado, o usuário seria redirecionado para uma página, dizendo se ele era maior ou menor de idade. </p>
<br />


<h2>Tecnologias pedidas ?</h2>
<hr />
<ul>
<li>ExpressJS</li>
<li>Nunjucks</li>
<li>EditorConﬁg </li>
<li>ESLint</li>
</ul>
<br />

<h2>Como era pra ser feito?</h2>
<hr />
<p>Para colocar todo nosso aprendizado em pratica, era necessário utilizar rotas e middlewares para desenvolver a aplicação.</p>
<h3>Rotas:</h3>
<ul>
<li><strong>"/" : </strong> Rota inicial que renderiza uma página com um formulário com um único campo age que representa a idade do usuário</li>
<li><strong>"/check" :</strong>  Rota chamada pelo formulário da página inicial via método POST que checa se a idade do usuário é maior que 18 e o redireciona para a rota /major , caso contrário o redireciona para a rota /minor (Lembre de enviar a idade como Query Param no redirecionamento);</li>
<li><strong>"/major" :</strong>   Rota que renderiza uma página com o texto: Você é maior de idade e possui x anos , onde x deve ser o valor informado no input do formulário; </li>
<li><strong>"/minor" :</strong>  Rota que renderiza uma página com o texto: Você é menor de idade e possui x anos , onde x deve ser o valor informado no input do formulário; </li>
</ul>
<br />
<h3>Middlewares:</h3>
<p>Deveria haver um middleware que seria chamado nas rotas /major e /minor que checaria se a informação de idade não está presente nos Query Params. Se essa informação não existi-se deve redirecionar o usuário para a página inicial com o formulário, caso contrário o middleware deve apenas continuar com o ﬂuxo normal.</p>

<h3>Pré-Requisitos?</h3>
<hr />
<ul>
<li>Ter em sua máquina o NodeJS</li>
<li>Ter em sua máquina o Yarn</li>
</ul>
<br />




<h2>Como instalar?</h2>
<hr />
<p>
Baixe o repositório no seu computador, navegue através do prompt de comando ate a pasta do repositório, em seguida execute o comando <strong>yarn install</strong> e logo após <strong>yarn start</strong>
</p>
<br />

