"use strict";

// création d'une classe pokémon avec 5 parametres: nom, attaque, defense, pv et chance 
class Pokemon {
    constructor(name, attack, defense, hp, luck){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    // renvoit un nombre en 0 et 1, renvoit true si luck est superieur au nbr random et false si inversement
    isLucky(){
        return this.luck > Math.random()
    }


    attackPokemon(pokemon) {
        if (this.isLucky()){ //si la fonction isLucky renvoit true
            let damage = this.attack - pokemon.defense; //créer une var qui calcule des degats en fonction de l'attaque de premier
            // pokémon et de la def du second
            pokemon.hp -= damage; // deduit cette valeur au pv du deuxieume pokémon
            console.log(this.name + " a attaqué " + pokemon.name +" pour " + damage + " de degats, il lui reste " + pokemon.hp + "point de vie."); // print
         } else { // si la fonction isLuchy renvoie false
            console.log(this.name + " a raté son attaque."); // print
         }
    }
}

//nomenclature pour créer un object de la classe
let pikachu = new Pokemon ("Pikachu", 30, 10, 50, 0.5);
let evee = new Pokemon ("Evee", 40, 5, 70, 0.5);

while (pikachu.hp && evee.hp > 0){ // tant que leurs pvs sont suppérieur a 0
    pikachu.attackPokemon(evee); // pikachu attaque evoli
    if (evee.hp <= 0){ // si les pv d'evoli tombe a 0
        console.log(evee.name + " est K.O.");//print il est ko
        break; // on sort de la boucle
    }
    evee.attackPokemon(pikachu); // evoli attaque pikachu
    if (pikachu.hp <= 0){ // si les pv de pikachu tombe a 0
        console.log( pikachu.name + " est K.O."); //print il est ko
        break;// on sort de la boucle
    }
}