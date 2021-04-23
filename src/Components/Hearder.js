import React from 'react';
import Link from './link';

const Header =()=>{
return (
    <div className="ui yellow five item inverted menu">
       <Link href='/' className="item">Accordion</Link>
       <Link href="/list" className="item">Search</Link>
       <Link href="/dropdown" className="item">dropDown</Link>
       <Link href="/translate" className="item">Translate</Link>
    </div>
  );
};

export default Header;