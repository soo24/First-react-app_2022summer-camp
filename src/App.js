//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Header(props){
  return <header>
    <h1><a href="/index.html" onClick={(event)=>{
      event.preventDefault();
      props.onSelect();
    }}>WEB</a></h1>
  </header>
}
function Nav(props){
  return <nav>
    <ol>
      {props.data.map(el => <li key={el.id}>
        <a href={'/read/'+el.id} onClick={event=>{
          event.preventDefault();
          props.onSelect(el.id);
        }}>
          {el.title}
        </a>
      </li>)}
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
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'}
  ]
  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if(mode === 'READ'){
    const topic = topics.filter(el=>el.id === id)[0];
    content = <Article title={topic.title} body={topic.body}></Article>
  }
  return (
    <div>
        <Header onSelect={()=>setMode('WELCOME')}></Header>
        <Nav data={topics}  onSelect={(_id)=>{
          setMode('READ');
          setId(_id);
        }}></Nav>
        {content}
    </div>
  );
}

export default App;