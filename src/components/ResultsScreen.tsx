import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, TrendingUp, Target, RotateCcw } from "lucide-react";

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultsScreen = ({ score, totalQuestions, onRestart }: ResultsScreenProps) => {
  const percentage = (score / totalQuestions) * 100;
  
  const getResultLevel = () => {
    if (score === 4) {
      return {
        level: "Negociador Estratégico",
        color: "success",
        emoji: "🟢",
        description: "Eres racional, empático y orientado a resultados. Dominas el método Harvard.",
        advice: "Continúa aplicando estos principios en situaciones complejas y mentoriza a otros en el arte de la negociación efectiva."
      };
    } else if (score === 3) {
      return {
        level: "Negociador en Desarrollo",
        color: "warning",
        emoji: "🟡",
        description: "Comprendes la estructura, pero aún reaccionas ante la presión.",
        advice: "Refuerza el paso 1 (empatía) y el paso 2 (análisis de intereses). Practica la escucha activa antes de proponer soluciones."
      };
    } else {
      return {
        level: "Negociador Reactivo",
        color: "destructive",
        emoji: "🔴",
        description: "Tiendes a culpar o imponer.",
        advice: "Revisa los principios de colaboración y preparación emocional antes de negociar. Enfócate en entender intereses antes de posiciones."
      };
    }
  };

  const result = getResultLevel();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-3xl w-full space-y-8 animate-in fade-in duration-500">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <Award className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Evaluación Completada
          </h1>
          <div className="text-6xl">{result.emoji}</div>
        </div>

        <Card className="border-2 shadow-lg">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl">{result.level}</CardTitle>
            <CardDescription className="text-lg">
              Puntuación: {score} de {totalQuestions} ({percentage.toFixed(0)}%)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="h-4 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-1000 ease-out ${
                      score === 4 ? 'bg-success' : score === 3 ? 'bg-warning' : 'bg-destructive'
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Perfil:
                </h3>
                <p className="text-muted-foreground">{result.description}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  Recomendación:
                </h3>
                <p className="text-muted-foreground">{result.advice}</p>
              </div>
            </div>

            <Card className="border-2 border-accent/30 bg-accent/5">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3 text-lg">
                  💬 Feedback final del coach
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="italic">
                    "Negociar no es ganar una discusión, sino construir un puente entre dos necesidades."
                  </p>
                  <p className="italic">
                    "Cada vez que logres entender el interés detrás de la posición, habrás avanzado hacia el verdadero liderazgo."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Desafío Personal
                </h3>
                <p className="text-muted-foreground">
                  Piensa en un conflicto reciente en tu entorno laboral o familiar. 
                  Aplica los 4 pasos de Harvard y observa cómo cambia la dinámica.
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button onClick={onRestart} size="lg" variant="outline" className="min-w-48">
            <RotateCcw className="w-4 h-4 mr-2" />
            Intentar de Nuevo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;
