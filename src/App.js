
 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
import logo from './logo.svg';
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
  const [mode, setMode] = useState('READ');
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
    console.log('topic', topic);
    //content = <Article title="READ" body="Hello, READ"></Article>
    //개개인별로
    content = <Article title={totpic.title} body={totpic.body}></Article>
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
