export class Personne{
  id: number;
  name: string;
  firstName: string;
  age: number;
  path: string;
  cin: number;
  job: string;


  constructor(id = 0, name = '', firstname = '', age = 0, path = '', cin = 1, job = '') {
    this.id = id;
    this.name = name;
    this.firstName = firstname;
    this.age = age;
    this.path = path;
    this.cin = cin;
    this.job = job;
  }
}
