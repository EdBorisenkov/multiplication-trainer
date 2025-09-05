import React, { useState } from 'react';

export default function MultiplicationTrainer() {
  const [a, setA] = useState(Math.ceil(Math.random() * 9));
  const [b, setB] = useState(Math.ceil(Math.random() * 9));
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [feedback, setFeedback] = useState('');

  const nextTask = () => {
    setA(Math.ceil(Math.random() * 9));
    setB(Math.ceil(Math.random() * 9));
    setAnswer('');
  };

  const checkAnswer = () => {
    const correct = a * b;
    setTotal(total + 1);
    if (parseInt(answer) === correct) {
      setScore(score + 1);
      setFeedback('✅ Молодец!');
    } else {
      setFeedback(`❌ Ошибка. Правильный ответ: ${correct}`);
    }
    setTimeout(() => {
      setFeedback('');
      nextTask();
    }, 1500);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Тренажёр таблицы умножения</h1>
      <p>Реши: {a} × {b} = ?</p>
      <input
        type="number"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
      />
      <button onClick={checkAnswer}>Проверить</button>
      <p>{feedback}</p>
      <p>Результат: {score} из {total}</p>
    </div>
  );
}