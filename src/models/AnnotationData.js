import mongoose from "mongoose";

const AnnotationDataSchema = new mongoose.Schema({
    title: String,
    notes: String,
    priority: Boolean,
}); //Criando o schema com os registros que serão criados no BD

export default mongoose.model("Annotations", AnnotationDataSchema);