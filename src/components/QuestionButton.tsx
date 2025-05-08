
import React from 'react';

type QuestionButtonProps = {
  question: string;
  onClick: (question: string) => void;
};

const QuestionButton: React.FC<QuestionButtonProps> = ({ question, onClick }) => {
  return (
    <button
      className="text-left p-2 bg-white hover:bg-dealSim-light border border-dealSim-gray/20 rounded-md text-sm text-dealSim-navy transition-colors"
      onClick={() => onClick(question)}
    >
      {question}
    </button>
  );
};

export default QuestionButton;
