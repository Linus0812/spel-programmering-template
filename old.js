
        x = totalHeight / 2;
        
        updatesPerSecond = 120;
        function update(){
            clearScreen();
            fill('black');
            x += 1.9;
            circle(200 + x,200,10, "red");
            text(100, 100, 100, "God morgon!", "red");
        }
