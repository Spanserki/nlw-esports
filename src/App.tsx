import './styles/main.css';
import logo from './assets/Logo.svg'
import { GameBanner } from './components/GameBanner';
import { CreatAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';
import *as Dialog from '@radix-ui/react-dialog'
import { CreateAdModal } from './components/CreateAdModal';
import axios from 'axios'

interface gameProps {
  id: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

export function App() {

  const [games, setGames] = useState<gameProps[]>([])

  useEffect(() => {
    axios('http://localhost:3000/games')
    .then(response => {
      setGames(response.data)
    })
  }, [])

  return (
    <div className='max-w-[1280px] mx-auto flex flex-col items-center m-20'>

      <img className='' src={logo} />

      <h1 
        className='text-6xl text-white font-black m-20'>
          Seu <span className='text-transparent bg-nlw-gradiante bg-clip-text'>duo</span> esta aqui.
      </h1>
      
      <div className='grid grid-cols-6 gap-6'> {/* Games */}
        {
          games.map(date => <GameBanner 
                key={date.id}
                bannerUrl={date.bannerUrl}
                adsCount={date._count.ads}
              />)
        }

      </div>
         <Dialog.Root>
            <CreatAdBanner />
            <CreateAdModal />
         </Dialog.Root>
    </div>
  )
}

