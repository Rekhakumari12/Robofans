const Search = ({searchedData}) => {
  return (
    <div>
      <input type="text" placeholder="Search name" onChange={searchedData} className="pa2 br2 b-green bg-light-blue"/><br/><br/>
    </div>
  )
}
export default Search;