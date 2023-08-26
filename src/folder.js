const FolderItem = ({ name, checked, indeterminate, children, onToggle, onCheck }) => {
    const handleToggle = () => {
      onToggle(name);
    };
  
    const handleCheck = () => {
      onCheck(name);
    };
  
    return (
      <li>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
          ref={input => {
            if (input) {
              input.indeterminate = indeterminate;
            }
          }}
        />
        <span onClick={handleToggle}>{name}</span>
        {children}
      </li>
    );
  };
  