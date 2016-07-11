import React, { Component, PropTypes } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import classNames from 'classnames'
import _ from 'lodash'

function capitalizedTags(tags) {
  return _.map(tags, tag => _.capitalize(tag))
}

export default class MonsterMaker extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleCheckboxToggle = this.handleCheckboxToggle.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleChange(id, e) {
    let obj = JSON.parse(JSON.stringify(this.props.attributes))
    obj[id] = e.target.value
    this.props.actions.changeMonster(obj)
  }

  handleCheckboxToggle(id, e) {
    let obj = JSON.parse(JSON.stringify(this.props.attributes))
    obj[id] = e.target.checked
    this.props.actions.changeMonster(obj)
  }

  handleReset(e) {
    e.preventDefault()
    this.props.actions.resetMonsterMaker()
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-6'>
          <form>
            <div className='form-group'>
              <label>What do you call it?</label>
              <input type="text" className='form-control' onChange={_.partial(this.handleChange, 'called')} value={this.props.attributes.called} />
            </div>
            <div className='form-group'>
              <label>What is it known to do? (Write a monster move describing what it does.)</label>
              <input type="text" className='form-control' onChange={_.partial(this.handleChange, 'known_to_do')} value={this.props.attributes.known_to_do} />
            </div>
            <div className='form-group'>
              <label>What does it want that causes problems for others? (This is its instinct.)</label>
              <input type="text" className='form-control' id="instinct" onChange={_.partial(this.handleChange, 'instinct')} value={this.props.attributes.instinct} />
            </div>
            <div className='form-group'>
              <label>How does it usually hunt or fight?</label>
              <select className='form-control' onChange={_.partial(this.handleChange, 'hunt_or_fight')}>
                <option>In large groups</option>
                <option>In small groups, about 2-5</option>
                <option>All by its lonesome</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor="big">How big is it?</label>
              <select className='form-control' onChange={_.partial(this.handleChange, 'size')}>
                <option>Smaller than a house cat</option>
                <option>Halfling-esque</option>
                <option>About human size</option>
                <option>As big as a cart</option>
                <option>Much larger than a cart</option>
              </select>
            </div>
            <div className='form-group'>
              <label>What is its most important defense?</label>
              <select className='form-control' onChange={_.partial(this.handleChange, 'defense')}>
                <option>Cloth or flesh</option>
                <option>Leathers or thick hide</option>
                <option>Mail or scales</option>
                <option>Plate or bone</option>
                <option>Permanent magical protection</option>
              </select>
            </div>
            <div className='form-group'>
              <p><label>What is it known for? (Choose all that apply.)</label></p>
              <AttributeCheckbox label='Unrelenting strength' domId='unrelenting_strength' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'unrelenting_strength')} isChecked={this.props.attributes.unrelenting_strength} />
              <AttributeCheckbox label='Skill in offense' domId='skill_in_offense' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'skill_in_offense')} isChecked={this.props.attributes.skill_in_offense} />
              <AttributeCheckbox label='Skill in defense' domId='skill_in_defense' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'skill_in_defense')} isChecked={this.props.attributes.skill_in_defense} />
              <AttributeCheckbox label='Deft strikes' domId='deft_strikes' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'deft_strikes')} isChecked={this.props.attributes.deft_strikes} />
              <AttributeCheckbox label='Uncanny endurance' domId='uncanny_endurance' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'uncanny_endurance')} isChecked={this.props.attributes.uncanny_endurance} />
              <AttributeCheckbox label='Deceit and trickery' domId='deceit_and_trickery' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'deceit_and_trickery')} isChecked={this.props.attributes.deceit_and_trickery} />
              <AttributeCheckbox label='A useful adaptation like being amphibious or having wings' domId='useful_adaptaton' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'useful_adaptaton')} isChecked={this.props.attributes.useful_adaptaton} />
              <AttributeCheckbox label='The favor of the gods (increased lethality)' domId='favor_of_gods_lethal' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'favor_of_gods_lethal')} isChecked={this.props.attributes.favor_of_gods_lethal} />
              <AttributeCheckbox label='The favor of the gods (increased durability)' domId='favor_of_gods_durable' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'favor_of_gods_durable')} isChecked={this.props.attributes.favor_of_gods_durable} />
              <AttributeCheckbox label='Spells and magic' domId='spells_and_magic' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'spells_and_magic')} isChecked={this.props.attributes.spells_and_magic} />
            </div>
            <div className='form-group'>
              <label>What is its most common form of attack?</label>
              <input type="text" className='form-control' id="common_form_of_attack" onChange={_.partial(this.handleChange, 'common_form_of_attack')} value={this.props.attributes.common_form_of_attack} />
            </div>
            <div className='form-group'>
              <label>Answer these questions about its common form of attack</label>
              <AttributeCheckbox label="Its armaments are vicious and obvious" domId='armaments_vicious_and_obvious' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'armaments_vicious_and_obvious')} isChecked={this.props.attributes.armaments_vicious_and_obvious} />
              <AttributeCheckbox label="It lets the monster keep others at bay" domId='keeps_others_at_bay' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'keeps_others_at_bay')} isChecked={this.props.attributes.keeps_others_at_bay} />
              <AttributeCheckbox label="Its armaments are small and weak" domId='armaments_are_small_and_weak' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'armaments_are_small_and_weak')} isChecked={this.props.attributes.armaments_are_small_and_weak} />
              <AttributeCheckbox label="Its armaments can slice or pierce metal" domId='armaments_can_slice_pierce_metal' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'armaments_can_slice_pierce_metal')} isChecked={this.props.attributes.armaments_can_slice_pierce_metal} />
              <AttributeCheckbox label="It can just tear metal apart" domId='armaments_can_tear_metal_apart' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'armaments_can_tear_metal_apart')} isChecked={this.props.attributes.armaments_can_tear_metal_apart} />
              <AttributeCheckbox label="Armor doesn't help with the damage it deals" domId='armor_wont_help' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'armor_wont_help')} isChecked={this.props.attributes.armor_wont_help} />
              <AttributeCheckbox label="It usually attacks at range (near)" domId='attacks_at_range_near' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'attacks_at_range_near')} isChecked={this.props.attributes.attacks_at_range_near} />
              <AttributeCheckbox label="It usually attacks at range (far)" domId='attacks_at_range_far' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'attacks_at_range_far')} isChecked={this.props.attributes.attacks_at_range_far} />
            </div>
            <div className='form-group'>
              <p><label>Which of these describe it? (Choose all that apply.)</label></p>
              <AttributeCheckbox label="It isn't dangerous because of the wounds it inflicts, but for other reasons" domId='dangerous_other_reasons' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'dangerous_other_reasons')} isChecked={this.props.attributes.dangerous_other_reasons} />
              <AttributeCheckbox label="It organizes into larger groups that it can call on for support" domId='larger_group_support' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'larger_group_support')} isChecked={this.props.attributes.larger_group_support} />
              <AttributeCheckbox label="It's as smart as a human or thereabouts" domId='smart_as_human' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'smart_as_human')} isChecked={this.props.attributes.smart_as_human} />
              <AttributeCheckbox label="It actively defends itself with a shield or similar" domId='actively_defends' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'actively_defends')} isChecked={this.props.attributes.actively_defends} />
              <AttributeCheckbox label="It collects trinkets that humans would consider valuable (gold, gems, secrets)" domId='collects_trinkets' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'collects_trinkets')} isChecked={this.props.attributes.collects_trinkets} />
              <AttributeCheckbox label="It's from beyond this world" domId='beyond_this_world' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'beyond_this_world')} isChecked={this.props.attributes.beyond_this_world} />
              <AttributeCheckbox label="It's kept alive by something beyond simple biology" domId='alive_beyond_biology' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'alive_beyond_biology')} isChecked={this.props.attributes.alive_beyond_biology} />
              <AttributeCheckbox label="It was made by someone" domId='made_by_someone' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'made_by_someone')} isChecked={this.props.attributes.made_by_someone} />
              <AttributeCheckbox label="Its appearance is disturbing, terrible, or horrible" domId='disturbing' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'disturbing')} isChecked={this.props.attributes.disturbing} />
              <AttributeCheckbox label="It doesn't have organs or discernible anatomy" domId='no_organs' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'no_organs')} isChecked={this.props.attributes.no_organs} />
              <AttributeCheckbox label="It (or its species) is ancient—older than man, elves, and dwarves" domId='ancient' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'ancient')} isChecked={this.props.attributes.ancient} />
              <AttributeCheckbox label="It abhors violence" domId='abhors_violence' handleCheckboxToggle={_.partial(this.handleCheckboxToggle, 'abhors_violence')} isChecked={this.props.attributes.abhors_violence} />
            </div>
          </form>
        </div>
        <div className='col-md-6'>
          <div className='well'>
            <p>The Monster Maker is very similar to the <a href="http://codex.dungeon-world.com/">Dungeon World Codex</a> monster form, except it updates the monster attributes in real-time, and you don't have to submit it, or share it with anyone. Well, right now, you just can't submit it or share it with anyone. Sorry.</p>
            <p>Anyway, it's helped me. I hope it helps you.</p>
          </div>
          <YourMonster monster={this.props.monster} handleReset={this.handleReset} />
        </div>
      </div>
    );
  }
}

class AttributeCheckbox extends Component {
  constructor(props) {
    super(props)
    this.handleCheckboxToggle = this.props.handleCheckboxToggle.bind(this)
  }

  render() {
    return (
      <div className='checkbox'>
        <label htmlFor={this.props.domId}>
          <input id={this.props.domId} type="checkbox" checked={this.props.isChecked} onChange={this.handleCheckboxToggle} />
          {this.props.label}
        </label>
      </div>
    )
  }
}

class YourMonster extends React.Component {
  render() {
    let { monster, handleReset} = this.props
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <div className="panel-title"><h3>{monster.called}</h3></div>
        </div>
        <div className="panel-body">
          <MonsterTagList tags={[].concat.apply([], [monster.tags.organization, monster.tags.size, monster.tags.basic])} />
          <MonsterDamage monster={monster} />
          <p><em>{capitalizedTags(monster.tags.attack).join(', ')}</em></p>
          <p><strong>Instinct:</strong> {monster.instinct}</p>
          <p><strong>Special Qualities:</strong> {monster.special_qualities.join(', ')}</p>
          <MonsterMovesList moves={monster.moves} />
        </div>
        <div className='panel-footer'>
          <a href="#" onClick={handleReset}><Glyphicon glyph="refresh" /> Reset</a>
        </div>
      </div>
    )
  }
}

class MonsterTagList extends Component {
  render() {
    return (
      <div>
        <em>{capitalizedTags(_.compact(this.props.tags)).join(', ')}</em>
      </div>
    )
  }
}

class MonsterMovesList extends Component {
  render() {
    let moveItems = _.map(_.compact(this.props.moves), (move) => {
      return (
        <li key={move}>{move}</li>
      )
    })
    return (
      <div>
        <strong>Moves:</strong>
        <ul>
          {moveItems}
        </ul>
      </div>
    )
  }
}

class MonsterDamage extends React.Component {
  renderDamageDie() {
    let { monster } = this.props
    if (_.isEmpty(monster.roll_twice_take)) {
      return monster.damage_die
    } else {
      return `${monster.roll_twice_take[0]}[2${monster.damage_die}]`
    }
  }

  renderModifier() {
    let { monster } = this.props
    if (monster.damage_modifier < 0) {
      return ` - ${Math.abs(monster.damage_modifier)}`
    } else if (monster.damage_modifier > 0) {
      return ` + ${monster.damage_modifier}`
    }
  }

  render() {
    let { monster } = this.props
    let damage_die = this.renderDamageDie()
    return (
      <p>{monster.attack} ({damage_die}{this.renderModifier()} damage{monster.piercing > 0 ? `, + ${monster.piercing} piercing` : ''}); {monster.hp}HP; {monster.armor} armor;</p>
    )

  }
}
