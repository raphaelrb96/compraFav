import React from 'react';
import Beneficios from "../components/Beneficios";
import HeroHeader from "../components/HeroHeader";
import Metricas from "../components/Metricas";
import Precos from "../components/Precos";
import Reviews from "../components/Reviews";




const TVBOX = {
    hero: {
        title: 'TRANSFORME SUA TV EM UMA SUPER TV SMART',
        text: 'TV Box é um aparelho que permite a qualquer TV o acesso a aplicativos e jogos. Ideal para uso de aplicativos como Netflix, Youtube, Face, Freefire, Candy Crush e mais centenas de apps e games',
        img: './img/tvbox/01.png',
        list: [
            {title: 'Mais de 1.500 canais', text: 'Assista os mais variados canais em Ultra HD: Esportes, Entretenimento, Noticias e muito mais'},
            {title: 'Mais de 2.000 filmes', text: 'Você terá os melhores lançamentos em primeira mão, para assistir quando e onde quiser !'},
            {title: 'Mais de 500 séries', text: 'Assista suas séries prediletas sem atraso e sem precisar perder tempo baixando episodios'},
        ]
    },
    beneficios: {
        img: './img/tvbox/03.png',
        title: 'BENEFÍCIOS DO APARELHO',
        list1: [
            {title: 'Compativel', text: 'À praticamente todos os tipos de tvs e monitores'},
            {title: 'Fácil de Instalar', text: 'Só conectar o cabo na tv e ligar na tomada'},
            {title: 'As crianças Amam', text: 'Centena de filmes, canais e series infantis'},
        ],

        list2: [
            {title: 'Sem Fio', text: 'E sem antena. Funciona via internet WIFI'},
            {title: 'Sem Manutenção', text: 'E nem visita tecnica. Todas atualizações são online'},
            {title: 'Risco Zero', text: 'Garantia de 30 dias apos o recebimento do produto'},
        ]
    },
    metricas: {
        list: [
            {title: 'Futebol', text: 'UFC, Basket, Voley, Corrida'},
            {title: 'Noticias', text: 'Documentarios, Cultura'},
            {title: 'Desenhos', text: 'Entretenimento, Jogos'},
            {title: 'Educação', text: 'Politica, Informação'},
        ]
    },
    reviews: {
        title: 'AVALIAÇÕES E DEPOIMENTOS',
        list: [
            {title: 'Esther Figueira', text: 'O produto é bom. Não precisei de tecnico pra instalar. Só ligar na tomada e conectar o aparelho na tv. '},
            {title: 'Felipe Alberto', text: 'O que posso dizer é que ele tem muito mais funções do que eu esperava. Pra dizer que não tem nenhum ponto negativo é que chega desatualizado e você precisa atualizar e instalar os apps'},
            {title: 'Paulo Miranda', text: 'Comprei ele por conta dos canais, mas acabou que o que eu mais uso é o navegador da internet e os aplicativos que instalei pela PlayStore O legal é que você consegue conectar um mouse e teclado nele e ele vira praticamente um computador'},
            {title: 'Fernanda Assis', text: 'Gostei demais, comprei por causa dos meus filhos e tô usando bastante. Qualidade muito boa mesmo com minha internet sendo fraca'},
            {title: 'Leonardo Torres', text: 'Chegou no prazo A loja me enviou um codigo de rastreio e eu fui acompanhando Mesmo o frete pra minha cidade dando 60 reais, valeu a pena o investimento'},
            {title: 'Patricia Maia', text: 'O produto é bom. Não precisei de tecnico pra instalar. Só ligar na tomada e conectar o aparelho na tv.'},
        ]
    },
    precos: {
        title: 'PREÇOS PROMOCIONAIS',
        text: 'Aproveite agora pois pode ser a ultima oportunidade de comprar o pacote completo com valor promocional. O preço vai subi em breve.',
        basico: {
            title: 'BASICO',
            descTitle: 'Aparelho + 1 mês',
            valor: '180',
            info1: '1 Mês de canais incluso',
            info2: 'Após o primeiro mês R$35 a mensalidade',
            infoExtra: 'A mensalidade não é obrigatoria, você recarrega quando quiser',

        },
        completo: {
            title: 'COMPLETO',
            descTitle: 'Aparelho + 1 ANO',
            textExtra: 'ACOMPANHA DE BRINDE UM MINI TECLADO',
            valor: '450',
            info1: '1 ANO de canais incluso',
            info2: 'Após o primeiro mês R$35 a mensalidade',
            infoExtra: 'A mensalidade não é obrigatoria, você recarrega quando quiser',
        },
        simples: {
            title: 'SIMPLES',
            descTitle: 'Aparelho + 3 meses',
            valor: '230',
            info1: '3 Meses de canais incluso',
            info2: 'Após o primeiro mês R$35 a mensalidade',
            infoExtra: 'A mensalidade não é obrigatoria, você recarrega quando quiser',
        }
    }
};

const tvbox = () => {
    return (
        <div>
            <HeroHeader 
                title={TVBOX.hero.title} 
                text={TVBOX.hero.text} 
                img={TVBOX.hero.img} 
                list={TVBOX.hero.list} 
            />
            <Beneficios 
                img={TVBOX.beneficios.img} 
                title={TVBOX.beneficios.title} 
                list1={TVBOX.beneficios.list1} 
                list2={TVBOX.beneficios.list2} 
            />
            <Metricas 
                list={TVBOX.metricas.list} 
            />
            <Reviews 
                list={TVBOX.reviews.list} 
                title={TVBOX.reviews.title} 
            />
            <Precos 
                title={TVBOX.precos.title} 
                descricao={TVBOX.precos.text} 
                basico={TVBOX.precos.basico} 
                completo={TVBOX.precos.completo}
                simples={TVBOX.precos.simples}
            />
        </div>
    )
}

export default tvbox;