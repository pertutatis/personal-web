import { IBook } from '../domain/models/Book';

const books = [
  {
    id: 1,
    title: 'Radical Candor',
    description:
      'Radical candor es algo más que "ser profesional". Se trata de preocuparse por las personas con las que trabajas, compartir algo más que tu propio trabajo y animar a todos los que dependen de ti a hacer lo mismo.',
    image:
      'https://m.media-amazon.com/images/I/81NMCJS9Q6L._AC_UF1000,1000_QL80_.jpg',
    url: 'to-buy.com',
  },
  {
    id: 2,
    title: "The manager's path",
    description:
      'El autor nos lleva a través de cada etapa del viaje desde ingeniero a CTO. Este libro es ideal tanto si eres un nuevo manager, un mentor o un líder más experimentado en busca de nuevos consejos.',
    image: '/imgs/the-manager-path.jpg',
    url: 'to-buy.com',
  },
  {
    id: 3,
    title: 'Too Many Bosses, Too Few Leaders',
    description:
      'Aunque el grueso del libro se centra en liderazgo en grandes grupos, cuando eres manager de managers, los dos primero capítulos se centran en liderazgo personal y gestionar un equipo. Solo por esos dos capítulos vale la pena.',
    image:
      'https://rajeevpeshawaria.com/wp-content/uploads/2012/10/TMBTFL-Cover-198x300.jpg',
    url: 'to-buy.com',
  },
];

export default function retrieveBooks(): Promise<IBook[]> {
  return new Promise((resolve) => {
    resolve(books);
  });
}
