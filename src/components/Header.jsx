import logoImg from "../assets/quiz-logo.png";

export const Header = () => {
  return (
    <header>
      <img src={logoImg} alt="quizlogo" />
      <h1>ReactQuiz</h1>
    </header>
  );
};
