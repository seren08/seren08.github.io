window.addEventListener("load", () => {
  console.log("Welcome aboard Space Battle Ship ASTEL!");

  document.body.animate(
    [
      { opacity: 0 },
      { opacity: 1 }
    ],
    {
      duration: 1500,
      fill: "forwards"
    }
  );
});
