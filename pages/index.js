import Navbar from '@/components/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import Newspage from './Newspage';

function Homepage(){

  return(
  <div class="container">
    <h1 style={{textAlign: 'center'}}>Hyderabad NewsPaper</h1>
    <Navbar/>
    <Newspage/>
  </div>
  )

}
export default Homepage;