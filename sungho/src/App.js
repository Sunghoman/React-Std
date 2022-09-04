/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let [post, setPost] = useState(["남자 코트 추천", "여자 코트 추천", "강남 우동 맛집"]);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

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

      {
        post.map(function(post, i){
          return (
            <div className="postList" key={i}>
              <h4 onClick={ () => {setModal(true), setTitle(i)}}>{ post }</h4>
                <div className='postLike' onClick={ () => {
                      let likeCnt = [...like];
                      likeCnt[i]++;
                      setLike(likeCnt);
                    } 
                  }>
                  <span>Like</span> {like[i]} 
                </div>
              <p>2022년 9월 2일</p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal post={post} title={title}/> : null
      }

    </div>
  );
}

function Modal(props) {
  return(
    <div className='modal'>
      <a class="close" onClick={ () => {setModal(false)}}>&times;</a>
      <h4>{ props.post[props.title] }</h4>
      <p>Date</p>
      <p>content</p>
    </div>
  )
}

export default App;
