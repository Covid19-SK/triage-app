export interface CurrentExam {
  workplace: string;
  cough: string; // 'no' | 'modest' | 'severe';
  breathShortness: string; // 'no' | 'modest' | 'severe';
  fever: boolean;
  other: string;
  date: string;
}
