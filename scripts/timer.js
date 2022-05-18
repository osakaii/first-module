
const getJSON = async () =>{
  const req = await fetch('./config.json')
  return await req.json()
}

const parseDate = (str) => {
  const [date, time] = str.split(" ");
  const [day, month, year] = date.split(".");
  const [hours, minutes] = time.split(":");
  return new Date(year, month - 1, day, hours, minutes);
};

const DATE_CONSTANTS = {
  MS_IN_SECOND: 1000,
  MS_IN_MINUTE: 1000 * 60,
  MS_IN_HOUR: 1000 * 60 * 60,
  MS_IN_DAY: 1000 * 60 * 60 * 24,
};

const getTimerData = (start, end) => {
  const diff = start.getTime() - end.getTime();
  if (diff < 0) return null;

  const format = (num) => String(Math.floor(num)).padStart(2, "0");

  const days = format(diff / DATE_CONSTANTS.MS_IN_DAY);
  const hours = format(
    (diff % DATE_CONSTANTS.MS_IN_DAY) / DATE_CONSTANTS.MS_IN_HOUR
  );
  const minutes = format(
    (diff % DATE_CONSTANTS.MS_IN_HOUR) / DATE_CONSTANTS.MS_IN_MINUTE
  );
  const seconds = format(
    (diff % DATE_CONSTANTS.MS_IN_MINUTE) / DATE_CONSTANTS.MS_IN_SECOND
  );

  return { days, hours, minutes, seconds };
};

const renderTimer = (data) => {
  const timerDiv = document.getElementById("timer");
  const { days, hours, minutes, seconds } = data;

  timerDiv.textContent = [days, hours, minutes, seconds].join(" | ");
};

const unmountTimer = () => {
  document.querySelector(".timerSection").remove();
};

export const initTimer = async () => {
  const fetchedData = await getJSON()

  let data = getTimerData(parseDate(fetchedData.time), new Date());
  if (!data) {
    unmountTimer();
    return;
  }

  let timerId = setInterval(() => {
    data = getTimerData(parseDate(fetchedData.time), new Date());

    if (!data) {
      clearInterval(timerId);
      unmountTimer();
    } else renderTimer(data);
  }, 1000);
};