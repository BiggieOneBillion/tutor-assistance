import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

const Index = ({ sampleData, state, answerOptions, fn }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="flex gap-1 items-center bordery w-fit px-1">
          <span className="text-sm font-medium">Take the quiz:</span>
          <span className="py-1 px-2 bg-black text-white inline-block border border-black text-xs capitalize active:scale-95 transition-transform ease-in-out duration-300 cursor-pointer">
            Click to start
          </span>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-[rgba(0,0,0,0.5)] data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-fit md:max-h-[85vh] w-fit md:w-[90vw] max-w-fit translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[18px] md:p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-sm md:text-[17px] font-medium">
            Tutorial Quiz
          </Dialog.Title>

          <div className="lg:w-[800px] lg:h-[400px] flex flex-col justify-center gap-8 px-3 w-[300px] md:w-[500px] md:px-10 py-5 bg-gray-200">
            <div className="flex flex-col items-start gap-3">
              {/* Congratulations */}
              {state.score === sampleData.length && (
                <div className="px-3 py-2 text-center bg-green-300y text-green-900 w-full  font-medium text-lg">
                  Congratulations!!!🥳🥂
                </div>
              )}
              {/* Error and Success Message */}
              {state.successState && (
                <div className="px-3 py-2 bg-green-300 text-green-900 w-full  font-medium text-sm">
                  {state.successText}
                </div>
              )}
              {state.errorState && (
                <div className="px-3 py-2 bg-red-300 text-red-900 w-full  font-medium text-sm">
                  {state.errorText}
                </div>
              )}
              {/* Question */}
              <div className="flex justify-between flex-col md:flex-row gap-3  md:gap-10 items-center w-full">
                <h2 className="font-medium text-lg text-wrap order-1 flex-1">
                  {sampleData[state.index].questions}
                </h2>
                <span className="w-fit bg-slate-500 text-white md:order-2 text-sm px-3  py-1 ">
                  score: {state.score} / {sampleData.length}
                </span>
              </div>
              {/* Options */}
              <form>
                {sampleData[state.index].options.map((element, i) => (
                  <div className="flex flex-col items-start" key={i + 3412}>
                    <label className="flex items-center text-sm gap-2 mb-2 text-gray-700">
                      <input
                        type="radio"
                        className="md:h-[18px] md:w-[18px] size-4"
                        value={answerOptions[i]}
                        checked={state.userChoice === answerOptions[i]}
                        onChange={fn.handleUserAnswer}
                      />
                      <span className="text-wrap w-[250px] md:w-fit">
                        {element}
                      </span>
                    </label>
                  </div>
                ))}
              </form>
            </div>
            <div className="flex w-full justify-between items-center ">
              <button
                className="px-4 text-sm py-2 bg-black font-medium text-white disabled:bg-slate-700"
                onClick={fn.handleCheckAnswer}
                disabled={state.score === sampleData.length || state.isCorrect}
              >
                Check Answer
              </button>
              {state.nextBtnText == "End" &&
              state.score === sampleData.length ? (
                <Dialog.Close asChild={toggle}>
                  <button
                    className="px-4 text-sm py-2 bg-black font-medium text-white disabled:bg-slate-700"
                    onClick={() => {
                      fn.handleReset();
                      setToggle(true);
                    }}
                  >
                    close
                  </button>
                </Dialog.Close>
              ) : (
                <button
                  className="px-4 text-sm py-2 bg-black font-medium text-white disabled:bg-slate-700"
                  disabled={state.nextBtnState || state.nextBtnText == "End"}
                  onClick={fn.handleNextQuestion}
                >
                  {state.nextBtnText}
                </button>
              )}
            </div>
          </div>
          <Dialog.Close asChild={toggle}>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
              onClick={() => {
                fn.handleReset();
                setToggle(true);
              }}
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Index;
