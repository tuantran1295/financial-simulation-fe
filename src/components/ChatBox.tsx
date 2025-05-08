
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Minimize, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatMessage from './ChatMessage';
import QuestionButton from './QuestionButton';

type Message = {
  id: number;
  text: string;
  isUser: boolean;
};

const SAMPLE_QUESTIONS = [
  "What is EBITDA?",
  "What is Multiple and Factor Score?",
  "How can I evaluate a startup company?",
  "What is the next step of the simulation to get it done?"
];

const ChatBox = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "What do you want to know about the simulation?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const handleSend = () => {
    if (inputValue.trim()) {
      // Add user message
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: inputValue,
        isUser: true
      }]);
      
      // Reset input
      setInputValue('');
      
      // For demo purposes, just echo back what the user sent after a delay
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: `You asked: ${inputValue}. This is a placeholder response.`,
          isUser: false
        }]);
      }, 1000);
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  const handleQuestionClick = (question: string) => {
    setInputValue(question);
  };

  // Handle pressing Enter key to send message
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className={`fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border border-dealSim-gray/20 transition-all duration-300 flex flex-col ${isMinimized ? 'w-64 h-12' : 'w-80 h-96'} z-50`}>
      {/* Chat Header */}
      <div 
        className="flex justify-between items-center p-3 bg-dealSim-navy text-white rounded-t-lg cursor-pointer"
        onClick={() => setIsMinimized(prev => !prev)}
      >
        <div className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4" />
          <span className="font-medium">Simulation Assistant</span>
        </div>
        <button className="text-white hover:text-dealSim-light">
          {isMinimized ? <Maximize className="h-4 w-4" /> : <Minimize className="h-4 w-4" />}
        </button>
      </div>
      
      {/* Chat Content - Only shown when not minimized */}
      {!isMinimized && (
        <>
          {/* Messages Container */}
          <div className="flex-1 p-3 overflow-y-auto bg-dealSim-light/50">
            {messages.map(message => (
              <ChatMessage 
                key={message.id} 
                message={message.text} 
                isUser={message.isUser} 
              />
            ))}
            
            {/* Sample question buttons appear after the initial message */}
            {messages.length === 1 && (
              <div className="flex flex-col gap-2 mt-4">
                {SAMPLE_QUESTIONS.map((question, index) => (
                  <QuestionButton 
                    key={index} 
                    question={question} 
                    onClick={handleQuestionClick} 
                  />
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input Box */}
          <div className="p-3 border-t border-dealSim-gray/10 flex">
            <input
              type="text"
              className="flex-1 border border-dealSim-gray/20 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-dealSim-navy"
              placeholder="Type your question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button 
              onClick={handleSend}
              className="bg-dealSim-navy hover:bg-dealSim-blue rounded-l-none"
            >
              Send
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBox;
