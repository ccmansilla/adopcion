class Animal{
    constructor(objeto){
        this.tipo = objeto.tipo;
        this.nombre = objeto.nombre;
        this.edad = objeto.edad_aprox;
        this.img = objeto.img;
    }

    info(){
        return `Soy un ${this.tipo} mi nombre es ${this.nombre} y tengo ${this.edad}`;
    }
}

let contenedor = document.querySelector('.single-item');
async function load() {
    const response = await fetch('./js/mascotas.json');
    const mascotas = await response.json();
    console.log(typeof mascotas);

    let primero = 'active';
    mascotas.forEach(objeto => {
        mascota = new Animal(objeto);
        let img = mascota.img;
        let texto = mascota.info();
        let plantilla = `<div class='card'>
                            <div class='img'>
                                <img src='${img}' alt='foto mascota'>
                            </div>
                            <div class='texto'>${texto}</div>
                        </div>`;
        contenedor.innerHTML += plantilla;
        primero = '';
    });
    $('.single-item').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
}
load();


