class SetEffect {
  player;

  constructor(player) {
    this.player = player;
  }

  get description() {
    return 'You have a full set equiped which provides you with a bonus.';
  }
}

export default SetEffect;
