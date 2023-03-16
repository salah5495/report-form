import React from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';
import makeData from '../constants/tableData';
import {
  getPercentage,
  getGrade,
  getPoints,
  getRemark,
} from '../utils/tableUtils';

const Styles = styled.div`
  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.2rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }

      input {
        font-size: 1rem;
        padding: 0;
        margin: 0;
        border: 0;
      }
    }
  }
`;

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData,
  data,
}) => {
  const [value, setValue] = React.useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    updateMyData(index, id, value);
  };

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  // Update the grade whenever the percentage changes
  React.useEffect(() => {
    if (id === '%') {
      const subject = data[index].subject;
      const percentage = parseInt(value);
      const grade = getGrade(subject, percentage);

      

      // Use optional chaining to check if the object is undefined
      const currentRow = data[index];
      if (currentRow) {
        currentRow.Grade = grade;
      }

      updateMyData(index, 'Grade', grade);
    }
  }, [value, id, index, data, updateMyData]);

  return <input value={value} onChange={onChange} onBlur={onBlur} />;
};

function Table({ columns, data, updateMyData, skipPageReset }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,

      autoResetPage: !skipPageReset,
      updateMyData,
    });

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.column.id === '%' ? (
                        <EditableCell
                          {...cell}
                          data={data}
                          updateMyData={updateMyData}
                        />
                      ) : (
                        cell.render('Cell')
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

function Test() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Subjects',
        accessor: 'subject',
      },
      {
        Header: 'Cat',
        columns: [
          {
            Header: 'out of 30',
            accessor: 'Cat',
            Cell: EditableCell,
          },
        ],
      },

      {
        Header: 'Exam',
        columns: [
          {
            Header: 'Out of 70',
            accessor: 'Main',
            Cell: EditableCell,
          },
        ],
      },
      {
        Header: 'Total',
        columns: [
          {
            Header: '%',
            default: '0',
            accessor: (row) => getPercentage(row.Cat, row.Main),
          },
          {
            Header: 'Grade',
            accessor: 'Grade',
          },
          {
            Header: 'Points',

            accessor: (row) => getPoints(row.Grade),
          },
        ],
      },
      {
        Header: ' ',
        columns: [
          {
            Header: 'Remarks',
            accessor: (row) => getRemark(row.Grade),
          },
        ],
      },
      {
        Header: ' ',
        columns: [
          {
            Header: 'Initials',
            accessor: 'initials',
            Cell: EditableCell,
          },
        ],
      },
    ],
    []
  );

  const [data, setData] = React.useState(() => makeData);
  const [skipPageReset, setSkipPageReset] = React.useState(false);

  const updateMyData = (rowIndex, columnId, value) => {
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  React.useEffect(() => {
    setSkipPageReset(false);
  }, [data]);

  return (
    <Styles>
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </Styles>
  );
}

export default Test;
