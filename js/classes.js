class person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  

  displayinfo(){
    console.log(`NAME:${this.name},AGE:${this.age}`);
  }
}

  let person1=new person("Entri Fsd,2023")

  person1.displayinfo();

  // book

    class Book {
    constructor(title, author, publicationYear) {
      this.title = title;
      this.author = author;
      this.publicationYear = publicationYear;
    }
  
    display() {
      console.log(`"${this.title}" by ${this.author}, published in ${this.publicationYear}`);
    }
  }
  
  let Book1=new Book("Inspiring thoughts"," A. P. J. Abdul Kalam",2007)
  let Book2=new Book("Kural","Thiruvalluvar",1812)
  Book1.display()
  Book2.display()