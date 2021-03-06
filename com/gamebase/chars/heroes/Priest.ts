module GameBase {
 
    export class Priest extends Hero {
        
        constructor(game:Pk.PkGame)
        {
            super(game, new Phaser.Rectangle(0, 0, 84, 230), 3);

            // energy type
            this.energyType     = E.EnergyType.MANA;

            // operator
            this.operator       = E.Operator.DIVI;

            // name
            this.name = "Priest";

            // die turns
            this.dieTime = 5;

            // revive health
            this.reviveHealthPoints = 2;

            this.reloadEnergyQtn = 4;
        }

        create()
        {
            // add attacks
            var attack1:GameBase.Attacks.Regular = new GameBase.Attacks.Regular(
                this.game, 
                this.operator, 
                this.energyType
            );
            attack1.energyCost = 1;
            attack1.value = 2;

            
            
            var attack2:GameBase.Attacks.Regular = new GameBase.Attacks.Regular(
                this.game, 
                this.operator, 
                this.energyType
            );
            attack2.energyCost = 3;
            attack2.value = 3;

            var attack3:GameBase.Attacks.Regular = new GameBase.Attacks.Regular(
                this.game, 
                this.operator, 
                this.energyType
            );
            attack3.energyCost = 5;
            attack3.value = 4;

            this.addAttack(attack1);
            this.addAttack(attack2);
            this.addAttack(attack3);

            // animation
            var aniSprite = this.addAnimation(this.game.add.sprite(0, 0, 'char'+this.identification+'-idle'), 'iddle');
            // aniSprite.y+=16;

            // dead
            this.addAnimation(this.game.add.sprite(0, 0, 'char'+this.identification+'-dead'), 'dead');

            this.playAnimation('iddle', 9);
            this.currentAnimation.animation.frame = 7;

            super.create();
        }

    }
} 