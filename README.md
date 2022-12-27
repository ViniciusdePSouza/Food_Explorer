<header>
  <h1> Olá pessoal da Rocketseat !!! </h1> 
  <span>Esse é um guia de como usar o Food Explorer, aplicação desenvolvida por mim mesmo!</span>
</header>  
<section>
  <h2>Intro</h2>
  <p> O FoodExplorer é um aplicativo de um restaurante virtual, nele é possível navegar pelos pratos, ver os ingredientes da receita, fazer e acompanhar seu pedido,
  vamos navegar por cada função e cada página mas antes é preciso saber que a navegação do administrador se difere em alguns momentos da navegação do usuário, ok ?
  Para isso ja criei e disponibilizei um login de adm para vocês, uma vez que não qualquer usuário que pode gerar esse tipo de login, né? hahah</p> 
  
  <strong>Login de adm:</strong> </br>
  <span>Email: rocketseatAdm@foodexplorer.com </span> </br>
  <span>Senha: 12345@ </span> </br>
  <span>Nome: rocketseatAdm </span> </br>
  <span>Id: 7 </span>
</section> 

<section>
  <h2>Orientações do Ambiente dev</h2>
  <p> Para dar início ao projeto no ambiente dev é necessário seguir alguns passos primeiro:</p> 
  <ul>
    <li>Fazer o download do repositório na sua máquina</li>
    <li>Abra o terminal e navegue até a pasta onde está contido o projeto com o comando: cd {nome da pasta}</li>
    <li>Abra o terminal e digite a seguinte linha de código: npm intall</li>
    <li>Logo após isso será possível iniciar o projeto com o comando: npm run dev</li>
  </ul>
  <p>OBS: As orientações são as mesmas para o Front-end quando para o Back-end</p>
  <p> Link do repositório do Back-end: https://github.com/ViniciusdePSouza/BD_foodexplorer </p>
</section>

<section>
  <h2>Vamos Navegar!</h2>
  <section>
    <h3>Sign In</h3>
    <p>Essa vai ser a primeira página que vocês vão se deparar, caso vocês já tenham cadastro na nossa plataforma basta preencher os campos corretamente e clicar 
    no botão de login que vocês serão direcionados à página Home da aplicação, caso ainda não tenham conta não se preocupem, basta clicar no "Criar Conta" logo
    abaixo do botão que vocês serão direcionados para a página de Sign Up!</p>
  </section>
  <section>
    <h3>Sign Up</h3>
    <p>Nessa página vocês poderam criar a sua conta de usuário da plataforma, basta preencher todos os campos corretamente e clicar no botão "Criar Conta" e pronto!
    Já estarão aptos a usar nossa plataforma.</p> </br>
    <p> <strong>IMPORTANTE :</strong> É permitido apenas uma conta por email.</p>
  </section>
  <section>
    <h3>Home</h3>
    <p>Essa é a primeira página da nossa aplicação, nela voce pode ver todo o nosso cardápio e várias funcionalidades que vamos explora-las uma a uma agora!</p> 
    <p>No topo da página, no header é possível ver dois botões o "Adicionar Prato" e  o "Meu pedido". O botão "Adicionar Prato só será permitida a navegação se você 
    for um administrador, para isso vocês podem usar o login disponibilizado no início desse documento. Já o botão "Meu Pedido" da acesso à rotas diferentes dependendo
    do seu tipo de conta, para usuários comuns leva até a página que você pode acompanhar seus pedidos, já para usuários adms leva para a página de acompanhamento de 
    pedidos de todos os clientes.</p> 
    <p>Um pouco mais abaixo é possível ver uma barra de pesquisa, nela é possível buscar por qualquer prato do nosso cardápio pelo nome.</p>
    <p>Em seguida está o nosso cardápior! Ele está separado por 3 categorias:</p> </br>
    <li>Pratos Principais</li>
    <li>Sobremesas</li>
    <li>Bebidas</li>
    <p>Ao na foto do prato, ele o levará para a página de detalhes do prato. É possível também já fazer o pedido na página home, basta selecionar a quantidade e clicar
    no botão "Incluir" para fazer o pedido.</p>
  </section>
  <section>
    <h3>Detalhes do Prato</h3>
    <p>Nessa Página o usuário poderá ver o prato escolhido de forma mais detalhada. Ao clicar no botão "Ingredientes" as fotos dos ingredientes utilizados no preparo
    desse prato será exibido na tela. É possível fazer o pedido por aqui também da exata mesma forma feita na página Home.</p>
  </section>
  <section>
    <h3>Meus Pedidos (usuário comum)</h3>
    <p>Ao clicar no botão "Meus pedidos" o usuário será direcionado à página de acompanhamento dos pedidos dele. Todos os pedidos são listados automaticamente com o 
    status descrição, data e hora em que foi feito.</p>
  </section>
  <section>
    <h3>Meus Pedidos (Adm)</h3>
    <p>Caso o usuário seja um administrador ele será direcionado para a página de acompanhamento de todos os pedidos, basta que ele coloque o ID do usuário na input
    de pesquisa e todos os pedidos desse usuário será gerado.</p> </br>
    <p>Para que vocês possam acompanhar o pedido de vocês o próximo ID a ser criado será o 9 e assim por diante. Também já temos um cliente cadastrado de ID 8 que já fez
    vários pedidos, o nome dele é Vinícius de Paula, vocês podem pesquisar pelo ID dele também.</p
  </section>
  <section>
      <h3>Adicionar Prato(Adm)</h3>
      <p>Essa página é permitida apenas para adms. Nela é possível adicionar um prato qualquer ao nosso cardápio basta que o administrador preencha corretamente todos 
      os campos do formulário. Caso algum campo esteja vazio o prato não será criado. Depois de preenchido clique no botão "Adicionar Prato" e pronto, já está adicionado
      o novo prato ao nosso cardápio.</p>
    </section>
</section>
<section>
  <h1>Considerações Finais</h1>
  <p>Esse é o meu projeto final do curso Explorer. Espero que esteja dentro das expectativas, esse projeto é motivo de muito orgulho para mim pois consegui desenvolve-lo sozinho depois de muitas horas de estudo, pesquisa e trabalho duro! Gostaria de agrade-os também pois graças a esse projeto e a toda a rocketseat conseguimeu primeiro emprego como desenvolvedor, ainda como estagiário e tenho um longo caminho pela frente, porém toda grande caminhada começa com um primeiro passo e esse passo so foi possível com as orientações de vocês. Forte abraço e espero que gostem do projeto ! </p>
</section>
  
