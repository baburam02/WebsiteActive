window.addEventListener("keydown", checkKeyPressed, false);
function checkKeyPressed(key) {

    // Shift
    if (key.keyCode == "16") {
        shift.className = "clicked";
    } else {
        shift.className = "";
    }

    // Space
    if (key.keyCode == "32") {
        space.className = "clicked";
        display.innerText = display.innerText + " " ;
    } else {
        space.className = "";
    }
}
window.addEventListener("keypress", checkKeyPress, false);
    function checkKeyPress(key) {
        // A
        if (key.keyCode == "65") {
            display.innerText = display.innerText + "a";
            btna.className = "clicked";
        }else if(key.keyCode == "97") {
            display.innerText = display.innerText + "a";
            btna.className = "clicked";
        }
        else{
            btna.className = "";
        }

        // B
        if (key.keyCode == "66") {
            display.innerText = display.innerText + "B";
            btnb.className = "clicked";
        }else if(key.keyCode == "98") {
            display.innerText = display.innerText + "b";
            btnb.className = "clicked";
        }
        else{
            btnb.className = "";
        }

        // C
        if (key.keyCode == "67") {
            display.innerText = display.innerText + "C";
            btnc.className = "clicked";
        }else if(key.keyCode == "99") {
            display.innerText = display.innerText + "c";
            btnc.className = "clicked";
        }
        else{
            btnc.className = "";
        }

        // D
        if (key.keyCode == "68") {
            display.innerText = display.innerText + "D";
            btnd.className = "clicked";
        }else if(key.keyCode == "100") {
            display.innerText = display.innerText + "d";
            btnd.className = "clicked";
        }
        else{
            btnd.className = "";
        }

        // E
        if (key.keyCode == "69") {
            display.innerText = display.innerText + "E";
            btne.className = "clicked";
        }else if(key.keyCode == "101") {
            display.innerText = display.innerText + "e";
            btne.className = "clicked";
        }
        else{
            btne.className = "";
        }

        // F
        if (key.keyCode == "70") {
            display.innerText = display.innerText + "F";
            btnf.className = "clicked";
        }else if(key.keyCode == "102") {
            display.innerText =  display.innerText + "f";
            btnf.className = "clicked";
        }
        else{
            btnf.className = "";
        }

         // G
         if (key.keyCode == "71") {
            display.innerText = display.innerText + "G";
            btng.className = "clicked";
        }else if(key.keyCode == "103") {
            display.innerText =  display.innerText + "g";
            btng.className = "clicked";
        }
        else{
            btng.className = "";
        }

         // H
         if (key.keyCode == "72") {
            display.innerText = display.innerText + "H";
            btnh.className = "clicked";
        }else if(key.keyCode == "104") {
            display.innerText =  display.innerText + "h";
            btnh.className = "clicked";
        }
        else{
            btnh.className = "";
        }

         // I
         if (key.keyCode == "73") {
            display.innerText = display.innerText + "I";
            btni.className = "clicked";
        }else if(key.keyCode == "105") {
            display.innerText =  display.innerText + "i";
            btni.className = "clicked";
        }
        else{
            btni.className = "";
        }
         // J
         if (key.keyCode == "74") {
            display.innerText = display.innerText + "J";
            btnj.className = "clicked";
        }else if(key.keyCode == "106") {
            display.innerText =  display.innerText + "j";
            btnj.className = "clicked";
        }
        else{
            btnj.className = "";
        }

          // K
          if (key.keyCode == "75") {
            display.innerText = display.innerText + "K";
            btnk.className = "clicked";
        }else if(key.keyCode == "107") {
            display.innerText =  display.innerText + "k";
            btnk.className = "clicked";
        }
        else{
            btnk.className = "";
        }

          // L
          if (key.keyCode == "76") {
            display.innerText = display.innerText + "L";
            btnl.className = "clicked";
        }else if(key.keyCode == "108") {
            display.innerText =  display.innerText + "l";
            btnl.className = "clicked";
        }
        else{
            btnl.className = "";
        }

          // M
          if (key.keyCode == "77") {
            display.innerText = display.innerText + "M";
            btnm.className = "clicked";
        }else if(key.keyCode == "109") {
            display.innerText =  display.innerText + "m";
            btnm.className = "clicked";
        }
        else{
            btnm.className = "";
        }

          // N
          if (key.keyCode == "78") {
            display.innerText = display.innerText + "N";
            btnn.className = "clicked";
        }else if(key.keyCode == "110") {
            display.innerText =  display.innerText + "n";
            btnn.className = "clicked";
        }
        else{
            btnn.className = "";
        }

          // O
          if (key.keyCode == "79") {
            display.innerText = display.innerText + "O";
            btno.className = "clicked";
        }else if(key.keyCode == "111") {
            display.innerText =  display.innerText + "o";
            btno.className = "clicked";
        }
        else{
            btno.className = "";
        }

          // P
          if (key.keyCode == "80") {
            display.innerText = display.innerText + "P";
            btnp.className = "clicked";
        }else if(key.keyCode == "112") {
            display.innerText =  display.innerText + "p";
            btnp.className = "clicked";
        }
        else{
            btnp.className = "";
        }

          // Q
          if (key.keyCode == "81") {
            display.innerText = display.innerText + "Q";
            btnq.className = "clicked";
        }else if(key.keyCode == "113") {
            display.innerText =  display.innerText + "q";
            btnq.className = "clicked";
        }
        else{
            btnq.className = "";
        }

          // R
          if (key.keyCode == "82") {
            display.innerText = display.innerText + "R";
            btnr.className = "clicked";
        }else if(key.keyCode == "114") {
            display.innerText =  display.innerText + "r";
            btnr.className = "clicked";
        }
        else{
            btnr.className = "";
        }

          // S
          if (key.keyCode == "83") {
            display.innerText = display.innerText + "S";
            btns.className = "clicked";
        }else if(key.keyCode == "115") {
            display.innerText =  display.innerText + "s";
            btns.className = "clicked";
        }
        else{
            btns.className = "";
        }

          // T
          if (key.keyCode == "84") {
            display.innerText = display.innerText + "T";
            btnt.className = "clicked";
        }else if(key.keyCode == "116") {
            display.innerText =  display.innerText + "t";
            btnt.className = "clicked";
        }
        else{
            btnt.className = "";
        }

          // U
          if (key.keyCode == "85") {
            display.innerText = display.innerText + "U";
            btnu.className = "clicked";
        }else if(key.keyCode == "117") {
            display.innerText =  display.innerText + "u";
            btnu.className = "clicked";
        }
        else{
            btnu.className = "";
        }

          // V
          if (key.keyCode == "86") {
            display.innerText = display.innerText + "V";
            btnv.className = "clicked";
        }else if(key.keyCode == "118") {
            display.innerText =  display.innerText + "v";
            btnv.className = "clicked";
        }
        else{
            btnv.className = "";
        }

          // W
          if (key.keyCode == "87") {
            display.innerText = display.innerText + "W";
            btnw.className = "clicked";
        }else if(key.keyCode == "119") {
            display.innerText =  display.innerText + "w";
            btnw.className = "clicked";
        }
        else{
            btnw.className = "";
        }

          // X
          if (key.keyCode == "88") {
            display.innerText = display.innerText + "X";
            btnx.className = "clicked";
        }else if(key.keyCode == "120") {
            display.innerText =  display.innerText + "x";
            btnx.className = "clicked";
        }
        else{
            btnx.className = "";
        }

          // Y
          if (key.keyCode == "89") {
            display.innerText = display.innerText + "Y";
            btny.className = "clicked";
        }else if(key.keyCode == "121") {
            display.innerText =  display.innerText + "y";
            btny.className = "clicked";
        }
        else{
            btny.className = "";
        }

          // Z
          if (key.keyCode == "90") {
            display.innerText = display.innerText + "Z";
            btnz.className = "clicked";
        }else if(key.keyCode == "122") {
            display.innerText =  display.innerText + "z";
            btnz.className = "clicked";
        }
        else{
            btnz.className = "";
        }

    }