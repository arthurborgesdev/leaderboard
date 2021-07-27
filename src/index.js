import './style.css';
import { showScores } from './scoresDisplay.js'

const entries = [
  {
    name: "Name",
    score: 1000
  },
  {
    name: "Name",
    score: 1000
  },
  {
    name: "Name",
    score: 1000
  },
  {
    name: "Name",
    score: 1000
  },
  {
    name: "Name",
    score: 1000
  },
  {
    name: "Name",
    score: 1000
  },
  {
    name: "Name",
    score: 1000
  }
];

document.addEventListener('DOMContentLoaded', () => showScores(entries));