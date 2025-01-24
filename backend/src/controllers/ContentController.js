import Annotations from "../models/AnnotationData.js";

export default {
    async updateContent(request, response){
        const { id } = request.params;
        const { notes } = request.body;

        const { annotation } = await Annotations.findOne({_id: id });

        if(notes){
            annotation.notes = notes;
            await annotation.save();
        }

        return response.json(annotation);
    }
}

