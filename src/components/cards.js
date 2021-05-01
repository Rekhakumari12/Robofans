const Cards = ({ id, name, email, popupFun }) => {
  let url;
  return (
    <div className="bg-light-blue dib br1 pa2 ma1 dim bw3 shadow-3">
      <img src={`https://robohash.org/${id}?set=set2?`} alt="kittyImage" width="250" />
      <div>
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
      <button type="button" className="pa2 br1 bg-red" onClick={popupFun}>View</button>
    </div>
  )
}
export default Cards;