import './App.css';

function App() {

  let post = "강남 우동 맛집";

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
        <h4>{post}</h4>
        <p>2022년 9월 2일</p>
        <h4>{post}</h4>
        <p>2022년 9월 2일</p>
      </div>
      

    </div>
  );
}

export default App;
