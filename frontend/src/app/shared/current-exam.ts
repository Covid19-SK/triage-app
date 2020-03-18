import {Classification} from '../../../../backend/src/shared/enum/classification';

export interface CurrentExam {
  institutionId: number;
  cough: Classification;
  breathShortness: Classification;
  fever: Classification;
  other: string;
  abroad: boolean;
  illPersonContact: boolean;
  covid19Contact: boolean;
}
