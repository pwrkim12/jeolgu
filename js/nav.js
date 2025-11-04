// js/nav.js
(function () {
  const body     = document.body;
  const openBtn  = document.getElementById("hamburger");
  const closeBtn = document.getElementById("drawerClose");
  const backdrop = document.getElementById("drawerBackdrop");
  const drawer   = document.getElementById("mobileDrawer");

  const links = drawer ? drawer.querySelectorAll("a, button, select") : [];

  const isOpen = () => body.classList.contains("drawer-open");

  const openDrawer = () => {
    body.classList.add("drawer-open");
    if (openBtn)  openBtn.setAttribute("aria-expanded", "true");
    if (drawer)   drawer.setAttribute("aria-hidden", "false");
    if (backdrop) backdrop.style.pointerEvents = "auto";
  };

  const closeDrawer = () => {
    body.classList.remove("drawer-open");
    if (openBtn)  openBtn.setAttribute("aria-expanded", "false");
    if (drawer)   drawer.setAttribute("aria-hidden", "true");
    if (backdrop) backdrop.style.pointerEvents = "none";
  };

  if (openBtn)  openBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  links.forEach((el) => {
    el.addEventListener("click", () => {
      // select 는 change 때만 닫고 싶으면 분기하면 됨
      closeDrawer();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) {
      closeDrawer();
    }
  });

  const mq = window.matchMedia("(min-width: 769px)");
  const handleMQ = (e) => {
    if (e.matches) closeDrawer();
  };
  if (mq.addEventListener) mq.addEventListener("change", handleMQ);
  else if (mq.addListener) mq.addListener(handleMQ);
})();
