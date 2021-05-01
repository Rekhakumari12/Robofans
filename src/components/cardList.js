import Cards from './cards';
import Popup from './popup';
const CardList = ({ robots,popupWindow}) => {
  return (
    <div>  
      {
        robots.length===0?<h2 class="loading">No Records Found!</h2>:
        robots.map((data, i) => {
          return <Cards
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
            popupFun={popupWindow}
          />
        })
      }
    </div>
  )
}

export default CardList;