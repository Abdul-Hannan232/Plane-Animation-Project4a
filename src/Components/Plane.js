// Panga


import Header from "./Header";

//useWebAnimations hook
import useWebAnimations from "@wellyshen/use-web-animations";
// Images
// import Images from "./images.json"

function Plane() {
    const { ref, playState, getAnimation } = useWebAnimations({
        keyframes: [
            { transform: "translate(0,45vh) rotate(0deg)" },
            { transform: "translate(15vw,45vh) rotate(0deg)" },  //

            { transform: "translate(20vw,30vh) rotate(-40deg)" }, //12312312
            { transform: "translate(25vw,20vh) rotate(-25deg)" },        // 23
            { transform: "translate(30vw,17vh) rotate(-10deg)" },
            { transform: "translate(45vw,15vh) rotate(0deg)" },
            { transform: "translate(50vw,15vh) rotate(0deg)" },
            { transform: "translate(55vw,15vh) rotate(15deg)" },
            { transform: "translate(70vw,30vh) rotate(30deg)" },
            { transform: "translate(80vw,35vh) rotate(20deg)" },

            { transform: "translate(85vw,40vh) rotate(0deg)" },
            { transform: "translate(100vw,45vh) rotate(0deg)" },

        ],
        animationOptions: {
            duration: 12000,
            iterations: Infinity,
        }
    });


    return (
        <div className="Main">

            <Header />

            <div className="plane" >
                <img ref={ref} src="https://raw.githubusercontent.com/MuhammadMohsin/PanacloudBootcamp2020/session_13/Html_sample/plane.gif" alt="Plane" id="plane" />
            </div>


            <button onClick={() => { getAnimation().play() }} >Play</button>
            <button onClick={() => { getAnimation().pause() }} >Pause</button>
            <button onClick={() => { getAnimation().updatePlaybackRate(getAnimation().playbackRate * 2) }} >Increase Speed</button>
            <button onClick={() => { getAnimation().updatePlaybackRate(getAnimation().playbackRate * 0.5) }} >Decrease Speed</button>
            <h2 style={{ color: "white" }}>Plane is {playState} </h2>

            <div className="moon" >
                <img src="https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Moon" id="moon" />
            </div>

        </div>
    );
}

export default Plane;