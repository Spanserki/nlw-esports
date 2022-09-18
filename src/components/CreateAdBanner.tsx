import { MagnifyingGlassPlus } from "phosphor-react";
import *as Dialog from '@radix-ui/react-dialog'

export function CreatAdBanner() {
    return (
        <div className='pt-1 bg-nlw-gradiante  self-stretch mt-20 rounded-lg overflow-hidden'>
            <div className='bg-[#2a2634] px-8 py-6 flex justify-between items-center'>
            <div>
                <strong className='text-white text-2xl font-black block'>Não encontrou seu duo ?</strong>
                <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
            </div>
            <Dialog.DialogTrigger className='transition ease-in-out delay-10
                                py-3 px-4 bg-violet-500 text-white hover:bg-violet-600  rounded
                                flex items-center gap-3'>

                <   MagnifyingGlassPlus size={24}/> Publicar seu anúncio
            </Dialog.DialogTrigger>
            </div>
      </div>
    )
}