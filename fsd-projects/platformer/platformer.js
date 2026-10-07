$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(500, 600, 100, 200,"orange");
createPlatform(300, 650, 100, 200, "red");
createPlatform(700, 550, 100, 200, "yellow");
createPlatform(900, 450, 100, 400, "green");
createPlatform(1150, 350, 100, 600, "blue");


    // TODO 3 - Create Collectables
createCollectable("kennedi", 729, 500);
createCollectable("grace", 350, 620);
createCollectable("diamond", 1190, 326);


    
    // TODO 4 - Create Cannons
createCannon("top", 520, 1000);
createCannon("right", 450, 2500);
createCannon("top", 890, 1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
