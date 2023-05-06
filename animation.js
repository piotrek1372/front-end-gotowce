const serviceInfoElFirstSection = $(
  ".service-info__content .service-info__el--wheel-up"
);

$(window).on("wheel", function (event) {
  for (const section of serviceInfoElFirstSection)
    if (event.originalEvent.deltaY > 0) section.classList.add("wheel-up");
});
