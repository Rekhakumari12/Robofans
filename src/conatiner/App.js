import React,{Component} from 'react';
import CardList from '../components/cardList';
import Search from '../components/searchComponent';
import Message from '../components/Message';
import Scroll from '../components/scroll';
import Popup from '../components/popup';
import './App.css';

//for using states we need to convert fun comp into class comp
// const Layout = (params) => {
//   return (
//     <div>
//       {/* <h1>Im im first child</h1>
//         <h1>Im im second child</h1> */}
//       {/* similar to above*/}
//       <h1>Im im third child</h1>
//       { params.children[0]} 
//     </div>
//   )
// }
// const Rekha = (props) => {
//   return (
//     <div>
//       {props.children}
//       {props.id}
//     </div>
//   )
// }
// const App = () => {
//   return (
//     <div>
//       <Layout>
//         <h1>Im im first child</h1>
//         <h1>Im im second child</h1>
//       </Layout>
//       <Rekha id={0}>
//         <h1>Im Rekha</h1>
//       </Rekha>
//     </div>
//   )
// }
class App extends Component{
  constructor() {
    super()
    this.state = {
      robots: [],
      searchInput: '',
      message: "RoboFans",
      popup: false,
      currentImage: '',
      loading: true
    }
    console.log("constructor");
  }
  onSearchChange = (event) => {
    this.setState({searchInput:event.target.value})
  }
  openPopup = (event) => {
    let currentImage = event.target.parentNode.children[0].src;
    this.setState({currentImage:currentImage})
    this.setState({popup:true})
  }
  closePopup = () => {
    this.setState({popup:false})
  }
  componentDidMount() {
    console.log("will Mount");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp=>{
      return resp.json();
    })
    .then(user=>{
     this.setState({robots:user});
    })
  }
  render() {
    const { robots, searchInput, message, popup } = this.state;
    console.log("render")
    const filterRobot = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchInput.toLowerCase());
    })
    return(
      <React.Fragment>
        {popup ? <Popup closePopup={this.closePopup} image={this.state.currentImage}/>:""}
        <div className="tc mh5">
          <h1>{message}</h1>
          {/* <Message message={filterRobot.length===0?"No Records Found!":this.state.message}/> */}
          <Search searchedData={this.onSearchChange} />
          <Scroll>
            <CardList robots={filterRobot} popupWindow={this.openPopup}/>
          </Scroll>
        </div>
      </React.Fragment>
    )
  }
}
export default App;