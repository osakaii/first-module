
import { initTimer } from './timer.js';
import { toggleTheme } from './toggle-theme.js';
import { innerPrice } from './price.js';
import { linkInit } from './appLink.js';

const lightModeBtn = document.querySelector('.darkmode-modes__light')
const darkModeBtn = document.querySelector('.darkmode-modes__dark')

initTimer()
innerPrice()
linkInit()

lightModeBtn.addEventListener('click', () => toggleTheme("light"))
darkModeBtn.addEventListener('click', () => toggleTheme("dark"))

