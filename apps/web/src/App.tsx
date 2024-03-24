import { useState } from "react";
import Credit from "@web/components/screens/credit";
import Installments from "@web/components/screens/installments";
import Pix from "@web/components/screens/pix";
import Success from "@web/components/screens/success";

interface ScreenMap {
  [key: number]: JSX.Element;
}

const App = () => {
  const [screen, setScreen] = useState<number>(0);

  const startDemo = () => {
    setScreen(1)
    
    setTimeout(() => {
      setScreen(2)
      setTimeout(() => {
        setScreen(3)
        setTimeout(() => {
          setScreen(4)
        }, 4000)
      }, 4000)
    }, 4000)
  };

  const Screens: ScreenMap = {
    1: <Installments />,
    2: <Pix />,
    3: <Credit />,
    4: <Success />
  };

  return (
    <>
      {screen === 0 && (
        <div className="w-full h-[90vh] flex justify-center items-center">
          <button
            onClick={startDemo}
            className="px-4 bg-woovi-green text-[#fff] rounded-md mx-4 py-4 font-sans mt-3 flex justify-center text-extrabold text-xl"
          >
            Entrar na demonstração
          </button>
        </div>
      )}
      {Screens[screen]}

    </>
  );
};

export default App;
