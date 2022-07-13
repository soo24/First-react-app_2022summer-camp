import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {Link,Routes,Route} from 'react-router-dom';

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
          <Route path="/read/:id" element={<Article title="Read" body="Hello, READ"></Article>}></Route>
        </Routes>
    </div>
  );
}
export default App;