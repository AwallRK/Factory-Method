// apa itu composition ?
class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car {
  constructor() {
    this.engine = new Engine();
  }

  startEngine() {
    this.engine.start();
  }
}

const myCar = new Car();
myCar.startEngine(); // Output: "Engine started"
/*
Dalam pemrograman berorientasi objek (OOP), komposisi adalah konsep di mana kelas dapat mengandung referensi ke objek lain dalam bentuk variabel instance. Ini memungkinkan Anda untuk membuat kelas yang lebih kompleks dengan menggabungkan fungsionalitas dan perilaku dari beberapa kelas lainnya.
Dalam kode yang Anda berikan, Car adalah kelas yang menggunakan komposisi. Car memiliki Engine sebagai bagian dari strukturnya, yang ditunjukkan oleh baris kode this.engine = new Engine(); dalam konstruktor Car. Ini berarti setiap objek Car yang dibuat akan memiliki instance Engine sendiri yang dapat digunakan untuk memanggil metode start.
Jadi, dalam hal ini, Car adalah kelas "komposit", dan Engine adalah salah satu "komponen"nya. Ini memungkinkan Car untuk menggunakan fungsionalitas Engine tanpa harus mewarisi dari kelas Engine.
*/

// Apa itu Aggregation
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class University {
  constructor(name) {
    this.name = name;
    this.students = []; // Array untuk menyimpan objek Student
  }

  addStudent(student) {
    this.students.push(student);
  }
}

const student1 = new Student("John", 20);
const student2 = new Student("Jane", 22);

const university = new University("ABC University");
university.addStudent(student1);
university.addStudent(student2);

console.log(university.students); // Output: [Student { name: 'John', age: 20 }, Student { name: 'Jane', age: 22 }]
/*
Aggregation adalah salah satu konsep dalam pemrograman berorientasi objek (OOP) yang menggambarkan hubungan antara dua kelas di mana satu kelas adalah bagian dari kelas lainnya. Dalam konteks ini, kelas yang menjadi bagian disebut sebagai kelas anak atau subkelas, sedangkan kelas yang memuat kelas anak disebut sebagai kelas induk atau superkelas.

Dalam contoh kode yang Anda berikan, kita dapat melihat contoh agregasi antara kelas University dan Student. Ketika kita memanggil metode addStudent pada objek university dengan argumen student2, kita sebenarnya menambahkan objek student2 ke dalam daftar students di dalam objek university. Dengan demikian, University adalah kelas induk atau superkelas, sedangkan Student adalah kelas anak atau subkelas.
*/

// Perbedaan Antara Agregation dengan Composition
/*
Perbedaan antara composition dan aggregation dalam pemrograman berorientasi objek (OOP) terletak pada tingkat ketergantungan antara dua kelas yang terlibat.

Composition adalah hubungan di mana satu kelas secara eksklusif menjadi bagian dari kelas lainnya. Dalam hubungan komposisi, jika objek induk dihapus, maka objek anak juga akan dihapus karena objek anak tidak dapat ada tanpa objek induknya. Dalam hal ini, objek anak sepenuhnya bergantung pada objek induknya. Contoh yang umum digunakan untuk menjelaskan komposisi adalah hubungan antara kelas "Car" dan "Engine". Sebuah mobil memiliki satu mesin, dan jika mobil dihancurkan, maka mesinnya juga akan dihancurkan.

Aggregation adalah hubungan di mana satu kelas menjadi bagian dari kelas lainnya, tetapi kelas anak masih dapat ada tanpa kelas induknya. Dalam hubungan agregasi, objek anak tidak sepenuhnya tergantung pada objek induknya. Jika objek induk dihapus, objek anak masih dapat ada secara independen. Contoh yang umum digunakan untuk menjelaskan agregasi adalah hubungan antara kelas "University" dan "Student". Sebuah universitas memiliki mahasiswa, tetapi mahasiswa dapat ada tanpa universitas tertentu. Jika universitas ditutup, mahasiswa masih dapat ada dan mungkin bergabung dengan universitas lain.

Dalam konteks kode yang Anda berikan, kita dapat melihat contoh agregasi antara kelas University dan Student. Ketika kita memanggil metode addStudent pada objek university dengan argumen student2, kita sebenarnya menambahkan objek student2 ke dalam daftar students di dalam objek university. Dengan demikian, University adalah kelas induk atau superkelas, sedangkan Student adalah kelas anak atau subkelas.
*/

// Static Method
/*
metode statis adalah metode yang berada pada level kelas, bukan pada level instance. Ini berarti Anda dapat memanggil metode statis tanpa harus membuat instance dari kelas tersebut.

Metode statis biasanya digunakan untuk fungsi utilitas yang tidak memerlukan akses ke data instance, atau ketika metode harus dapat diakses tanpa kebutuhan untuk membuat instance dari kelas.
*/

class MyClass {
  static myStaticMethod() {
    return "Hello, World!";
  }
}

console.log(MyClass.myStaticMethod()); // Outputs: 'Hello, World!'

// Factory Method
/*
Factory Method adalah pola desain yang memberikan cara untuk menyerahkan proses penciptaan objek ke subclass. Ini adalah jenis pola desain pembuat (creational design pattern).

Berikut adalah beberapa poin penting tentang Factory Method:

Antarmuka untuk menciptakan objek: Factory Method memberikan antarmuka (biasanya sebuah metode) yang dapat digunakan untuk menciptakan objek baru. Antarmuka ini mendefinisikan jenis objek apa yang harus dibuat.

Delegasi ke subclass: Meskipun antarmuka penciptaan objek didefinisikan dalam superclass, implementasi sebenarnya dari metode ini didelegasikan ke subclass. Ini berarti bahwa subclass bertanggung jawab untuk menentukan bagaimana objek seharusnya dibuat.

Fleksibilitas: Karena proses penciptaan objek didelegasikan ke subclass, ini memberikan fleksibilitas dalam hal jenis objek yang dibuat. Subclass dapat memutuskan untuk menciptakan jenis objek yang berbeda-beda tergantung pada kondisi tertentu.

*/
class Animal {
  constructor(name, type, age) {
    this.name = name;
    this.type = type;
    this.age = age;
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name, "Cat", age);
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name, "Dog", age);
  }
}

class Factory {
  static createAnimal(name, type, age) {
    if (type === "Cat") {
      return new Cat(name, age);
    } else {
      return new Dog(name, age);
    }
  }
  static bulkCreateAnimal(data) {
    let result = data.map((perAnimal) => {
      let { name, type, age } = perAnimal;
      return this.createAnimal(name, type, age);
    });
    return result;
  }
}
