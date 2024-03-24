const List = ({ mas, setMas }) => {

  const handleClick = (index) => {
    const newMas = [...mas];
    newMas[index] = "!!!" + newMas[index];
    setMas(newMas);
  };

  const listItems = mas.map((item, index) => {
    return (
      <li key={index}>
        {item}
        <button onClick={() => handleClick(index)}>Изменить</button>
      </li>
    );
  });

  return <ul>{listItems}</ul>;
};

export default List;
