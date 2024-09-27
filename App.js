import React, { useEffect,useRef,useState } from 'react';
import './App.css';
import { Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";
import { LuAlarmClock } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { FaArrowCircleUp } from "react-icons/fa";

import chair1 from './chair1.jpg'
import chair2 from './chair2.jpg'
import chair3 from './chair3.jpg'
import chair4 from './chair4.jpg'
import chair5 from './chair5.jpg'
import chair6 from './chair6.jpg'

import clock1 from './clock1.jpg'
import clock2 from './clock2.jpg'
import clock3 from './clock3.jpg'
import clock4 from './clock4.jpg'
import clock5 from './clock5.jpg'
import clock6 from './clock6.jpg'
import clock7 from './clock7.jpg'

import laptop_charger1 from './cha1.jpg'
import laptop_charger2  from './cha2.jpg'
import laptop_charger3  from './cha3.jpg'

import light1 from './light1.jpg'
import light2 from './light2.jpg'
import light3 from './light3.jpg'
import light4 from './light4.jpg'
import light5 from './light5.jpg'
import light6 from './light6.jpg'
import light7 from './light7.jpg'
import light8 from './light8.jpg'
import light9 from './light9.jpg'
import light10 from './light10.jpg'
import light11 from './light11.jpg'
import light12 from './light12.jpg'
import light13 from './light13.jpg'
import light14 from './light14.jpg'
import light15 from './light15.jpg'

import mobile_charger1 from './mcha1.jpg'
import mobile_charger2 from './mcha2.jpg'
import mobile_charger3 from './mcha3.jpg'
import mobile_charger4 from './mcha4.jpg'
import mobile_charger5 from './mcha5.jpg'

import monitor1 from './mon1.jpg'
import monitor2 from './mon2.jpg'
import monitor3 from './mon3.jpg'
import monitor4 from './mon4.jpg'
import monitor5 from './mon5.jpg'
import monitor6 from './mon6.jpg'
import monitor7 from './mon7.jpg'

import mouse1 from './mouse1.jpg'
import mouse2 from './mouse2.jpg'
import mouse3 from './mouse3.jpg'
import mouse4 from './mouse4.jpg'
import mouse5 from './mouse5.jpg'
import mouse6 from './mouse6.jpg'
import mouse7 from './mouse7.jpg'

import shoe1 from './sho1.jpg'
import shoe2 from './sho2.jpg'
import shoe3 from './sho3.jpg'
import shoe4 from './sho4.jpg'
import shoe5 from './sho5.jpg'
import shoe6 from './sho6.jpg'
import shoe7 from './sho7.jpg'

import watch1 from './watch1.jpg'
import watch2 from './watch2.jpg'
import watch3 from './watch3.jpg'
import watch4 from './watch4.jpg'
import watch5 from './watch5.jpg'
import watch6 from './watch6.jpg'
import watch7 from './watch7.jpg'
import watch8 from './watch8.jpg'
import watch9 from './watch9.jpg'
import watch10 from './watch10.jpg'

import pant1 from './pant1.jpg'
import pant2 from './pant2.jpg'
import pant3 from './pant3.jpg'
import pant4 from './pant4.jpg'

import pen1 from './pen1.jpg'
import pen2 from './pen2.jpg'
import pen3 from './pen3.jpg'
import pen4 from './pen4.jpg'
import pen5 from './pen5.jpg'
import pen6 from './pen6.jpg'

import phone1 from './phone1.jpg'
import phone2 from './phone2.jpg'
import phone3 from './phone3.jpg'
import phone4 from './phone4.jpg'
import phone5 from './phone5.jpg'
import phone6 from './phone6.jpg'

import battery1 from './cell1.jpg'
import battery2 from './cell2.jpg'
import battery3 from './cell3.jpg'
import battery4 from './cell4.jpg'
import battery5 from './cell5.jpg'
import battery6 from './cell6.jpg'
import battery7 from './cell7.jpg'
import battery8 from './cell8.jpg'
import battery9 from './cell9.jpg'
import battery10 from './cell10.jpg'
import battery11 from './cell11.jpg'
import battery12 from './cell12.jpg'

import waterbottle1 from './bot1.jpg'
import waterbottle2 from './bot2.jpg'
import waterbottle3 from './bot3.jpg'
import waterbottle4 from './bot4.jpg'
import waterbottle5 from './bot5.jpg'
import waterbottle6 from './bot6.jpg'

import keyboard1 from './key1.jpg'
import keyboard2 from './key2.jpg'
import keyboard3 from './key3.jpg'
import keyboard4 from './key4.jpg'
import keyboard5 from './key5.jpg'

import head_phone1 from './head1.jpg'
import head_phone2 from './head2.jpg'
import head_phone3 from './head3.jpg'

import airpords1 from './air1.jpg'
import airpords2 from './air2.jpg'
import airpords3 from './air3.jpg'
import airpords4 from './air4.jpg'
import airpords5 from './air5.jpg'

import laptopbattery1 from './lp1.jpg'
import laptopbattery2 from './lp2.jpg'
import laptopbattery3 from './lp3.jpg'
import laptopbattery4 from './lp5.jpg'

import powerbank1 from './power_bank (1).jpg'
import powerbank2 from './power_bank (2).jpg'
import powerbank3 from './power_bank (3).jpg'
import powerbank4 from './power_bank (4).jpg'
import powerbank5 from './power_bank (5).jpg'
import powerbank6 from './power_bank (6).jpg'

import table1 from './table1.jpg'
import table2 from './table2.jpg'
import table3 from './table3.jpg'
import table4 from './table4.jpg'
import table5 from './table5.jpg'
import table6 from './table6.jpg'
import table7 from './table7.jpg'

import top1 from './top1.jpg'
import top2 from './top2.jpg'
import top3 from './top3.jpg'
import top4 from './top4.jpg'
import top5 from './top5.jpg'
import top6 from './top6.jpg'
import top7 from './top7.jpg'

import tab1 from './tab1.jpg'
import tab2 from './tab2.jpg'
import tab3 from './tab3.jpg'
import tab4 from './tab4.jpg'

import shirt1 from './shirt1.jpg'
import shirt2 from './shirt2.jpg'
import shirt3 from './shirt3.jpg'
import shirt4 from './shirt4.jpg'

import tshirt1 from './tshirt1.jpg'
import tshirt2 from './tshirt2.jpg'
import tshirt3 from './tshirt3.jpg'
import tshirt4 from './tshirt4.jpg'
import tshirt5 from './tshirt5.jpg'
import tshirt6 from './tshirt6.jpg'
import tshirt7 from './tshirt7.jpg'

import laptop1 from './laptop.png'

function App() {
  let image = [phone1,airpords1,battery1,head_phone1,monitor1,laptop_charger1,chair1,clock1,watch1,shoe1,laptopbattery2,pen1,pant1,light1,mouse2];
  let having_items = ["waterbottle","tshirt","powerbank","shoes","pant","watch","pen","table","mouse","clock","charger","phone","airpords","headphone","light","monitor","battery","tops","chair","keyboard","tab","laptop"]

  let clock = [
    {
      source:clock1, desc:"clock"
    },
    {
      source:clock2, desc:"clock"
    },
    {
      source:clock3, desc:"clock"
    },
    {
      source:clock4, desc:"clock"
    },
    {
      source:clock5, desc:"clock"
    },
    {
      source:clock6, desc:"clock"
    },
    {
      source:clock7, desc:"clock"
    },
  ]

  let chair = [
    {
      source:chair1,desc:"chair"
    },
    {
      source:chair2,desc:"chair"
    },
    {
      source:chair3,desc:"chair"
    },
    {
      source:chair4,desc:"chair"
    },
    {
      source:chair5,desc:"chair"
    },
    {
      source:chair6,desc:"chair"
    }
  ]

  let laptopcharger = [
    {
      source:laptop_charger1, desc:"laptop charger"
    },
    {
      source:laptop_charger2, desc:"laptop charger"
    },
    {
      source:laptop_charger3, desc:"laptop charger"
    }
  ]

  let mobilecharger = [
    {
      source:mobile_charger1,desc:"mobile charger"
    },
    {
      source:mobile_charger2,desc:"mobile charger"
    },
    {
      source:mobile_charger3,desc:"mobile charger"
    },
    {
      source:mobile_charger4,desc:"mobile charger"
    },
    {
      source:mobile_charger5,desc:"mobile charger"
    }
  ]

  let monitor = [
    {
      source:monitor1, desc:"monitor"
    },
    {
      source:monitor2, desc:"monitor"
    },
    {
      source:monitor3, desc:"monitor"
    },
    {
      source:monitor4, desc:"monitor"
    },
    {
      source:monitor5, desc:"monitor"
    },
    {
      source:monitor6, desc:"monitor"
    },
    {
      source:monitor7, desc:"monitor"
    }
  ]

 let mouse = [
  {
    source:mouse1,desc:"mouse"
  },
  {
    source:mouse2,desc:"mouse"
  },
  {
    source:mouse3,desc:"mouse"
  },
  {
    source:mouse4,desc:"mouse"
  },
  {
    source:mouse5,desc:"mouse"
  },
  {
    source:mouse6,desc:"mouse"
  },
  {
    source:mouse7,desc:"mouse"
  }
 ]

  let watch = [
    {
      source:watch1,desc:"watch"
    },
    {
      source:watch2,desc:"watch"
    },
    {
      source:watch3,desc:"watch"
    },
    {
      source:watch4,desc:"watch"
    },
    {
      source:watch5,desc:"watch"
    },
    {
      source:watch6,desc:"watch"
    },
    {
      source:watch7,desc:"watch"
    },
    {
      source:watch8,desc:"watch"
    },
    {
      source:watch9,desc:"watch"
    },
    {
      source:watch10,desc:"watch"
    }
  ]

  let pant = [
    {
      source:pant1, desc:"pant"
    },
    {
      source:pant2, desc:"pant"
    },
    {
      source:pant3, desc:"pant"
    },
    {
      source:pant4, desc:"pant"
    }
  ]

  let pen = [
    {
      source:pen1,desc:"pen"
    },
    {
      source:pen2,desc:"pen"
    },
    {
      source:pen3,desc:"pen"
    },
    {
      source:pen4,desc:"pen"
    },
    {
      source:pen5,desc:"pen"
    },
    {
      source:pen6,desc:"pen"
    }
  ]

  let phone = [
    {
      source:phone1, desc:"phone"
    },
    {
      source:phone2, desc:"phone"
    },
    {
      source:phone3, desc:"phone"
    },
    {
      source:phone4, desc:"phone"
    },
    {
      source:phone5, desc:"phone"
    },
    {
      source:phone6, desc:"phone"
    }
  ]

  let light = [
    {
      source:light1,desc:"light"
    },
    {
      source:light2,desc:"light"
    },
    {
      source:light3,desc:"light"
    },
    {
      source:light4,desc:"light"
    },
    {
      source:light5,desc:"light"
    },
    {
      source:light6,desc:"light"
    },
    {
      source:light7,desc:"light"
    },
    {
      source:light8,desc:"light"
    },
    {
      source:light9,desc:"light"
    },
    {
      source:light10,desc:"light"
    },
    {
      source:light11,desc:"light"
    },
    {
      source:light12,desc:"light"
    },
    {
      source:light13,desc:"light"
    },
    {
      source:light14,desc:"light"
    },
    {
      source:light15,desc:"light"
    }
  ]

  let keyboard = [
    {
      source:keyboard1,desc:"key board"
    },
    {
      source:keyboard2,desc:"key board"
    },
    {
      source:keyboard3,desc:"key board"
    },
    {
      source:keyboard4,desc:"key board"
    },
    {
      source:keyboard5,desc:"key board"
    }
  ]

  let headphone = [
    {
      source:head_phone1,desc:"head phone"
    },
    {
      source:head_phone2,desc:"head phone"
    },
    {
      source:head_phone3,desc:"head phone"
    }
  ]

  let airpords = [
    {
      source:airpords1, desc:"air pords"
    },
    {
      source:airpords2, desc:"air pords"
    },
    {
      source:airpords3, desc:"air pords"
    },
    {
      source:airpords4, desc:"air pords"
    },
    {
      source:airpords5, desc:"air pords"
    }
  ]

  let laptopbattery = [
    {
      source:laptopbattery1, desc:"laptop battery"
    },
    {
      source:laptopbattery2, desc:"laptop battery"
    },
    {
      source:laptopbattery3, desc:"laptop battery"
    },
    {
      source:laptopbattery4, desc:"laptop battery"
    }
    
  ]

  let table = [
    {
      source:table1, desc:"table"
    },
    {
      source:table2, desc:"table"
    },
    {
      source:table3, desc:"table"
    },
    {
      source:table4, desc:"table"
    },
    {
      source:table5, desc:"table"
    },
    {
      source:table6, desc:"table"
    },
    {
      source:table7, desc:"table"
    }
  ]

  let tops = [
    {
      source:top1, desc :"tops"
    },
    {
      source:top2, desc :"tops"
    },
    {
      source:top3, desc :"tops"
    },
    {
      source:top4, desc :"tops"
    },
    {
      source:top5, desc :"tops"
    },
    {
      source:top6, desc :"tops"
    },
    {
      source:top7, desc :"tops"
    }
  ]

  let waterbottle = [
    {
      source:waterbottle1, desc:"water bottle"
    },
    {
      source:waterbottle2, desc:"water bottle"
    },
    {
      source:waterbottle3, desc:"water bottle"
    },
    {
      source:waterbottle4, desc:"water bottle"
    },
    {
      source:waterbottle5, desc:"water bottle"
    },
    {
      source:waterbottle6, desc:"water bottle"
    }
  ]

  let powerbank = [
    {
      source:powerbank1, desc:"power bank"
    },
    {
      source:powerbank2, desc:"power bank"
    },
    {
      source:powerbank3, desc:"power bank"
    },
    {
      source:powerbank4, desc:"power bank"
    },
    {
      source:powerbank5, desc:"power bank"
    },
    {
      source:powerbank6, desc:"power bank"
    }
  ]

  let shirt = [
    {
      source:shirt1, desc:"shirt"
    },
    {
      source:shirt2, desc:"shirt"
    },
    {
      source:shirt3, desc:"shirt"
    },
    {
      source:shirt4, desc:"shirt"
    }
  ]

  let laptop = [
    {
      source: laptop1,desc:"laptop"
    }
  ]

  let tshirt = [
    {
      source: tshirt1, desc:"tshirt"
    },
    {
      source: tshirt2, desc:"tshirt"
    },
    {
      source: tshirt3, desc:"tshirt"
    },
    {
      source: tshirt4, desc:"tshirt"
    },
    {
      source: tshirt5, desc:"tshirt"
    },
    {
      source: tshirt6, desc:"tshirt"
    },
    {
      source: tshirt7, desc:"tshirt"
    }
  ]

  let tab = [
    {
      source: tab1, desc:"tab"
    },
    {
      source: tab2, desc:"tab"
    },
    {
      source: tab3, desc:"tab"
    },
    {
      source: tab4, desc:"tab"
    }
  ]
  let shoes = [
    {
      source:shoe1,desc :"shoes"
    },
    {
      source:shoe2,desc :"shoes"
    },
    {
      source:shoe3,desc :"shoes"
    },
    {
      source:shoe4,desc :"shoes"
    },
    {
      source:shoe5,desc :"shoes"
    },
    {
      source:shoe6,desc :"shoes"
    },
    {
      source:shoe7,desc :"shoes"
    }
  ]

  let battery = [
    {
      source:battery1, desc :"battery"
    },
    {
      source:battery2, desc :"battery"
    },
    {
      source:battery3, desc :"battery"
    },
    {
      source:battery4, desc :"battery"
    },
    {
      source:battery5, desc :"battery"
    },
    {
      source:battery6, desc :"battery"
    },
    {
      source:battery7, desc :"battery"
    },
    {
      source:battery8, desc :"battery"
    },
    {
      source:battery9, desc :"battery"
    },
    {
      source:battery10, desc :"battery"
    },
    {
      source:battery11, desc :"battery"
    },
    {
      source:battery12, desc :"battery"
    }
  ]



  let images_show = [
    {
      src:monitor1, desc:"Monitor 4k Resolution"
    },
    {
      src:laptop_charger1, desc:"Acer Laptop Charger"
    },
    {
      src:chair1, desc:"clasic Blue Color Chair"
    },
    {
      src:head_phone3, desc:"Apple Headphone"
    },
    {
      src:clock1, desc:"Roman Wall Clock"
    },
    {
      src:watch1, desc:"Pink Color Watch"
    },
    {
      src:shoe1, desc:"Causal Shoes Unisex"
    },
    {
      src:top1, desc:"green tops"
    },
    {
      src:tab2, desc:"ipad"
    },
    {
      src:laptop1, desc:"mac book pro"
    },
    {
      src:tshirt4, desc:"blue with gray Tshirt"
    },
    {
      src:pen4, desc:"Royal ink Pen"
    },
    {
      src:phone1, desc:"iphone 13 512 variant"
    },
    {
      src:pant1, desc:"Sandel Color Causal Pant"
    },
    {
      src:light7, desc:"LIght"
    },
    {
      src:battery3, desc:"mobile battery"
    },
    {
      src:keyboard2, desc:"Apple key board"
    },
    {
      src:laptopbattery2, desc:"laptop battery"
    },
    {
      src:mouse2, desc:"Royal White Mouse"
    },
    {
      src:airpords4,desc:"Air Pords"
    }
]
  const [count,setcount] = useState(0);
  const [stop,setstop] = useState(true);
  const [menu,setmenu] = useState("menu_display_none")
  const [cartcount,setcartcount] = useState(0)
  const [input,setinput] = useState("")
  const [search,setsearch] = useState([])
  const [display_search,set_display_search] = useState("search_display_none")
  const [dark_mode,setdark_mode] = useState("Light")
  const change_white_black = useRef();
  const [images,setimgaes] = useState()
  const navigate = useNavigate();
  const [cartitem,setcartitem] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      if(stop == true){
        if(count >= image.length-1){
          setcount(0)
        }
        else{
          setcount(count+1)
        }
      }
    }, 2000);
    return () => clearInterval(interval);  
  });

  useEffect(()=>{
    if((input == "")||(!having_items.includes(input))){
      navigate("/")
    }
  },[input])

  function left_click(){
    setstop(false)
    setcount(count - 1);
    setTimeout(()=>{
      setstop(true)
      setcount(count)
    },2000)
    setinput("hellow")
  }
  
  function right_click(){
    setstop(false)
    setcount(count + 1);
    setTimeout(()=>{
      setstop(true)
      setcount(count)
    },2000)
   
  }

  function get_click_imgae_1(){
    let b = image[count]
    setimgaes(b)
  }

  function get_click_imgae_2(e){
    let a = e.target.src
    console.log(a);
    a = a.slice(21)
    setimgaes(a)
    navigate("/show");
  }

  function go_top(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  function get_input(e){
    console.log(e.target.value);
    setinput(e.target.value)
    let chart = e.target.value
    if(chart != ""){
      set_display_search("search_display_block")
    }
    else{
      set_display_search("search_display_none")
    }
    let a = having_items.filter( (item) => {

      if(item.includes(chart)){
        return item
      }

    })
    if(a.length == 0){
      setsearch(["No Result Found"])
    }
    else{
      setsearch(a)
    }
  }
  let searched_displayed_items = {clock,chair,laptopcharger,mobilecharger,monitor,mouse,watch,pant,pen,phone,light,keyboard,headphone,airpords,laptopbattery,table,tops,waterbottle,powerbank,shirt,tshirt,laptop,tab,shoes,battery}
  
  const amma = searched_displayed_items[input] || []

  function get_list_click(items){
    console.log(items);
    setinput(items)
    set_display_search("search_display_none")
    navigate("/show_searched_item")
  }

  useEffect(()=>{
    console.log(search); 
  },[search])
  
  function dark_mode_click(e){
    if(e.target.checked){
      setdark_mode("Dark")
      document.documentElement.style.backgroundColor = "black";
      change_white_black.current.style.color = "white";
    }
    else{
      setdark_mode("Ligth")
      document.documentElement.style.backgroundColor = " rgb(207, 216, 216)";
      change_white_black.current.style.color = "black";
    }
  }

  function searchs(){
    if(input != ""){
      window.scrollTo({
        top:600,behavior:'smooth'
      })
    }
  }

  function get_searched_image_clicked_image(e){
    setimgaes(e);
    navigate("/show")
  }

  function gohome(){
    navigate("/")
  }

  function add_item_to_add_to_cart(){
    if(!cartitem.includes(images)){
      setcartitem([...cartitem,images])
      setcartcount(cartcount+1)
    }
  }

  useEffect(()=>{
    console.log(cartitem);
  },[cartitem])

  return (
    <div className="App">
      <div className="dark_mode">
        <input
          id="drak_mode_input"
          type="checkbox"
          onChange={dark_mode_click}
        />
        <label id="dark_mode_label" htmlFor="drak_mode_input"></label>
        <label id="dark_mode_text" ref={change_white_black}>
          {dark_mode}
        </label>
      </div>

      <div className="name">
        <h1>GRANT LEAF</h1>
        <p>
          <i>A E-COMMERCE WEBPAGE </i>
        </p>
      </div>

      <div className="nav">
        <ul>
          <li>
            HOME <IoIosHome />
          </li>
          <li>
            ORDER NOW <AiFillThunderbolt />
          </li>
          <li>
            DEALS OF THE DAY <LuAlarmClock />
          </li>
          <li>
            CART <FaShoppingCart />
          </li>
          <li>
            <input type="text" value={input} onChange={get_input} />
            <FaSearch className="zoom" onClick={searchs}/>
          </li>
        </ul>
      </div>

      <div className="search_relative">
        <div className={display_search}>
          <ul>
            {search.map((item, index) => (
              <li key={index} onClick={ ()=> get_list_click(item)}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="nav_mobile">
        <ul>
          <li>
            <FaShoppingCart className="cart_mobile" />
          </li>
          <li className="cart_count">{cartcount}</li>
          <li>
            <input type="text" value={input} onChange={get_input} />
            <FaSearch className="zoom" onClick={searchs}/>
          </li>
          <li>
            <IoMdMenu
              className="menu"
              onClick={() => {
                if (menu == "menu_display_flex") {
                  setmenu("menu_display_none");
                } else {
                  setmenu("menu_display_flex");
                }
              }}
            />
          </li>
        </ul>
        <div>
          <div className={menu}>
            <ul>
              <li>ORDER NOW</li>
              <li onClick={gohome}>HOME</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="outer_break">
        <div className="break">
          <FaLessThan className="left" onClick={left_click} />
          <div className="image_disp">
            <img
              src={image[count]}
              className="image_scroll"
              onClick={get_click_imgae_1}
            />
          </div>
          <FaLessThan className="right" onClick={right_click} />
        </div>
      </div>
      <div className="content">

        <Routes>

          <Route
            path="/"
            element={
              <div className="div">
                {
                images_show.map((image, index) => (
                  <React.Fragment key={index}>
                    <div className="index" onClick={get_click_imgae_2}>
                      <img src={image.src} />
                      <p className="des">{image.desc}</p>
                    </div>
                  </React.Fragment>
                ))
                }
              </div>
            }
          />
          <Route path = '/show' element = {
            <div className='outer_element_1'>
              <img src = {images} />
              <div className='buy_now'>buy now</div>
              <div className='Add_To_Cart' onClick={add_item_to_add_to_cart}>Add to cart</div>
              <div className='paragraph'>
                <h3>Description</h3>
                <p>Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium minus, possimus repudiandae a odio deleniti beatae aperiam! Amet, placeat exercitationem. adipisicing elit. Facere laborum reprehenderit distinctio facilis aperiam provident ipsam quia et quam quos!</p>
              </div>
            </div>
          }/>
          <Route path='/show_searched_item' element = {
            <div className='outer_element_2'>
            {
              amma.map( (item,index) => (
                <React.Fragment key={index}>
                  <img src = {item.source} onClick={()=>get_searched_image_clicked_image(item.source)}/>
                </React.Fragment>
              ))
            }
            </div>
            }/>
            <Route path='/show_cart_items' element = {
              <div></div>
            }/>

        </Routes>

      </div>
      <div>
        <FaArrowCircleUp className="up_arrow" onClick={go_top} />
      </div>
    </div>
  );
}
export default App;