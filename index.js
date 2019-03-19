//pirmais
//const text=<div>Hello world</div>
//const element=document.getElementById('root');

//const domContainer = document.querySelector('#root');
//ReactDOM.render(text, element);
//otrais
//class MyCard extends React.Component{
// render(){
   // return <div>
    //  <h1>first title</h1>
   //   <p>Here is some text</p>
   //   <ul>
    //    <li><a href="#1">first</a></li>
    //    <li ><a href="#2">second</a></li>
    //    <li><a href="#3">third</a></li>
   //   </ul>
  //    <div class="html_div" id="1">This is first block</div>
   //   <div class="html_div" id="2">This is second block</div>
   //   <div class="html_div" id="3">This is third block</div>
  //  </div>

 // }
//}

//tresais
class clock extends React.Component{
  constructor (props){
    super(props);
    this.state={date: new Date()};
  }
  componentdidmount(){
    this.timerID=setInterval(
      () =>  this.tick()
    ,1000)};
  
  componentwillunmount(){
      clearInterval(this.timerID);
  }
  tick(){
    this.setState({date: new Date()});
  }
  render(){
    return(
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}
const e=React.createElement;
const element=document.getElementById('root');
ReactDOM.render(e(clock),element)
