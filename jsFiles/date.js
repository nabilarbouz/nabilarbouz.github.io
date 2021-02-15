const setTodaysDate = () => {
  let todaysDate = new Date();
  let dateElement = document.getElementById("todaysDate");
  dateElement.textContent = `Today's Date: ${
    todaysDate.getMonth() + 1
  }/${todaysDate.getDate()}/${todaysDate.getFullYear()}`;
};

setTodaysDate();
