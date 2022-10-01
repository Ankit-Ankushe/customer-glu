import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Backdrop} from '../src/components/Backdrop/Backdrop'
import {BottomDrawer} from '../src/components/BottomDrawer/BottomDrawer'
import {ToggleDrawer} from '../src/components/BottomDrawer/ToggleDrawer'

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const arrayList = ["Google Keep","Google Docs","Google Plus","Google Hangouts"]

  const toggleHandler = () => {
    setDrawerOpen(!drawerOpen);
  };
  const backdropHandler = () => {
    setDrawerOpen(false);
  };
  let backdrop;
  if (drawerOpen) {
    backdrop = <Backdrop backdropHandler={backdropHandler} />;
  }
  return (
    <div className="App" >
      <ToggleDrawer toggleHandler={toggleHandler}/>
      {backdrop}
      <BottomDrawer drawerOpen={drawerOpen} arrayList={arrayList}/>
    </div>
  );
}

export default App;
