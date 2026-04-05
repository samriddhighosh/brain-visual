"use client";

import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// --- QUIZ DATA ---
const quizzes: Record<string, any[]> = {
  anatomy: [
    {
      question: "Which lobe of the brain is primarily responsible for visual processing?",
      options: ["Frontal Lobe", "Parietal Lobe", "Temporal Lobe", "Occipital Lobe"],
      answer: "Occipital Lobe",
    },
    {
      question: "What is the primary function of the Cerebellum?",
      options: ["Coordinating voluntary movement", "Controlling basic life functions", "Auditory processing", "Decision making"],
      answer: "Coordinating voluntary movement",
    },
    {
      question: "Which part of the brain is known as the 'memory center' and is one of the first areas damaged in Alzheimer's?",
      options: ["Brainstem", "Hippocampus", "Occipital Lobe", "Parietal Lobe"],
      answer: "Hippocampus",
    },
    {
      question: "Where does sensory information like touch and spatial awareness get processed?",
      options: ["Parietal Lobe", "Temporal Lobe", "Frontal Lobe", "Spinal Cord"],
      answer: "Parietal Lobe",
    },
    {
      question: "Which lobe is most involved in decision making, problem solving, and motor function?",
      options: ["Parietal Lobe", "Frontal Lobe", "Occipital Lobe", "Temporal Lobe"],
      answer: "Frontal Lobe",
    }
  ],
  alzheimers: [
    {
      question: "In the Preclinical Stage of Alzheimer's, what is happening in the brain?",
      options: ["Individuals lose the ability to speak", "Severe memory loss begins", "Amyloid-beta plaques and tau tangles silently begin to form", "The brain shrinks significantly"],
      answer: "Amyloid-beta plaques and tau tangles silently begin to form",
    },
    {
      question: "Which sense is often one of the first to be affected by early-stage Alzheimer's?",
      options: ["Sight", "Hearing", "Smell", "Taste"],
      answer: "Smell",
    },
    {
      question: "What characterizes Mild Cognitive Impairment (MCI)?",
      options: ["Full-time care is needed", "Complete inability to form new memories", "Slight but measurable memory or thinking problems while functioning independently", "Disruptive behavioral changes and hallucinations"],
      answer: "Slight but measurable memory or thinking problems while functioning independently",
    },
    {
      question: "During which stage do people generally become fully dependent on caregivers and may lose the ability to speak coherently?",
      options: ["Mild Stage", "Moderate Stage", "Severe Stage", "Preclinical Stage"],
      answer: "Severe Stage",
    },
    {
      question: "In Moderate Alzheimer's, which of the following is common?",
      options: ["No outward symptoms", "Trouble recognizing familiar people and requiring more assistance", "Becoming a newborn", "Loss of all motor control instantly"],
      answer: "Trouble recognizing familiar people and requiring more assistance",
    }
  ]
};

export default function QuizPage() {
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  // Randomize questions slightly if desired, here we just use them sequentially for simplicity.
  const questions = activeQuiz ? quizzes[activeQuiz] : [];
  const currentQuestion = questions[currentQuestionIndex];

  const startQuiz = (quizId: string) => {
    setActiveQuiz(quizId);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  const handleAnswer = (option: string) => {
    setSelectedAnswer(option);
    
    // Check answer
    if (option === currentQuestion.answer) {
      setScore(prev => prev + 1);
    }

    // Delay before moving to the next question to show selection
    setTimeout(() => {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setActiveQuiz(null);
  };

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen">
      <Navbar />
      
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          
          {/* STATE: Menu */}
          {!activeQuiz && (
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Knowledge Checks</h1>
                <p className="text-slate-500">Test your understanding of neuroanatomy and progression models.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card 
                  className="hover:shadow-lg transition-shadow cursor-pointer bg-white border-blue-100 border-2 hover:border-blue-300"
                  onClick={() => startQuiz('anatomy')}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-900">Brain Anatomy Basics</CardTitle>
                    <CardDescription>5 questions on lobes and functions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      A foundational quiz covering the frontal, parietal, temporal, and occipital lobes, as well as the cerebellum and brainstem.
                    </p>
                    <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-600">
                      Start Quiz &rarr;
                    </div>
                  </CardContent>
                </Card>

                <Card 
                  className="hover:shadow-lg transition-shadow cursor-pointer bg-white border-blue-100 border-2 hover:border-blue-300"
                  onClick={() => startQuiz('alzheimers')}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-900">Alzheimer's Progression</CardTitle>
                    <CardDescription>5 questions on the progression stages</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      Test your knowledge of the preclinical to severe stages of Alzheimer's Disease and how it affects the brain.
                    </p>
                    <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-600">
                      Start Quiz &rarr;
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          {/* STATE: Playing Quiz */}
          {activeQuiz && !showResults && currentQuestion && (
            <div className="max-w-2xl mx-auto mt-12 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-sm font-bold text-slate-400 tracking-wider uppercase">
                  {activeQuiz === 'anatomy' ? 'Anatomy Basics' : "Alzheimer's Progression"}
                </h2>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
              </div>

              <h1 className="text-2xl font-bold text-slate-800 mb-8 leading-snug">
                {currentQuestion.question}
              </h1>

              <div className="space-y-3">
                {currentQuestion.options.map((option: string, idx: number) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrect = option === currentQuestion.answer;
                  
                  // Colorization logic for when an answer is selected
                  let buttonStateClass = "bg-slate-50 hover:bg-blue-50 text-slate-700 border-slate-200";
                  if (selectedAnswer) {
                    if (isCorrect) buttonStateClass = "bg-green-100 border-green-400 text-green-800";
                    else if (isSelected && !isCorrect) buttonStateClass = "bg-red-100 border-red-400 text-red-800";
                    else buttonStateClass = "bg-slate-50 border-slate-200 opacity-50"; // Fade out others
                  }

                  return (
                    <button
                      key={idx}
                      disabled={!!selectedAnswer}
                      onClick={() => handleAnswer(option)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium ${buttonStateClass}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STATE: Results */}
          {activeQuiz && showResults && (
            <div className="max-w-2xl mx-auto mt-12 bg-white p-10 rounded-2xl shadow-sm border border-slate-200 text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Quiz Complete!</h2>
              <div className="mb-8">
                <span className="text-6xl font-black text-blue-600">{score}</span>
                <span className="text-2xl text-slate-400"> / {questions.length}</span>
              </div>
              
              <div className="text-lg text-slate-600 mb-10">
                {score === questions.length 
                  ? "Flawless victory! You know your neurobiology." 
                  : score >= questions.length / 2 
                    ? "Great job! A solid understanding of the concepts." 
                    : "Good effort! Try again to lock in the knowledge."}
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={() => startQuiz(activeQuiz)} variant="outline" className="w-40 border-2">
                  Retry Quiz
                </Button>
                <Button onClick={resetQuiz} className="w-40 bg-blue-600 hover:bg-blue-700">
                  Back to Menu
                </Button>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
