import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { Table, IconButton, Popover, Dropdown, Whisper } from 'rsuite';
import MoreIcon from '@rsuite/icons/legacy/More';

const { Column, HeaderCell, Cell } = Table;

const data = [
  { id: 1, question: 'Question 1' },
  { id: 2, question: 'Question 2' },
  { id: 3, question: 'Question 3' },
  { id: 4, question: 'Question 4' },
  { id: 5, question: 'Question 5' },
  { id: 6, question: 'Question 6' },
  { id: 7, question: 'Question 7' },
  { id: 8, question: 'Question 8' },
  { id: 9, question: 'Question 9' },
  { id: 10, question: 'Question 10' }
]

const renderMenu = ({ onClose, left, top, className }, ref) => {
  const handleSelect = eventKey => {
    onClose();
    console.log(eventKey);
  };

  return (
    <Popover ref={ref} className={className} style={{ left, top }} full>
      <Dropdown.Menu onSelect={handleSelect}>
        <Dropdown.Item eventKey={1}>Unpublish</Dropdown.Item>
        <Dropdown.Item eventKey={2}>Edit</Dropdown.Item>
        <Dropdown.Item eventKey={3}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Popover>
  );
};

const ActionCell = ({ rowData, dataKey, ...props }) => {
  return (
    <Cell {...props} className="link-group">
      <Whisper placement="autoVerticalStart" trigger="click" speaker={renderMenu}>
        <IconButton appearance="subtle" icon={<MoreIcon />} />
      </Whisper>
    </Cell>
  );
};

export default function FAQ(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          FAQ
        </h2>
      }
    >
      <Head title="FAQ" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <Table
              rowHeight={60}
              height={400}
              data={data}
              onRowClick={rowData => {
                console.log(rowData);
              }}
            >
              <Column width={60} align="center" verticalAlign="middle" fixed>
                <HeaderCell>Id</HeaderCell>
                <Cell dataKey="id" />
              </Column>

              <Column flexGrow={1} verticalAlign="middle">
                <HeaderCell>Question</HeaderCell>
                <Cell dataKey="question" />
              </Column>

              <Column width={80} verticalAlign="middle" fixed="right">
                <HeaderCell>
                  <MoreIcon />
                </HeaderCell>
                <ActionCell dataKey="id" />
              </Column>
            </Table>
          </div>
        </div>
      </div>
    </Authenticated>
  )
}