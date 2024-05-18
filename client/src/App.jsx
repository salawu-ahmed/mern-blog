import './App.css'

function App() {

  return (
    <main>
      <header>
        <a href="#" className='logo'>My Blog</a>
        <nav><a href="">Login</a><a href="">Register</a></nav>
      </header>
      <div className="post">
        <div className="image">
          <img src="../src/assets/pexels-binyaminmellish-106399.jpg" alt="" />
        </div>
        <div className="texts">
          <h2 className="title">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
          <p className="info">
            <a href="#" className="author">Salawu Ahmed</a>
            <time datetime="">23-01-06 16:45</time>
          </p>
          <p className='summary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aperiam quis perspiciatis harum explicabo laborum earum assumenda! Dolorem error exercitationem aut dolor architecto, recusandae iste quaerat ipsum nemo. Autem, odio!</p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img src="../src/assets/pexels-binyaminmellish-106399.jpg" alt="" />
        </div>
        <div className="texts">
          <h2 className="title">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
          <p className="info">
            <a href="#" className="author">Salawu Ahmed</a>
            <time datetime="">23-01-06 16:45</time>
          </p>
          <p className='summary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aperiam quis perspiciatis harum explicabo laborum earum assumenda! Dolorem error exercitationem aut dolor architecto, recusandae iste quaerat ipsum nemo. Autem, odio!</p>
        </div>
      </div>
        <div className="post">
          <div className="image">
            <img src="../src/assets/pexels-binyaminmellish-106399.jpg" alt="" />
          </div>
          <div className="texts">
            <h2 className="title">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
            <p className="info">
              <a href="#" className="author">Salawu Ahmed</a>
              <time datetime="">23-01-06 16:45</time>
            </p>
            <p className='summary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aperiam quis perspiciatis harum explicabo laborum earum assumenda! Dolorem error exercitationem aut dolor architecto, recusandae iste quaerat ipsum nemo. Autem, odio!</p>
          </div>
        </div>

      
    </main>
  )
}

export default App
