import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from "./state-drills/HelloWorld";
import Bomb from "./state-drills/Bomb";
import RouletteGun from "./state-drills/RouletteGun";

const firstTooltip = (
    <Tooltip color='hotpink' message = 'tooltip message'>
        ipsum
    </Tooltip>
)
const secondTooltip = (
    <Tooltip color='#126BCC' message = 'another tooltip message'>
        officiis
    </Tooltip>
)

function App() {
  return (
      <main className='App'>
        <HelloWorld />
        <Bomb />
        <RouletteGun />
       {/*   <Counter count={123} />
          <TheDate />
          <Messages name='Messages' unread={0} />
          <Messages name='Notifications' unread={10} />
        <Split className='left' flexBasis={2}>
            This is the content for the left `Split`. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
        <Tooltip message = 'one more tooltip message'>
            Necess
        </Tooltip>
        </Split>
          <Split className='right'>
              This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
          </Split>*/}
      </main>
  );
}

export default App;