import {CurrentExam} from './current-exam';

export interface Exam extends CurrentExam {
  id: string;
  patientId: string;
}
