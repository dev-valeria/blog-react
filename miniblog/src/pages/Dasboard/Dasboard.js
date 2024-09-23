
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Dasboard.module.css';

const Dashboard = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fakePosts = [
        {
          id: 1,
          title: 'Musk provoca Moraes após X (Twitter) voltar no Brasil: ‘Magia avançada’.',
          image: require('../../img/eloMusk.jpg'),
          body: `
            Provocação do bilionário ao ministro do STF ocorre após usuários relatarem acesso ao X; Corte exige resposta da Anatel e representante dos provedores de internet acusa a rede social de burlar a determinação.`,
          body1: `
            BRASÍLIA – O bilionário Elon Musk, dono do X (antigo Twitter), provocou o ministro do Supremo Tribunal Federal (STF) Alexandre de Moraes após internautas relatarem que a rede social, suspensa por ordem do magistrado desde o dia 30 de agosto, voltou a funcionar em território brasileiro. Sem citar Moraes, Musk disse que “magia avançada é indistinguível da tecnologia”.`,
          body2: `
            “Qualquer magia suficientemente avançada é indistinguível da tecnologia”, afirmou Musk na madrugada desta quarta-feira, 18. A frase é uma referência ao autor de ficção científica Arthur C. Clarke (1917-2008), que criou a célebre citação “qualquer tecnologia suficientemente avançada é indistinguível da magia”.`,
          body3: `
           Nesta quarta, usuários do X começaram a relatar que a suspensão da plataforma, que foi cumprida pelos provedores de internet após a ordem de Moraes, não está impedindo o acesso em aplicativos móveis da rede social para Android e iOS. Procurada pelo Estadão, a Agência Brasileira de Telecomunicações (Anatel), responsável por repassar a determinação do ministro para as empresas, afirmou que não houve alteração na decisão e está apurando o caso. Inicialmente, o STF declarou que houve uma “instabilidade no bloqueio de algumas redes”.`,
          body4: `
            “O Supremo Tribunal Federal (STF) está checando a informação sobre o acesso ao X por parte de alguns usuários. Aparentemente é apenas uma instabilidade no bloqueio de algumas redes”, afirmou a Corte em nota pela manhã.`,
          body5: `
            A Associação Brasileira de Provedores de Internet e Telecomunicações (Abrint), que representa as empresas que tiveram que suspender a rede social, acusa o X de ter burlado a ordem de Moraes por meio de uma técnica que adota IPs dinâmicos.`,
          body6: `
            Segundo a Abrint, o X utilizou a Cloudflare, serviço de proxy reverso em nuvem que atua como intermediário entre os usuários e os servidores da rede social, para driblar a determinação. O sistema permite que o IP, que diferencia cada máquina, fique “escondido”, o que dificulta o bloqueio.`,
          body7: `
            Após o relato dos usuários, o STF pediu para que a Anatel explique o motivo que levou o retorno do X sem autorização judicial.`,
           body8: `
            O X está suspenso no País desde o dia 30 de agosto, após Musk descumprir uma ordem de Moraes, que determinou a apresentação de um representante legal da rede social no País. O bilionário fechou os escritórios do X no dia 17 de agosto, alegando suposta censura e ameaças por parte do ministro do STF.`,
        },
{
  id: 2,
  title: '99 usa IA para recuperar mais de 300 mil transações “perdidas” com cartão de crédito.',
  image: require('../../img/99imagem.jpg'),
  body: `Acréscimo em conversão de pagamentos foi alcançado em apenas dois meses e aumentou o retorno sobre investimento (ROI) da 99`,
  body1: `Em apenas dois meses, a 99 recuperou mais de 300 mil transações “perdidas” por conta de erros nos dados de cartões do usuários do aplicativo. A empresa, utilizando uma solução da plataforma de tecnologia de pagamentos Adyen, aproveitou a inteligência artificial (IA) para conseguir o feito, que também aumentou o retorno sobre investimento (ROI) da 99.`,
  body2: `A tecnologia atualiza os dados dos cartões de crédito automaticamente, o que gerou a recuperação de tantas transações em tão pouco tempo.`,
  body3: `Aproximadamente, 6% dos cartões são perdidos, roubados, bloqueados ou têm suas datas de validade expiradas, o que faz com que pagamentos legítimos sejam recusados, de acordo com informações da Adyen.`,
  body4: `“A solução utiliza inteligência artificial para realizar a atualização automática dos dados ao identificar que um cartão está vencido, foi substituído, perdido ou roubado. Isso proporciona taxas de aprovação mais altas para empresas e jornadas mais flexíveis e sem fricção para os passageiros”, disse Renato Migliacci, vice-presidente de vendas da Adyen Brasil.`,
  body5: `“Queríamos criar uma jornada que fosse a mais eficiente e ágil possível para nosso cliente, eliminando qualquer barreira desnecessária. Quando falamos do momento de pagamento, o sucesso e a segurança das transações são imprescindíveis” afirmou Leonardo Prado, gerente sênior de pagamentos online da 99.`,
        },
{

  id: 3,
  title: 'GitHub Copilot: o potencial da ferramenta em jornadas de desenvolvimento',
  image: require('../../img/gitHubCopilot.jpg'),
  body: `O desenvolvimento de software e a criação de documentação técnica são tarefas complexas que demandam tempo e conhecimento especializado. Felizmente, a evolução da inteligência artificial tem proporcionado avanços significativos nesse sentido.`,
  body1: `Com base na modalidade de IA generativa, foi lançado recentemente o GitHub Copilot: uma ferramenta desenvolvida pela OpenAI, em parceria com a GitHub, capaz de acelerar o processo programação. Neste artigo, exploraremos como ela pode nos ajudar e tornar mais rápido o desenvolvimento e documentação de projetos, fornecendo exemplos práticos e destacando seus benefícios.`,
  body2: `O que é o GitHub Copilot?`,
  body3: `O GitHub Copilot é um assistente de programação alimentado por inteligência artificial. Ele foi treinado com base em uma grande quantidade de códigos-fonte de código aberto e pode gerar sugestões de código automaticamente, ajudando os desenvolvedores a escreverem de forma mais rápida e eficiente.`,
  body4: `Com sua capacidade de sugerir trechos de código completos, ele se torna uma ferramenta poderosa para acelerar o processo de desenvolvimento, com funções preditivas e que oferecem sugestões contextuais em tempo real. Com isso, o resultado é economia de tempo e no esforço para a escrita de códigos repetitivos ou muito complexos.`,

}

      ];

      const post = fakePosts.find(post => post.id === parseInt(id));
      setPost(post);
      setLoading(false);
    }, 1000); // Simulando um atraso de 1 segundo
  }, [id]);

  return (
    <div className={styles.postContainer}>
      {loading && <p>Carregando...</p>}
      {!loading && post && (
        <div className={styles.post}>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p>{post.body}</p>
          <p>{post.body1}</p>
          <p>{post.body2}</p>
          <p>{post.body3}</p>
          <p>{post.body4}</p>
          <p>{post.body5}</p>
          <p>{post.body6}</p>
          <p>{post.body7}</p>
        </div>
      )}
      {!loading && !post && (
        <p>Post não encontrado.</p>
      )}
    </div>
  );
};

export default Dashboard;