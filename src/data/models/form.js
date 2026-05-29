import { Schema, model, models } from 'mongoose'

const AreaSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        describe: { type: String, trim: true },
        createdAt: { type: Date, default: Date.now },
        createdBy: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    },
    { timestamps: false, versionKey: false }
)

const Form = models.form || model('form', AreaSchema)
export default Form
