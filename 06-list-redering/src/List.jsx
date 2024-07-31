function List(){
  const fruits = [{id : 1, name : "apple", calories : 90},
                  {id : 2, name : "orange", calories : 106},
                  {id : 3, name : "banana", calories : 45},
                  {id : 4, name : "coconut", calories : 159},
                  {id : 5, name : "pineapple", calories : 37}]



  const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name} : <b>{fruit.calories}</b></li>)
  return(
    <ol>
      {listItems}
    </ol>
  )

}
export default List