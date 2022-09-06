import { useState } from 'react';
import './App.css';
import data from "./data.js";
import Detail from "./routes/Detail.js";
import { Routes, Route, Link, Outlet } from "react-router-dom";

function App() {

  let [post, setPost] = useState(data);

  return (
    <div className="App">

      <div className='nav'>
        <div className='menu-container'>
          <ul className='menu'>
            <li className='logo'><Link to="/">Logo</Link></li>
            <li><Link to="/detail"><span>Menu1</span></Link></li>
            <li><span>Menu2</span></li>
            <li><span>Menu3</span></li>
            <li><span>Menu4</span></li>
          </ul>
        </div>
      </div>

      <div className='main-bg'></div>

      <Routes>
        <Route path="/" element={
                <div className='main'>
                <h1>강원도. <div className='main-header'>마실 올래?</div></h1>
                <ul className='cards'>
                  {
                    post.map((a, i) => {
                      return (
                        <Card post={post[i]} />
                      )
                    })
                  }
                </ul>
              </div>
        } />
        <Route path="/detail" element={<Detail/>}/>
        <Route path='/about' element={<About/>}/>

        {/* Nested Route */}
        <Route path="/product" element={<Product/>}>
          <Route path='1' element={<h4>상품 1번임</h4>}/>
          <Route path='2' element={<h4>상품 2번임</h4>}/>
          <Route path='3' element={<h4>상품 3번임</h4>}/>
        </Route>
      </Routes>

    </div>
  );
}

function About() {
  return(
    <div>
      <h4>나는 김성호</h4>
    </div>
  )
}

function Product() {
  return (
    <div>
      <h1>상품 목록임</h1>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props) {
  return(
    <li className='cards_item'>
      <div className='card'>
        <div className='card_image'></div>
        <div className='card_content'>
          <h2 className='card_title'>{props.post.title}</h2>
          <p className='card_text'>{props.post.content}</p>
          <p className='card_rate'>{props.post.rate}</p>
          <Link to="/detail"><button className='btn card_btn'>Read More</button></Link>
        </div>
      </div>
    </li>
  )
}

export default App;
