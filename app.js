class DrumKit {
	constructor() {
		this.pads = document.querySelectorAll(".pad");
		this.play = document.querySelector(".play");
		this.kickAudio = document.querySelector(".kick-sound");
		this.snareAudio = document.querySelector(".sanre-sound");
		this.hihatAudio = document.querySelector(".hihat-sound");
		this.index = 0;
		this.bpm = 150;
	}
	repeat() {
		let step = this.index % 8;
		const activeBars = document.querySelectorAll(`b${step}`);
		// activeBars.classList.toggle(".active");
		this.index++;
	}
	start() {
		const interval = (60/this.bpm)*1000;
		setInterval(() => {
			this.repeat();
		}, interval);
	}
}

const drumKit = new DrumKit();

drumKit.pads.forEach();
drumKit.play.addEventListener("click",()=>{
	drumKit.start();
});