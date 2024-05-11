export interface Letter {
  letter: string;
  color: string;
  animationClass?: string;
}
export interface HomePageBody {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  lettersArray: Letter[][];
}
