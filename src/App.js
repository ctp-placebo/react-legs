import React, { Component, useState } from 'react';
import {Icon} from '@iconify/react';
import Signs from './components/Signs';

import './App.css';

const SIGNDATA = [
  {
         id: 1,
         name: "ku",
         numberLegs: 4,
         voice: "pathToAudio",
         voiceText: "moo",
         signImg: "cow.svg",
         additionalImage: "pathToImgFile.png",
         latinName: "bovine",
     },
     {
         id: 2,
         name: "syklist",
         numberLegs: 2,
         voice: "pathToAudio.wav",
         voiceText: "human",
         signImg: "cyclist.svg",
         additionalImage: "pathToImgFile.png",
         latinName: "homo sapiens",
     },
     {
         id: 3,
         name: "elg",
         numberLegs: 4,
         voice: "pathToAudio.wav",
         voiceText: "nieegh",
         signImg: "elk.svg",
         additionalImage: "pathToImgFile.png",
         latinName: "equine",
     },
     {
         id: 4,
         name: "hest",
         numberLegs: 6,
         voice: "pathToAudio",
         voiceText: "neigh",
         signImg: "horse.svg",
         additionalImage: "pathToImgFile.png",
         latinName: "equine",
     },
     {
         id: 5,
         name: "gang vei",
         numberLegs: 2,
         voice: "pathToAudio",
         voiceText: "hello",
         signImg: "pedestrian_crossing.svg",
         additionalImage: "pathToImgFile.png",
         latinName: "homo sapiens"
     },
     {
         id: 6,
         name: "mennesker",
         numberLegs: 4,
         voice: "pathToAudio",
         voiceText: "hei",
         signImg: "people_2.svg",
         additionalImage: "pathToImgFile.png",
         latinName: "ovine"
     },
     {
         id: 7,
         name: "hjort",
         numberLegs: 4,
         voice: "pathToAudio",
         voiceText: "oaoaoao",
         signImg: "prancing_deer.svg",
         additionalImage: "pathToImgFile.png",
         latinName: ""
     },
     {
         id: 8,
         name: "sau med lam",
         numberLegs: 8,
         voice: "pathToAudio",
         voiceText: "baa",
         signImg: "sheep_and_lamb.svg",
         additionalImage: "pathToImgFile.png",
         latinName: "ovine"
     },
     {
         id: 9,
         name: "skiier",
         numberLegs: 2,
         voice: "pathToAudio.wav",
         voiceText: "human",
         signImg: "skiing.svg",
         additionalImage: "pathToImgFile.png",
         latinName: "pseudo homo sapiens"
     },
     {
         id: 10,
         name: "hjort 2",
         numberLegs: 4,
         voice: "pathToAudio",
         voiceText: "Stop shooting at me!",
         signImg: "red_deer.svg",
         additionalImage: "pathToImgFile.png",
         latinName: ""
     },
     {
         id: 11,
         name: "vei arbeid",
         numberLegs: 2,
         voice: "pathToAudio",
         voiceText: "Drive with care",
         signImg: "roadworks.svg",
         additionalImage: "pathToImgFile.png",
         latinName: ""
     },
 ];

 const App = () => {
  const [signs, setSigns] = useState(SIGNDATA);
  // const [totalLegs, setTotalLegs] = useState(0);

  // TODO: create component for custom signs (lke a wooden farm sign a user sees IRL)
  const addSignHandler = sign => {
    setSigns(prevSigns => {
      return [sign, ...prevSigns];
    });
  };

  return (
    <div className='App'>
      <div className='App-header'>
        <h2>TELLE BENA MINE!
          {/* <Icon icon="ic:outline-settings" color="orange" /> */}
        </h2>
        <p className="h2-p">_🐄_</p>
      </div>
      <div className='App-intro signs'>
        <Signs items={signs}/>
      </div>
    </div>
  )
  
 };

export default App;
