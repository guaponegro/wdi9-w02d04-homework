game = {
    deck: [
        {
          name: "Bulbasaur",
          damage: 60
        }, {
          name: "Caterpie",
          damage: 40
        }, {
          name: "Charmander",
          damage: 60
        }, {
          name: "Clefairy",
          damage: 50
        }, {
          name: "Jigglypuff",
          damage: 60
        }, {
          name: "Mankey",
          damage: 30
        }, {
          name: "Meowth",
          damage: 60
        }, {
          name: "Nidoran - female",
          damage: 60
        }, {
          name: "Nidoran - male",
          damage: 50
        }, {
          name: "Oddish",
          damage: 40
        }, {
          name: "Pidgey",
          damage: 50
        }, {
          name: "Pikachu",
          damage: 50
        }, {
          name: "Poliwag",
          damage: 50
        }, {
          name: "Psyduck",
          damage: 60
        }, {
          name: "Rattata",
          damage: 30
        }, {
          name: "Squirtle",
          damage: 60
        }, {
          name: "Vulpix",
          damage: 50
        }, {
          name: "Weedle", 
          damage: 40
        }
      ],
    player: {
        name: "Ash",
        hand: [],
        points: 0,
        roundsWon: 0,
    },
    computer: {
        name: "Gary",
        hand: [],
        points: 0,
        roundsWon: 0,
    },
    dealACard(player){
        console.log(`Dealing a card to player ${player.name}`)
        let randomIndex = Math.floor(Math.random() * this.deck.length);
        let cardToDeal = this.deck.splice(randomIndex, 1)[0];
        console.log(cardToDeal);
        player.hand.push(cardToDeal);
    },
    startGame(){
        for(let i = 0; i < 3; i++){
            this.dealACard(game.player);
            this.dealACard(game.computer);
        }
        return this.midGame();
    },
    midGame(){
        for(let i = 0; i < 1; i++){
            this.showChoices();
        }
    },
    showChoices(){
        // $('body').append("<h1>CHOOSE YOUR FATE</h1>")
        $('body').append("<button class='gameChoice'>Do you want to start the round?</button>");
        $('.gameChoice').on("click", () =>{
            for(let i = 0; i < 1; i++){
                this.battle();
            }
            // this.battle();
        });
    },
    battle(){
        this.midGame;
        let playerCard = this.player.hand.pop();
        let computerCard = this.computer.hand.pop();
        console.log(`${this.player.name} played ${playerCard.name} which deals ${playerCard.damage} pts`);
        console.log(`${this.computer.name} played ${computerCard.name} which deals ${computerCard.damage} pts`);
        if(playerCard.damage > computerCard.damage){
            this.player.points ++
            console.log(`${this.player.name} won this battle`);
        } else if(playerCard.damage === computerCard.damage){
            console.log("Tie Game");
        } else {
            this.computer.points ++
            console.log(`${this.computer.name} won this battle`);
        }
        this.roundsWon();
        this.gameWinner();
    },
    roundsWon(){
            console.log(`Score: ${this.player.name}: ${this.player.points}, ${this.computer.name}: ${this.computer.points}`);
            //let gameTitle = `Score: ${this.player.name}: ${this.player.points}, ${this.computer.name}: ${this.computer.points}`;
    },
    gameWinner(){
        const playerWon = `${this.player.name} won this battle`;
        const computerWon = `${this.computer.name} won this battle`;
        if(playerWon){
            console.log(`${this.player.name} won the game!!!`);
        } else if (computerWon){
            console.log(`${this.computer.name} won the game!!!`);
        } else {
            console.log(`NO ONE WINS!!!!!!!!!!!!!!!`)
        }
    },
    // showChoices(){
    //     // $('body').append("<h1>CHOOSE YOUR FATE</h1>")
    //     $('body').append("<button class='gameChoice'>Do you want to start the round?</button>");
    //     $('.gameChoice').on("click", () =>{
    //         for(let i = 0; i < 3; i++){
    //             this.battle();
    //         }
    //         this.battle();
    //     });
    // }
}
$(".start").html("Start Game!").on("click", () => {
    $('.start').remove();
    $("div").append("<h1>Pokeman Game</h1>");
    $("div").append("<h2>The game is beginning</h2>");
    for(i = 0; i < 1; i++){
        game.startGame();  
      }
});

//$('.removeSect').remove();
//$("div").append("<h2>The game is beginning</h2>");



