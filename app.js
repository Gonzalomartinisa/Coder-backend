class usuario {
    constructor(nombre, apellido, edad, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.libros = [];
        this.mascotas = [mascotas]
    }

getFullName(){
     console.log(`El nombre completo es ${this.nombre} ${this.apellido}`)
};

addBooks(nom, aut){
    this.libros.push({nombre: nom, autor: aut});
}

addMascota(mascota){
    this.mascotas.push(mascota)
}

countMascotas(){
    console.log(this.mascotas.length)
}

getBookNames(){
    let nombreLibros = this.libros.map(function(ele){
        return ele.nombre
    })
        console.log(nombreLibros)
}

}

const a = new usuario (
    "Gonzalo",
    "Isa",
    39,
    "Ines"
)

a.getFullName();
a.addBooks("El señor de los anillos", "JRR Tolkien"),
a.addBooks("El hobbit", "JRR Tolkien");
a.addMascota("Rodolfo"),
a.countMascotas(),
a.getBookNames(),

console.log(a)

productosContenedor.save(
    {title: 'Las dos torres', 
     autor: 'J. R. R Tolkien',
     img: 'https://static.wikia.nocookie.net/eldragonverde/images/9/9e/Esdla-libro-minotauro.jpg/revision/latest/scale-to-width-down/256?cb=20130917183416&path-prefix=es',
     precio: 5900
    })
     .then(r => console.log(r))