import React from 'react'

const leftSidemenu = () => {
    return (
            <div className="w-2/12 h-full rounded-bl-3xl bg-black xl:block hidden">
                    <ul className='text-white flex flex-col mt-10 items-center'>
                        <li className="mt-5 cursor-pointer px-14 py-4 font-semibold hover:text-black rounded-2xl hover:bg-[#F2FC89]">Pinned</li>
                        <li className="mt-5 cursor-pointer px-14 py-4 font-semibold hover:text-black rounded-2xl hover:bg-[#F2FC89]">All</li>
                        <li className="mt-5 cursor-pointer px-14 py-4 font-semibold hover:text-black rounded-2xl hover:bg-[#F2FC89]">Archived</li>
                        <li className="mt-5 cursor-pointer px-14 py-4 font-semibold hover:text-black rounded-2xl hover:bg-[#F2FC89]">Blocked</li>
                        <li className="mt-5 cursor-pointer px-14 py-4 font-semibold hover:text-black rounded-2xl hover:bg-[#F2FC89]">Trash</li>
                    </ul>
            </div>
    )
}

export default leftSidemenu
