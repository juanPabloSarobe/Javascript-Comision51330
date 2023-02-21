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
	["Camiseta básica de algodón", "Una camiseta básica hecha de algodón suave y cómodo", 10, 50, "img1.jpeg", 1.54, 1, 1, "Oferta verano clasico", false, "Unisex"], 
	["Jeans skinny", "Jeans ajustados con estilo disponibles en diferentes lavados y colores", 50, 40, "img2.jpeg", 4.08, 2, 6, "Oferta verano", false, "Femenino"], 
	["Vestido de verano", "Vestido fresco y cómodo con estampados y colores vibrantes para el verano", 35, 60, "img3.jpeg", 1.86, 8, 7, "Verano", false, "Femenino"], 
	["Chaqueta de cuero sintético", "Chaqueta de cuero sintético de alta calidad", 75, 10, "img4.jpeg", 3.78, 7, 5, "Cuero noche oferta", true, "Masculino"],
  ["Camiseta básica de algodón", "Una camiseta básica hecha de algodón suave y cómodo", 10, 0, "img1.jpeg", 1.54, 1, 1, "Oferta verano clasico", false, "Unisex"], 
	["Jeans skinny", "Jeans ajustados con estilo disponibles en diferentes lavados y colores", 50, 40, "img2.jpeg", 4.08, 2, 6, "Oferta verano", false, "Femenino"], 
	["Vestido de verano", "Vestido fresco y cómodo con estampados y colores vibrantes para el verano", 35, 60, "img3.jpeg", 1.86, 8, 7, "Verano", false, "Femenino"], 
	["Chaqueta de cuero sintético", "Chaqueta de cuero sintético de alta calidad", 75, 10, "img4.jpeg", 3.78, 7, 5, "Cuero noche oferta", false, "Masculino"]

]

const categorias = [
  {
    "idCategoria": 1, 
    "Categoria": "Remera"}, 
  {
    "idCategoria": 2, 
    "Categoria": "Pantalon"}, 
  {
    "idCategoria": 3, 
    "Categoria": "Zapatilla"}, 
  {
    "idCategoria": 4, 
    "Categoria": "Zapato"}, 
  {
    "idCategoria": 5, 
    "Categoria": "Gorra"}, 
  {
    "idCategoria": 7, 
    "Categoria": "Campera"}, 
  {
    "idCategoria": 8, 
    "Categoria": "Vestido"}, 
  {
    "idCategoria": 9, 
    "Categoria": "Mochilas y bolsos"}, 
  {
    "idCategoria": 10, 
    "Categoria": "Otros"}
  ]

  const carcas = [
    {
      "idMarca": 1, 
      "Marca": "Adidas"}, 
    {
      "idMarca": 2, 
      "Marca": "Topper"}, 
    {
      "idMarca": 3, 
      "Marca": "Puma"}, 
    {
      "idMarca": 4, 
      "Marca": "Nike"}, 
    {
      "idMarca": 5, 
      "Marca": "Under Armor"}, 
    {
      "idMarca": 6, 
      "Marca": "Levis"}, 
    {
      "idMarca": 7, 
      "Marca": "Calvin Klein"}, 
    {
      "idMarca": 8, 
      "Marca": "Generico"}
    ]