import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
//react에서 앞에 use가 붙는걸 hook이라고 한다.
// 이 훅을 가지고 와서 Read component에 사용할것이다. 그 결과를 params로 받음
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
  const id = Number(params.id);// 아이디값 가져옴,url 은 기본적으로 문자인데 우리의 토픽연산자는 숫자이기에 찾을수없기에 Number라고 데이터 변환하기
  const topic = props.data.filter(el=>el.id === id)[0];// el 아이디와 el이 일치하면 데이터를 필터링 해서 화면에 표시
  
  return <Article title={topic.title} body={topic.body}></Article> //필터링 해서 화면에 표시
}

function App() {
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
          {/* 라우터의 path가 read 에 걸림, Read component가 렌더링된다. /topic이 없기에 data라는 이름으로 공급하자 */}
          <Route path="/read/:id" element={<Read data={topics}></Read>}></Route>
        </Routes>
    </div>
  );
}
export default App;