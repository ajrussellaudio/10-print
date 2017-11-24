var spacing, grid;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // createCanvas(400, 300);
  spacing = max(width, height) / 16;
  console.log(spacing);
  grid = [];
  randomizeGrid();
  console.log(grid);
}

function draw() {
  background(255)
  stroke("#333333");
  strokeWeight(spacing/4);
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      push();
      translate(x * spacing, y * spacing);
      if (grid[x][y]) {
        line(0, spacing, spacing, 0);
      } else {
        line(0, 0, spacing, spacing);
      };
      pop();
    }
  }
}

function mousePressed() {
  randomizeGrid();
  return false;
}

function randomizeGrid() {
  var squares = createVector(width/spacing, height/spacing);
  for (let x = 0; x < squares.x; x++) {
    for (let y = 0; y < squares.y; y++) {
      var row = grid[x] || []
      row[y] = random(1) < 0.5;
      grid[x] = row;
    }
  }
}
