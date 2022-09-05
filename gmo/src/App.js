import { useState } from 'react';
import './App.css';
import data from "./data.js";

function App() {

  let [post, setPost] = useState(data);

  return (
    <div className="App">

      <div className='nav'>
        <div className='menu-container'>
          <ul className='menu'>
            <li className='logo'>Logo</li>
            <li><span>Menu1</span></li>
            <li><span>Menu2</span></li>
            <li><span>Menu3</span></li>
            <li><span>Menu4</span></li>
          </ul>
        </div>
      </div>

      <div className='main-bg'></div>

      <div className='main'>
        <h1>강원도로 마실 올래?</h1>
        <ul className='cards'>


          {/* <Card post={post[0]} />
          <Card post={post[1]} />
          <Card post={post[2]} /> */}

          {
            post.map((a, i) => {
              return (
                <Card post={post[i]} />
              )
            })
          }

          {/* 하드코딩한거임 */}
          {/* <li className='cards_item'>
            <div className='card'>
              <div className='card_image'></div>
              <div className='card_content'>
                <h2 className='card_title'>{post[0].title}</h2>
                <p className='card_text'>{post[0].content}</p>
                <p className='card_rate'>{post[0].rate}</p>
                <button className='btn card_btn'>Read More</button>
              </div>
            </div>
          </li>

          <li className='cards_item'>
            <div className='card'>
              <div className='card_image'></div>
              <div className='card_content'>
                <h2 className='card_title'>{post[1].title}</h2>
                <p className='card_text'>{post[1].content}</p>
                <p className='card_rate'>{post[1].rate}</p>
                <button className='btn card_btn'>Read More</button>
              </div>
            </div>
          </li>

          <li className='cards_item'>
            <div className='card'>
              <div className='card_image'></div>
              <div className='card_content'>
              <h2 className='card_title'>{post[2].title}</h2>
                <p className='card_text'>{post[2].content}</p>
                <p className='card_rate'>{post[2].rate}</p>
                <button className='btn card_btn'>Read More</button>
              </div>
            </div>
          </li>

          <li className='cards_item'>
            <div className='card'>
              <div className='card_image'></div>
              <div className='card_content'>
                <h2 className='card_title'>간짬뽕</h2>
                <p className='card_text'>정말 맛있어요</p>
                <p className='card_rate'>⭑⭑⭑⭑⭑</p>
                <button className='btn card_btn'>Read More</button>
              </div>
            </div>
          </li>

          <li className='cards_item'>
            <div className='card'>
              <div className='card_image'></div>
              <div className='card_content'>
                <h2 className='card_title'>간짬뽕</h2>
                <p className='card_text'>정말 맛있어요</p>
                <p className='card_rate'>⭑⭑⭑⭑⭑</p>
                <button className='btn card_btn'>Read More</button>
              </div>
            </div>
          </li>

          <li className='cards_item'>
            <div className='card'>
              <div className='card_image'></div>
              <div className='card_content'>
                <h2 className='card_title'>간짬뽕</h2>
                <p className='card_text'>정말 맛있어요</p>
                <p className='card_rate'>⭑⭑⭑⭑⭑</p>
                <button className='btn card_btn'>Read More</button>
              </div>
            </div>
          </li> */}
          
        </ul>
      </div>

    </div>
  );
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
          <button className='btn card_btn'>Read More</button>
        </div>
      </div>
    </li>
  )
}

export default App;
