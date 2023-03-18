import React, { useState } from 'react';
import './style.css';
import { HotTable, HotColumn } from '@handsontable/react';
import { data } from './constant';
import { getGrade, getPoints, getRemark } from '../utils/tableUtils';

import { addClassesToRows, alignHeaders } from './hooks';

import 'handsontable/dist/handsontable.min.css';
const App = () => {
  const dataWithpercentage = data.map((row) => {
    const percentage = row[1] + row[2];
    return [...row, percentage];
  });

  const [tableData, setTableData] = useState(dataWithpercentage);
  const [totalPercentage, setTotalPercentage] = useState(0);

  const calculateTotalPercentage = (data) => {
    return data.reduce((total, row) => total + row[3], 0);
  };

  const handleAfterChange = (changes, source) => {
    if (source === 'edit') {
      changes.forEach(([row, prop, oldValue, newValue]) => {
        if (row === data.length - 5) return;

        if (prop === 1 || prop === 2) {
          const newRowData = [...tableData[row]];
          newRowData[3] = newRowData[1] + newRowData[2]; // Update percentage
          const grade = getGrade(newRowData[0], newRowData[3]); // Calculate grade
          newRowData[4] = grade; // Update grade
          newRowData[5] = getPoints(grade); // Update points
          newRowData[6] = getRemark(grade); // Update remarks

          const updatedData = [...tableData];
          updatedData[row] = newRowData;
          setTableData(updatedData);

          // Update totalPercentage
          setTotalPercentage(calculateTotalPercentage(updatedData));
        }
      });
    }
  };

  React.useEffect(() => {
    setTotalPercentage(calculateTotalPercentage(tableData));
  }, [tableData]);

  const totalRow = ['TOTAL MARKS/POINTS', '', '', totalPercentage];

  return (
    <div>
      <HotTable
        data={[...tableData, totalRow]}
        height={450}
        colWidths={[140, 126, 192, 100, 100, 90, 90, 110, 97, 100]}
        colHeaders={[
          'SUBJECTs',
          'CAT',
          'MAIN EXAM',
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
        columnHeaderHeight={60}
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
