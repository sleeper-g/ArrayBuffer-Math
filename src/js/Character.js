export default class Character {
  constructor(name, type) {
    if ( typeof name === 'string' && name.length >= 2 && name.length <= 10){
      this.name = name
    }
    else {
      throw new Error('wrong name')
    }

    this.type = type
    this.health = 100
    this.level = 1
    this.attack = null
    this.defence = null
  }
  levelUp(){
    if (this.health > 0){
      this.level = this.level + 1;
      this.attack = this.attack * 1.2;
      this.defence = this.defence * 1.2;
      this.health = 100;
    }
    else {
      throw new Error('character dead')
    }
  }
  damage(points){
    if (this.health > 0){
      this.health = this.health - points * ( 1 - this.defence / 100 )
    }
    else {
      throw new Error('character dead')
    }
  }

}
