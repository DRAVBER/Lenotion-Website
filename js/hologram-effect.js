class HologramEffect {
  constructor() {
    this.canvas = document.createElement('starfield');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    document.body.appendChild(this.canvas);

    this.scanlinePosition = 0;
    this.animate();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Обновляем позицию линии
    this.scanlinePosition += 2;
    if (this.scanlinePosition > this.canvas.height) {
      this.scanlinePosition = 0;
    }

    // Добавляем мерцание
    this.ctx.fillStyle = 'rgba(0, 255, 255, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    requestAnimationFrame(() => this.animate());
  }
}

new HologramEffect();