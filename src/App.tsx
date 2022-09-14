import './styles/main.css';
import logo from './assets/Logo.svg'
import {MagnifyingGlassPlus} from 'phosphor-react'

export function App() {

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center m-20'>

      <img className='' src={logo} />

      <h1 
        className='text-6xl text-white font-black m-20'>
          Seu <span className='text-transparent bg-nlw-gradiante bg-clip-text'>duo</span> esta aqui.
      </h1>
      
      <div className='grid grid-cols-6 gap-6'> {/* Games */}
        <a href="" className='relative rounded-lg overflow-hidden'>
              <img src="/apex.png" alt="" />

              <div className='w-full pt-16 pb-4 px-4 bg-games-gradient absolute bottom-0 left-0 right-0'>

                <strong className='font-bold text-white block'>Apex Legends</strong>
                <span className='text-zinc-300 text-sm block mt-1'>2 anuncios</span>
              </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
              <img src="/cs.png" alt="" />

              <div  className='w-full pt-16 pb-4 px-4 bg-games-gradient absolute bottom-0 left-0 right-0'>

                <strong className='font-bold text-white block'>CS</strong>
                <span className='text-zinc-300 text-sm block mt-1'>20 anuncios</span>
              </div>
              </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
              <img src="/dota.png" alt="" />

              <div  className='w-full pt-16 pb-4 px-4 bg-games-gradient absolute bottom-0 left-0 right-0'>

                <strong className='font-bold text-white block'>Dota</strong>
                <span className='text-zinc-300 text-sm block mt-1'>1 anuncio</span>
              </div>
              </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
              <img src="/fortnite.png" alt="" />

              <div  className='w-full pt-16 pb-4 px-4 bg-games-gradient absolute bottom-0 left-0 right-0'>

                <strong className='font-bold text-white block'>Fortnite</strong>
                <span className='text-zinc-300 text-sm block mt-1'>40 anuncios</span>
              </div>
              </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
              <img src="/lol.png" alt="" />

              <div  className='w-full pt-16 pb-4 px-4 bg-games-gradient absolute bottom-0 left-0 right-0'>

                <strong className='font-bold text-white block'>League of Legends</strong>
                <span className='text-zinc-300 text-sm block mt-1'>25 anuncios</span>
              </div>
              </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
              <img src="/warcraft.png" alt="" />

              <div  className='w-full pt-16 pb-4 px-4 bg-games-gradient absolute bottom-0 left-0 right-0'>

                <strong className='font-bold text-white block'>Warcraft</strong>
                <span className='text-zinc-300 text-sm block mt-1'>34 anuncios</span>
              </div>
              </a>
      </div>

      <div className='pt-1 bg-nlw-gradiante  self-stretch mt-8 rounded-lg overflow-hidden'>
        <div className='bg-[#2a2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-white text-2xl font-black block'>Não encontrou seu duo ?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className='transition ease-in-out delay-10
                             py-3 px-4 bg-violet-500 text-white hover:bg-violet-600  rounded
                             flex items-center gap-3'>

            <MagnifyingGlassPlus size={24}/> Publicar seu anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

