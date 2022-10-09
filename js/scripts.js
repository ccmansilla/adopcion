class Animal{
    constructor(objeto){
        this.tipo = objeto.tipo;
        this.nombre = objeto.nombre;
        this.edad = objeto.edad;
        this.img = objeto.img;
    }

    info(){
        return `Soy un ${this.tipo} mi nombre es ${this.nombre} y tengo ${this.edad}`;
    }
}

let contenedor = document.querySelector('.carousel-inner');
async function load() {
    const response = await fetch('./js/mascotas.json');
    const mascotas = await response.json();

    let primero = 'active';
    mascotas.forEach(objeto => {
        mascota = new Animal(objeto);
        let img = mascota.img;
        let texto = mascota.info();
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

