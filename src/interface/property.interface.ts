import mongoose from 'mongoose';
import { IReport } from './report.interface.js';
import { IUser } from '../types/userTypes/index.js';
import { FilesType } from '../types/index.js';

export interface IProperty {
  propertyName: string;
  propertyLocation: string;
  startDate: string;
  adminNote: string;
  propertySize: string | undefined;
  landowner: mongoose.Schema.Types.ObjectId;
  assignedResearchers: mongoose.Schema.Types.ObjectId[];
  archived: boolean;
  adminNoteUpdatedBy?: mongoose.Schema.Types.ObjectId;
}

export interface IReports {
  name: string;
  description: string;
  files: FilesType[];
  property: mongoose.Schema.Types.ObjectId;
  researcher: mongoose.Schema.Types.ObjectId;
  archived: boolean;
}

export interface IUpdateLandowner
  extends Omit<IProperty, 'adminNote' | 'adminNoteUpdatedBy'>,
    Omit<IUser, 'note' | 'noteUpdatedBy'> {
  // Add back the note properties with more specific names to avoid conflicts
  userNote?: string;
  propertyAdminNote?: string;
  userNoteUpdatedBy?: string;
  propertyAdminNoteUpdatedBy?: string;
}

export interface IAssignReport extends IReport {}

export interface IReportsInterface extends IReports, Document {
  isNew: boolean; // Add Mongoose's isNew property
}
