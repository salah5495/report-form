import React, { createContext, useState, useContext } from 'react';
const TableInputContext = createContext();

export const TableInputProvider = ({ children }) => {
  const tableInput = useProvideTableInput();
  return (
    <TableInputContext.Provider value={tableInput}>
      {children}
    </TableInputContext.Provider>
  );
};

export const useTable = () => {
  return useContext(TableInputContext);
};

export const useProvideTableInput = () => {
  const [names, setNames] = useState('');
  const [form, setForm] = useState('');
  const [year, setYear] = useState('');
  const [stream, setStream] = useState('');
  const [term, setTerm] = useState('');
  const [admissionNumber, setAdmissionNumber] = useState('');
  const [classTeachersComment, setClassTeachersComment] = useState('');
  const [principalsComment, setPrincipalsComment] = useState('');

  return {
    names,
    setNames,
    form,
    setForm,
    year,
    setYear,
    stream,
    setStream,
    term,
    setTerm,
    admissionNumber,
    setAdmissionNumber,
    classTeachersComment,
    setClassTeachersComment,
    principalsComment,
    setPrincipalsComment,
  };
};
