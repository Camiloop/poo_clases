// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:

  class usuario {
    constructor(user, nombre, email, password) {
      this.user = user;
      this.nombre = nombre;
      this.email = email;
      this.password = password;
    }
    saludar() {
      console.log(
        `Hola, mi nombre es ${this.nombre} y mi usuario es ${this.user}, mi email es ${this.email} y mi password es ${this.password} aunque eso no te lo puedo decir jej jaja.`
      );
    }
  }

  const usuario1 = new usuario(
    "Camiloop",
    "Camilo",
    "camiloop@outlook.com",
    "Camiloop97"
  );

  console.log(usuario1.saludar());
}

crearUsuario();

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function () {
    return "Hello World!";
  };
}

function agregarStringInvertida(str) {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"

  function string(str) {
    this.str = str;
  }

  string.prototype.reverse = function () {
    let strArr = this.str.split("");
    let reversedArr = strArr.reverse("");
    let reversedStr = reversedArr.join("");
    return reversedStr;
  };

  let camilo = new string("Camilo");

  console.log(camilo.reverse());
}

agregarStringInvertida();

// ---------------------------------------------------------------------------//
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
//Ej: {
//   Nombre: 'Juan',
//   Apellido: 'Perez',
//   Edad: 22,
//   Domicilio: 'Saavedra 123'
//  }

class persona {
  constructor(nombre, apellido, edad, domicilio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
  }
  detalle() {
    return {
      Nombre: this.nombre,
      Apellido: this.apellido,
      Edad: this.edad,
      Dimicilio: this.domicilio,
    };
  }
}

const user1 = new persona("Camilo", "Penuela", 25, "Bogota");

console.log(user1.detalle());

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
}

const user2 = new persona("Juan", "Perez", 22, "Saavedra 123");
console.log(user2.detalle());

crearInstanciaPersona();

function agregarMetodo(name, lastname) {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve:
  //Ej: "Juan, 22 años"
  console.log(`${name} ${lastname} años`);
}

agregarMetodo(user2.nombre, user2.edad);
