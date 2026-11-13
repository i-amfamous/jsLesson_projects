const List = (props) => {

    const itemList = props.items

    //Sorts the fruits array in alphabetical order by name
    itemList.sort((a,b) => a.name.localeCompare(b.name));

    // //Sorts the fruits array in reverse order by name can also do same using calories
    // itemList.sort((a,b) => b.name.localeCompare(a.name));

    //Top filter the fruits array to only include fruits with calories less than 100
    const lowCalorieFruits = itemList.filter(fruit => fruit.calories < 100);
    console.log(lowCalorieFruits);

     const fruitList = itemList.map(fruit =>
        <li key={fruit.id}>{fruit.name} - <b>{fruit.calories}</b> calories</li>
    );

    //Map the fruits array to create a list of fruit names and calories
    const lowCalorieListItems = lowCalorieFruits.map(fruit =>
        <li key={fruit.id}>{fruit.name} - <b>{fruit.calories}</b> calories</li>
    );


const imageUrl = "../favicon.svg"

  const handleClick = (e) => {
    console.log(e.target.textContent);
  };

  const hideImage = (e) =>{
    e.target.style.display = "none"
  }

    return (
        <>
            <ul>{fruitList}</ul>
            
            <h1>Fruits with less than 100 calories</h1>
            <ol>{lowCalorieListItems}</ol>
             <button onClick={handleClick}>Apple</button>
            <button onClick={handleClick}>Mango</button>
            <button onClick={handleClick}>Orange</button>
            <img height={300} onClick={(e)=> hideImage(e)} src={imageUrl} alt="" />
        </>
    );
};

export default List