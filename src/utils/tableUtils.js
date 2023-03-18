import { toast } from 'react-toastify';
import makeData from '../constants/tableData';

export const getGrade = (subject, percentage) => {
  const isHumanities =
    subject.toLowerCase().includes('english') ||
    subject.toLowerCase().includes('ire') ||
    subject.toLowerCase().includes('kiswahili');

  const gradingSchema = isHumanities
    ? [
        { grade: 'E', min: 0, max: 24 },
        { grade: 'D-', min: 25, max: 29 },
        { grade: 'D', min: 30, max: 34 },
        { grade: 'D+', min: 35, max: 39 },
        { grade: 'C-', min: 40, max: 44 },
        { grade: 'C', min: 45, max: 49 },
        { grade: 'C+', min: 50, max: 54 },
        { grade: 'B-', min: 55, max: 59 },
        { grade: 'B', min: 60, max: 61 },
        { grade: 'B+', min: 65, max: 69 },
        { grade: 'A-', min: 70, max: 74 },
        { grade: 'A', min: 75, max: 100 },
      ]
    : [
        { grade: 'E', min: 0, max: 14 },
        { grade: 'D-', min: 15, max: 19 },
        { grade: 'D', min: 20, max: 24 },
        { grade: 'D+', min: 25, max: 29 },
        { grade: 'C-', min: 30, max: 34 },
        { grade: 'C', min: 35, max: 39 },
        { grade: 'C+', min: 40, max: 44 },
        { grade: 'B-', min: 45, max: 49 },
        { grade: 'B', min: 50, max: 51 },
        { grade: 'B+', min: 55, max: 59 },
        { grade: 'A-', min: 60, max: 64 },
        { grade: 'A', min: 65, max: 100 },
      ];

  const matchingEntry = gradingSchema.find(
    (entry) => percentage >= entry.min && percentage <= entry.max
  );

  return matchingEntry?.grade;
};

export const getPoints = (grade) => {
  switch (grade) {
    case 'A':
      return 12;
    case 'A-':
      return 11;
    case 'B+':
      return 10;
    case 'B':
      return 9;
    case 'B-':
      return 8;
    case 'C+':
      return 7;
    case 'C':
      return 6;
    case 'C-':
      return 5;
    case 'D+':
      return 4;
    case 'D':
      return 3;
    case 'D-':
      return 2;
    case 'E':
      return 0;
    default:
      return null;
  }
};
export const getRemark = (grade) => {
  switch (grade) {
    case 'A':
      return 'Excellent';
    case 'A-':
      return 'Very Good';
    case 'B+':
      return 'Good';
    case 'B':
      return 'Above Average';
    case 'B-':
      return 'Average';
    case 'C+':
      return 'Average';
    case 'C':
      return 'Needs Improvement';
    case 'C-':
      return 'Work Hard';
    case 'D+':
      return 'Poor';
    case 'D':
      return 'Very Poor';
    case 'D-':
      return 'Failing';
    case 'E':
      return 'Failed';
    default:
      return null;
  }
};

export const getPercentage = (cat, main, row, percentageSum) => {
  
  if (row.subject === 'TOTAL MARKS/POINTS') {
    return percentageSum;
  }
  if (cat > 30 || main > 70) return 'Error';
  if ((cat && main) === undefined) return null;

  const percentage = parseInt(cat) + parseInt(main);

  return percentage;
};
