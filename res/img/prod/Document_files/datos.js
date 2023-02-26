/* const productosArr = [  ["Camiseta básica de algodón", "Una camiseta básica hecha de algodón suave y cómodo", 10, 50,],
  ["Jeans skinny", "Jeans ajustados con estilo disponibles en diferentes lavados y colores", 50, 40],
  ["Vestido de verano", "Vestido fresco y cómodo con estampados y colores vibrantes para el verano", 35, 60],
  ["Chaqueta de cuero sintético", "Chaqueta de cuero sintético de alta calidad", 75, 20],
  ["Sudadera con capucha", "Sudadera con capucha cómoda y caliente", 45, 30],
  ["Blusa de seda", "Blusa elegante y sofisticada hecha de seda", 65, 25],
  ["Pantalones de chinos", "Pantalones casuales y cómodos de tela de algodón", 40, 35],
  ["Abrigo de invierno", "Abrigo caliente y acogedor para el invierno", 100, 15],
  ["Falda midi de lana", "Falda de lana midi cómoda y caliente", 60, 20],
  ["Camisa de botones", "Camisa de botones clásica y elegante", 35, 50],
  ["Leggings de yoga", "Leggings cómodos y elásticos para yoga o para uso diario", 20, 40],
  ["Suéter de lana", "Suéter caliente y acogedor hecho de lana", 70, 30],
  ["Botas de invierno", "Botas de invierno impermeables y calientes", 90, 25],
  ["Sandalias de verano", "Sandalias cómodas y frescas para el verano", 30, 40],
  ["Zapatillas deportivas", "Zapatillas deportivas cómodas y resistentes", 60, 35],
  ["Sombrero de verano", "Sombrero fresco y protectora para el sol", 25, 20],
  ["Gorra de béisbol", "Gorra clásica de béisbol con logotipo", 20, 30],
  ["Bolso de mano", "Bolso de mano elegante y sofisticado", 70, 25],
  ["Mochila", "Mochila práctica y resistente para llevar tus cosas", 50, 35],
  ["Maleta", "Maleta grande y duradera para tus viajes", 100, 15],
  ["Bolso de hombro", "Bolso de hombro cómodo y práctico", 45, 20],
  ["Zapatillas de running", "Zapatillas de running ligeras y cómodas para corredores", 80, 50],
  ["Botas de invierno", "Botas calientes y resistentes al agua para el invierno", 120, 40],
  ["Sandalias de verano", "Sandalias frescas y cómodas con estampados y colores vibrantes para el verano", 35, 60],
  ["Zapatos de vestir", "Zapatos de vestir elegantes y formales para ocasiones especiales", 75, 20],
  ["Mocasines", "Mocasines cómodos y casuales para cualquier ocasión", 45, 30],
  ["Zapatillas deportivas", "Zapatillas deportivas con amortiguación y soporte para cualquier actividad física", 60, 50],
  ["Botines", "Botines cómodos y elegantes para el invierno", 90, 40],
  ["Tennis", "Tennis casuales y frescos para el verano", 25, 60],
  ["Zapatos de seguridad", "Zapatos de seguridad resistentes y con protección para trabajos de construcción", 75, 20],
  ["Zapatillas skate", "Zapatillas resistentes y con soporte para patinaje", 65, 30],
  ["Vestido midi de algodón", "Vestido midi con cuello redondo y mangas cortas hecho de algodón suave", 25, 80],
  ["Vestido de noche con escote en V", "Vestido de noche con escote en V y falda acampanada para una apariencia elegante", 75, 30],
  ["Vestido maxi de verano", "Vestido maxi fresco y cómodo con estampados y colores vibrantes para el verano", 50, 60],
  ["Vestido de fiesta con lentejuelas", "Vestido de fiesta con lentejuelas y falda con volantes para una apariencia brillante y divertida", 100, 20],
  ["Vestido de gasa con detalles florales", "Vestido de gasa con detalles florales y mangas acampanadas para una apariencia romántica", 55, 40],
  ["Vestido de encaje con mangas largas", "Vestido de encaje con mangas largas y escote en V para una apariencia sofisticada", 65, 50],
  ["Vestido shift con estampado de leopardo", "Vestido shift con estampado de leopardo y mangas cortas para una apariencia atrevida", 40, 60],
  ["Remera de algodón básica", "Una remera de algodón suave y cómoda en diferentes colores", 15, 100],
  ["Remera con estampado", "Remera con estampados divertidos y atrevidos en diferentes colores", 20, 80],
  ["Remera de manga larga", "Remera de manga larga cómoda y caliente en diferentes colores", 25, 60],
  ["Remera deportiva", "Remera deportiva transpirable y cómoda en diferentes colores", 30, 40],
  ["Remera de cuello redondo", "Remera de cuello redondo clásica y atemporal en diferentes colores", 20, 50],
  ["Remera con logotipo", "Remera con logotipos de marcas populares en diferentes colores", 25, 30],
  ["Remera con print fotográfico", "Remera con print fotográfico en diferentes diseños y colores", 25, 20],
  ["Remera ajustada", "Remera ajustada que sigue la silueta del cuerpo en diferentes colores", 20, 30],
  ["Pantalones de mezclilla", "Unos pantalones de mezclilla suaves y cómodos en diferentes colores", 50, 100],
  ["Pantalones de vestir", "Pantalones de vestir elegantes y formales en diferentes colores", 80, 80],
  ["Pantalones deportivos", "Pantalones deportivos transpirables y cómodos en diferentes colores", 60, 60],
  ["Pantalones de chandal", "Pantalones de chandal cómodos y casuales en diferentes colores", 40, 40],
  ["Pantalones cargo", "Pantalones cargo con bolsillos prácticos en diferentes colores", 60, 50],
  ["Pantalones de cuadros", "Pantalones de cuadros con estilo atemporal en diferentes colores", 70, 30],
  ["Leggings", "Leggings ajustados y cómodos en diferentes colores y diseños", 40, 20],
  ["Pantalones jogger", "Pantalones jogger sueltos y cómodos en diferentes colores", 50, 30],
  ["Pantalones palazzo", "Pantalones palazzo amplios y cómodos en diferentes colores", 60, 20],
  ["Pantalones de tela", "Pantalones de tela suaves y cómodos en diferentes colores", 50, 10],
  ["Pantalones de cuero sintético", "Pantalones de cuero sintético con estilo atrevido en diferentes colores", 80, 5],
  ["Pantalones de terciopelo", "Pantalones de terciopelo suaves y elegantes en diferentes colores", 70, 3],
  ["Pantalones harem", "Pantalones harem amplios y cómodos en diferentes colores", 60, 4],
  ["Pantalones de camuflaje", "Pantalones de camuflaje con estilo militar en diferentes colores", 60, 6],
  ["Pantalones capri", "Pantalones capri frescos y cómodos en diferentes colores", 50, 8],
  ["Pantalones acampanados", "Pantalones acampanados elegantes y cómodos en diferentes colores", 70, 10],
  ["Pantalones de pana", "Pantalones de pana cálidos y cómodos en diferentes colores", 60, 12],
  ["Pantalones cortos", "Pantalones cortos frescos y cómodos en diferentes colores", 40, 14]
] */



const productosArr = [
  ["Camiseta básica de algodón", "Una camiseta básica hecha de algodón suave y cómodo", 10, 50, "img1.jpeg", 3.96, 1, 1, "Oferta verano clasico", false, "Unisex"],
  ["Jeans skinny", "Jeans ajustados con estilo disponibles en diferentes lavados y colores", 50, 40, "img2.jpeg", 3.16, 2, 6, "Oferta verano", false, "Femenino"],
  ["Vestido de verano", "Vestido fresco y cómodo con estampados y colores vibrantes para el verano", 35, 60, "img3.jpeg", 2.17, 8, 7, "Verano", false, "Femenino"],
  ["Chaqueta de cuero sintético", "Chaqueta de cuero sintético de alta calidad", 75, 20, "img4.jpeg", 4.79, 7, 5, "Cuero noche oferta", false, "Masculino"],
  ["Sudadera con capucha", "Sudadera con capucha cómoda y caliente", 45, 30, "img5.jpeg", 2.52, 1, 2, "Urbano onda", false, "Masculino"],
  ["Blusa de seda", "Blusa elegante y sofisticada hecha de seda", 65, 25, "img6.jpeg", 2.34, 7, 9, "Clásico noche", false, "Femenino"],
  ["Pantalones de chinos", "Pantalones casuales y cómodos de tela de algodón", 40, 35, "img7.jpeg", 3.52, 2, 6, "Largo urbano", false, "Masculino"],
  ["Abrigo de invierno", "Abrigo caliente y acogedor para el invierno", 100, 0, "img8.jpeg", 3.64, 7, 7, "Invierno abrigo oferta", false, "Masculino"],
  ["Falda midi de lana", "Falda de lana midi cómoda y caliente", 60, 20, "img9.jpeg", 1.5, 8, 9, "verano oferta", true, "Femenino"],
  ["Camisa de botones", "Camisa de botones clásica y elegante", 35, 50, "img10.jpeg", 4.12, 9, 7, "clasico  oferta", false, "Masculino"],
  ["Leggings de yoga", "Leggings cómodos y elásticos para yoga o para uso diario", 20, 40, "img11.jpeg", 3.11, 2, 1, "Ejercicio", false, "Femenino"],
  ["Suéter de lana", "Suéter caliente y acogedor hecho de lana", 70, 30, "img12.jpeg", 1.49, 7, 8, "Abrigo clasico oferta", false, "Femenino"],
  ["Botas de invierno", "Botas de invierno impermeables y calientes", 90, 25, "img13.jpeg", 4.25, 4, 3, "Abrigo noche salir", false, "Femenino"],
  ["Sandalias de verano", "Sandalias cómodas y frescas para el verano", 30, 40, "img14.jpeg", 1.97, 3, 2, "Verano fresco oferta", true, "Femenino"],
  ["Zapatillas deportivas", "Zapatillas deportivas cómodas y resistentes", 60, 35, "img15.jpeg", 3.34, 3, 2, "Running ejercicio", false, "Unisex"],
  ["Sombrero de verano", "Sombrero fresco y protectora para el sol", 25, 20, "img16.jpeg", 4.57, 5, 8, "verano", false, "Femenino"],
  ["Gorra de béisbol", "Gorra clásica de béisbol con logotipo", 20, 30, "img17.jpeg", 2.68, 5, 4, "Deporte fan", true, "Masculino"],
  ["Bolso de mano", "Bolso de mano elegante y sofisticado", 70, 0, "img18.jpeg", 3.6, 9, 9, "Diario urbano oferta", false, "Unisex"],
  ["Mochila", "Mochila práctica y resistente para llevar tus cosas", 50, 35, "img19.jpeg", 2.59, 9, 6, "clases oferta", false, "Femenino"],
  ["Maleta", "Maleta grande y duradera para tus viajes", 100, 15, "img20.jpeg", 3.07, 9, 8, "Viajes", false, "Unisex"],
  ["Bolso de hombro", "Bolso de hombro cómodo y práctico", 45, 20, "img21.jpeg", 4.4, 9, 3, "urbano", true, "Femenino"],
  ["Zapatillas de running", "Zapatillas de running ligeras y cómodas para corredores", 80, 50, "img22.jpeg", 4.28, 3, 1, "ejercicio", false, "Masculino"],
  ["Botas de invierno", "Botas calientes y resistentes al agua para el invierno", 120, 40, "img23.jpeg", 2.48, 4, 4, "dia oferta", false, "Femenino"],
  ["Sandalias de verano", "Sandalias frescas y cómodas con estampados y colores vibrantes para el verano", 35, 60, "img24.jpeg", 4.28, 3, 3, "Verano fresco urbano oferta", false, "Femenino"],
  ["Zapatos de vestir", "Zapatos de vestir elegantes y formales para ocasiones especiales", 75, 20, "img25.jpeg", 2.93, 4, 8, "Noche elegante oferta", true, "Masculino"],
  ["Mocasines", "Mocasines cómodos y casuales para cualquier ocasión", 45, 30, "img26.jpeg", 2.77, 4, 3, "Elegante clasico", false, "Masculino"],
  ["Zapatillas deportivas", "Zapatillas deportivas con amortiguación y soporte para cualquier actividad física", 60, 50, "img27.jpeg", 2.83, 3, 1, "Ejercicio running oferta", false, "Femenino"],
  ["Botines", "Botines cómodos y elegantes para el invierno", 90, 40, "img28.jpeg", 2.17, 3, 3, "deporte oferta", false, "Masculino"],
  ["Tennis", "Tennis casuales y frescos para el verano", 25, 60, "img29.jpeg", 1.55, 3, 4, "urbano oferta", false, "Femenino"],
  ["Zapatos de seguridad", "Zapatos de seguridad resistentes y con protección para trabajos de construcción", 75, 20, "img30.jpeg", 2.25, 4, 8, "Trabajo seguridad", false, "Unisex"],
  ["Zapatillas skate", "Zapatillas resistentes y con soporte para patinaje", 65, 0, "img31.jpeg", 3.88, 3, 4, "Urbano onda", false, "Masculino"],
  ["Vestido midi de algodón", "Vestido midi con cuello redondo y mangas cortas hecho de algodón suave", 25, 80, "img32.jpeg", 1.05, 8, 9, "Noche clasico oferta", false, "Femenino"],
  ["Vestido de noche con escote en V", "Vestido de noche con escote en V y falda acampanada para una apariencia elegante", 75, 30, "img33.jpeg", 4.68, 8, 9, "Noche atrevido", true, "Femenino"],
  ["Vestido maxi de verano", "Vestido maxi fresco y cómodo con estampados y colores vibrantes para el verano", 50, 60, "img34.jpeg", 1.24, 8, 9, "Verano atrevido", true, "Femenino"],
  ["Vestido de fiesta con lentejuelas", "Vestido de fiesta con lentejuelas y falda con volantes para una apariencia brillante y divertida", 100, 20, "img35.jpeg", 3.89, 8, 9, "Noche fiesta elegante oferta", false, "Femenino"],
  ["Vestido de gasa con detalles florales", "Vestido de gasa con detalles florales y mangas acampanadas para una apariencia romántica", 55, 40, "img36.jpeg", 1.13, 8, 9, "Floreado dia oferta", true, "Femenino"],
  ["Vestido de encaje con mangas largas", "Vestido de encaje con mangas largas y escote en V para una apariencia sofisticada", 65, 50, "img37.jpeg", 3.85, 8, 9, "Noche abrigo", false, "Femenino"],
  ["Vestido shift con estampado de leopardo", "Vestido shift con estampado de leopardo y mangas cortas para una apariencia atrevida", 40, 60, "img38.jpeg", 1.83, 8, 9, "Noche atrevido elegante", false, "Femenino"],
  ["Remera de algodón básica", "Una remera de algodón suave y cómoda en diferentes colores", 15, 100, "img39.jpeg", 1.77, 1, 4, "Clásico urbano oferta", true, "Femenino"],
  ["Remera con estampado", "Remera con estampados divertidos y atrevidos en diferentes colores", 20, 80, "img40.jpeg", 3.37, 1, 4, "Onda", false, "Masculino"],
  ["Remera de manga larga", "Remera de manga larga cómoda y caliente en diferentes colores", 25, 60, "img41.jpeg", 1.16, 1, 4, "abrigo", false, "Masculino"],
  ["Remera deportiva", "Remera deportiva transpirable y cómoda en diferentes colores", 30, 40, "img42.jpeg", 1.07, 1, 3, "Ejercicio salir", true, "Femenino"],
  ["Remera de cuello redondo", "Remera de cuello redondo clásica y atemporal en diferentes colores", 20, 50, "img43.jpeg", 3.94, 1, 2, "running elegante oferta", false, "Masculino"],
  ["Remera con logotipo", "Remera con logotipos de marcas populares en diferentes colores", 25, 30, "img44.jpeg", 1.09, 1, 1, "Marca urbano", false, "Masculino"],
  ["Remera con print fotográfico", "Remera con print fotográfico en diferentes diseños y colores", 25, 20, "img45.jpeg", 1.09, 1, 4, "clasico", false, "Unisex"],
  ["Remera ajustada", "Remera ajustada que sigue la silueta del cuerpo en diferentes colores", 20, 30, "img46.jpeg", 1.96, 1, 1, "Elegante noche", true, "Masculino"],
  ["Pantalones de mezclilla", "Unos pantalones de mezclilla suaves y cómodos en diferentes colores", 50, 100, "img47.jpeg", 1.44, 2, 1, "salir", false, "Femenino"],
  ["Pantalones de vestir", "Pantalones de vestir elegantes y formales en diferentes colores", 80, 80, "img48.jpeg", 2.23, 2, 7, "noche oferta", false, "Masculino"],
  ["Pantalones deportivos", "Pantalones deportivos transpirables y cómodos en diferentes colores", 60, 60, "img49.jpeg", 1.01, 2, 7, "Ejercicio deporte", true, "Masculino"],
  ["Pantalones de chandal", "Pantalones de chandal cómodos y casuales en diferentes colores", 40, 40, "img50.jpeg", 1, 2, 6, "clasico", false, "Masculino"],
  ["Pantalones cargo", "Pantalones cargo con bolsillos prácticos en diferentes colores", 60, 50, "img51.jpeg", 3.87, 2, 7, "clasico", true, "Masculino"],
  ["Pantalones de cuadros", "Pantalones de cuadros con estilo atemporal en diferentes colores", 70, 30, "img52.jpeg", 1.6, 2, 6, "Noche salir", false, "Femenino"],
  ["Leggings", "Leggings ajustados y cómodos en diferentes colores y diseños", 40, 20, "img53.jpeg", 2.89, 10, 8, "Deporte running yoga", false, "Femenino"],
  ["Pantalones jogger", "Pantalones jogger sueltos y cómodos en diferentes colores", 50, 30, "img54.jpeg", 4.2, 2, 6, "Yoga running", false, "Masculino"],
  ["Pantalones palazzo", "Pantalones palazzo amplios y cómodos en diferentes colores", 60, 20, "img55.jpeg", 3.97, 2, 6, "Noche elegante", false, "Femenino"],
  ["Pantalones de tela", "Pantalones de tela suaves y cómodos en diferentes colores", 50, 10, "img56.jpeg", 4.96, 2, 6, "noche", false, "Femenino"],
  ["Pantalones de cuero sintético", "Pantalones de cuero sintético con estilo atrevido en diferentes colores", 80, 5, "img57.jpeg", 1.44, 2, 6, "largo", true, "Femenino"],
  ["Pantalones de terciopelo", "Pantalones de terciopelo suaves y elegantes en diferentes colores", 70, 3, "img58.jpeg", 1.5, 2, 6, "Largo elegante", false, "Femenino"],
  ["Pantalones harem", "Pantalones harem amplios y cómodos en diferentes colores", 60, 0, "img59.jpeg", 4.17, 2, 5, "largo", false, "Masculino"],
  ["Pantalones de camuflaje", "Pantalones de camuflaje con estilo militar en diferentes colores", 60, 6, "img60.jpeg", 2.56, 2, 7, "ejercicio", false, "Femenino"],
  ["Pantalones capri", "Pantalones capri frescos y cómodos en diferentes colores", 50, 8, "img61.jpeg", 2.56, 2, 6, "salir", true, "Femenino"],
  ["Pantalones acampanados", "Pantalones acampanados elegantes y cómodos en diferentes colores", 70, 10, "img62.jpeg", 2.74, 2, 6, "Moda verano", false, "Femenino"],
  ["Pantalones de pana", "Pantalones de pana cálidos y cómodos en diferentes colores", 60, 12, "img63.jpeg", 3.23, 2, 6, "Moda oferta", false, "Femenino"],
  ["Pantalones cortos", "Pantalones cortos frescos y cómodos en diferentes colores", 40, 14, "img64.jpeg", 1.68, 2, 3, "oferta", false, "Masculino"]
]

const categorias = [
  {
    "idCategoria": 1,
    "Categoria": "Remera",
    "path": "imgCat1.jpeg"
  },
  {
    "idCategoria": 2,
    "Categoria": "Pantalon",
    "path": "imgCat2.jpeg"
  },
  {
    "idCategoria": 3,
    "Categoria": "Zapatilla",
    "path": "imgCat3.jpeg"
  },
  {
    "idCategoria": 4,
    "Categoria": "Zapato",
    "path": "imgCat4.jpeg"
  },
  {
    "idCategoria": 5,
    "Categoria": "Gorra",
    "path": "imgCat5.jpeg"
  },
  {
    "idCategoria": 7,
    "Categoria": "Campera",
    "path": "imgCat7.jpeg"
  },
  {
    "idCategoria": 8,
    "Categoria": "Vestido",
    "path": "imgCat8.jpeg"
  },
  {
    "idCategoria": 9,
    "Categoria": "Mochilas y bolsos",
    "path": "imgCat9.jpeg"
  },
  {
    "idCategoria": 10,
    "Categoria": "Otros",
    "path": "imgCat10.jpeg"
  },
  {
    "idCategoria": 11,
    "Categoria": "extra",
    "path": "imgCat11.jpeg"
  }
]

const marcas = [
  {
    "idMarca": 1,
    "Marca": "Adidas"
  },
  {
    "idMarca": 2,
    "Marca": "Topper"
  },
  {
    "idMarca": 3,
    "Marca": "Puma"
  },
  {
    "idMarca": 4,
    "Marca": "Nike"
  },
  {
    "idMarca": 5,
    "Marca": "Under Armor"
  },
  {
    "idMarca": 6,
    "Marca": "Levis"
  },
  {
    "idMarca": 7,
    "Marca": "Calvin Klein"
  },
  {
    "idMarca": 8,
    "Marca": "Generico"
  },
  {
    "idMarca": 9,
    "Marca": "extra"
  }
]