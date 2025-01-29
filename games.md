---
layout: page
title: Games
permalink: /games/
---

<style>
    /* Game Card Container */
.game-card {
  width: 300px;
  background-color: #333;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Hover Effect */
.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.game-card h3 {
    font-weight: 700;
    text-align: center;
    color: #fff;
}

/* Game Image */
.game-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Game Content */
.game-content {
  padding: 16px;
  text-align: center;
}

/* Game Title */
.game-title {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 8px;
}

/* Game Description */
.game-description {
  font-size: 14px;
  color:rgb(190, 190, 190);
  margin-bottom: 16px;
}

.game-description span {
    color: #fff;
}

/* Play Button */
.play-button {
  display: inline-block;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color:rgb(14, 171, 0);
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.play-button:hover {
  background-color: #fff;
  color: rgb(14, 171, 0);
  text-decoration: none;
}

.coming-button {
  display: inline-block;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color:rgb(37, 37, 37);
  border-color: #fff;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.coming-button:hover {
  background-color: #fff;
  border-color: rgb(37, 37, 37);
  color: rgb(37, 37, 37);
  text-decoration: none;
}

.game {
  display: flex;
  padding: 25px;
  gap: 20px; /* ปรับระยะห่างระหว่างการ์ด */
  justify-content: space-between; /* กระจายการ์ดให้มีที่ว่าง */
}

</style>

Dive into a world of fun and adventure! Here, you’ll find our collection of games that are perfect for challenging your skills, unlocking achievements, and just having a good time. Whether you're into puzzles, action, or strategy, there's something for everyone. Let the games begin!

<br>
<div class="game">
<div class="game-card">
  <img src="/assets/images/nstrike-300x200.png" alt="Game Thumbnail" class="game-image" />
  <h3>NStrike</h3>
  <div class="game-content">
    <p class="game-description">
      <span alt="First-Person Shooter">FPS</span>, <span alt="Team Deathmatch">TDM</span>, <span alt="Free For All">FFA</span>
    </p>
    <a href="#" class="coming-button">Coming Soon</a>
  </div>
</div>

<div class="game-card">
  <img src="" alt="Game Thumbnail" class="game-image" />
  <h3>Build & Launch</h3>
  <div class="game-content">
    <p class="game-description">
      <span alt="First-Person Shooter">Sandbox</span>, <span alt="Team Deathmatch">Physics-based</span>
    </p>
    <a href="#" class="coming-button">Coming Soon</a>
  </div>
</div>
</div>


