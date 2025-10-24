import { useState } from "react";
import IntroScreen from "@/components/IntroScreen";
import QuestionScreen from "@/components/QuestionScreen";
import ResultsScreen from "@/components/ResultsScreen";
import { questions } from "@/data/questions";

type Screen = "intro" | "question" | "results";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setCurrentScreen("question");
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setCurrentScreen("results");
    }
  };

  const handleRestart = () => {
    setCurrentScreen("intro");
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  return (
    <>
      {currentScreen === "intro" && <IntroScreen onStart={handleStart} />}
      
      {currentScreen === "question" && (
        <QuestionScreen
          question={questions[currentQuestionIndex]}
          currentStep={currentQuestionIndex + 1}
          totalSteps={questions.length}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      )}
      
      {currentScreen === "results" && (
        <ResultsScreen
          score={score}
          totalQuestions={questions.length}
          onRestart={handleRestart}
        />
      )}
    </>
  );
};

export default Index;
