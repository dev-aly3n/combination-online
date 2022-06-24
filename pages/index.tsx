import { useRef, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [specValue, setSpecValue] = useState(0);
  const [rangeOfNumbers, setRangeOfNumbers] = useState([]);
  const formRef = useRef<HTMLFormElement>(null);

  const specValueChangeHandler = (e) => {
    setSpecValue(e.target.valueAsNumber);
  };
  const rangeChangeHandler = (e) => {
    const range = e.target.value.split(" ");
    console.log(range);
    setRangeOfNumbers(e.target.valueAsNumber);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className={"w-screen h-screen flex justify-center items-center"}>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="w-full h-full flex flex-col justify-center items-center gap-5"
      >
        <input
          onChange={specValueChangeHandler}
          type={"number"}
          value={specValue}
          className="w-40 h-10 border-2 border-green-300"
        />
        <textarea
          onChange={rangeChangeHandler}
          value={rangeOfNumbers}
          className="w-96 h-96 border-2 border-blue-300"
        />
        <button type={"submit"} className="w-24 h-10 rounded-xl bg-red-500">
          calculate
        </button>
      </form>
    </div>
  );
}
