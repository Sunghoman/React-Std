/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let [post, setPost] = useState(["남자 코트 추천", "여자 코트 추천", "강남 우동 맛집"]);
  let [like, setLike] = useState(0)

  return (
    <div className="App">
      <div className="navigation">
        <div className="menuToggle">
          <input type="checkbox"></input>
          <span></span>
          <span></span>
          <span></span>
          <ul className="menu">
            <li>Home</li>
            <li>About</li>
            <li>Info</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="postList">
        <h4>{post[0]} 
          <div className='postLike'>
            <span onClick={ () => { console.log("따뽕") } }>Like</span> {like} 
          </div>
        </h4>
        <p>2022년 9월 2일</p>
        <h4>{post[1]}
          <div className='postLike'>
            <span onClick={ () => {setLike( like + 1)} }>Like</span> {like} 
          </div>
        </h4>
        <p>2022년 9월 2일</p>
        <h4>{post[2]}
          <div className='postLike'>
            <span>Like</span> {like} 
          </div>
        </h4>
        <p>2022년 9월 2일</p>
      </div>

    </div>
  );
}

export default App;
