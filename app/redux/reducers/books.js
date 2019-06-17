const randomize = n => Math.floor(Math.random() * (n || 2));

const INITIAL_STATE = [
  {
    _id: 1,
    title: 'Liga da Justiça - Torre de Babel',
    cover: { uri: 'https://abrilsuperinteressante.files.wordpress.com/2018/07/torredebabel.jpg' },
    description: 'Um dos maiores vilões do Batman, Ra’s Al Ghul, tem como objetivo salvar todos os animais do planeta, principalmente os que estão em extinção. Porém, para isso ocorra, ele pretende reduzir a população humana em um determinado número que, segundo ele seria “controlável. Mas para alcançar o seu objetivo é necessário que ele não tenha interferência da Liga da Justiça que com certeza iria impedir esse genocídio',
    isbn: randomize(1000000000),
    number: randomize(4),
    pages: randomize(200),
    format: '',
    price: randomize(50),
    is_unique_edition: randomize(2),
    rating: randomize(10),
    favorites: randomize(100),
    readings: randomize(100),
    publisher: '',
    author: '',
    illustrator: '',
    publishing_date: new Date(),
    tags: [''],
  },
  {
    _id: 2,
    title: 'Superman - O Homem de Aço',
    cover: { uri: 'http://www.vortexcultural.com.br/images/2016/04/Superman-O-Homem-de-A%C3%A7o-capa.jpg' },
    description: 'Um dos maiores vilões do Batman, Ra’s Al Ghul, tem como objetivo salvar todos os animais do planeta, principalmente os que estão em extinção. Porém, para isso ocorra, ele pretende reduzir a população humana em um determinado número que, segundo ele seria “controlável. Mas para alcançar o seu objetivo é necessário que ele não tenha interferência da Liga da Justiça que com certeza iria impedir esse genocídio',
    isbn: randomize(1000000000),
    number: randomize(4),
    pages: randomize(200),
    format: '',
    price: randomize(50),
    is_unique_edition: randomize(2),
    rating: randomize(10),
    favorites: randomize(100),
    readings: randomize(100),
    publisher: '',
    author: '',
    illustrator: '',
    publish_date: new Date(),
    tags: [''],
  },
  {
    _id: 3,
    title: ' Lanterna Verde - A Guerra dos Anéis',
    cover: { uri: 'https://images-na.ssl-images-amazon.com/images/I/51yRtsbrQuL._SX329_BO1,204,203,200_.jpg' },
    description: 'Um dos maiores vilões do Batman, Ra’s Al Ghul, tem como objetivo salvar todos os animais do planeta, principalmente os que estão em extinção. Porém, para isso ocorra, ele pretende reduzir a população humana em um determinado número que, segundo ele seria “controlável. Mas para alcançar o seu objetivo é necessário que ele não tenha interferência da Liga da Justiça que com certeza iria impedir esse genocídio',
    isbn: randomize(1000000000),
    number: randomize(4),
    pages: randomize(200),
    format: '',
    price: randomize(50),
    is_unique_edition: randomize(2),
    rating: randomize(10),
    favorites: randomize(100),
    readings: randomize(100),
    publisher: '',
    author: '',
    illustrator: '',
    publish_date: new Date(),
    tags: [''],
  },
  {
    _id: 4,
    title: 'Demolidor Por Frank Miller & Klaus Janson volume 1',
    cover: { uri: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=8360446&qld=90&l=430&a=-1' },
    description: 'Um dos maiores vilões do Batman, Ra’s Al Ghul, tem como objetivo salvar todos os animais do planeta, principalmente os que estão em extinção. Porém, para isso ocorra, ele pretende reduzir a população humana em um determinado número que, segundo ele seria “controlável. Mas para alcançar o seu objetivo é necessário que ele não tenha interferência da Liga da Justiça que com certeza iria impedir esse genocídio',
    isbn: randomize(1000000000),
    number: randomize(4),
    pages: randomize(200),
    format: '',
    price: randomize(50),
    is_unique_edition: randomize(2),
    rating: randomize(10),
    favorites: randomize(100),
    readings: randomize(100),
    publisher: '',
    author: '',
    illustrator: '',
    publish_date: new Date(),
    tags: [''],
  },
  {
    _id: 5,
    title: 'AKIRA',
    cover: { uri: 'https://images-na.ssl-images-amazon.com/images/I/51F94nOGBRL._SX345_BO1,204,203,200_.jpg' },
    description: 'Um dos maiores vilões do Batman, Ra’s Al Ghul, tem como objetivo salvar todos os animais do planeta, principalmente os que estão em extinção. Porém, para isso ocorra, ele pretende reduzir a população humana em um determinado número que, segundo ele seria “controlável. Mas para alcançar o seu objetivo é necessário que ele não tenha interferência da Liga da Justiça que com certeza iria impedir esse genocídio',
    isbn: randomize(1000000000),
    number: randomize(4),
    pages: randomize(200),
    format: '',
    price: randomize(50),
    is_unique_edition: randomize(2),
    rating: randomize(10),
    favorites: randomize(100),
    readings: randomize(100),
    publisher: '',
    author: '',
    illustrator: '',
    publish_date: new Date(),
    tags: [''],
  },
];

export default function books(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
