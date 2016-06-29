import * as types from '../constants/ActionTypes';
import assign from 'lodash'
import MonsterFactory from '../lib/MonsterFactory'

export default function monsterMaker(state = {}, action) {
  switch (action.type) {
  case types.CHANGE_MONSTER:
    let attrs = action.data
    let factory = new MonsterFactory(attrs)
    return {
      attributes: attrs,
      customMonster: factory.make()
    }
  case types.RESET_MONSTER_MAKER:
  default:
    let initialAttrs = {
      called: '',
      known_to_do: '',
      instinct: '',
      hunt_or_fight: 'In large groups',
      size: 'Smaller than a house cat',
      defense: 'Cloth or flesh',
      unrelenting_strength: false,
      skill_in_offense: false,
      skill_in_defense: false,
      deft_strikes: false,
      uncanny_endurance: false,
      deceit_and_trickery: false,
      useful_adaptaton: false,
      favor_of_gods: false,
      spells_and_magic: false,
      common_form_of_attack: '',
      armaments_vicious_and_obvious: false,
      keeps_others_at_bay: false,
      armaments_are_small_and_weak: false,
      armaments_can_slice_pierce_metal: false,
      armaments_can_tear_metal_apart: false,
      armor_wont_help: false,
      attacks_at_range_near: false,
      attacks_at_range_far: false,
      dangerous_other_reasons: false,
      larger_group_support: false,
      smart_as_human: false,
      actively_defends: false,
      collects_trinkets: false,
      beyond_this_world: false,
      alive_beyond_biology: false,
      made_by_someone: false,
      disturbing: false,
      no_organs: false,
      ancient: false,
      abhors_violence: false
    }
    let initialFactory = new MonsterFactory(initialAttrs)
    return {
      attributes: initialAttrs,
      customMonster: initialFactory.make()
    }
  }
}
