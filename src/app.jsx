import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

class App extends React.Component {	
  render() {
    return (
      <div className="App">
       
<section class="first_section">
    <div class="nav_container">
        <nav class="nav_bar">
            <ul class="nav_link">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Testimonial</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <h1 class="title">smartHome</h1>
            <ul class="nav_log">
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign up</a></li>
            </ul>
        </nav>
    </div>
    <div class="main_title">
        <h2 class="h2_title">Smart Home Application</h2>
        <p class="txt_intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quibusdam nobis voluptatum velit facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
   
</section>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
