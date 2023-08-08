var memory_game_card_count;
var memory_game_card_count_show = document.getElementById('memory_game_diff_shower');
var ThemeFolderName = ""
var Memoey_Timer_Time = 15;

Memory_Game_Onload()

function scrollToTop() {
    setTimeout(()=>{
        window.scrollTo(0, 0);
    },100)
  }


function Memory_Game_Onload()
{

    scrollToTop()
    Memoey_Game_Change_Diff(3)
    Memoey_Game_Theme_Change(0)

    
}

function Memoey_Game_Change_Diff(n)
{
    var veryeasy =  document.getElementById('memory_game_diff_btn_VE')
    var normal =  document.getElementById('memory_game_diff_btn_N')
    var easy =  document.getElementById('memory_game_diff_btn_E')
    var hard = document.getElementById('memory_game_diff_btn_H')
    var veryhard =  document.getElementById('memory_game_diff_btn_VH')

    switch(n)
    {
        case 1:
            veryeasy.className="memory_button_choose_diff_enabled"
            normal.className="memory_button_choose_diff_disabled"
            easy.className="memory_button_choose_diff_disabled"
            hard.className="memory_button_choose_diff_disabled"
            veryhard.className="memory_button_choose_diff_disabled"
            memory_game_card_count = 8;
            break;
        case 2:
            veryeasy.className="memory_button_choose_diff_disabled"
            normal.className="memory_button_choose_diff_disabled"
            easy.className="memory_button_choose_diff_enabled"
            hard.className="memory_button_choose_diff_disabled"
            veryhard.className="memory_button_choose_diff_disabled"
            memory_game_card_count = 14;
            break
        case 3:
            veryeasy.className="memory_button_choose_diff_disabled"
            normal.className="memory_button_choose_diff_enabled"
            easy.className="memory_button_choose_diff_disabled"
            hard.className="memory_button_choose_diff_disabled"
            veryhard.className="memory_button_choose_diff_disabled"
            memory_game_card_count = 22;
            break
        case 4:
            veryeasy.className="memory_button_choose_diff_disabled"
            normal.className="memory_button_choose_diff_disabled"
            easy.className="memory_button_choose_diff_disabled"
            hard.className="memory_button_choose_diff_enabled"
            veryhard.className="memory_button_choose_diff_disabled" 
            memory_game_card_count = 28;
            break
        case 5:
            veryeasy.className="memory_button_choose_diff_disabled"
            normal.className="memory_button_choose_diff_disabled"
            easy.className="memory_button_choose_diff_disabled"
            hard.className="memory_button_choose_diff_disabled"
            veryhard.className="memory_button_choose_diff_enabled"  
            memory_game_card_count = 32;
            break
    }
    memory_game_card_count_show.textContent=`cards : ${memory_game_card_count}`
}

function Memoey_Game_Theme_Change(n)
{
    var PL = document.getElementById('memory_game_theme_btn_PL');
    var CI = document.getElementById('memory_game_theme_btn_CI');
    var themeFolderNameShow;
    switch(n)
    {
        case 0:
            PL.className = 'memory_button_choose_diff_enabled'
            CI.className = 'memory_button_choose_diff_disabled'
            ThemeFolderName = 'programming_Languages';
            themeFolderNameShow = 'programming languages';
            break;
        case 1:
            PL.className = 'memory_button_choose_diff_disabled'
            CI.className = 'memory_button_choose_diff_enabled'
            ThemeFolderName = 'crypto_coins';
            themeFolderNameShow = 'Cryptocurrency Icons'
            break;
    }

    document.getElementById('memory_game_Theme_Show').textContent = `theme : ${themeFolderNameShow}`
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


var memory_game_timer;
function Memory_Game_Play()
{
    var gameContainer = document.getElementById('memory_game_the_game');
    clearInterval(memory_game_timer)
    memory_game_timer = 15;
    gameContainer.innerHTML = ""
    document.getElementById('memory_game_play_button').disabled = true
    window.location.hash = "memory_game_the_game"
    var GameHTML = document.createElement('div');
    GameHTML.className = "Memory_game_PLAY_IMAGE_CONTAINER";

    var Items = []
    var i = 0;
    var k = 1;
    var o = 0;
    while(i<memory_game_card_count/2)
    {
        Items[o] = k;
        Items[o+1] = k;
        o = o + 2;
        i++;
        k++;
    }
    shuffle(Items)
    console.log(Items)

    var s = 0;
    var q = 0;
    var M_G_html_code;
    while(s<memory_game_card_count)
    {
        var temp = `
        <button id="Memory_Game_DIV${q}" class="Memoey_game_PLAY_IMAGE" onclick="Memory_Game_Click(${Items[s]},${q})">
            <img id="Memory_Game_IMG${q}" src="https://www.dl.kasra071.com/v3_assets/Memory_Game/${ThemeFolderName}/${Items[s]}.png" />
        </button>
        `
        if(s==0){M_G_html_code=temp}else{M_G_html_code = M_G_html_code + temp}
        s++;
        q++;
    }
    GameHTML.innerHTML = M_G_html_code;
    gameContainer.innerHTML=`
    <p id="Memory_Game_Timer_Lose_Win_Shower"></p>
    <button onclick="Memory_Game_PlayAgain()" id="memory_game_playAgain_button">Play Again</button>
    <button onclick="Memory_Game_Exit()" id="memory_game_Exit_button">EXIT</button>
    <p id="memoey_game_flip_counter"></p>

    `
    gameContainer.appendChild(GameHTML)
    memory_game_timer = setInterval(Memory_Game_Timer,1000);
    

    
}
function Memory_Game_PlayAgain()
{
    var gameContainer = document.getElementById('memory_game_the_game');
    gameContainer.innerHTML = ""
    document.getElementById('memory_game_play_button').disabled = false;
    Memory_Game_Play()
}

function Memory_Game_Exit()
{
    scrollToTop()
    var gameContainer = document.getElementById('memory_game_the_game');
    document.getElementById('memory_game_play_button').disabled = false;
    gameContainer.innerHTML = ""
    clearInterval(memory_game_timer)
    memory_game_timer = 15;
}

function Memory_Game_Timer()
{
    var memory_game_timer_p = document.getElementById('Memory_Game_Timer_Lose_Win_Shower')
    Memoey_Timer_Time--;
    memory_game_timer_p.textContent = `Time Remaining : ${Memoey_Timer_Time}`
    if(Memoey_Timer_Time==0){Memory_Game_Lose()}
}

function Memory_Game_Lose(){
    memory_game_win_count = 0
    memory_game_succses_flips = []


    document.getElementById('memory_game_Exit_button').style.display="block"
    document.getElementById('memory_game_playAgain_button').style.display="block"
    clearInterval(memory_game_timer)
    Memoey_Timer_Time = 15;
    document.getElementById('Memory_Game_Timer_Lose_Win_Shower').textContent = "You Lost!"
    document.getElementById('memoey_game_flip_counter').textContent = "flips :" + memory_game_flip_count
    var i = 0;
    while(-1)
    {
        var temp = document.getElementById(`Memory_Game_DIV${i}`)
        if(!temp){break;}
        temp.disabled = true
        i++
    }
}

var Memory_game_flipped = []
var memory_game_flipped_BOOL = false;
var memory_game_image_opacity = []
var memory_game_succses_flips = []
var memory_game_win_count = 0;

var memory_game_flip_count = 0;

function nothing(){}

function Memory_Game_Click(n,img)
{
    var image = document.getElementById(`Memory_Game_IMG${img}`);

    if(!memory_game_flipped_BOOL)
    {
        memory_game_flip_count++;
        Memory_game_flipped[0] = n;
        memory_game_image_opacity[0] = img
        image.style.opacity = 1;
        memory_game_flipped_BOOL = true;
    }else{

        Memory_game_flipped[1] = n;
        memory_game_image_opacity[1] = img
        image.style.opacity = 1;
        console.log(Memory_game_flipped)
        console.log(memory_game_image_opacity)
        console.log()
        console.log(memory_game_succses_flips)
        
        if(memory_game_image_opacity[0] == memory_game_image_opacity[1]){}else{
            memory_game_flip_count++;
            if(Memory_game_flipped[0] == Memory_game_flipped[1])
            {
                document.getElementById(`Memory_Game_DIV${memory_game_image_opacity[0]}`).onclick = nothing()
                document.getElementById(`Memory_Game_DIV${memory_game_image_opacity[1]}`).onclick = nothing()
                document.getElementById(`Memory_Game_DIV${memory_game_image_opacity[0]}`).style.cursor = "defualt";
                document.getElementById(`Memory_Game_DIV${memory_game_image_opacity[1]}`).style.cursor = "defualt";
                document.getElementById(`Memory_Game_DIV${memory_game_image_opacity[0]}`).style.animation = "memory_game_right 0.7s"
                document.getElementById(`Memory_Game_DIV${memory_game_image_opacity[1]}`).style.animation = "memory_game_right 0.7s"


                clearInterval(memory_game_timer)
                Memoey_Timer_Time = 15;
                memory_game_timer = setInterval(Memory_Game_Timer,1000);
                memory_game_image_opacity = []
                Memory_game_flipped = []
                memory_game_succses_flips[memory_game_win_count] = n;
                memory_game_win_count++;
                if(memory_game_succses_flips.length == memory_game_card_count/2 || memory_game_succses_flips.length > memory_game_card_count/2)
                {
                    document.getElementById('memory_game_Exit_button').style.display="block"
                    document.getElementById('memory_game_playAgain_button').style.display="block"

                    clearInterval(memory_game_timer)
                    Memoey_Timer_Time = 15;
                    document.getElementById('Memory_Game_Timer_Lose_Win_Shower').textContent = "You Won!"
                    document.getElementById('memoey_game_flip_counter').textContent = "flips :" + memory_game_flip_count          
                    
                    memory_game_succses_flips = []
                    memory_game_win_count = 0;
                }
            }else{
                document.getElementById(`Memory_Game_DIV${memory_game_image_opacity[0]}`).style.animation = "memory_game_shake 0.2s"
                document.getElementById(`Memory_Game_DIV${memory_game_image_opacity[1]}`).style.animation = "memory_game_shake 0.2s"
                setTimeout(() => {
                    document.getElementById(`Memory_Game_DIV${memory_game_image_opacity[0]}`).style.animation = ""
                    document.getElementById(`Memory_Game_DIV${memory_game_image_opacity[1]}`).style.animation = ""
                }, 200);
                var i = 0;
                while(-1)
                {
                    var temp = document.getElementById(`Memory_Game_DIV${i}`)
                    if(!temp){break;}
                    temp.disabled = true
                    i++
                }
                setTimeout(function(){
                    var i = 0;
                    while(-1)
                    {
                        var temp = document.getElementById(`Memory_Game_DIV${i}`)
                        if(!temp){break;}
                        temp.disabled = false
                        i++
                    }
                    document.getElementById(`Memory_Game_IMG${memory_game_image_opacity[0]}`).style.opacity = 0;
                    document.getElementById(`Memory_Game_IMG${memory_game_image_opacity[1]}`).style.opacity = 0;
                    memory_game_image_opacity = []
                    Memory_game_flipped = []
                },500)
            }
            memory_game_flipped_BOOL = false;
        }
    }


}