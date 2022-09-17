

interface GameBannerProps {
    bannerUrl: string;
    adsCount: number;
}

export function GameBanner({bannerUrl, adsCount}: GameBannerProps) {
    return (
        <a href="" className='relative rounded-lg overflow-hidden '>
              <img src={bannerUrl} alt="" />

              <div className='w-full pt-16 pb-4 px-4 bg-games-gradient absolute bottom-0 left-0 right-0'>

                <span className='text-zinc-300 text-sm block mt-10'>{adsCount} anuncios</span>
              </div>
        </a>
    )
}