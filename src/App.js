import React, { useState } from 'react';

function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <h1 className="text-3xl font-bold text-white">Welcome to My Website</h1>
    </header>
  );
}

function Content() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleSendData = () => {
    alert(`Your number is: ${count}`);
  };

  return (
    <section className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">About</h2>
      <p className="text-gray-700">This is a sample website built with React and Tailwind CSS.</p>

      <div className="mt-8">
        <p>Counter: {count}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleIncrement}>Increment</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4" onClick={handleDecrement}>Decrement</button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4" onClick={handleSendData}>Send Data</button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 py-4 text-white text-center">
      <p>&copy; 2023 My Website. All rights reserved.</p>
    </footer>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
