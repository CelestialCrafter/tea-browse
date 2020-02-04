class Animation {
	constructor(element) {
		this.width = element.offsetWidth;
		this.pos = 10;
		this.estyl = this.element.style.left;
		this.interval = setInterval(this.frame(), 1);
	}
	frame() {
		if (this.pos === 0) clearInterval(this.interval);
		else {
			this.estyl = this.estyl - this.width / 10 + 'px';
			this.pos--;
		}
	}
}

export default Animation;
