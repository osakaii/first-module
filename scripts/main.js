
import { initTimer } from './timer.js';
import { toggleTheme } from './toggle-theme.js';

initTimer()

const lightBtn = document.querySelector('.darkmode-modes__light')
const darkBtn = document.querySelector('.darkmode-modes__dark')

lightBtn.addEventListener('click', () => toggleTheme("light"))
darkBtn.addEventListener('click', () => toggleTheme("dark"))