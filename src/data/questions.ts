import { Question } from "@/components/QuestionScreen";

export const questions: Question[] = [
  {
    step: 1,
    title: "Separar personas del problema",
    emoji: "🥇",
    question: "¿Cómo deberías iniciar la conversación para crear un ambiente adecuado?",
    options: [
      {
        label: "a)",
        text: "Ambos están generando pérdidas para la empresa.",
        isCorrect: false,
        feedback: "❌ Este enfoque es confrontativo. Al señalar culpa colectiva, aumentas la tensión."
      },
      {
        label: "b)",
        text: "Sé que los dos han estado bajo mucha presión; hablemos de cómo podemos resolverlo.",
        isCorrect: true,
        feedback: "✅ Excelente. Comienzas con empatía y neutralidad. Al reconocer la presión, reduces la defensa emocional."
      },
      {
        label: "c)",
        text: "Necesito saber quién tiene la culpa realmente.",
        isCorrect: false,
        feedback: "❌ Buscar culpables refuerza el conflicto en lugar de solucionarlo."
      }
    ],
    coachTip: "Cuando separas el problema de las personas, la conversación se vuelve más colaborativa y menos reactiva."
  },
  {
    step: 2,
    title: "Enfocarse en intereses, no en posiciones",
    emoji: "🎯",
    question: "Laura dice: 'Quiero entregas a tiempo.' ¿Qué deberías preguntarle para descubrir su verdadero interés?",
    options: [
      {
        label: "a)",
        text: "¿Por qué es tan importante cumplir esos plazos para ti?",
        isCorrect: true,
        feedback: "✅ Muy bien. Preguntar 'por qué' revela la motivación profunda (mantener clientes satisfechos)."
      },
      {
        label: "b)",
        text: "¿No podrías vender menos para reducir la presión?",
        isCorrect: false,
        feedback: "❌ Esta pregunta suena crítica y genera resistencia."
      },
      {
        label: "c)",
        text: "Entonces, ¿quieres que Despachos trabaje más horas?",
        isCorrect: false,
        feedback: "❌ Reformula la posición, no el interés."
      }
    ],
    coachTip: "Cuando exploras el porqué, pasas de discutir posiciones a construir soluciones."
  },
  {
    step: 3,
    title: "Generar opciones de mutuo beneficio",
    emoji: "💡",
    question: "¿Cuál de estas propuestas representa un acuerdo ganar-ganar?",
    options: [
      {
        label: "a)",
        text: "Ventas dejará de prometer fechas y punto.",
        isCorrect: false,
        feedback: "❌ Es una imposición unilateral."
      },
      {
        label: "b)",
        text: "Despachos aumentará personal temporalmente sin presupuesto adicional.",
        isCorrect: false,
        feedback: "❌ Exige sacrificio sin beneficio compartido."
      },
      {
        label: "c)",
        text: "Ambos revisarán semanalmente la capacidad de entrega y ajustarán los compromisos con los clientes.",
        isCorrect: true,
        feedback: "✅ Correcto. Involucra colaboración, comunicación y compromiso mutuo."
      }
    ],
    coachTip: "Las mejores soluciones nacen cuando ambos sienten que ganan algo valioso."
  },
  {
    step: 4,
    title: "Basarse en criterios objetivos",
    emoji: "⚖️",
    question: "¿Cómo podrías validar que la decisión acordada sea justa?",
    options: [
      {
        label: "a)",
        text: "Basándote en opiniones personales.",
        isCorrect: false,
        feedback: "❌ Las opiniones no generan confianza ni legitimidad."
      },
      {
        label: "b)",
        text: "Midiendo tiempos de entrega, quejas y métricas reales.",
        isCorrect: true,
        feedback: "✅ Perfecto. Los criterios objetivos (datos, indicadores) eliminan la subjetividad."
      },
      {
        label: "c)",
        text: "Pidiendo autorización del director general.",
        isCorrect: false,
        feedback: "⚠️ Involucrar a un superior puede funcionar, pero reduce la autonomía de las partes."
      }
    ],
    coachTip: "Negociar con datos transforma discusiones en acuerdos sostenibles."
  }
];
