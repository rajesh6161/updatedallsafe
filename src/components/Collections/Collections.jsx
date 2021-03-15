import React from 'react';
import './Collections.css';

import HeadMenu from '../HeadMenu/HeadMenu';
import Footer from '../Footer/Footer';
import SafetyBanner from '../SafetyBanner/SafetyBanner';
import NavBar from '../NavBar/NavBar';
import Card from './Card';
import collection from './data';
function Collections() {
  return (
    <>
      <NavBar />
      <div className="menu-head" align="center">
        <HeadMenu />
      </div>
      <div className="c_container">
        {collection.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <SafetyBanner />
      <Footer />
    </>
  );
}

export default Collections;
