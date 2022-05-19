
import { initTimer } from './timer.js';
import { toggleTheme } from './toggle-theme.js';
import { innerPrice } from './price.js';

initTimer()
innerPrice()

const lightBtn = document.querySelector('.darkmode-modes__light')
const darkBtn = document.querySelector('.darkmode-modes__dark')

lightBtn.addEventListener('click', () => toggleTheme("light"))
darkBtn.addEventListener('click', () => toggleTheme("dark"))