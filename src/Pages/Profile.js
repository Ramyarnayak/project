import React, { useEffect, useState } from 'react';
import cover from '../assets/cover.jpg';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);

function Profile(props) {
  const[picture,setPicture]=useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
    
  const imageHandler = (e) => {
      setPicture(URL.createObjectURL(e.target.files[0]));
    };
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const addItem = (e) => {
      e.preventDefault();
      const tempData=[...list];
      tempData.push(text);
      setList(tempData);
      setText("");
    }
  const deleteItem = (key) => {
    alert("Do you want to delete your post?")
    let newData=[...list];
    newData.splice(key,1);
    setList(newData);
  }

  useEffect(()=> {
    const data=localStorage.getItem("picture");
    const comment=localStorage.getItem("comments");
    if(data || comment) {
      setPicture(JSON.parse(data));
      setList(JSON.parse(comment));
    }
  },[]);

  
  useEffect(() => {
    localStorage.setItem("picture",JSON.stringify(picture)) 
    localStorage.setItem("comments",JSON.stringify(list))  
  });


  return (
    <div className="App">
      <div className="container">
        <div className="cover">
            <div className="avatar">
                <img src={cover} alt="coverpic"/>
            </div>
            <div className="name">
                <h2>{props.name} {props.last}</h2>
            </div>
        </div>
        <div className="photo">
            <div className="avatar2">
                <img src={props.imageURL} alt="" id="img" className="img" />
            </div>
            <div className="image-upload">
              <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
                {/* <label className="image-upload" htmlFor="input">Choose your photo</label> */}
            </div>
        </div>
      </div>
      <div className="main">
        <div className="card">
            <h3>ABOUT</h3>
            <div class="description">
                <h5>Web developer</h5> 
                <h5>Currently working in Y Media Labs</h5> 
                <h5>Hobbies: Travelling, Painting</h5> 
                <h5>Bangalore, India</h5>
            </div>
        </div>
        <div class="container">
            <form onSubmit={addItem}>
                <input className="input-container" placeholder="What's on your mind?" type="text" value={text} onChange={(e)=> setText(e.target.value)} />
                <button className="button-class" value="Submit">Add Comment</button>
            </form>
            <div className="add-item">
            {
                list.map((item,key) => {
                    return (
                        <div className="comment-card" key={key}>{item}
                          <span><FontAwesomeIcon className="faicons" icon="trash" onClick={deleteItem}></FontAwesomeIcon></span>
                        </div>    
                    )
                }) 
            }  
            </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
