import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {Link,Routes,Route,useParams} from 'react-router-dom';

function Header(props){
  return <header>
    <h1><Link to="/">WEB</Link></h1>
  </header>
}
function Nav(props){
  return <nav>
    <ol>
      {props.data.map(el => <li key={el.id}>
        <Link to={'/read/'+el.id}>
          {el.title}
        </Link>
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
function Read(props){
  const params = useParams();
  const id = Number(params.id);
  const topic = props.data.filter(el=>el.id === id)[0];
  return <Article title={topic.title} body={topic.body}></Article>
}
function Create(props){
  return <article>
    <h1>Create</h1>
    <form action="/api/create" onSubmit={evt=>{
      evt.preventDefault();
      const title = evt.target.title.value;
      const body = evt.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="제목" /></p>
      <p><textarea name="body" placeholder="본문"></textarea></p>
      <p><input type="submit" value="생성"></input></p>
    </form>
  </article>
}
function App() {
  const [nextId, setNextId] = useState(4);
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'}
  ]
  
  return (
    <div>
        <Header></Header>
        <Nav data={topics}></Nav>
        <Routes>
          <Route path="/" element={<Article title="Welcome" body="Hello, WEB"></Article>}></Route>
          <Route path="/read/:id" element={<Read data={topics}></Read>}></Route>
          <Route path="/create" element={<Create onCreate={(title, body)=>{
            // topics를 변경
            topics.push({id:nextId, title:title, body:body});
            
          }}></Create>}></Route>
        </Routes>
        <Link to="/create">create</Link>
    </div>
  );
}
export default App;