
import Pic from "../public/Vishnu.jpeg"
function Head() {
    return (
        <>
            <div className="flex justify-evenly items-center my-5 text-white">
                <div className="card w-[350px]">
                    <div className="card-body">
                        <h2 className="">
                            Hi there ,I'm

                        </h2>
                        <h1 className="card-title ">
                            <span className="border-b-4 border-b-lime-500">Shri Vishnu C M</span>
                        </h1>
                        <p>A <span className="text-orange-500 font-semibold">Full-Stack developer</span> passionate about moulding ideas into breathtaking digital experiences</p>
                        <div className="card-actions justify-end">
                            <a href="https://drive.google.com/file/d/1ZajV39uOHf0p3SQXaHdThGBKwZ_-DYMc/view?usp=sharing" className="btn btn-success text-white">Resume</a>
                        </div>


                    </div>

                </div>
            
                <img src={Pic} className="w-[300px] h-[300px] rounded-full shadow-"/>

            </div>
        </>
    )
}

export default Head
