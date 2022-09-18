import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import "./styles/main.css";

import logo from "./assets/logo.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { CreateAdModal } from "./components/CreateAdModal";
import axios from "axios";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games").then(({data}) => {
      console.log(data);
      setGames(data);
    });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src={logo} alt="Logo " />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(({ id, title, bannerUrl, _count }) => {
          return (
            <GameBanner
              key={id}
              title={title}
              bannerUrl={bannerUrl}
              adsCount={_count.ads}
            />
          );
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
