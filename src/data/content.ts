import { ComparisonCase, ModuleItem, Testimonial, FaqItem } from '../types';

export const WHATSAPP_ENROLLMENT_URL = 'https://api.whatsapp.com/send/?phone=5521981888793&text=Ol%C3%A1%252C+quero+fazer+um+curso+&type=phone_number&app_absent=0&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafqtMH7pP3PgTZ79-660cM_ljpf3wCPB7kAymI7_dw6fjKWi_GLuZdES5xWHA_aem_Z2CDEfgyeFyJ1vCT9j_oOw';

export const INSTRUCTOR_INFO = {
  name: 'Matheus Souza',
  handle: '@matheussouza.ofc',
  instagramUrl: 'https://www.instagram.com/matheussouza.ofc/',
  title: 'Especialista em Micropigmentação Capilar & Barba Milionária',
  faturamentoRecord: 'Mais de R$ 200.000 em 6 meses',
  alunosFormados: '+350 alunos transformados',
  anosExperiencia: 'Barbeiro de origem & Master Instructor',
  whatsappNumber: '5521981888793',
  whatsappUrl: WHATSAPP_ENROLLMENT_URL,
  heroImage: '/src/assets/images/hero_vsl_matheus_1790919247867.jpg',
  capilarResultImage: '/src/assets/images/procedure_micro_capilar_1790919259034.jpg',
  beardResultImage: '/src/assets/images/beard_milionaria_result_1790919269779.jpg',
  certificateImage: '/src/assets/images/academy_students_certificate_1790919280296.jpg',
};

export const PRICING = {
  originalPrice: 'R$ 497,00',
  installments: '12x de R$ 10,03',
  installmentValue: '10,03',
  cashPrice: 'R$ 97,00',
  cashValue: '97,00',
  pixDiscountText: 'à vista no PIX',
};

export const VSL_TRANSCRIPT_SEGMENTS = [
  {
    time: 0,
    text: "[Matheus demonstrando corte na máquina no manequim...]",
    speaker: "Matheus Souza",
  },
  {
    time: 3,
    text: "Tá acredita que eu parei de cortar cabelo pra sobreviver só de micro capilar?",
    speaker: "Matheus Souza",
  },
  {
    time: 8,
    text: "É isso mesmo!",
    speaker: "Matheus Souza",
  },
  {
    time: 12,
    text: "Só com essa canetinha aqui eu já faturei mais de 200 mil reais em apenas 6 meses. Você acredita nisso?",
    speaker: "Matheus Souza",
  },
  {
    time: 19,
    text: "É, a micro capilar ela é a tendência que tá crescendo cada vez mais aqui no Brasil, tá?",
    speaker: "Matheus Souza",
  },
  {
    time: 26,
    text: "Tem muita gente com falha na cabeça, calvície, alopecia né?",
    speaker: "Matheus Souza",
  },
  {
    time: 32,
    text: "E a gente consegue resolver em apenas poucos minutos, apenas com o tebori e uma agulha, tá?",
    speaker: "Matheus Souza",
  },
  {
    time: 38,
    text: "Então venha participar do meu curso, venha ganhar dinheiro, essa profissão só tá começando!",
    speaker: "Matheus Souza",
  },
  {
    time: 43,
    text: "Então caia pra esse curso e vamos pra cima!",
    speaker: "Matheus Souza",
  },
];

export const COMPARISON_CASES: ComparisonCase[] = [
  {
    id: 'caso-1',
    category: 'Linha Frontal',
    title: 'Marcação Anatômica & Reconstrução de Linha Frontal',
    description: 'Cliente com recuo acentuado na linha frontal e entradas. Aplicação do método de visagismo com marcação precisa em lápis dermatográfico e posterior preenchimento com micropigmentação capilar ultra natural.',
    timeSpent: '1h 30min de sessão',
    ticketPrice: 'R$ 1.800 cobrados',
    beforeImg: '/src/assets/images/client_hairline_before_1790950337480.jpg',
    afterImg: '/src/assets/images/client_hairline_after_1790950346849.jpg',
    keyDetails: [
      'Marcação anatômica simétrica respeitando os traços do cliente',
      'Degradê folicular indetectável mesmo de perto',
      'Pigmento exclusivo antiazulamento de longa durabilidade',
    ],
  },
  {
    id: 'caso-2',
    category: 'Barba Milionária',
    title: 'Preenchimento e Desenho de Barba Cerrada',
    description: 'Barba com falhas nas bochechas e contorno indefinido. Criação de base hiper-realista que realça a mandíbula e dá volume imediato.',
    timeSpent: '1h 15min de sessão',
    ticketPrice: 'R$ 1.200 cobrados',
    beforeImg: '/src/assets/images/beard_milionaria_result_1790919269779.jpg',
    afterImg: '/src/assets/images/beard_milionaria_result_1790919269779.jpg',
    keyDetails: [
      'Técnica de fios e pontilhismo híbrido no tebori',
      'Cicatrização rápida em 5 a 7 dias',
      'Aumento imediato de autoestima do cliente',
    ],
  },
  {
    id: 'caso-3',
    category: 'Camuflagem de Calvície',
    title: 'Camuflagem de Coroa e Efeito Raspado Natural',
    description: 'Tratamento de calvície avançada. Efeito raspado 3D em todo o couro cabeludo, simulando folículos nascendo com profundidade dérmica perfeita.',
    timeSpent: '2h 15min de sessão',
    ticketPrice: 'R$ 2.600 cobrados',
    beforeImg: '/src/assets/images/procedure_micro_capilar_1790919259034.jpg',
    afterImg: '/src/assets/images/procedure_micro_capilar_1790919259034.jpg',
    keyDetails: [
      'Simulação de micropontos foliculares milimétricos',
      'Sem dor com protocolo anestésico tópico adequado',
      'Independência total de disfarces e remédios caros',
    ],
  },
];

export const COURSE_MODULES: ModuleItem[] = [
  {
    number: '01',
    title: 'Fundamentos, Pele & Biossegurança',
    subtitle: 'A base científica para nunca manchar nem azular o couro do cliente',
    duration: '6 Aulas · 3h',
    lessons: [
      'Estrutura das camadas da epiderme e derme papilar',
      'Colorimetria aplicada: escalas Fitzpatrick e neutralização de subtom frio',
      'Biossegurança rigorosa, descarte e assepsia aprovada pela ANVISA',
      'Anestésicos tópicos permitidos e gerenciamento de conforto',
    ],
    icon: 'ShieldCheck',
  },
  {
    number: '02',
    title: 'Domínio do Tebori e Dermógrafo Manual',
    subtitle: 'A empunhadura exata para bater pontos finos como folículos reais',
    duration: '8 Aulas · 4h',
    lessons: [
      'Pressão, inclinação de 90° e profundidade ideal na derme',
      'Configurações de agulhas: 1RL, 3RL e lâminas micro para barba',
      'Treino exaustivo no molde de pele sintética e cabeça manequim',
      'Como evitar expansão e espalhamento indesejado de pigmento',
    ],
    icon: 'PenTool',
  },
  {
    number: '03',
    title: 'Visagismo & Desenho de Linha Frontal Perfeita',
    subtitle: 'Como desenhar linhas naturais que rejuvenescem 10 anos',
    duration: '7 Aulas · 3h 30m',
    lessons: [
      'Linha quebrada (broken hairline) vs. linha marcada contemporânea',
      'Marcação simétrica com paquímetro digital e lápis dermatográfico',
      'Harmonização de acordo com o formato de rosto e idade',
      'Transição suave e degradê frontal indetectável',
    ],
    icon: 'Sparkles',
  },
  {
    number: '04',
    title: 'O Método Barba Milionária',
    subtitle: 'Preenchimento de falhas e contorno afiado para barbearias',
    duration: '6 Aulas · 3h',
    lessons: [
      'Mapeamento de falhas na mandíbula e costeletas',
      'Técnica Shadow Beard & micropontos combinados',
      'Camuflagem de cicatrizes antigas na região da barba',
      'Protocolo de pós-procedimento e manutenção anual',
    ],
    icon: 'Scissors',
  },
  {
    number: '05',
    title: 'Vendas, Captação & Escala para R$ 20.000+/mês',
    subtitle: 'Como lotar a agenda cobrando no mínimo R$ 800 por cliente',
    duration: '5 Aulas · 2h 45m',
    lessons: [
      'Roteiro de conversão no WhatsApp de clientes indecisos',
      'Anúncios simples no Instagram para homens da sua cidade',
      'Como transicionar de cortes simples para procedimentos de alto valor',
      'Contratos, termos de consentimento e precificação estratégica',
    ],
    icon: 'TrendingUp',
  },
  {
    number: '06',
    title: 'Prática em Modelos Reais & Certificação Oficial',
    subtitle: 'O passo a passo gravado em 4K em pacientes reais',
    duration: '7 Aulas · 5h',
    lessons: [
      'Procedimento completo do início ao fim sem cortes',
      'Intercorrências comuns e como resolver com segurança',
      'Entrega do Certificado Oficial Barba Milionária & Micro Capilar',
      'Acesso vitalício ao grupo de suporte direto com Matheus Souza',
    ],
    icon: 'Award',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Lucas Almeida',
    role: 'Ex-barbeiro tradicional, agora Micropigmentador',
    city: 'Belo Horizonte - MG',
    photoUrl: '/src/assets/images/academy_students_certificate_1790919280296.jpg',
    headline: 'De 18 cortes por dia para 2 clientes de micro por semana',
    quote: 'Eu vivia com dores na lombar cortando cabelo das 8h às 21h por R$ 30. No primeiro mês após a formação do Matheus, fiz 4 procedimentos cobrando R$ 1.200 cada. Mudei minha realidade financeira.',
    result: '+ R$ 16.400 no 2º mês',
    verified: true,
  },
  {
    id: 'test-2',
    name: 'Camila Rodrigues',
    role: 'Designer de Sobrancelhas & Esteticista',
    city: 'São Paulo - SP',
    photoUrl: '/src/assets/images/academy_students_certificate_1790919280296.jpg',
    headline: 'O público masculino paga sem pedir desconto',
    quote: 'Já atuava com estética feminina mas a concorrência estava desleal. Quando aprendi a Barba Milionária e o Tebori capilar com o Matheus, atraí empresários que valorizam o resultado. O suporte dele no WhatsApp é sem igual.',
    result: 'Faturou R$ 11.200 no 1º mês',
    verified: true,
  },
  {
    id: 'test-3',
    name: 'Rodrigo Fontes',
    role: 'Barbeiro & Dono de Barbearia',
    city: 'Rio de Janeiro - RJ',
    photoUrl: '/src/assets/images/hero_vsl_matheus_1790919247867.jpg',
    headline: 'Diferencial que triplicou o faturamento da barbearia',
    quote: 'Minha barbearia agora oferece o serviço mais desejado da região. Clientes com calvície que antes tinham vergonha agora saem transformados. Valeu cada centavo investido no curso.',
    result: 'Ticket médio subiu para R$ 1.500',
    verified: true,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Nunca peguei numa máquina de micropigmentação ou tebori. Consigo aprender?',
    answer: 'Sim! O método foi estruturado do zero absoluto. Matheus ensina desde a anatomia da pele, empunhadura correta do tebori, treino em pele sintética e modelos manequins antes de você tocar em uma pessoa real.',
  },
  {
    id: 'faq-2',
    question: 'Quanto preciso investir em materiais para começar a atender?',
    answer: 'Ao contrário de outros mercados, com cerca de R$ 250 a R$ 450 você já adquire o tebori, lâminas estéreis, pigmento profissional específico e dermocosméticos suficientes para atender seus primeiros 15 clientes, faturando mais de R$ 15.000.',
  },
  {
    id: 'faq-3',
    question: 'O pigmento pode azular ou esverdear com o tempo como tatuagem?',
    answer: 'Não! No curso você aprende a usar exclusivamente pigmentos hidrofílicos orgânicos com neutralização prévia e depósito na profundidade dérmica correta (0.5mm a 0.8mm). O pigmento clareia naturalmente sem jamais ficar azul.',
  },
  {
    id: 'faq-4',
    question: 'Recebo certificado válido ao concluir o treinamento?',
    answer: 'Sim! Você recebe o Certificado Oficial de Conclusão emitido pela Academia Matheus Souza em Barba Milionária e Micropigmentação Capilar, reconhecido em todo o território nacional.',
  },
  {
    id: 'faq-5',
    question: 'Como funciona o suporte para tirar dúvidas pós-curso?',
    answer: 'Você terá acesso direto ao grupo VIP de alunos e ao canal exclusivo no WhatsApp com Matheus Souza para avaliar seus treinos, revisar marcações de clientes e receber orientação em tempo real.',
  },
  {
    id: 'faq-6',
    question: 'Existe garantia se eu achar que o método não é para mim?',
    answer: 'Garantia incondicional de 7 dias. Você pode entrar, assistir às aulas, baixar os materiais e se não sentir total segurança, basta enviar um e-mail ou mensagem no suporte para receber 100% do seu dinheiro de volta sem burocracia.',
  },
];
