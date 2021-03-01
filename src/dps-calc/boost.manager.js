import BurstOfStrength from './boosts/burst-of-strength';
import ClarityOfThought from './boosts/clarity-of-thought';
import SuperhumanStrength from './boosts/superhuman-strength';
import ImprovedReflexes from './boosts/improved-reflexes';
import UltimateStrength from './boosts/ultimate-strength';
import IncredibleReflexes from './boosts/incredible-reflexes';
import Chivalry from './boosts/chivalry';
import Piety from './boosts/piety';
import {
  BlackMask,
  VoidSet,
  DharoksSet,
} from './item-effects';

import {
  StrengthPotion,
  SuperStrengthPotion,
  OverloadPlus,
  AttackPotion,
  SuperAttackPotion,
  ZamorakBrew,
  BgsSpec,
  DwhSpec,
  ArclightSpec,
} from './boosts';

class BoostManager {
  static itemEffects = new Map([
    ['Black mask', BlackMask],
    ['Void set', VoidSet],
    ['Dharok\'s set', DharoksSet],
  ]);

  static potions = new Map([
    ['Strength potion', new StrengthPotion()],
    ['Super strength potion', new SuperStrengthPotion()],
    ['Attack potion', new AttackPotion()],
    ['Super attack potion', new SuperAttackPotion()],
    ['Zamorak brew', new ZamorakBrew()],
    ['Overload (+)', new OverloadPlus()],
  ]);

  static prayers = new Map([
    ['Burst of Strength', new BurstOfStrength()],
    ['Clarity of Thought', new ClarityOfThought()],
    ['Superhuman Strength', new SuperhumanStrength()],
    ['Improved Reflexes', new ImprovedReflexes()],
    ['Ultimate Strength', new UltimateStrength()],
    ['Incredible Reflexes', new IncredibleReflexes()],
    ['Chivalry', new Chivalry()],
    ['Piety', new Piety()],
  ]);

  static addItemEffect(name, itemEffect) {
    if (BoostManager.itemEffects.has(name)) {
      throw new Error(`Attempting to add ${name} to the item effects twice. Make sure to only add item effects once.`);
    }
    BoostManager.itemEffects.set(name, itemEffect);
  }

  /**
   * Pass an array of active prayers get back their boost classes
   *
   * @param activePrayers - an array of strings
   * @returns {*[]|*}
   */
  static getPrayerBoosts(activePrayers) {
    if (activePrayers && Array.isArray(activePrayers) && activePrayers.length > 0) {
      return activePrayers.map((prayer) => BoostManager.prayers.get(prayer)).filter(Boolean);
    }
    return [];
  }

  static getEquipmentBoosts(equipment) {
    const boosts = [];
    BoostManager
      .itemEffects
      .forEach((itemEffect, name) => {
        if (itemEffect.check(equipment)) {
          boosts.push(itemEffect.boost(equipment));
          console.debug(`${name} active`);
        }
      });
    return boosts;
  }

  static getPotionBoosts(potions) {
    if (potions && Array.isArray(potions) && potions.length > 0) {
      return potions.map((potion) => BoostManager.potions.get(potion)).filter(Boolean);
    }
    return [];
  }

  static getOtherBoosts(settings) {
    const otherBoosts = [];
    if (settings.dwhSpecials > 0) {
      otherBoosts.push(new DwhSpec(settings.dwhSpecials));
    }
    if (settings.arclightSpecials > 0) {
      otherBoosts.push(new ArclightSpec(settings.arclightSpecials));
    }
    if (settings.bgsSpecialDamage > 0) {
      otherBoosts.push(new BgsSpec(settings.bgsSpecialDamage));
    }
    return otherBoosts;
  }
}

export default BoostManager;
