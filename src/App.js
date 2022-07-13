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
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'}
  ]);
  
  return (
    <div>
        <Header></Header>
        <Nav data={topics}></Nav>
        <Routes>
          <Route path="/" element={<Article title="Welcome" body="Hello, WEB"></Article>}></Route>
          <Route path="/read/:id" element={<Read data={topics}></Read>}></Route>
          <Route path="/create" element={<Create onCreate={(title, body)=>{
            // topics를 변경
            //topics.push({id:nextId, title:title, body:body}); ->이건 가변한 느낌
            //불변한 Immutable같은 사용 - 하지만 배울시간없어서 일반적으로 사용하는 원칙으로~~
            // ㄴ 어떻게? 일단 복제를 뜬다([...a]를 하면 a의 복제본인 b가 생긴다! 즉, b=[...a];) 그리고 b를 수정한다.
            const newTopics= [...topics]
            newTopics.push({id:nextId, title:title, body:body});
            setTopics(newTopics);
          }}></Create>}></Route>
        </Routes>
        <Link to="/create">create</Link>
    </div>
  );
}

export default App;

//가변한 * push   -> a[1,2,3] 하고 a.push(4) 하면 a(a; 입력)는 a[1,2,3,4]로 바뀐다
//불변한 * concat ->a[1,2,3] 하고 a.concat(4) 하면 a는 a[1,2,3]! 그대로, return값을 바꿈 -원본을 복제하고 복제본을 바꿈
//리액트에서는 원본을 바꿔서 setTopic를 하면 리액트는 이 데이터가 수정되었음을 알 수없다. 불변함을 유지해야한다!
//리액트는 원본과 비교해서 내가 입력한걸 비교해서 랜더링해주는데 만약, 원본이 수정된다면 안되겠지??!!