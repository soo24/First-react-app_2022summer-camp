//import logo from './logo.svg';
 import './App.css';

 // 이건 유사 자바스크립트로 jsx이다!
 function Header() {
   return <header>
     <h1><a href="/index.html">WEB</a></h1>
   </header>
 }

  //article로
 function Article(props)
 {
   console.log('props', props);
   return <article>
     <h2>{props.title}</h2>
     <p>{props.body}</p>
   </article>
 }

 function Nav(props){
  //for문을 이용한 태그 생성
  //const tag = []

  //여기서 data는 topics를 가리킨다.
  // for(let i=0; i<props.data.length; i++){
  //   tag.push(
  //   <li key={props.data[i].id}>
  //     <a href={'/read/'+props.data[i].id}> {props.data[i].title}</a>
  //     </li>);
  // }
  
  //data로 들어온걸 태그로 바꾸어 함수를 넣어줄 예정- map를 활용한 태그 생성

  /*이 코드를 많이 쓰는 코드로 아래와 같이 바꿀예정
  function callback(element){ //props 데이타의 원소를 어떻게 바꿀것인가? 바꾸는 역할을 함
    return <li key = {element.id}>
      <a href = {'/read/'+element.id}>
      {element.title}
      </a>
      </li>
  }
  */

  /*
  함수 표현 다른 방식
  const callback = (element) => {
    return <li key={element.id}>
    <a href={'/read/'+element.id}>
    {element.title}</a></li>
 }
  */

  //위 함수를 더 간결하게새롭게 문법으로 만든것
  const callback = element => <li key = {element.id}><a href = {'/read/'+element.id}>{element.title}</a></li>
   // ' ==> ' : 입력을 출력한다. & 파라메터가 한개이상이면 (element)  괄호가 있어야한다. &리턴값도 없어도 된다.

  const tag = props.data.map(callback)

  return <nav>
      <ol>
        {tag}
      </ol>
    </nav>
}


 function App() {
   return (
     <div className="App">
       <Header></Header>
       <Nav></Nav>
       <Article></Article>
     </div>
   );
 }

  
 export default App;