# RATE MY SUBJECT

## Alunos

Júlia Stancioli Paiva
Lucas Leone
Ricardo Furbino
Thiago Cleto Miarelli Piedade

## Descrição

Este sistema apresenta uma plataforma de avaliação e recomendação de matérias universitárias. Nele, o estudante pode avaliar matérias que já fez, fazendo comentários e sugestões.
O sistema é composto por três CRUD's principais: usuários, matérias e comentários.

A plataforma é composta por duas partes principais:

**Server (Node.js e Express.js)**: O backend é responsável por lidar com a lógica de negócios da plataforma e fornecer uma API para interação com o frontend. Ele gerencia as requisições dos clientes, realiza a autenticação dos usuários, processa as avaliações das matérias e armazena os dados em um banco de dados.

**Client (React.js)**: O frontend é a interface com o usuário, onde os alunos podem visualizar as matérias disponíveis, ler as avaliações, criar novas avaliações e interagir com outros usuários por meio de comentários. Ele consome a API fornecida pelo backend para exibir os dados relevantes de forma organizada e amigável. Para agilizar o desenvolvimento, foi utilizado a biblioteca Material UI, que possui componentes previamente estilizados.

## Funcionalidades Principais

A plataforma de avaliação de matérias de universidade possui as seguintes funcionalidades principais:

Autenticação de Usuários: Os usuários podem se registrar e fazer login na plataforma. Isso permite que eles acessem funcionalidades adicionais, como criar avaliações e fazer comentários.

Visualização de Matérias: Os usuários podem visualizar uma lista de matérias disponíveis, juntamente com informações como nome do curso, código da disciplina e uma média de avaliação geral.

Avaliação de Matérias: Os usuários registrados podem criar avaliações para as matérias que eles cursaram. Eles podem fornecer uma classificação geral, comentários detalhados, além de atributos específicos da matéria, como qualidade do professor, dificuldade, relevância do conteúdo, entre outros.

Comentários e Interações: Os usuários podem fazer comentários nas avaliações de outras pessoas, fornecendo opiniões adicionais, dando dicas e outros.