import { model, Schema } from 'mongoose';
import {
  BirthRecordInput,
  HealthRecordInput,
  SizeRecordInput,
  VaccinationInput,
  WeightRecordInput,
} from '../../models';
import { EmployeeModel } from '../mongoose.schemas';

/**
 * Supplier
 */

const supplierSchema = new Schema({
  companyName: { type: Schema.Types.String, required: true },
  contactPerson: { type: Schema.Types.String, required: true },
  contactNumber: { type: Schema.Types.String, required: true },
  address: { type: Schema.Types.String!, required: true },
});

export const SupplierModel = model('Supplier', supplierSchema);

/**
 * Health Record
 */

const healthRecordSchema = new Schema({
  date: { type: Schema.Types.Date, required: true },
  pigId: { type: Schema.Types.ObjectId, required: true },
  description: { type: Schema.Types.String, required: true },
  actionTaken: { type: Schema.Types.String, required: true },
  recorderId: { type: Schema.Types.ObjectId, required: true },
}).method('recorder', function () {
  const input = (this as unknown) as HealthRecordInput;
  return EmployeeModel.findById(input.recorderId);
});

export const HealthRecordModel = model('HealthRecord', healthRecordSchema);

/**
 * Birth Record
 */

const birthSchema = new Schema({
  sowId: { type: Schema.Types.ObjectId, required: true },
  boarId: { type: Schema.Types.ObjectId, required: true },
  laborStart: { type: Schema.Types.Date, required: true },
  laborEnd: { type: Schema.Types.Date, required: true },
  alivePigletsCount: { type: Schema.Types.Number, required: true },
  stillBornCount: { type: Schema.Types.Number, required: true },
  attendantId: { type: Schema.Types.ObjectId, required: true },
  recorderId: { type: Schema.Types.ObjectId, required: true },
})
  .method('attendant', function () {
    const input = (this as unknown) as BirthRecordInput;
    return EmployeeModel.findById(input.attendantId);
  })
  .method('recorder', function () {
    const input = (this as unknown) as BirthRecordInput;
    return EmployeeModel.findById(input.recorderId);
  });

export const BirthRecordModel = model('BirthRecord', birthSchema);

/**
 * SizeRecord
 */

const sizeRecordSchema = new Schema({
  lengthCm: { type: Schema.Types.Number, required: true },
  girthCm: { type: Schema.Types.Number, required: true },
  date: { type: Schema.Types.Date, required: true },
  recorderId: { type: Schema.Types.ObjectId, required: true },
  measuredById: { type: Schema.Types.ObjectId, required: true },
})
  .method('recorder', function () {
    const input = (this as unknown) as SizeRecordInput;
    return EmployeeModel.findById(input.recorderId);
  })
  .method('measuredBy', function () {
    const input = (this as unknown) as SizeRecordInput;
    return EmployeeModel.findById(input.measuredById);
  });

export const SizeRecordModel = model('SizeRecord', sizeRecordSchema);

/**
 * Weight Record
 */

const weightRecordSchema = new Schema({
  weightKg: { type: Schema.Types.Number, required: true },
  date: { type: Schema.Types.Date, required: true },
  recorderId: { type: Schema.Types.ObjectId, required: true },
  measuredById: { type: Schema.Types.ObjectId, required: true },
})
  .method('recorder', function () {
    const input = (this as unknown) as WeightRecordInput;
    return EmployeeModel.findById(input.recorderId);
  })
  .method('measuredBy', function () {
    const input = (this as unknown) as WeightRecordInput;
    return EmployeeModel.findById(input.measuredById);
  });

export const WeightModel = model('WeightRecord', weightRecordSchema);

/**
 * Vaccination
 */

const vaccinationSchema = new Schema({
  pigId: { type: Schema.Types.ObjectId, required: true },
  vaccineName: { type: Schema.Types.String, required: true },
  quantity: { type: Schema.Types.Number, required: true },
  unit: { type: Schema.Types.String, required: true },
  administeredById: { type: Schema.Types.ObjectId, required: true },
  recorderId: { type: Schema.Types.ObjectId, required: true },
})
  .method('administeredBy', function () {
    const input = (this as unknown) as VaccinationInput;
    return EmployeeModel.findById(input.administeredById);
  })
  .method('recorder', function () {
    const input = (this as unknown) as WeightRecordInput;
    return EmployeeModel.findById(input.recorderId);
  });

export const VaccinationModel = model('VaccinationRecord', vaccinationSchema);
