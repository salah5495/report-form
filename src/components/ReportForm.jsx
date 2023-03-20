import React from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';
import data from '../constants/tableData';
import Container from '@mui/material/Container';

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

      &.highlight td {
        background-color: #d8d3d3;
        border-left: none;
      }
    }

    th,
    td {
      margin: 0;

      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
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
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className={row.original.className}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function App() {
  const columns = React.useMemo(
    () => [      {
        Header: 'Subjects',
        accessor: 'subject',
      },
      {
        Header: 'Cat',
        columns: [
          {
            Header: 'out of 30',
            accessor: 'out of 30',
          },
        ],
      },

      {
        Header: 'Exam',
        columns: [
          {
            Header: 'Out of 70',
            accessor: 'Out of 70',
          },
        ],
      },
      {
        Header: 'Total',
        columns: [
          {
            Header: '%',
            accessor: 'percentage',
          },
          {
            Header: 'Grade',
            accessor: 'Grade',
          },
          {
            Header: 'Points',
            accessor: 'Points',
          },
        ],
      },
      {
        Header: ' ',
        columns: [
          {
            Header: 'Remarks',
            accessor: 'Remarks',
          },
        ],
      },
      {
        Header: ' ',
        columns: [
          {
            Header: 'Initials',
            accessor: 'initials',
          },
        ],
      },
    ],
    []
  );

  return (
    <Styles>
      <Container>
        <Table columns={columns} data={data} />
      </Container>
    </Styles>
  );
}
export default App;
