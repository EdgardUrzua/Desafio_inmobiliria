document.addEventListener('DOMContentLoaded', function() {
    const contenedorAlquiler = document.getElementById('propiedades_alquiler');


    propiedadesAlquiler.forEach(propiedad => {
        const propiedadCard = crearCardPropiedad(propiedad);
        contenedorAlquiler.appendChild(propiedadCard);
    });
});

function crearCardPropiedad(propiedad) {
    const col = document.createElement('div');
    col.classList.add('col-md-4');

    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = propiedad.img;
    img.classList.add('card-img-top');
    img.alt = `Imagen de ${propiedad.title}`;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.innerText = propiedad.title;

    const description = document.createElement('p');
    description.classList.add('card-text');
    description.innerText = propiedad.description;

    const location = document.createElement('p');
    location.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${propiedad.location}`;

    const roomsAndBathrooms = document.createElement('p');
    roomsAndBathrooms.innerHTML = `<i class="fas fa-bed"></i> ${propiedad.rooms} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.bathrooms} Baños`;

    const price = document.createElement('p');
    price.innerHTML = `<i class="fas fa-dollar-sign"></i> ${propiedad.price}`;

    const smoking = document.createElement('p');
    smoking.classList.add(propiedad.smokingAllowed ? 'text-success' : 'text-danger');
    smoking.innerHTML = `<i class="fas fa-smoking"></i> ${propiedad.smokingAllowed ? 'Permitido fumar' : 'No se permite fumar'}`;

    const pets = document.createElement('p');
    pets.classList.add(propiedad.petsAllowed ? 'text-success' : 'text-danger');
    pets.innerHTML = `<i class="fas fa-paw"></i> ${propiedad.petsAllowed ? 'Mascotas permitidas' : 'No se permiten mascotas'}`;

    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(location);
    cardBody.appendChild(roomsAndBathrooms);
    cardBody.appendChild(price);
    cardBody.appendChild(smoking);
    cardBody.appendChild(pets);

    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);

    return col;
}
