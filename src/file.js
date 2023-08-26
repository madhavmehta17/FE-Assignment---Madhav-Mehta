import React from 'react';

const FileItem = ({ name, checked, onCheck }) => {
  const handleCheck = () => {
    onCheck(name);
  };

  return (
    <li>
      <input type="checkbox" checked={checked} onChange={handleCheck} />
      <span>{name}</span>
    </li>
  );
};

export default FileItem;
