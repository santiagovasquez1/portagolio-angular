export class projectModel {

  id: string;
  projectName: string;
  description: string;
  category: string;
  projectYear: string;
  lenguajes: string;
  image: string;

  constructor(projectName, description, category, projectYear, lenguajes, image) {
    this.projectName = projectName;
    this.description = description;
    this.category = category;
    this.projectYear = projectYear;
    this.lenguajes = lenguajes;
    this.image = image
  }
}
