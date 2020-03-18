import { CurrentExam } from './current-exam';

export enum ExamStatus {
  INITIAL = 'Initial',
  POSITIVE = 'Positive',
  NEGATIVE = 'Negative',
}

export interface Exam extends CurrentExam {
  id: string;
  patientId: string;
  status: ExamStatus;
}
