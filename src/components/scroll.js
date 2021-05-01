const Scroll = (props) => {
  return (
    <div style={{height:'550px', border:'3px solid #0cab', overflowY:'auto'}}>
       { props.children }
    </div>
  )
}
export default Scroll;