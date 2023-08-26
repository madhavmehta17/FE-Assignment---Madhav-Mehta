import React, { useState } from 'react';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';



const TreeNode = ({ node, onToggle, onCheck }) => {
  const handleToggle = () => {
    onToggle(node);
  };

  const handleCheck = () => {
    onCheck(node);
  };

  return (
    <li style={{ marginBottom: '7px' }}>
      <input
        type="checkbox"
        checked={node.checked}
        onChange={handleCheck}
        ref={input => {
        if (input) {
        input.indeterminate = node.indeterminate;
    }
  }}
/>

      <span onClick={handleToggle} style={{ color: 'lightgrey', fontSize: node.children ? '30px' : '25px' }}>
        {node.name}
      </span>
      {node.children && (
        <ul>
          {node.children.map(childNode => (
            <TreeNode
              key={childNode.name}
              node={childNode}
              onToggle={onToggle}
              onCheck={onCheck}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const DirectoryTree = ({ data }) => {
  const [nodes, setNodes] = useState(data);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleToggle = node => {
    node.open = !node.open;
    setNodes([...nodes]);
  };

  const handleCheck = node => {
    node.checked = !node.checked;
    if (node.children) {
      node.children.forEach(childNode => {
        childNode.checked = node.checked;
      });
    }
    updateParentNodes(node);
  
    node.indeterminate = !node.checked && node.children.some(childNode => childNode.checked);
    console.log('Indeterminate state:', node.indeterminate);
  
    setNodes([...nodes]);
  };
  
  
  
  
  const updateParentNodes = node => {
    if (node.parent) {
      const allChecked = node.parent.children.every(childNode => childNode.checked);
      const someChecked = node.parent.children.some(childNode => childNode.checked);
  
      if (allChecked) {
        node.parent.checked = true;
        node.parent.indeterminate = false;
      } else if (someChecked) {
        node.parent.checked = false;
        node.parent.indeterminate = true;
      } else {
        node.parent.checked = false;
        node.parent.indeterminate = false;
      }
  
      updateParentNodes(node.parent);
    }
  };
  
  

  const handleSubmit = () => {
    const selectedFiles = getSelectedFiles(nodes);
    setSelectedFiles(selectedFiles);
  };

  const getSelectedFiles = nodes => {
    let selectedFiles = [];
    nodes.forEach(node => {
      if (node.children) {
        selectedFiles.push(...getSelectedFiles(node.children));
      } else if (node.checked) {
        selectedFiles.push(node.path);
      }
    });
    return selectedFiles;
  };

  return ( 
    <>
    
      <ul>
        {nodes.map(node => (
          <TreeNode key={node.name} node={node} onToggle={handleToggle} onCheck={handleCheck} />
        ))}
      </ul>
      <button
  onClick={handleSubmit}
  style={{
    color: 'black',
    fontSize: '20px',
    padding: '10px 20px',
    margin: '0 auto',
    display: 'block'
  }}
>
  Submit
</button>

<ul style={{ color: 'white', fontSize:'20px', textAlign: 'center', listStylePosition: 'inside' }}>
  {selectedFiles.map(file => (
    <li key={file}>{file}</li>
  ))}
</ul>

    </>
  );
};

export default DirectoryTree;