import React from "react";
import CounterClass from "./components/useState/counter-class.component";
import HookCounter from "./components/useState/hook-counter.component";
import HookCounterTwo from "./components/useState/hook-prevstate-counter.component";
import HookCounterThree from "./components/useState/object-usestate-hook.component";
import HookCounterFour from "./components/useState/array-usetate-hook.component";
import HookCounterOne from "./components/useEffect/useeffect-hook-after-render.component";
import ConditionalRender from "./components/useEffect/conditional-render.component";
import LogMouse from "./components/useEffect/mouse-position.component";
import HookMouse from "./components/useEffect/run-effects-once.component";
import MouseContainer from "./components/useEffect/mouse-container.component";
import IntervalCounter from "./components/useEffect/interval-counter-class.component";
import IntervalHookCounter from "./components/useEffect/interval-hook-counter.component";
import FetchDataHook from "./components/fetching-data/fetching-data-1.component";
import FetchDataHookIndividual from "./components/fetching-data/individual-post.component";
import ComponentC from "./components/useContext/class-context/component-c";
import UseReducerCounterOne from "./components/useContext/useContext-hook/usereducer-counter-1";
import UseReducerCounterTwo from "./components/useContext/useContext-hook/userducer-counter-2";
import UseReducerCounterThree from "./components/useContext/useContext-hook/usereducer-counter-3";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <CounterClass /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterOne /> */}
      {/* <ConditionalRender /> */}
      {/* <LogMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <FetchDataHook /> */}
      {/* <FetchDataHookIndividual /> */}
      {/* <UserContext.Provider value={"Florin"}>
        <ChannelContext.Provider value={"codeevolutin"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <UseReducerCounterOne /> */}
      {/* {<UseReducerCounterTwo />} */}
      <UseReducerCounterThree />
    </div>
  );
}

export default App;
