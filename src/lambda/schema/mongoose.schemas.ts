import { model, Schema } from 'mongoose';
import {
  BoarInput, GenerationEnum, HogInput, SowInput,
} from '../models';
import {
  BirthRecordModel,
  HealthRecordModel,
  SizeRecordModel,
  SupplierModel,
  VaccinationModel,
  WeightModel,
} from './mongoose-schemas/supplier.schema';

/**
 * Sow
 */

const sowSchema = new Schema({
  tag: { type: Schema.Types.String, required: true },
  birthDate: { type: Schema.Types.Date, required: true },
  breed: { type: Schema.Types.String, required: true },
  generation: {
    type: Schema.Types.String,
    enum: [GenerationEnum.ParentStock, GenerationEnum.F1],
  },
  isImported: { type: Schema.Types.Boolean, required: true },
  purchaseDate: { type: Schema.Types.Date, required: false },
  supplierId: { type: Schema.Types.ObjectId, required: false },
})
  .method('supplier', function () {
    const input = (this as unknown) as SowInput;
    return SupplierModel.findById(input.supplierId);
  })
  .method('healthRecords', function () {
    return HealthRecordModel.find({ pigId: this._id });
  })
  .method('vaccinationRecords', function () {
    return VaccinationModel.find({ pigId: this._id });
  })
  .method('weightRecords', function () {
    return WeightModel.find({ pigId: this._id });
  })
  .method('sizeRecords', function () {
    return SizeRecordModel.find({ pigId: this._id });
  });

export const SowModel = model('Sow', sowSchema);

/**
 * Boar
 */

const boarSchema = new Schema({
  tag: { type: Schema.Types.String, required: true },
  birthDate: { type: Schema.Types.Date, required: true },
  breed: { type: Schema.Types.String, required: true },
  isImported: { type: Schema.Types.Boolean, required: true },
  purchaseDate: { type: Schema.Types.Date, required: false },
  supplierId: { type: Schema.Types.ObjectId, required: false },
})
  .method('supplier', function () {
    const input = (this as unknown) as BoarInput;
    return SupplierModel.findById(input.supplierId);
  })
  .method('healthRecords', function () {
    return HealthRecordModel.find({ pigId: this._id });
  })
  .method('vaccinationRecords', function () {
    return VaccinationModel.find({ pigId: this._id });
  })
  .method('weightRecords', function () {
    return WeightModel.find({ pigId: this._id });
  })
  .method('sizeRecords', function () {
    return SizeRecordModel.find({ pigId: this._id });
  });

export const BoarModel = model('Boar', boarSchema);

/**
 * Hog
 */

const hogSchema = new Schema({
  tag: { type: Schema.Types.String, required: true },
  birthDate: { type: Schema.Types.Date, required: true },
  birthRecordId: { type: Schema.Types.ObjectId, required: false },
  parentSowId: { type: Schema.Types.ObjectId, required: false },
  parentBoarId: { type: Schema.Types.ObjectId, required: false },
})
  .method('birthRecord', function () {
    const input = (this as unknown) as HogInput;
    return BirthRecordModel.findById(input.birtRecordId);
  })
  .method('parentSow', function () {
    const input = (this as unknown) as HogInput;
    return SowModel.findById(input.parentSowId);
  })
  .method('parentBoar', function () {
    const input = (this as unknown) as HogInput;
    return BoarModel.findById(input.parentBoarId);
  })
  .method('healthRecords', function () {
    return HealthRecordModel.find({ pigId: this._id });
  })
  .method('vaccinationRecords', function () {
    return VaccinationModel.find({ pigId: this._id });
  })
  .method('weightRecords', function () {
    return WeightModel.find({ pigId: this._id });
  })
  .method('sizeRecords', function () {
    return SizeRecordModel.find({ pigId: this._id });
  });
export const HogModel = model('Hog', hogSchema);

/**
 * Employee
 */

const employeeSchema = new Schema({
  givenName: { type: Schema.Types.String, required: true },
  middleName: { type: Schema.Types.String },
  surname: { type: Schema.Types.String, required: true },
  address: { type: Schema.Types.String, required: true },
  contactNumber: { type: Schema.Types.String, required: true },
  birthDate: { type: Schema.Types.Date, required: true },
  startDate: { type: Schema.Types.Date, required: true },
});

export const EmployeeModel = model('Employee', employeeSchema);
