import React, { useState } from 'react';
import './Friend.css';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function Friend() {
  const PAGE_ADD_FRIENDS='add-friends';
  const PAGE_YOUR_FRIENDS='your-friends';
  const [your_friends,setYourFriend]=useState([
    {
      name:"Deeksha"
    },
    {
      name:"Hitha"
    },
    {
      name:"Keerthi Mohan"
    },
    {
      name:"Nishmitha"
    },
    {
      name:"Nilesh"
    },
    {
      name:"Prajwal"
    },
    {
      name:"Shreeshail"
    }
  ]);
  const [page,setPage]=useState(PAGE_ADD_FRIENDS);
  const[add_friends,setProducts]=useState([
    {
      name:"Aswathi"
    },
   {
    name:"Nethra"
   },
   {
     name:"Ramya"
   },
   {
     name:"Stafny"
   }

  ]);
  const addToFriends=(add_friend)=>{
    setProducts(add_friends.filter((p)=> (p!==add_friend)))
    setYourFriend([...your_friends,{...add_friend}]);
    //console.log("friend");
    alert(add_friend.name+" is added to your friend list");
  
  }; 
  const removeFromFriends=(friendToRemove)=>{
    setYourFriend(
        your_friends.filter((add_friend)=> add_friend!==friendToRemove)
    );
    
    alert(friendToRemove.name+"is removed from your friend's list");
  };
  const navigateTo=(nextPage)=>{
    setPage(nextPage);
  };
  const renderaddFriends=()=>(
    <>
    <div className='friends'>
      
        
    {add_friends.map((add_friend,id)=>(
     <div className="friend" key={id}>
     <h3 className="add">{add_friend.name}</h3> 
    <button className="addbutton" onClick={()=>{addToFriends(add_friend)}}>Add
      </button>
   </div>
    ))}
  
    </div>
    
    </>

  );
  const renderyourFriends=()=>(
    <>
    
    <div className="myfriends">

    {your_friends.map((your_friends,id)=>(
      <div className="myfriend" key={id}>
    
      <h3 className="your">{your_friends.name}</h3>
    <button className="removebutton" onClick={()=>removeFromFriends(your_friends)}>Remove
      </button>
      
    </div>
  
    ))}
    </div>

      </>

  );
  const navStyle=
        {
            color:'white'
        };
    return (
      <Router>
      <div className="App">
     
        <header>
        <Switch>
          <nav>
          <ul className="nav-links">
           
          <Route path="/addfriends" component={renderyourFriends}/>
            <Route path="/yourfriends" component={renderaddFriends}/>
            <Link style={navStyle} to="your-friends">
          < li  onClick={()=>navigateTo(PAGE_YOUR_FRIENDS)}>Your Friends({your_friends.length})</li>
          </Link>
          <Link style={navStyle} to="add-friends">
          <li onClick={()=>navigateTo(PAGE_ADD_FRIENDS)}>Add Friends</li>
          </Link>
          
          </ul>
          </nav>
          </Switch>
        </header>
        

        {page===PAGE_ADD_FRIENDS && renderaddFriends()}
        {page===PAGE_YOUR_FRIENDS && renderyourFriends()}
        </div>
        </Router>
  );
}

export default Friend;
