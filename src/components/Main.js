import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Main.css';
import myImage from '../assets/my-image.jpg';

function Section() {
  return (
    <section className="section">
      <img src={myImage} alt="Котик" style={{ width: '100%', height: 'auto' }} />
    </section>
  );
}

function Article() {
  return (
    <article className="article">
      <Routes>
        <Route path="/news" element={<><h1>Новости</h1><p>Добро пожаловать в раздел новостей!</p></>} />
        <Route path="/about" element={<h1>Южный федеральный университет</h1>} />
        <Route path="/contacts" element={<p>Телефон: +7 (999) 111-22-33</p>} />
        <Route path="*" element={<p>Ошибка 404: Страница не найдена</p>} />
      </Routes>
    </article>
  );
}

function Aside() {
  return (
    <aside className="aside">
      <p>Павлова Полина Максимовна</p>
    </aside>
  );
}

function Main() {
  return (
    <main className="main">
      <Section />
      <Article />
      <Aside />
    </main>
  );
}

export default Main;
