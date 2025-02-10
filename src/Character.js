export default class Character {
  constructor(attack) {
    this.attackValue = attack;
    this.distanceValue = 1;
    this.stonedValue = false;
  }

  get stoned() {
    return this.stonedValue;
  }

  set stoned(value) {
    this.stonedValue = value;
  }

  get attack() {
    let attackPower = this.attackValue * (1 - (this.distanceValue - 1) * 0.1);

    if (this.stonedValue) {
      attackPower -= Math.log2(this.distanceValue) * 5;
    }
    return attackPower > 0 ? Math.round(attackPower) : 0;
  }

  set attack(value) {
    this.attackValue = value;
  }

  set distance(value) {
    if (value < 1) throw new Error('Расстояние должно быть не менее 1');
    this.distanceValue = value;
  }

  get distance() {
    return this.distanceValue;
  }
}
