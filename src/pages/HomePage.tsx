import { useState } from "react";
import { Dancingtext } from "../components/Layout/DancingText";
import { LetterConstant } from "../constants/letterConstants";

export const HomePage = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      <Dancingtext
        page={page}
        setPage={setPage}
        lettersArray={LetterConstant[page]}
      />
    </>
  );
};
