//import logo from './logo.svg';
 import './App.css';
 //웹사이트는 한번로딩하고 끝나는데, 이걸 동적으로 만들어서 Interative하게
 import {useState} from 'react';
 

 // 이건 유사 자바스크립트로 jsx이다!
 function Header(props) {
   return <header>
     <h1><a href="/index.html" onClick={(event) => {
       event.preventDefault();
       props.onSelect();
     }}>WEB
       </a></h1>
   </header>
 }

function Nav(props){
  function callback(el){
    return <li key={el.id}>
      <a href={'/read/'+el.id} onClick={event=>{
        event.preventDefault();
        props.onSelect();
      }}>
        {el.title}
      </a>
  </li>
  }
  return <nav>
    <ol>
      {/* {props.data.map(el => <li key={el.id}>
        <a href={'/read/'+el.id} onClick={event=>{
          event.preventDefault();
          props.onSelect();
        }}>
          {el.title}
        </a>
      </li>)} */}
      {props.data.map(callback)}
    </ol>
  </nav>
}
function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>;
}
function App() {
  const [mode, setMode] = useState('READ');
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'}
  ]
  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if(mode === 'READ'){
    content = <Article title="READ" body="Hello, READ"></Article>
  }
  return (
    <div style={{
      border:'1px solid red'
    }}>
        <Header onSelect={()=>setMode('WELCOME')}></Header>
        <Nav data={topics}  onSelect={()=>setMode('READ')}></Nav>
        {content}
    </div>
  );
}
export default App;



