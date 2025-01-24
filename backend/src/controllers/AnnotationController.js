import Annotations from "../models/AnnotationData.js";

//Controllers é responsável pelo controle das requisições e respostas que são feitas a nossa API

export default {

    async read(request, response){
        const annotationList = await Annotations.find();
        console.log(annotationList)
        return response.json(annotationList);
    },
    async createAnnotation(request, response){
        const { title, notes, priority } = request.body;

        if(!title || !notes){
            return response.status(400).json({error: "Os parametros não podem serem vazios"});
        }

        const annotationCreated = await Annotations.create({
            title,
            notes,
            priority
        });

        return response.json(annotationCreated);
    },
    async delete(request, response){
        const { id } = request.params;

        const annotationDeleted = await Annotations.findOneAndDelete({ _id: id });
        if(annotationDeleted){
            return response.json(annotationDeleted);
        }

        return response.status(401).json({ error:  "Não foi possível deletar o registro" });
    }
}






