function Tasks(){
    this.randCard = function(val){
        var card;
        switch(val){
            case 1: card = {
                name: "Exercise", desc: "You get a few minutes on the treadmill! If only running was this easy at 1g!",
                cogchange: 2, physchange: -3, psychange: 2
            }
            break;
            case 2: card = {
                name: "Cleaning", desc: "Even astronauts have to clean the toilet! At least it is satisfying once complete!",
                cogchange: 0, physchange: -1, psychange: 2
            }
            break;
            case 3: card = {
                name: "Space Walk", desc: "Alright there isn't that much walking…but that comms antenna won't repair itself!",
                cogchange: -3, physchange: -1, psychange: 2
            }
            break;
            case 4: card = {
                name: "Flight Maneuver", desc: "Near collision with asteroid! Take evasive action!",
                cogchange: -3, physchange: -2, psychange: -3
            }
            break;
            case 5: card = {
                name: "Sleep", desc: "Congratulations! You completed all tasks and earned 8hrs of sleep. Collect your reward!",
                cogchange: 2, physchange: 3, psychange: 2
            }
            break;
            case 6: card = {
                name: "Data Logging", desc: "It's not all fun and games…Get to work and log some data!",
                cogchange: -1, physchange: -1, psychange: -3
            }
            break;
            case 7: card = {
                name: "Flight Maneuver", desc: "Unexpected encounter with space debris! Pilot your spacecraft to safety!",
                cogchange: -3, physchange: -2, psychange: -2
            }
            break;
            case 8: card = {//special
                name: "FIRE!", desc: "A fire has broken out! Roll the dice…less than 2 and crewmember is incapacitated two turns. Out of resources? Roll for two crewmembers.",
                cogchange: 0, physchange: -5, psychange: 0
            }
            break;
            case 9: card = {
                name: "Watch a Comet", desc: "Observe the brilliant glow of a commet passing by!",
                cogchange: 0, physchange: 0, psychange: 3
            }
            break;
            case 10: card = {
                name: "Gravity Assist", desc: "It's a white knuckled ride but your mission is shortened! Advance piece one square.",
                cogchange: -2, physchange: 0, psychange: 1
            }
            break;
            case 11: card = {
                name: "Engine Repair", desc: "You are having some trouble getting your thrusters going. You can't go anywhere without fixing this!",
                cogchange: -3, physchange: -3, psychange: -3
            }
            break;
            case 12: card = {
                name: "Personal Hygiene", desc: "Even astronauts poop….",
                cogchange: 1, physchange: 2, psychange: 2
            }
            break;
            case 13: card = {
                name: "Comms Failure", desc: "Oh no! You pass through a radiation belt and lose signal. You won't receive personal messages today.",
                cogchange: 0, physchange: 0, psychange: -3
            }
            break;
            case 14: card = {
                name: "Team Meeting", desc: "The dreaded meeting! A heated debate flairs over the proper usage of the intra-crew message system.",
                cogchange: 0, physchange: 0, psychange: -2
            }
            break;
            case 15: card = {
                name: "Bathroom Repair", desc: "Stuff is supposed to go down the toilet…not back out…",
                cogchange: 0, physchange: -1, psychange: -3
            }
            break;
            case 16: card = {
                name: "Biology Exp.", desc: "Yum! Space lettuce…Better get planting!",
                cogchange: -1, physchange: 0, psychange: 2
            }
            break;
            case 17: card = {
                name: "Evac Training", desc: "Time to get even friendlier with the crew as you all cram into the escape pod…",
                cogchange: -1, physchange: -3, psychange: 0
            }
            break;
            case 18: card = {
                name: "Harvest Food", desc: "Your lettuce is ready! If only you could grow a burger to go with it…",
                cogchange: 1, physchange: 3, psychange: 4
            }
            break;
            case 19: card = {
                name: "SICK!", desc: "You thought that lettuce tasted a bit weird..Bacteria are the worst in space!",
                cogchange: -1, physchange: -5, psychange: -4
            }
            break;
            case 20: card = {
                name: "Robots!", desc: "No hostile AI here! Use the robotic arm to clean the solar panels.",
                cogchange: -2, physchange: 0, psychange: 1
            }
            break;
            case 21: card = {
                name: "Houston?", desc: "Mission control kindly informs you to hurry up, you are behind schedule on those reports…",
                cogchange: 0, physchange: 0, psychange: -2
            }
            break;
            case 22: card = {
                name: "Surface Swab", desc: "Someone forgot to clean…If only Mom was around! Swab for bacterian in your capsule.",
                cogchange: -2, physchange: -1, psychange: 0
            }
            break;
            case 23: card = {
                name: "Clean Scrubbers", desc: "The Carbon Dioxide levels are increasing. Time for a clean-out. At least you don't need duct tape!",
                cogchange: -2, physchange: 1, psychange: 0
            }
            break;
            case 24: card = {
                name: "Video Chat", desc: "Talk to some lucky high school students!...Look I'm floating!",
                cogchange: 0, physchange: 0, psychange: 2
            }
            break;
            case 25: card = {
                name: "Personal Call", desc: "Talk to your family for twenty minutes. Look Mom..I'm in space!",
                cogchange: 1, physchange: 0, psychange: 2
            }
            break;
            case 26: card = {
                name: "Leisure Time", desc: "You finally finished that pesky crossword!",
                cogchange: 2, physchange: 0, psychange: 1
            }
            break;
            case 27: card = {
                name: "Leisure Time", desc: "That was a great movie…Who would have guessed she was a robot the whole time!",
                cogchange: 1, physchange: 0, psychange: 2
            }
            break;
            case 28: card = {
                name: "Leisure Time", desc: "What a fun space-themed board game!",
                cogchange: 2, physchange: 1, psychange: 2
            }
            break;
            // case 22: card = {
            //     name: "", desc: "",
            //     cogchange: -1, physchange: -3, psychange: 0
            // }
            // break;
            default: console.log(val + "Something went wrong drawing a random card!");
        }
        return card;
    }
}

module.exports = new Tasks();
