function openAccordionWithScroll(event, accordionId) {
  event.preventDefault();

  setTimeout(function() {
    const accordion = document.getElementById(accordionId);

    if (accordion) {
      const accordionCollapse = new bootstrap.Collapse(accordion);
      accordionCollapse.show();
    }
  }, 500);

  // Přesun stránky na kotvu po 100ms (přizpůsobit podle potřeby)
  setTimeout(function() {
    const target = document.querySelector(event.target.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, 0);
}

$(document).ready(function() {
    $('#burger-icon').click(function(e) {
        e.preventDefault();
        $('#dropdown-burger').dropdown('toggle');
    });
});