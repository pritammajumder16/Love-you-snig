import Button from "../shared/Button";
import { HomePageBody } from "../../interfaces";
import { useState, useEffect } from "react";
import "animate.css";
import { SnigPicture } from "../../assets/imageConstants";

export const Dancingtext = ({ setPage, page, lettersArray }: HomePageBody) => {
  const [clicksOnNo, setClicksOnNo] = useState(0);
  const [buttonPosition, setButtonPosition] = useState({
    top: 0,
    left: 0,
  });

  const buttonSize = 50; // Adjust this size according to your button dimensions

  const textOptions = [
    "Ekbar no press karke dekhlo kya hota hai 💡",
    "Apne No press q kiya... I am hurt 🥺",
    "Bol bhi do ab ha... 🥀",
    "Please haa bol do na ab 😭",
    "Boht hua! No button hi gayab kar raha hu... ha bolna hi parega ab! 😡",
  ];

  useEffect(() => {
    const updateButtonPosition = () => {
      const maxTop = window.innerHeight - buttonSize;
      const maxLeft = window.innerWidth - buttonSize;

      const randomTop = Math.floor(Math.random() * maxTop);
      const randomLeft = Math.floor(Math.random() * maxLeft);

      setButtonPosition({ top: randomTop, left: randomLeft });
    };

    updateButtonPosition();

    if (clicksOnNo > 0) {
      updateButtonPosition();
    }
  }, [clicksOnNo]);

  const handleNoClick = () => {
    setClicksOnNo((s) => {
      if (s + 1 >= textOptions.length - 1) return textOptions.length - 1;
      return s + 1;
    });
  };

  return (
    <div
      className={`h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center text-white bg-romantic-bg`} // Background styles
    >
      <div className="flex flex-col justify-center items-center">
        {lettersArray.map((letters, lineIndex) => (
          <div key={lineIndex} className="text-7xl font-bold animate-text flex">
            {letters.map((letter, letterIndex) => (
              <h1
                key={letterIndex}
                className={`text-shadow ${letter.color} animate__animated ${letter.animationClass}`}
              >
                <span className={letter.color}>
                  {letter.letter == "" ? <span>&nbsp;</span> : letter.letter}
                </span>
              </h1>
            ))}
          </div>
        ))}

        {page == 4 && (
          <img
            src={SnigPicture}
            alt=""
            className="h-[20rem] mt-4 rounded-lg overflow-hidden shadow-lg"
            style={{ backdropFilter: "blur(200px)" }}
          />
        )}
        {page < 3 ? (
          <Button
            onClick={() => setPage((s) => s + 1)}
            variant="romantic"
            type="button"
            className="mt-10 w-fit"
          >
            Next
          </Button>
        ) : (
          page < 4 && (
            <div className="flex flex-col gap-2">
              <div className="flex justify-center">
                <Button
                  variant="romantic"
                  onClick={() => setPage((s) => s + 1)}
                  type="button"
                  className="mt-10 w-fit"
                >
                  Yes
                </Button>{" "}
                {textOptions.length - 1 > clicksOnNo && (
                  <>
                    {clicksOnNo == 0 ? (
                      <Button
                        variant="romantic"
                        type="button"
                        onClick={handleNoClick}
                        className="ml-3 mt-10 w-fit"
                      >
                        No
                      </Button>
                    ) : (
                      <Button
                        variant="romantic"
                        type="button"
                        onClick={handleNoClick}
                        className="ml-3 mt-10 w-fit"
                        style={{
                          position: "absolute",
                          top: buttonPosition.top,
                          left: buttonPosition.left,
                        }}
                      >
                        No
                      </Button>
                    )}
                  </>
                )}
              </div>
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                  <span className="relative z-20 p-4 w-full text-3xl font-bold text-yellow-400 text-justify">
                    {textOptions[clicksOnNo]}
                  </span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
