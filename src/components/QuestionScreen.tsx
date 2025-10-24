import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, AlertCircle, Lightbulb } from "lucide-react";
import ProgressBar from "./ProgressBar";

export interface Question {
  step: number;
  title: string;
  emoji: string;
  question: string;
  options: {
    label: string;
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
  coachTip: string;
}

interface QuestionScreenProps {
  question: Question;
  currentStep: number;
  totalSteps: number;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

const QuestionScreen = ({ question, currentStep, totalSteps, onAnswer, onNext }: QuestionScreenProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (showFeedback) return;
    
    setSelectedOption(index);
    setShowFeedback(true);
    onAnswer(question.options[index].isCorrect);
  };

  const getOptionIcon = (index: number, isCorrect: boolean) => {
    if (selectedOption !== index) return null;
    return isCorrect ? (
      <CheckCircle2 className="w-5 h-5 text-success" />
    ) : (
      <XCircle className="w-5 h-5 text-destructive" />
    );
  };

  const getOptionStyles = (index: number, isCorrect: boolean) => {
    if (selectedOption === null) {
      return "border-2 hover:border-primary hover:bg-primary/5 cursor-pointer";
    }
    if (selectedOption === index) {
      return isCorrect
        ? "border-2 border-success bg-success/10"
        : "border-2 border-destructive bg-destructive/10";
    }
    return "border-2 opacity-50";
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

        <Card className="border-2 shadow-lg">
          <CardHeader className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-3xl">{question.emoji}</div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-1">{question.title}</CardTitle>
                <CardDescription className="text-base">Paso {question.step} del Método Harvard</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-foreground font-medium text-lg">{question.question}</p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Opciones:
              </p>
              {question.options.map((option, index) => (
                <Card
                  key={index}
                  className={`transition-all duration-300 ${getOptionStyles(index, option.isCorrect)}`}
                  onClick={() => handleOptionSelect(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 font-bold text-foreground">
                        {option.label}
                      </div>
                      <div className="flex-1">
                        <p className="text-foreground">{option.text}</p>
                      </div>
                      {getOptionIcon(index, option.isCorrect)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {showFeedback && selectedOption !== null && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Card className={`border-2 ${question.options[selectedOption].isCorrect ? 'border-success bg-success/5' : 'border-destructive bg-destructive/5'}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full ${question.options[selectedOption].isCorrect ? 'bg-success/20' : 'bg-destructive/20'}`}>
                        {question.options[selectedOption].isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-success" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-destructive" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">
                          {question.options[selectedOption].isCorrect ? "¡Correcto!" : "Feedback"}
                        </h4>
                        <p className="text-muted-foreground">{question.options[selectedOption].feedback}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/30 bg-accent/5">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-accent/20">
                        <Lightbulb className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">Coach tip:</h4>
                        <p className="text-muted-foreground italic">{question.coachTip}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-end">
                  <Button onClick={onNext} size="lg" className="min-w-40">
                    {currentStep < totalSteps ? "Siguiente Pregunta" : "Ver Resultados"}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuestionScreen;
