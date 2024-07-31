$(function () {
  // your code here
  const accordionHeader = $(".accordion-header");
  const toDo = $(".todos");

  accordionHeader.on("click", function () {
    $(this).next().slideToggle();
  });

  // function getData() {
  //   return new Promise((resolve, reject) => {
  //     $.ajax({
  //       url: `https://dummyjson.com/todos`,
  //       type: `GET`,
  //       success: function (response) {
  //         resolve(response);
  //         // console.log(response.todos);
  //         // console.log($("button").next().children());
  //         $(this).next().append("<li>hey</li>");
  //       },
  //       error: function (error) {
  //         reject(error);
  //       },
  //     });
  //   });
  // }

  toDo.on("click", async function () {
    try {
      const res = await fetch("https://dummyjson.com/todos");
      const data = await res.json();
      const todoData = data.todos;
      // console.log(todoData);

      for (const el of todoData) {
        toDo.find("ul").append(`<li>${el.todo}</li>`);
      }

      // console.log(toDo.find("ul"));
    } catch (error) {
      console.error(error);
    }
  });
});
