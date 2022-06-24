const Contenedor = require('./archivos')

const productosContenedor = new Contenedor('productos.txt')

productosContenedor.save(
    {title: 'Las dos torres', 
     autor: 'J. R. R Tolkien',
     img: 'https://static.wikia.nocookie.net/eldragonverde/images/9/9e/Esdla-libro-minotauro.jpg/revision/latest/scale-to-width-down/256?cb=20130917183416&path-prefix=es',
     precio: 5900
    })
     .then(r => console.log(r))

// productosContenedor.deleteById(2)
//       .then(r => console.log(r))

console.log(productosContenedor.getById(4))

// console.log(productosContenedor.getAll())


