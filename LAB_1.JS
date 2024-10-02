
let cuadros = [
    {
        titulo: "Mona Lisa",
        artista: "Leonardo da Vinci",
        anio: 1503,
        Pais: "Italia",
        imagen: "/imagenes/2.jpg"       
    },
    {
        titulo: "La última cena",
        artista: "Leonardo da Vinci",
        anio: 1495,
        Pais: "Italia",
        imagen: "/imagenes/1.jpg"
        
    },
    {
        titulo: "La noche estrellada",
        artista: "Vincent van Gogh",
        anio: 1889,
        Pais: "Paises bajos",
        imagen: "/imagenes/3.jpg"

    },
    {
        titulo: "El grito",
        artista: "Edvard Munch",
        anio: 1893,
        Pais: "Noruega",
        imagen: "/imagenes/4.jpg"
    },
    {
        titulo: "El Guernica",
        artista: "Pablo Picasso",
        anio: 1937,
        Pais: "Espana",
        imagen: "/imagenes/5.jpg"
    },
    {
        titulo: "El beso",
        artista: "Gustav Klimt",
        anio: 1907,
        Pais: "Austria",
        imagen: "/imagenes/6.jpg"
    },
    {
        titulo: "La joven de la perla",
        artista: "Johannes Vermeer",
        anio: 1665,
        Pais: "Paises bajos",
        imagen: "/imagenes/7.jpg"
    },
    {
        titulo: "El nacimiento de Venus",
        artista: "Sandro Botticelli",
        anio: 1485,
        Pais: "Italia",
        imagen: "/imagenes/8.jpg"
    },
    {
        titulo: "Las meninas",
        artista: "Diego Velázquez",
        anio: 1656,
        Pais: "Espana",
        imagen: "/imagenes/9.jpg"
    },
    {
        titulo: "La creación de Adán",
        artista: "Miguel Ángel",
        anio: 1512,
        Pais: "Italia",
        imagen: "/imagenes/10.jpg"
    }
];

//AGREGAMOS EL ANIO  Y TAMANO A CADA IMAGEN PARA APRECIAR LA IMAGEN

let galeria = document.querySelector('.galeria');

cuadros.forEach(cuadro => {
    galeria.innerHTML += `
        <div class="obra">
            <img src="${cuadro.imagen}" alt="${cuadro.titulo}" width="200"x height="200">  
            <h3>${cuadro.titulo}</h3> 
            <p>Artista: ${cuadro.artista}</p>
            <p>Año: ${cuadro.anio}</p>
            <p>Pais: ${cuadro.Pais}</p>
        </div>
    `;
});
