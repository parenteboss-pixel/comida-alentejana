import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Pratos Principais
  {
    id: 'pp1',
    name: 'Carne de Porco à Alentejana',
    description: 'Cubos de carne de porco salteados com amêijoas, batatas fritas aos cubos, coentros e alho. O clássico alentejano que não pode perder.',
    price: 18.50,
    image: 'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=500&h=350&fit=crop',
    category: 'pratos'
  },
  {
    id: 'pp2',
    name: 'Ensopado de Borrego',
    description: 'Tenro borrego cozinhado lentamente com batatas, pão alentejano, azeite e ervas aromáticas da região.',
    price: 16.90,
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=500&h=350&fit=crop',
    category: 'pratos'
  },
  {
    id: 'pp3',
    name: 'Secretos de Porco Preto',
    description: 'Secretos de porco preto alentejano grelhados na brasa, acompanhados de migas tradicionais e grelos salteados.',
    price: 19.90,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=500&h=350&fit=crop',
    category: 'pratos'
  },
  {
    id: 'pp4',
    name: 'Sopa de Cação',
    description: 'Sopa tradicional de cação com pão alentejano, coentros frescos e ovo escalfado. Receita centenária.',
    price: 12.50,
    image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=500&h=350&fit=crop',
    category: 'pratos'
  },

  // Entradas
  {
    id: 'en1',
    name: 'Açorda Alentejana',
    description: 'Sopa de pão tradicional com azeite virgem, alho, coentros frescos e ovo escalfado. Servida morna.',
    price: 8.90,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=350&fit=crop',
    category: 'entradas'
  },
  {
    id: 'en2',
    name: 'Gaspacho Alentejano',
    description: 'Sopa fria refrescante de tomate maduro, pepino, pimento verde, cebola e pão, temperada com azeite e oregãos.',
    price: 7.50,
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500&h=350&fit=crop',
    category: 'entradas'
  },
  {
    id: 'en3',
    name: 'Migas Alentejanas',
    description: 'Pão alentejano esfarelado com azeite, alho dourado e entrecosto. Servido com carne de porco frita.',
    price: 11.90,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=350&fit=crop',
    category: 'entradas'
  },
  {
    id: 'en4',
    name: 'Tábua de Queijos e Enchidos',
    description: 'Seleção de queijos de ovelha curados, presunto de porco preto, paio, chouriço e linguiça alentejana.',
    price: 14.90,
    image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=500&h=350&fit=crop',
    category: 'entradas'
  },

  // Bebidas
  {
    id: 'be1',
    name: 'Vinho Tinto Alentejano DOC',
    description: 'Copo de vinho tinto regional do Alentejo DOC. Encorpado, aromático e com notas de frutos maduros.',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=350&fit=crop',
    category: 'bebidas'
  },
  {
    id: 'be2',
    name: 'Vinho Branco Alentejano DOC',
    description: 'Copo de vinho branco regional, fresco, frutado e com aroma floral característico da região.',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1566995541428-f2246c17cda1?w=500&h=350&fit=crop',
    category: 'bebidas'
  },
  {
    id: 'be3',
    name: 'Água Mineral de Nascente',
    description: 'Água mineral natural de nascente portuguesa das serras alentejanas. Com ou sem gás.',
    price: 2.00,
    image: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?w=500&h=350&fit=crop',
    category: 'bebidas'
  },
  {
    id: 'be4',
    name: 'Sumo Natural de Laranja do Algarve',
    description: 'Sumo de laranja do Algarve, espremido na hora. Fresco e natural, sem adição de açúcar.',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&h=350&fit=crop',
    category: 'bebidas'
  },

  // Sobremesas
  {
    id: 'so1',
    name: 'Sericaia com Ameixas de Elvas',
    description: 'Doce conventual tradicional de ovos, farinha e canela, servido com ameixas de Elvas DOP em calda.',
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&h=350&fit=crop',
    category: 'sobremesas'
  },
  {
    id: 'so2',
    name: 'Queijadas de Évora',
    description: 'Pequenas tartes tradicionais de queijo fresco, ovos e canela. Receita centenária de Évora.',
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&h=350&fit=crop',
    category: 'sobremesas'
  },
  {
    id: 'so3',
    name: 'Pão de Rala',
    description: 'Doce conventual de Elvas com fios de ovos, amêndoa e gila. Património da doçaria portuguesa.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=500&h=350&fit=crop',
    category: 'sobremesas'
  },
  {
    id: 'so4',
    name: 'Toucinho do Céu',
    description: 'Bolo conventual de amêndoa, gemas de ovos e açúcar. Textura suave e sabor celestial.',
    price: 5.90,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&h=350&fit=crop',
    category: 'sobremesas'
  }
];

export const categories = [
  { id: 'pratos', name: 'Pratos Principais', icon: '🍖', description: 'Sabores autênticos da cozinha alentejana' },
  { id: 'entradas', name: 'Entradas', icon: '🥣', description: 'Para abrir o apetite' },
  { id: 'bebidas', name: 'Bebidas', icon: '🍷', description: 'Vinhos e bebidas da região' },
  { id: 'sobremesas', name: 'Sobremesas', icon: '🍮', description: 'Doçaria conventual tradicional' }
];
