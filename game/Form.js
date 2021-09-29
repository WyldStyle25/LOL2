class Form {
    constructor() {
        this.title = createElement("h1");
        this.story = createElement("h3");
        this.next1 = createButton("Next1")
        this.next2 = createButton("Next2")
        this.title2 = createElement("h1");
        this.story2 = createElement("h3");

    }
    story1(){
        this.title2.html("Diary Entry 2, 6:00 pm");
        this.title2.position(windowWidth / 2 - 150, 100);
        this.story2.html("<p>As you sit looking at the trail, you hear the sounds of a large number of vehicles behind you. You turn around to find the organisation head marching straight at you. <br>'You said there were going to be no meteors?'<br>'There weren't going to be any meteors.'<br> 'Then what hit us?'<br> 'Debris. Probably from one of our previous launches. It's basically everywhere, all around the earth.'<br> 'Then why weren't we looking out for it?'<br> 'Well, let's just say we didn't know it was so potent. Until now. If this was to continue, we may suffer heavy losses later on.'<br> 'What are you planning to do about it then?'<br> 'Get rid of it all. Blast it off without leaving a single trace behind. And we need your help for that. You've been there before. So you know how to avoid it, a little. After you take a rest, I will fill you in on the other problem.'<br> 'Hold on, what other problem?'<br> 'Well, we had this idea of taking the useful lot among the debris and putting it to some use. Unfortunately, the space pirates had the same idea too and now we don't have a choice but to destroy every single piece of resource they could use or else we'll have a huge problem later on.'<br> 'But no matter how many missiles we launch, it won't be enough!'<br> 'Oh, we won't be using missiles. Ever heard of a railgun?'<br> 'Woah, we're gonna use railguns now?'<br> 'Not we, you. Also not a railgun. A destroyer.'<br> With these words the association head walks back to his car, leaving you dazzled.</p> ")
        this.story2.position(20, 150);
        this.next2.hide();
    }
    hidestory(){
        this.title2.hide();
        this.story2.hide();
    }
  
    display() {

        this.title.html("Diary entry 1, October 13th, 2090");
        this.title.position(windowWidth / 2 - 275, 100)
        this.story.html("<p>A few years ago, the world launched rockets to mars. With the intension of testing the possibility of life on the red planet, they started building a station on the outer atmosphere of mars. A rocket bound to earth, carrying your team and a few samples was launched into space. You are the team's captain, and along with your team you had researched countless posibilities for life on Mars. You were going to be discharged from the station on mars and go back to Earth, and report the samples there. The path was a clear one, and the organisation which was founding your squadron had already declared that there were no possibilities of meteors or asteroids which may head your way, and the trip seemed smooth. Or so you thought. On reaching the outer atmosphere of the earth, a red light showed up. In an instant, the systems were going haywire, and the warning signs were screaming. A shrapnel, which may have been part of a previous expedition had embedded into one of the four boosters of your craft, making it lose balance and sending it into an unrecoverable spin in the stratosphere. You try to maintain balance by firing and discharing the other three boosters but the spin is drastic. You command your team to enter into the escape pod bay, but when you do, the shrapnel, which was being loosened by the wind, rips apart the damaged booster and slams into the pod bay. The pods are jammed. The ground is nearing. As you think of your options, a huge explosion behind you sets off your pod's boosters, knocking you out at the same time. When you wake up, you don't know where you are. And you also realise....you're the only survivor.</p>")
        this.story.position(20, 150)
        this.next1.position(windowWidth / 2, windowHeight);
       

        
        this.next1.mousePressed(() => {  
            this.title.hide();
            this.story.hide();
            this.story1();  
        })
            this.next2.mousePressed(()=>{
            this.hidestory();
             })

    };
}