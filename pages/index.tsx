import React, { useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import { sumOfWhatever } from "../utils/index";

export default function Home() {
  const [specValue, setSpecValue] = useState();
  const [limitValue, setLimitValue] = useState();
  const [rangeOfNumbers, setRangeOfNumbers] = useState([]);
  const formRef = useRef<HTMLFormElement>(null);

  const specValueChangeHandler = (e) => {
    setSpecValue(e.target.valueAsNumber);
  };
  const limitValueChangeHandler = (e) => {
    setLimitValue(e.target.valueAsNumber);
  };
  const rangeChangeHandler = (e) => {
    const range = e.target.value.split(/\t|\n/g);
    const numberRagne = range
      .map((num) => {
        return Number(num).toFixed(0);
      })
      .filter(Number);
    setRangeOfNumbers(numberRagne);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const numberRagne = rangeOfNumbers
      .map((num) => {
        return Number(num);
      })
      .filter(Number);
    console.log(sumOfWhatever(numberRagne, specValue, 20));
  };
  return (
    <main className="overflow-hidden w-full h-full">
    <div
      className={"w-screen min-h-[110vh] flex flex-col justify-between items-center overflow-hidden"}
    >
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="w-full h-full flex flex-col justify-center items-center gap-5 mt-20"
      >
        <input
          onChange={limitValueChangeHandler}
          type={"number"}
          value={limitValue}
          className="w-40 h-10 border-2 border-red-300 rounded-lg p-2 outline-none"
          placeholder="limit"
        />
        <input
          onChange={specValueChangeHandler}
          type={"number"}
          value={specValue}
          className="w-40 h-10 border-2 border-green-300 rounded-lg p-2 outline-none"
          placeholder="sum"
        />
        <textarea
          onChange={rangeChangeHandler}
          value={rangeOfNumbers}
          className="w-96 h-96 border-2 border-blue-300 rounded-lg p-2 outline-none"
          placeholder="range: copy and paste here from excel"
        />
        <button
          type={"submit"}
          className="w-24 h-10 rounded-xl bg-green-700 hover:bg-green-900 active:scale-95 text-white duration-300"
        >
          calculate
        </button>
      </form>
      <p className="justify-self-end text-xs">
        <a
          className="text-gray-500 hover:text-gray-900"
          href="https://github.com/miladmohammadi"
          target={"_blank"}
          rel="noreferrer"
        >
          Milad-Mohamadi
        </a>{" "}
        &{" "}
        <a
        className="text-gray-500 hover:text-gray-900"
          href="https://github.com/dev-aly3n"
          target={"_blank"}
          rel="noreferrer"
        >
          dev-Aly3n
        </a>
      </p>
    </div>
    </main>
  );
}
