
const singersList = [
  {
    id: "1",
    name: "Taylor Momsen",
    birthday: "26/07/1993",
    nationality: "United States",
    musicType: ["Punk", "Alternative Rock", "Hard Rock"],
    image: "https://people.com/thmb/vWKDuC-RRPN62VtPxFocS2rNFjA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(799x479:801x481)/taylor-momsen-2000-6dda5a8b79fa40ff9cf53621e388af94.jpg",
    age: 30,
    inABand: true,
    bandName: "The Pretty Reckless",
    infoLink: "https://es.wikipedia.org/wiki/Taylor_Momsen",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: "2",
    name: "Tatiana Shmaylyuk",
    birthday: "15/03/1987",
    nationality: "Ukraine",
    musicType: ["Groove Metall"],
    image: "https://i.pinimg.com/originals/ac/e0/08/ace008bc77f062e4b9eb555091dfa189.jpg",
    age: 36,
    inABand: true,
    bandName: "JINJER",
    infoLink: "https://es.wikipedia.org/wiki/Tatiana_Shmaylyuk",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: "3",
    name: "David Draimank",
    birthday: "13/03/1973",
    nationality: "United States",
    musicType: ["Nu-Metall", "Heavy Metall", "Hard rock", "Alternative Metall", "Industrial Metall"],
    image: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQcq_BhgkgJcUQW6Cwq1G6Srm2OObxp4nBTE0wizpVVqj4azHxWkmpJwHotZ4dwFsTX",
    age: 50,
    inABand: true,
    bandName: "Disturbed",
    infoLink: "https://es.wikipedia.org/wiki/David_Draiman",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: "4",
    name: "Madeleine Liljestam",
    birthday: "18/09/1990",
    nationality: "Sweden",
    musicType: ["Synphonic Metall"],
    image: "https://dark-divas.com/wp-content/uploads/2020/08/ELEINE-Reviews-3-e1625844051902.jpg",
    age: 33,
    inABand: true,
    bandName: "ELEINE",
    infoLink: "",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: "5",
    name: "Lena Scissorhands",
    birthday: "22/11/1986",
    nationality: "Moldova",
    musicType: ["Nu Metal", "Metalcore", "Groove Metal", "Melodic Death Metal", "Alternative Metal"],
    image: "https://i.pinimg.com/originals/72/71/10/72711059b851410570c7e0be7887da0a.jpg",
    age: 36,
    inABand: true,
    bandName: "Infected Rain",
    infoLink: "https://es.wikipedia.org/wiki/Lena_Scissorhands",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: "6",
    name: "Rob Zombie",
    birthday: "12/01/1965",
    nationality: "United States",
    musicType: ["Heavy Metal", "Metal Alternativo", "Metal Industrial", "Groove Metal", "Hard rock", "Nu Metal", "Shock Rock"],
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyJt6mLxYwAkj6f23W_Q7eXLjkj9Om0Or6NIpk8qzTh_DKm3kT",
    age: 58,
    inABand: false,
    bandName: "",
    infoLink: "https://es.wikipedia.org/wiki/Rob_Zombie",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: "7",
    name: "Kvitrafn",
    birthday: "18/11/1979",
    nationality: "Norway",
    musicType: ["Black Metal", "Heavy Metal", "Thrash Metal", "Folk", "Ambient"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Wardruna_%40_Roadburn_2015_01.jpg/330px-Wardruna_%40_Roadburn_2015_01.jpg",
    age: 43,
    inABand: true,
    bandName: "Wardruna",
    infoLink: "https://es.wikipedia.org/wiki/Kvitrafn",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: "8",
    name: "Maria Brink",
    birthday: "18/12/1977",
    nationality: "United States",
    musicType: ["Heavy Metal", "Metalcore", "Metal Alternativo", "Metal Gótico", "Post-hardcore"],
    image: "https://i.pinimg.com/originals/ed/95/68/ed9568c85bb2ce1390ec27366e0b619b.jpg",
    age: 45,
    inABand: true,
    bandName: "In this moment",
    infoLink: "https://es.wikipedia.org/wiki/Maria_Brink",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: "9",
    name: "Ozzy Osbourne",
    birthday: "3/12/1948",
    nationality: "British",
    musicType: ["Heavy Metal", "Hard Rock"],
    image: "https://m.media-amazon.com/images/M/MV5BNzk3OTYyMzc2Nl5BMl5BanBnXkFtZTcwMTk3NTUyMg@@._V1_FMjpg_UX1000_.jpg",
    age: 74,
    inABand: false,
    bandName: "",
    infoLink: "https://es.wikipedia.org/wiki/Ozzy_Osbourne",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: "10",
    name: "2D",
    birthday: "23/05/1978",
    nationality: "British",
    musicType: ["Grunch"],
    image: "https://dthezntil550i.cloudfront.net/5q/latest/5q1807292022025420003326381/1280_960/8a33426b-abb1-4b7c-9151-6c7a9ee34871.png",
    age: 45,
    inABand: true,
    bandName: "Gorilaz",
    infoLink: "https://gorillaz.fandom.com/es/wiki/2-D",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
]

export default singersList;