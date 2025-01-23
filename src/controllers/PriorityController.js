import Annotations from "../models/AnnotationData.js";

export default {
    async read(request, response){
        const priority = request.query; //Pega a query passada na rota

        const priorityNotes = await Annotations.find(priority); //Procura todos os registros que contenham a query
        return response.json(priorityNotes);
    },

    async updatePriority(request, response){
        const { id } = request.params;

        //Vai procurar o registro que contenha o ID passado no parametro
        const annotation = await Annotations.findOne({ _id: id });
        
        annotation.priority = !annotation.priority; //toggle, se a prioridade for true, vira false

        await annotation.save(); //salva as alterações feitas no registro
        return response.json(annotation)

    }
}