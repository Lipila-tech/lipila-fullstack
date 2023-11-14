import React from 'react';
import { Table, Dropdown, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';

const FeeHistory = () => {
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
    },
    {
      title: 'Payment Status',
      dataIndex: 'paymentStatus',
    },
  ];

  const students = [
    {
      id: 1,
      name: 'John Doe',
      feePayments: [
        {
          date: '2023-10-01',
          description: 'Term 1 School Fees',
          amount: '1000.00',
          paymentStatus: 'Paid',
        },
        {
          date: '2023-12-15',
          description: 'Term 2 School Fees',
          amount: '1200.00',
          paymentStatus: 'Outstanding',
        },
        {
          date: '2024-03-15',
          description: 'Term 3 School Fees',
          amount: '1500.00',
          paymentStatus: 'Pending Payment',
        },
      ],
    },
    {
      id: 2,
      name: 'Kapi Doe',
      feePayments: [
        {
          date: '2023-09-15',
          description: 'Enrollment Fees',
          amount: '500.00',
          paymentStatus: 'Paid',
        },
        {
          date: '2023-11-15',
          description: 'Term 1 Activity Fees',
          amount: '200.00',
          paymentStatus: 'Paid',
        },
      ],
    },
    {
      id: 3,
      name: 'Sangwa Doe',
      feePayments: [
        {
          date: '2023-09-15',
          description: 'Enrollment Fees',
          amount: '500.00',
          paymentStatus: 'Paid',
        },
        {
          date: '2023-11-15',
          description: 'Term 1 Activity Fees',
          amount: '200.00',
          paymentStatus: 'Paid',
        },
      ],
    },
  ];

  const [selectedStudent, setSelectedStudent] = React.useState(students[0]);
  const studentMenu = (
    <Menu>
      {students.map((student) => (
        <Menu.Item key={student.id} onClick={() => handleStudentChange(student.id)}>
          {student.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  const handleStudentChange = (studentId) => {
    setSelectedStudent(students.find((student) => student.id === studentId));
  };

  const studentFeeHistory = (
    <div className="fee-history">
      <Dropdown overlay={studentMenu} trigger="click" className=''>
        <Button>Select student: {selectedStudent.name}</Button>
      </Dropdown>
      <h2 className='text-center'>Fee History for {selectedStudent.name}</h2>
      <Table columns={columns} dataSource={selectedStudent.feePayments} />
      <Link type="btn-primary" to='/payment'>Make Payment</Link>
    </div>
  );

  return (
    <>
      <div>{studentFeeHistory}</div>
    </>
  );
};

export default FeeHistory;
