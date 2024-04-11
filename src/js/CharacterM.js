import Character from './Character.js';

export default class CharacterM extends Character {
  constructor(name, type, attack, stoned = false) {
    super(name, type);
    this.attack = attack;
    this.stoned = stoned;
    this.distance = 1;
  }

  get stoned() {
    return this.stondedDope;
  }

  set stoned(value) {
    this.stondedDope = value;
  }

  set attack(value) {
    this.attackDope = value;
  }

  get attack() {
    this.attackDope -= this.attackDope * ((this.distance - 1) / 10);
    if (this.stoned) {
      this.attackDope -= Math.log(this.distance) * 5;
    }
    if (this.attackDope > 0){
      return Math.floor(this.attackDope)
    }
    else {
      return 0
    }
  }
}
