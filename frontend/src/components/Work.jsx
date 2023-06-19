import cmr from '../assets/cmr.jpg'
import arduino from '../assets/arduino.jpg'
import nodemailer from '../assets/nodemailer.png'
const Work = () => {


    return (
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10'>
            <div class="group h-96 w-80 [perspective:1000px]">
                <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div class="absolute inset-0">
                        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={cmr} alt="cmr" />
                    </div>
                    <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="flex min-h-full flex-col items-center justify-center">
                            <h1 class="text-3xl font-bold">Chiangmai Rent a car</h1>
                            <p class="text-base">ระบบบริหารและบริการเช่ารถออนไลน์</p>
                            <a href="https://youtu.be/PH_clK2L3ts" target='_blank'>
                            <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">View More</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="group h-96 w-80 [perspective:1000px]">
                <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div class="absolute inset-0">
                        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={arduino} alt="arduino" />
                    </div>
                    <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="flex min-h-full flex-col items-center justify-center">
                            <h1 class="text-3xl font-bold">Fire alarm system</h1>
                            <p class="text-base">ระบบแจ้งเตือนอัคคีภัย</p>
                            <a href="https://www.thailandinnovationportal.com/info/innovation/item/51062" target='_blank'>
                            <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">View More</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="group h-96 w-80 [perspective:1000px]">
                <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div class="absolute inset-0">
                        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={nodemailer} alt="nodemailer" />
                    </div>
                    <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="flex min-h-full flex-col items-center justify-center">
                            <h1 class="text-3xl font-bold">Nodemailer</h1>
                            <p class="text-base">การส่ง Email ด้วย Nodemailer</p>
                            <a href="https://www.facebook.com/SoftEngPYU/videos/272720261973644" target='_blank'>
                            <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">View More</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default Work