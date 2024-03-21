import React, { useReducer } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Flex, Text } from "@radix-ui/themes";
import Index from "./UI/Index";

// '@radix-ui/react-radio-group'

const Quiz = ({sampleData}) => {
  // console.log(sampleData);
  // const sampleData = [
  //   {
  //     questions: "What are varibles?",
  //     answer: "D",
  //     options: [
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, officia.",
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, officia.",
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, officia.",
  //       "There are temporary storage that hold a value that would be used later on in the program ",
  //     ],
  //   },
  //   {
  //     questions: "What type of variable cannot be reassigned?",
  //     answer: "B",
  //     options: [
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, officia.",
  //       "Const",
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, officia.",
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, officia.",
  //     ],
  //   },
  //   {
  //     questions: "Proper syntax for defining a variable?",
  //     answer: "A",
  //     options: [
  //       " variableType variableName = value",
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, officia.",
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, officia.",
  //       "There are temporary storage that hold a value that would be used later on in the program ",
  //     ],
  //   },
  // ];

  const answerOptions = ["A", "B", "C", "D"];

  const initialValue = {
    index: 0,
    answer: sampleData[0].answer,
    userChoice: "",
    nextBtnState: true,
    nextBtnText: "Next Question",
    errorState: false,
    errorText: "Not Correct!",
    successState: false,
    successText: "Good",
    isCorrect: false,
    score: 0,    
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "NEXTQUESTION":
        if (state.successState === false) {
          return {
            ...state,
            nextBtnState: true,
            isCorrect: false
          };
        }
        if (state.index + 1 == sampleData.length - 1) {
          return {
            ...state,
            nextBtnState: true,
            nextBtnText: "End",
            userChoice: "",
            index: state.index + 1,
            answer: sampleData[state.index + 1].answer,
            successState: false,
            isCorrect: false
          };
        }

        return {
          ...initialValue,
          index: state.index + 1,
          score: state.score,
          answer: sampleData[state.index + 1].answer,
          successState: false,
          isCorrect: false
        };
      case "SUBMITANSWER":
        if (state.userChoice === "") {
          return {
            ...state,
            errorState: true,
            successState: false,
            errorText: "Please Select an option",
          };
        }
        if (state.answer === state.userChoice) {
          return {
            ...state,
            errorState: false,
            errorText: "",
            successState: true,
            score: state.score + 1,
            nextBtnState: false,
            isCorrect: true,
          };
        }
        return {
          ...state,
          errorState: true,
          successState: false,
          errorText: "Not Correct",
        };
      case "SELECTANSWER":
        if (state.answer === state.userChoice) {
          return {
            ...state,
            errorState: false,
            errorText: "",
            successState: true,
          };
        }
        return { ...state, errorState: true, successState: false };
      case "USERANSWER":
        return { ...state, userChoice: action.payload };
      case "RESET":
        return { ...initialValue };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  const fn = {
    handleUserAnswer: (event) => {
      dispatch({ type: "USERANSWER", payload: event.target.value });
    },
    handleCheckAnswer: (e) => {
      e.preventDefault();
      dispatch({ type: "SUBMITANSWER" });
    },
    handleNextQuestion: () => {
      dispatch({ type: "NEXTQUESTION" });
    },
    handleReset: () => {
      dispatch({ type: "RESET" });
    },
  };

  return (
    <Index
      sampleData={sampleData}
      answerOptions={answerOptions}
      state={state}
      fn={fn}
    />
  );
};

export default Quiz;
