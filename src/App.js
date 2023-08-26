import React from 'react';
import logo from './logo.svg';
import './App.css';
import DirectoryTree from './directory';


const data = [
  {
    name: 'Folder 1',
    path: '/Folder 1',
    children: [
      { name: 'File 1', path: '/Folder 1/File 1' },
      { name: 'File 2', path: '/Folder 1/File 2' },
    ],
  },
  {
    name: 'Folder 2',
    path: '/Folder 2',
    children: [
      { name: 'File 3', path: '/Folder 2/File 3' },
      { name: 'File 4', path: '/Folder 2/File 4' },
    ],
  },
  {
    name: 'Folder 3',
    path: '/Folder 3',
    children: [
      { name: 'File 5', path: '/Folder 3/File 5' },
      { name: 'File 6', path: '/Folder 3/File 6' },
    ],
  },
  {
    name: 'Folder 4',
    path: '/Folder 4',
    children: [
      { name: 'File 7', path: '/Folder 4/File 7' },
      { name: 'File 8', path: '/Folder 4/File 8' },
    ],
  },
  {
    name: 'Folder 5',
    path: '/Folder 5',
    children: [
      { name: 'File 9', path: '/Folder 5/File 9' },
      { name: 'File 10', path: '/Folder 5/File 10' },
    ],
  },
];

const App = () => {
  return (
    <>
        <h1 style={{ color: 'white', textAlign: 'center', fontFamily: 'Helvetica, Arial, sans-serif' }}>
        Directory Tree
      </h1>
      <h2 style={{ color: 'silver', position: 'absolute', bottom: 50, right: 100, fontFamily: 'Helvetica' }}>
      Madhav Mehta
    </h2>
    <h3 style={{ color: 'silver', position: 'absolute', bottom:25, right: 50, fontFamily: 'Helvetica' }}>
     An enthusiastic & keen learner
    </h3>
    <h4 style={{ color: 'silver', position: 'absolute', bottom:0, right: 70, fontFamily: 'Helvetica' }}>
     mehta.madhav55@gmail.com
    </h4>
      <DirectoryTree data={data} />
    </>
  );
};

export default App;