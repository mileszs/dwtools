import _ from 'lodash'

const DAMAGE_DICE = ['d4', 'd6', 'd8', 'd10', 'd12']
export default class MonsterFactory {
  constructor(answers) {
    this.answers = answers
    this.monster = new Monster({ called: this.answers.called, moves: [this.answers.known_to_do], instinct: this.answers.instinct })
  }

  make() {
    this.calculateFightMethodEffects()
    this.calculateSizeEffects()
    this.calculateDefenseEffects()
    this.calculateKnownForEffects()
    this.calculateCommonAttackEffects()
    this.calculateDescriptionEffects()
    return this.monster
  }

  calculateFightMethodEffects() {
    switch (this.answers.hunt_or_fight) {
    case 'In large groups':
      this.monster.tags.organization.push('horde')
      this.monster.damage_die = 'd6'
      this.monster.hp = 3
      break
    case 'In small groups, about 2-5':
      this.monster.tags.organization.push('group')
      this.monster.damage_die = 'd8'
      this.monster.hp = 6
      break
    case 'All by its lonesome':
      this.monster.tags.organization.push('solitary')
      this.monster.damage_die = 'd10'
      this.monster.hp = 12
      break
    }
  }

  calculateSizeEffects() {
    switch (this.answers.size) {
    case 'Smaller than a house cat':
      this.monster.tags.size.push('tiny')
      this.monster.tags.attack.push('hand')
      this.monster.damage_modifier = -2
      break
    case 'Halfling-esque':
      this.monster.tags.size.push('small')
      this.monster.tags.attack.push('close')
      break
    case 'About human size':
      this.monster.tags.attack.push('close')
      break
    case 'As big as a cart':
      this.monster.tags.size.push('large')
      this.monster.tags.attack.push('close')
      this.monster.tags.attack.push('reach')
      this.monster.damage_modifier = 1
      this.monster.hp += 4
      break
    case 'All by its lonesome':
      this.monster.tags.size.push('huge')
      this.monster.tags.attack.push('reach')
      this.monster.damage_modifier = 3
      this.monster.hp += 8
      break
    }
  }

  calculateDefenseEffects() {
    switch (this.answers.defense) {
    case 'Cloth or flesh':
      // 0 armor
      break
    case 'Leathers or thick hide':
      this.monster.armor = 1
      break
    case 'Mail or scales':
      this.monster.armor = 2
      break
    case 'Plate or bone':
      this.monster.armor = 3
      break
    case 'Permanent magical protection':
      this.monster.tags.basic.push('magical')
      this.monster.armor = 4
      break
    }
  }

  calculateKnownForEffects() {
    if (this.answers.unrelenting_strength) {
      this.monster.tags.attack.push('forceful')
      this.monster.damage_modifier += 2
    }
    if (this.answers.skill_in_offense) {
      this.monster.roll_twice_take = 'best'
    }
    if (this.answers.skill_in_defense) {
      this.monster.armor += 1
    }
    if (this.answers.deft_strikes) {
      this.monster.piercing = 1
    }
    if (this.answers.uncanny_endurance) {
      this.monster.hp += 4
    }
    if (this.answers.deceit_and_trickery) {
      this.monster.tags.basic.push('stealthy')
      this.monster.moves.push('Write a move about dirty tricks')
    }
    if (this.answers.useful_adaptaton) {
      this.monster.special_qualities.push('Write a special quality for the adaptation')
    }
    if (this.answers.favor_of_gods_lethal) {
      this.monster.tags.basic.push('divine')
      this.monster.damage_modifier += 2
    }
    if (this.answers.favor_of_gods_durable) {
      this.monster.tags.basic.push('divine')
      this.monster.hp += 2
    }
    if (this.answers.spells_and_magic) {
      this.monster.tags.basic.push('magical')
      this.monster.moves.push('Write a move about its spells')
    }
  }

  calculateCommonAttackEffects() {
    this.monster.attack = this.answers.common_form_of_attack
    if (this.answers.armaments_vicious_and_obvious) {
      this.monster.damage_modifier += 2
    }
    if (this.answers.keeps_others_at_bay) {
      this.monster.tags.attack.push('reach')
    }
    if (this.answers.armaments_are_small_and_weak) {
      this.decreaseDamageDie()
    }
    if (this.answers.armaments_can_slice_pierce_metal) {
      this.monster.tags.attack.push('messy')
      this.monster.piercing += 1
    }
    if (this.answers.armaments_can_tear_metal_apart) {
      this.monster.piercing += 3
    }
    if (this.answers.armor_wont_help) {
      this.monster.tags.attack.push('ignores armor')
    }
    if (this.answers.attacks_at_range_near) {
      this.monster.tags.attack.push('near')
    }
    if (this.answers.attacks_at_range_far) {
      this.monster.tags.attack.push('far')
    }
  }

  calculateDescriptionEffects() {
    if (this.answers.dangerous_other_reasons) {
      this.monster.tags.basic.push('devious')
      this.decreaseDamageDie()
      this.monster.moves.push('Write a move about why its dangerous')
    }
    if (this.answers.larger_group_support) {
      this.monster.tags.basic.push('organized')
      this.monster.moves.push('Write a move about calling on others for help')
    }
    if (this.answers.smart_as_human) {
      this.monster.tags.basic.push('intelligent')
    }
    if (this.answers.actively_defends) {
      this.monster.tags.basic.push('cautious')
      this.monster.armor += 1
    }
    if (this.answers.collects_trinkets) {
      this.monster.tags.basic.push('hoarder')
    }
    if (this.answers.beyond_this_world) {
      this.monster.tags.basic.push('planar')
      this.monster.moves.push('Write a move about using its otherworldly knowledge and power')
    }
    if (this.answers.alive_beyond_biology) {
      this.monster.hp += 4
    }
    if (this.answers.made_by_someone) {
      this.monster.tags.basic.push('construct')
      this.monster.special_qualities.push('Give it a special quality or two about its construction or purpose')
    }
    if (this.answers.disturbing) {
      this.monster.tags.basic.push('terrifying')
      this.monster.special_qualities.push("Write a special quality about why it's so horrendous")
    }
    if (this.answers.no_organs) {
      this.monster.tags.basic.push('amorphous')
      this.monster.hp += 3
      this.monster.armor += 1
    }
    if (this.answers.ancient) {
      this.increaseDamageDie()
    }
    if (this.answers.abhors_violence) {
      this.monster.roll_twice_take = 'worst'
    }
  }

  decreaseDamageDie() {
    let index = DAMAGE_DICE.indexOf(this.monster.damage_die)
    this.monster.damage_die = DAMAGE_DICE[index-1]
  }

  increaseDamageDie() {
    let index = DAMAGE_DICE.indexOf(this.monster.damage_die)
    this.monster.damage_die = DAMAGE_DICE[index+1]
  }
}

class Monster {
  constructor(attributes = {}) {
    this.damage_die = 'd6'
    this.damage_modifier = 0
    this.piercing = 0
    this.hp = 0
    this.armor = 0
    this.tags = {
      attack: [],
      basic: [],
      organization: [],
      size: []
    }
    this.moves = []
    this.special_qualities = []
    _.each(attributes, (value, property) => {
      this[property] = value
    })
  }
}
