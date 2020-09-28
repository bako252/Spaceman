var phrase_list = [ "abruptly" , "absurd" , "abyss" , "affix" , "askew" , "avenue" , "awkward" , "axiom" , "azure" , "bagpipes" , "bandwagon" , "banjo" , "bayou" , "beekeeper" , "bikini" , "blitz" , "blizzard" , "boggle" , "bookworm" , "boxcar" , "boxful" , "buckaroo" , "buffalo" , "buffoon" , "buxom" , "buzzard" , "buzzing" , "buzzwords" , "caliph" , "cobweb" , "cockiness" , "croquet" , "crypt" , "curacao" , "cycle" , "daiquiri" , "dirndl" , "disavow" , "dizzying" , "duplex" , "dwarves" , "embezzle" , "equip" , "espionage" , "euouae" , "exodus" , "faking" , "fishhook" , "fixable" , "fjord" , "flapjack" , "flopping" , "fluffiness" , "flyby" , "foxglove" , "frazzled" , "frizzled" , "fuchsia" , "funny" , "gabby" , "galaxy" , "galvanize" , "gazebo" , "giaour" , "gizmo" , "glowworm" , "glyph" , "gnarly" , "gnostic" , "gossip" , "grogginess" , "haiku" , "haphazard" , "hyphen" , "iatrogenic" , "icebox" , "injury" , "ivory" , "ivy" , "jackpot" , "jaundice" , "jawbreaker" , "jaywalk" , "jazziest" , "jazzy" , "jelly" , "jigsaw" , "jinx" , "jiujitsu" , "jockey" , "jogging" , "joking" , "jovial" , "joyful" , "juicy" , "jukebox" , "jumbo" , "kayak" , "kazoo" , "keyhole" , "khaki" , "kilobyte" , "kiosk" , "kitsch" , "kiwifruit" , "klutz" , "knapsack" , "larynx" , "lengths" , "lucky" , "luxury" , "lymph" , "marquis" , "matrix" , "megahertz" , "microwave" , "mnemonic" , "mystify" , "naphtha" , "nightclub" , "nowadays" , "numbskull" , "nymph" , "onyx" , "ovary" , "oxidize" , "oxygen" , "pajama" , "peekaboo" , "phlegm" , "pixel" , "pizazz" , "pneumonia" , "polka" , "pshaw" , "psyche" , "puppy" , "puzzling" , "quartz" , "queue" , "quips" , "quixotic" , "quiz" , "quizzes" , "quorum" , "razzmatazz" , "rhubarb" , "rhythm" , "rickshaw" , "schnapps" , "scratch" , "shiv" , "snazzy" , "sphinx" , "spritz" , "squawk" , "staff" , "strength" , "strengths" , "stretch" , "stronghold" , "stymied" , "subway" , "swivel" , "syndrome" , "thriftless" , "thumbscrew" , "topaz" , "transcript" , "transgress" , "transplant" , "triphthong" , "twelfth" , "twelfths" , "unknown" , "unworthy" , "unzip" , "uptown" , "vaporize" , "vixen" , "vodka" , "voodoo" , "vortex" , "voyeurism" , "walkway" , "waltz" , "wave" , "wavy" , "waxy" , "wellspring" , "wheezy" , "whiskey" , "whizzing" , "whomever" , "wimpy" , "witchcraft" , "wizard" , "woozy" , "wristwatch" , "wyvern" , "xylophone" , "yachtsman" , "yippee" , "yoked" , "youthful" , "yummy" , "zephyr" , "zigzag" , "zigzagging" , "zilch" , "zipper" , "zodiac" , "zombie"];
var repeat = [];
var randomnr = "";
var length = 0; 
var phrase = "";
var phrase1 = "";
var miss = 0
var alphabet = "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż";
alphabet = alphabet.toUpperCase();

function Generate(randomnr){
    phrase = phrase_list[randomnr];
    length = phrase.length;
    phrase = phrase.toUpperCase();
    for(i=0; i<length; i++){
        if(phrase.charAt(i)==" ") phrase1 = phrase1 + " ";
        else phrase1 = phrase1 + "-";
    }
    write_phrase(phrase1);
}

function Randomnumber(){
    randomnr = parseInt(Math.random()*phrase_list.length);
    if(repeat.length != 0){
        for(var i=0; i<repeat.length; i++){
            if(randomnr == repeat[i]){
                Randomnumber();
                if(phrase_list.length == repeat.length){
                    endscreen();
                }
            }
        }
    }
    repeat.push(randomnr);
    Generate(randomnr);
}

function reset(){

    document.getElementById("whitespaceman").style.top = "-500px";
    document.getElementById("whitespaceman").style.transform = "scaleX(-1)";
    document.getElementById("gun").style.top = "-500px";
    document.getElementById("bullet").style.top = "-500px";
    miss = 0;
    phrase1 = "";
    document.getElementById("top").innerHTML = "";
    document.getElementById("announcement").innerHTML = "";
    for(var i=0; i<35; i++){
        var element = "lit" + i; 
        document.getElementById(element).style.border = "3px solid gray";
        document.getElementById(element).style.color = "white";
        document.getElementById(element).style.background = "";
        document.getElementById(element).setAttribute("onclick","sprawdz(" + i + ")");
    }
    document.getElementById("images").style.opacity  = "1";
    document.getElementById("alphabet").style.opacity  = "1";
    Randomnumber();
}

function firstrun(){
    var div_content = "";
    for(i=0;i<=34;i++){
        var element = "lit" + i;
        div_content = div_content + "<div class ='letter' onclick = 'sprawdz(" + i + ")'id = '" + element + "'>" + alphabet.charAt(i) + "</div>"
        if((i+1)%7 == 0){
            div_content = div_content + "<div style='clear: both;'></div>"
        }
    }
    
    document.getElementById("alphabet").innerHTML = div_content;
    Randomnumber();
}

function write_phrase(phrase){
    document.getElementById("top").innerHTML = "";
    document.getElementById("top").innerHTML = "Phrase nr" + randomnr + "<br/>" + phrase;
}

String.prototype.replace = function(place, character){
    if (place > this.length - 1)
        return this.toString();
    else return this.substr(0, place) + character + this.substr(place + 1);
}

function sprawdz(letter){
    var hit = false;
    for(i=0; i<length; i++){
        if(phrase.charAt(i) == alphabet.charAt(letter)){
            phrase1 = phrase1.replace(i, phrase.charAt(i));
            hit = true;
        }
    }
    write_phrase(phrase1);
    var element = "lit" + letter;

    if(hit){
        document.getElementById(element).style.border = "3px solid #13dd35";
        document.getElementById(element).style.color = "#13dd35";
        document.getElementById(element).style.background = "#1e4124";
        document.getElementById(element).setAttribute("onclick",";");
    }
    else{
        miss++;
        document.getElementById(element).style.border = "3px solid #ec3030";
        document.getElementById(element).style.color = "#ec3030";
        document.getElementById(element).style.background = "#582f2f";
        document.getElementById(element).setAttribute("onclick",";");
        switch (miss) {
            case 0:
                animation0();
                break;
            case 1:
                animation1();
                break;
            case 2:
                animation2();
                break;
            case 3:
                animation3();
                break;
            case 4:
                animation4();
                break;
            case 5:
                animation5();
                break;
            case 6:
                animation6();
                break;
            case 7:
                animation7();
                break;
            case 8:
                animation8();
                break;
            case 9:
                block()
                animation9();
                setTimeout(function(){ Gameover();},2000);
                break;
        }
    }
    if(phrase1 == phrase){ 
        block();
        document.getElementById("announcement").innerHTML = "<br /> You won! <br />  <span class='win' onclick = 'reset()'>Reset</span>";
        document.getElementById("images").style.opacity  = "0";
        document.getElementById("alphabet").style.opacity  = "0";
    }
}

function block(){
    for( i=0; i<35; i++){
        var element = "lit" + i;
        document.getElementById(element).setAttribute("onclick",";");
    }
}

function unlock(){
    for( i=0; i<35; i++){
        var element = "lit" + i;
        document.getElementById(element).setAttribute("onclick","sprawdz(" + i + ")");
    }
}

function Gameover(){
    write_phrase(phrase);
    document.getElementById("announcement").innerHTML = "<br /> Gameover! <br /> <span class='lose' onclick = 'reset()'>Reset</span>";
    document.getElementById("images").style.opacity  = "0";
        document.getElementById("alphabet").style.opacity  = "0";;
}

function endscreen(){
    document.getElementById("announcement").innerHTML = "<br /> You got through all phrases! <br /> <span class='lose' onclick = 'location.reload()'>Reset</span>";
    document.getElementById("images").outerHTML  = "";
    document.getElementById("alphabet").outerHTML  = "";
}

function animation0(){

}

function animation1(){
    document.getElementById("whitespaceman").style.animation = "whitespaceman1 1s";
    document.getElementById("whitespaceman").style.top = "0";
    document.getElementById("whitespaceman").style.left = "95%";
}

function animation2(){
    document.getElementById("whitespaceman").style.animation = "whitespaceman2 1.5s";
    document.getElementById("whitespaceman").style.left = "60%";
}
function animation3(){
    document.getElementById("whitespaceman").style.transform = "scaleX(1)"
    document.getElementById("whitespaceman").style.animation = "whitespaceman3 2s";
    document.getElementById("whitespaceman").style.left = "110%";
}
function animation4(){
    document.getElementById("whitespaceman").style.transform = "rotate(140deg)";
    document.getElementById("whitespaceman").style.animation = "whitespaceman4 1s";
    document.getElementById("whitespaceman").style.left = "80%";
    document.getElementById("whitespaceman").style.top = "-95%";
}
function animation5(){
    document.getElementById("whitespaceman").style.animation = "whitespaceman5v1 0.6s";
    document.getElementById("whitespaceman").style.left = "-110%";
    document.getElementById("whitespaceman").style.top = "0";
    setTimeout(function(){
        document.getElementById("whitespaceman").style.transform = "rotate(0deg)";
        document.getElementById("whitespaceman").style.animation = "whitespacemany5v2 1s";
        document.getElementById("whitespaceman").style.left = "-95%";
        document.getElementById("whitespaceman").style.top = "0";
    }, 600);
}
function animation6(){
    document.getElementById("whitespaceman").style.animation = "whitespaceman6 1s";
    document.getElementById("whitespaceman").style.left = "-70%";
}
function animation7(){
    document.getElementById("whitespaceman").style.animation = "whitespaceman7v1 0.6s";
    document.getElementById("whitespaceman").style.transform = "scaleX(-1)";
    document.getElementById("whitespaceman").style.left = "-60%";
    setTimeout(function(){
        document.getElementById("whitespaceman").style.transform = "scaleX(1)";
        document.getElementById("whitespaceman").style.animation = "whitespaceman7v2 1s";
        document.getElementById("whitespaceman").style.left = "-30%";
    }, 800);
}
function animation8(){
    document.getElementById("whitespaceman").style.animation = "whitespaceman8 2.5s";
    document.getElementById("whitespaceman").style.left = "-95%";
    document.getElementById("whitespaceman").style.transform = "scaleX(-1)";
}
function animation9(){
    document.getElementById("whitespaceman").style.transform = "scaleX(1)";
    setTimeout(function(){
        document.getElementById("gun").style.left = "-85%";
        document.getElementById("gun").style.top = "0";
        setTimeout(function(){
            document.getElementById("gun").style.animation = "gun 2s";
            document.getElementById("bullet").style.left = "-85%";
            document.getElementById("bullet").style.top = "0";
            document.getElementById("bullet").style.animation = "bullet 2s";
        }, 400);
    }, 400);
}

window.onload = firstrun;
