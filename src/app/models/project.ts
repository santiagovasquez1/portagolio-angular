export class projectModel {

    private id: {
        S: String;
    };
    projectName: {
        S: string
    };
    description: {
        S: string
    };
    category: {
        S: string
    };
    projectYear: {
        N: string
    };
    lenguajes: {
        S: string
    };
    image: {
        S: string
    };

    constructor(projectName,description,category,projectYear,lenguajes,image) {
      this.projectName=projectName;
      this.description=description;
      this.category=category;
      this.projectYear=projectYear;
      this.lenguajes=lenguajes;
      this.image=image
    }
}
