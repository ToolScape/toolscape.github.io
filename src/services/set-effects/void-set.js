import SetEffect from '../set-effect';
import VoidBoost from '../boosts/void-boost';

export class Void extends SetEffect {
  check() {
    const voidHelm = this.player.hasEquipped(11665)
     || this.player.hasEquipped(11664)
     || this.player.hasEquipped(11663);
    const voidTop = this.player.hasEquipped(8839) || this.player.hasEquipped(13072);
    const voidRobe = this.player.hasEquipped(8840) || this.player.hasEquipped(13073);
    const voidGloves = this.player.hasEquipped(8842);
    return voidHelm && voidTop && voidRobe && voidGloves;
  }

  get boost() {
    // TODO: Allow user to pick how specific this should be
    const type = 'all';
    return new VoidBoost(type, this.player.hasEquipped(13072) && this.player.hasEquipped(13073));
  }

  get description() {
    return 'You have a full set of Void Knight armour equiped.';
  }
}

export default Void;
