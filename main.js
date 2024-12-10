
      let date = new Date();

      function renderCalendar(date) {
        const months = [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ];

        const currMonth = document.getElementById("curr-month");
        const month = date.getMonth();
        currMonth.textContent = months[month];

        const year = date.getFullYear();
        const currYear = document.getElementById("curr-year");
        currYear.textContent = date.getFullYear();

        const firstDay = new Date(
          date.getFullYear(),
          date.getMonth(),
          1
        ).getDay();

        const noOfDaysInMonth = new Date(
          date.getFullYear(),
          date.getMonth() + 1,
          0
        ).getDate();

        let dayHtml = "";
        for (let i = 0; i < firstDay; i++) {
          dayHtml += "<p class='day'></p>";
        }
        for (let day = 1; day <= noOfDaysInMonth; day++) {
          let today = new Date();
          if (
            day === today.getDate() &&
            month === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
          ) {
            dayHtml += "<p class='day today'>" + day + "</p>";
          } else {
            dayHtml += "<p class='day'>" + day + "</p>";
          }
        }
        document.getElementById("days").innerHTML = dayHtml;
      }
      renderCalendar(date);

      const previous = document.getElementById("pre");
      const nextb = document.getElementById("next");

      previous.addEventListener("click", function () {
        date.setMonth(date.getMonth() - 1);
        renderCalendar(date);
      });

      nextb.addEventListener("click", function () {
        date.setMonth(date.getMonth() + 1);
        renderCalendar(date);
      });

