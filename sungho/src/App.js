/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let [post, setPost] = useState(["남자 코트 추천", "여자 코트 추천", "강남 우동 맛집"]);

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
        <h4>{post[0]}</h4>
        <p>2022년 9월 2일</p>
        <h4>{post[1]}</h4>
        <p>2022년 9월 2일</p>
        <h4>{post[2]}</h4>
        <p>2022년 9월 2일</p>
      </div>
      
      

    </div>
  );
}

export default App;
