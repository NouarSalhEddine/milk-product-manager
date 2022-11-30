import mongoose, { Schema } from 'mongoose'

const medicalHistorySchema = new Schema({
  diagnosis_date: {
    type: String
  },
  sickeness: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

medicalHistorySchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      diagnosis_date: this.diagnosis_date,
      sickeness: this.sickeness,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('MedicalHistory', medicalHistorySchema)

export const schema = model.schema
export default model
