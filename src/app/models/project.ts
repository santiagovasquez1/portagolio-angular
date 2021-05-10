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
    
    constructor(id,projectName,description,category,projectYear,lenguajes,image) {
                
    }
}