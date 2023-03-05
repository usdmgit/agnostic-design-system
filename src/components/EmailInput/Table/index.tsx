import React from 'react';
import classNames from 'classnames';

import styles from '@/components/Table/Table.css';
export interface Props {
  headerList: React.ReactNode[];
  tableContent: React.ReactNode[][];
  footerList?: React.ReactNode[];
  onRowClick?: (row: React.ReactNode, rowIndex: number) => void;
  onRowMouseEnter?: (row: React.ReactNode, rowIndex: number) => void;
  onRowMouseLeave?: (row?: React.ReactNode, rowIndex?: number) => void;
  renderFooter?: () => React.ReactNode;
  variablesClassName?: string;
}

const Table = (props: Props) => {
  const {
    headerList,
    tableContent,
    footerList,
    onRowClick,
    onRowMouseEnter,
    onRowMouseLeave,
    renderFooter,
    variablesClassName
  } = props;

  const handleRowClick = (row, rowIndex) => {
    if (onRowClick) {
      onRowClick(row, rowIndex);
    }
  };

  const handleRowMouseEnter = (row, rowIndex) => {
    if (onRowMouseEnter) {
      onRowMouseEnter(row, rowIndex);
    }
  };

  const handleRowMouseLeave = (row, rowIndex) => {
    if (onRowMouseLeave) {
      onRowMouseLeave(row, rowIndex);
    }
  };

  return (
    <table
      className={classNames(variablesClassName, styles['table-container'])}
      data-testid='table-element'
    >
      <thead data-testid='table-header'>
        <tr>
          {headerList.map((header, headerIndex) => (
            <th key={headerIndex}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody data-testid='table-body'>
        {tableContent.map((row, rowIndex) => (
          <tr
            className={onRowClick ? styles['clickable-row'] : styles['non-clickable-row']}
            tabIndex={0}
            key={rowIndex}
            onClick={() => handleRowClick(row, rowIndex)}
            onMouseEnter={() => handleRowMouseEnter(row, rowIndex)}
            onMouseLeave={() => handleRowMouseLeave(row, rowIndex)}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                handleRowClick(row, rowIndex);
              }
            }}
          >
            {row.map((content, contentIndex) => (
              <td key={`${rowIndex} - ${contentIndex}`}> {content}</td>
            ))}
          </tr>
        ))}
      </tbody>
      {renderFooter
        ? renderFooter()
        : footerList && (
            <tfoot>
              <tr>
                {footerList.map((foot, footIndex) => (
                  <th key={footIndex}>{foot}</th>
                ))}
              </tr>
            </tfoot>
          )}
    </table>
  );
};

export default Table;

Table.defaultProps = {
  headerList: [],
  tableContent: [[]]
};
