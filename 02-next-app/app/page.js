'use client'

import state from "./state/page"
import styles from "./page.module.css";

export default function Home() {
  // console.log("Where do I render");
  // function example()
  // {
  // alert("I m clicked")
  // }
  // function handlechange(e) {
  //   console.log(e.target.value)
  // }
  return (
    // <main className="">
    //   {styles.main}
    //   <h2>Hello</h2>
    //   <ExampleClient />
    //   <ExampleServer/>
    // </main>
    // <main>

    //   <button onClick={example()}> click me</button>
    //   <br/>
    //   <input type="text" placeholder="Please do something" onChange={handlechange}/>
    // </main>
    <state/>
  );
}
