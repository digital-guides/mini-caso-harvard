import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Target, Award } from "lucide-react";

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen = ({ onStart }: IntroScreenProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8 animate-in fade-in duration-500">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Minicaso Interactivo
          </h1>
          <p className="text-xl text-accent font-semibold">
            "El Conflicto de los Departamentos"
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aplica los 4 pasos del Método Harvard de Negociación
          </p>
        </div>

        <Card className="border-2 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Escenario Inicial
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground leading-relaxed">
              Eres coordinador/a de operaciones en una empresa de servicios.
              Los jefes de Ventas (Laura) y Despachos (Marco) están en conflicto.
            </p>
            
            <div className="bg-muted p-4 rounded-lg space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-accent">L</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Laura (Ventas):</p>
                  <p className="text-muted-foreground italic">"Los pedidos nunca llegan a tiempo."</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-primary">M</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Marco (Despachos):</p>
                  <p className="text-muted-foreground italic">"Ventas promete plazos imposibles."</p>
                </div>
              </div>
            </div>

            <div className="bg-accent/5 border-l-4 border-accent p-4 rounded">
              <p className="font-semibold text-foreground flex items-center gap-2">
                <Target className="w-4 h-4 text-accent" />
                Tu tarea:
              </p>
              <p className="text-muted-foreground mt-1">
                Mediar y lograr un acuerdo aplicando los 4 pilares del Método Harvard de Negociación.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: Users, title: "Paso 1", desc: "Separar personas del problema" },
            { icon: Target, title: "Paso 2", desc: "Enfocarse en intereses" },
            { icon: BookOpen, title: "Paso 3", desc: "Generar opciones" },
            { icon: Award, title: "Paso 4", desc: "Criterios objetivos" }
          ].map((step, i) => (
            <Card key={i} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-4 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-2">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm text-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={onStart} 
            size="lg"
            className="min-w-48 font-semibold"
          >
            Comenzar Evaluación
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
