$(function () {
  // your code here
  const accordionHeader = $(".accordion-header");
  const toDo = $(".todos");

  accordionHeader.on("click", function () {
    $(this).next().slideToggle();
  });

  toDo.on("click", async function () {
    $.ajax({
      url: "https://dummyjson.com/todos",
      success: async function (response) {
        const res = await response;
        const getData = res.todos;
        for (const el of getData) {
          toDo.find("ul").append(`<li>${el.todo}</li>`);
        }
      },
      error: function (error) {
        console.error(error);
      },
    });
  });
});
