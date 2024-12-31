import React, { useEffect, useState } from 'react'
import { Meteors } from "../acenComponents/meteros";
import axios from 'axios';
function GitCard({ props }) {
    const [Data, setData] = useState("")
    useEffect(() => {
        axios.get(`https://api.github.com/users/SHRIVISHNU-CM`)
            .then((res) => {
                setData(res.data)

            })
            .catch(e => console.log(e))
    }, [])
    return (
        <>
            <div className="w-full flex justify-center items-center">
                <div className=" w-full relative max-w-xs lg:max-w-xl">
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                    <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-around items-center">

                        <div>

                            {
                                props ?
                                    <h1 className="font-bold text-[16px] lg:text-xl text-white mb-4 relative z-50">
                                        GIT Profile {props}
                                    </h1>
                                    : <h1 className="font-bold text-[16px] lg:text-xl text-white mb-4 relative z-50"> GIT Status</h1>
                            }


                            <p className="font-normal text-[16px] lg:text-xl text-white mb-4 relative z-50">
                                USERNAME : {Data.login}
                            </p>
                            <p className="font-normal text-[16px] lg:text-xl text-white mb-4 relative z-50">
                                Bio : {Data.bio}
                            </p>
                            <p className="font-normal text-[16px] lg:text-xle text-white mb-4 relative z-50">
                                Respositories : {Data.public_repos}
                            </p>
                        </div>


                        <img src={Data.avatar_url} style={{ width: "50px", borderRadius: "100%", zIndex: 50 }} />

                        <Meteors number={50} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GitCard
