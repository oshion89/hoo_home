import MenuList from "./components/MenuList";
import React, { useState, useEffect } from "react";
import axios from 'axios';


function App(props) {

  useEffect(()=>{
  	console.log("componentDidMount");
//  	loadMenuItem();
  },[])


//  const [menu, setMenu] = useState([]);
  const [menu, setMenu] = useState(props.menu);


  const menuList = menu
  .map(menu => (
    <MenuList
      name={menu.menu_name}
      priority={menu.menu_priority}
      key={menu.menu_id}
    />
  ));


  const loadMenuItem = async () => {
    // Json Data 불러오기
    axios // axios를 이용해
      .get("http://localhost:8080/mainmenu/get") // json을 가져온다음
      .then(({ data }) => {
          setMenu(data.data);
      })
      .catch(e => {
        // json이 로드되지않은 시간엔
        console.error(e); // 에러표시
      });
  };

  return (
    <div>

        <div className="header">
          <h1>My Website</h1>
          <p>Resize the browser window to see the effect.</p>
        </div>


        <div className="row">



          <div className="leftcolumn">
            <div className="card">
              <h2>TITLE HEADING</h2>
              <h5>Title description, Dec 7, 2017</h5>
              <div className="fakeimg">Image</div>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </div>

          <div className="rightcolumn">
            <div className="card">
              <h2>About Me</h2>
              <div className="fakeimg">Image</div>
              <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            </div>
          </div>

        </div>

        <div className="footer">
          <h2>Footer</h2>
        </div>

    </div>

  );
}

export default App;
