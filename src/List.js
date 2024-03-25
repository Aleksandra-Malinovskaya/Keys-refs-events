const List = ({ mas, setMas }) => {

  const handleClick = (index) => {
    const newMas = mas.map((item, ind)=>{
      if(ind === index){
        item = "!!!" + item;
      }
      return item
    })
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
