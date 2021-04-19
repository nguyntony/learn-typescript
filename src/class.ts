interface PersonInterface {
  getFullName(): string;
}

class Person implements PersonInterface {
  // this class must implement what the interface has, in this case the property getFullName
  private firstName: string; // by default these props are public but using the 'private' keyword, it will not be accessible when trying to access it outside of the class
  lastName: string;
  readonly unchangableName: string;
  static readonly maxAge = 50; // static means that the class will access this property and that the instances cannot

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangableName = firstName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  changeUnchangableName(): void {
    // this.unchangableName = "new name";
    // this will not work.
  }
}

class Admin extends Person {
  // this will extend what is in the Person class
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }
  getEditor(): string {
    return this.editor;
  }
}

const person1 = new Person('Monster', 'lessons');
