import React, { useState } from 'react';
import './style.css';
import { HotTable, HotColumn } from '@handsontable/react';
import { data } from './constant';
import { getGrade, getPoints, getRemark } from '../utils/tableUtils';
import { addClassesToRows, alignHeaders } from './hooks';
import 'handsontable/dist/handsontable.min.css';

const App = () => {
  const dataWithCalculations = data.map((row) => {
    const percentage = row[1] !== '' && row[2] !== '' ? row[1] + row[2] : '';
    const grade = percentage !== '' ? getGrade(row[0], percentage) : '';
    const points = grade !== '' ? getPoints(grade) : '';
    const remark = grade !== '' ? getRemark(grade) : '';
    return [...row, percentage, grade, points, remark];
  });

  const [tableData, setTableData] = useState(dataWithCalculations);
  const [totalPercentage, setTotalPercentage] = useState('');
  const [totalPoints, setTotalPoints] = useState('');
  const [meanScore, setMeanScore] = useState('');
  const [meanPoints, setMeanPoints] = useState('');

  const calculateTotals = (data) => {
    const totals = data.reduce(
      (totals, row) => {
        if (row[3] !== '' && row[5] !== '') {
          totals.totalPercentage += row[3];
          totals.totalPoints += row[5];
        }
        return totals;
      },
      { totalPercentage: 0, totalPoints: 0 }
    );

    return {
      ...totals,
      meanScore: data.length > 0 ? totals.totalPercentage / data.length : '',
      meanPoints: data.length > 0 ? totals.totalPoints / data.length : '',
    };
  };

  const handleAfterChange = (changes, source) => {
    if (source === 'edit') {
      changes.forEach(([row, prop, oldValue, newValue]) => {
        if (row === data.length - 5) return;

        if (prop === 1) {
          const newRowData = [...tableData[row]];
          newRowData[1] = newValue; // Update value
          const updatedData = [...tableData];
          updatedData[row] = newRowData;
          setTableData(updatedData);
        } else if (prop === 1 || prop === 2) {
          const newRowData = [...tableData[row]];
          newRowData[3] = newRowData[1] + newRowData[2]; // Update percentage
          const grade = getGrade(newRowData[0], newRowData[3]); // Calculate grade
          newRowData[4] = grade; // Update grade
          newRowData[5] = getPoints(grade); // Update points
          newRowData[6] = getRemark(grade); // Update remarks

          const updatedData = [...tableData];
          updatedData[row] = newRowData;
          setTableData(updatedData);

          // Update totalPercentage, totalPoints, meanScore, and meanPoints
          const { totalPercentage, totalPoints, meanScore, meanPoints } =
            calculateTotals(updatedData);
          setTotalPercentage(totalPercentage);
          setTotalPoints(totalPoints);
          setMeanScore(meanScore);
          setMeanPoints(meanPoints);
        }
      });
    }
  };

  React.useEffect(() => {
    const { totalPercentage, totalPoints, meanScore, meanPoints } =
      calculateTotals(tableData);
    setTotalPercentage(totalPercentage);
    setTotalPoints(totalPoints);
    setMeanScore(meanScore);
    setMeanPoints(meanPoints);
  }, [tableData]);

  const totalRow = [
    'TOTAL MARKS/POINTS',
    '',
    '',
    totalPercentage,
    '',
    totalPoints,
    '',
  ];
  const OtherRow = ['MEAN SCORE', '', '', meanScore, '', ''];
  const GradeRow = ['MEAN GRADE', '', '', '', getGrade('', meanScore), '', ''];
  const positionThisTermRow = ['POSITION THIS TERM', '', '', '', '', '', ''];
  const outOfRow = ['OUT OF', '', '', '', '', '', ''];
  const positionLastTermRow = ['POSITION LAST TERM', '', '', '', '', '', ''];

  return (
    <div>
      <HotTable
        data={[
          ...tableData,
          totalRow,
          OtherRow,
          GradeRow,
          positionThisTermRow,
          outOfRow,
          positionLastTermRow,
        ]}
        height={550}
        colWidths={[150, 60, 60, 80, 60, 60, 60, 70, 70, 70]}
        colHeaders={[
          'SUBJECTs',
          'CAT',
          'MAIN',
          'Percentage',
          'Grade',
          'Points',
          'Remarks',
          'INITIALS',
        ]}
        columnSorting={true}
        hiddenColumns={{
          indicators: true,
        }}
        contextMenu={true}
        multiColumnSorting={true}
        filters={true}
        afterGetColHeader={alignHeaders}
        beforeRenderer={addClassesToRows}
        manualRowMove={true}
        licenseKey='non-commercial-and-evaluation'
        afterChange={handleAfterChange}
        columnHeaderHeight={20}
        
      >
        <HotColumn data={0} readOnly />
        <HotColumn data={1} type='numeric' />
        <HotColumn data={2} type='numeric' />
        <HotColumn data={3} type='numeric' readOnly />
        <HotColumn data={4} readOnly />
        <HotColumn data={5} readOnly />
        <HotColumn data={6} readOnly />
        <HotColumn data={7} />
      </HotTable>
    </div>
  );
};

export default App;
