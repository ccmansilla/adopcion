let contenedor = document.querySelector('.carousel-inner');
async function load() {
    const response = await fetch('./js/mascotas.json');
    const mascotas = await response.json();

    let primero = 'active';
    mascotas.forEach(mascota => {
        let img = mascota.img;
        let texto = `${mascota.nombre} tiene ${mascota.edad} de edad`;
        let plantilla = `<div class="carousel-item ${primero}">
                            <div class='img'>
                                <img src="${img}" alt="...">
                            </div>
                            <div class="texto">${texto}</div>
                        </div>`;
        contenedor.innerHTML += plantilla;
        primero = '';
    });
}
load();

