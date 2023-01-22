/**
 * @fileoverview This file contains some example events.
 */

const magicalWhirlpool = {
  id: "magical-whirlpool",
  description:
    "As you sail through the ocean, you come across a mysterious whirlpool. The water churns and bubbles, and you can see a bright light shining at the center.",
  outcomes: [
    {
      id: "sail-around",
      condition: (attributes) => attributes.courage > 50,
      result: (attributes) => ({
        gold: attributes.gold + 10,
        experience: attributes.experience + 5,
      }),
      description:
        "You sail around the whirlpool, gaining some gold and experience but losing nothing",
      priority: 0,
    },
    {
      id: "investigate",
      condition: (attributes) => attributes.intelligence > 50,
      result: (attributes) => ({
        gold: attributes.gold + 15,
        experience: attributes.experience + 10,
        intelligence: attributes.intelligence + 5,
      }),
      description:
        "You investigate the whirlpool, finding a hidden treasure and increasing your intelligence",
      priority: 0,
    },
    {
      id: "enter-whirlpool",
      condition: (attributes) => true,
      result: (attributes) => ({
        gold: attributes.gold - 15,
        health: attributes.health - 20,
        experience: attributes.experience + 15,
      }),
      description:
        "You enter the whirlpool, losing some gold and health but gaining a lot of experience",
      priority: 0,
    },
  ],
};

const pirateAttack = {
  id: "pirate-attack",
  description:
    "You are sailing through the ocean when you spot a group of pirate ships heading your way. They are demanding all of your treasure and crew.",
  outcomes: [
    {
      id: "fight",
      condition: (attributes) => attributes.strength > 50,
      result: (attributes) => ({
        gold: attributes.gold - 10,
        health: attributes.health - 15,
        strength: attributes.strength + 5,
        experience: attributes.experience + 20,
      }),
      description:
        "You fight off the pirates, losing some treasure and health but gaining strength and experience",
      priority: 0,
    },
    {
      id: "bargain",
      condition: (attributes) => attributes.intelligence > 50,
      result: (attributes) => ({
        gold: attributes.gold - 5,
        intelligence: attributes.intelligence + 5,
        experience: attributes.experience + 10,
      }),
      description:
        "You bargain with the pirates, giving them some treasure and increasing your intelligence in the process",
      priority: 0,
    },
    {
      id: "surrender",
      condition: (attributes) => true,
      result: (attributes) => ({
        gold: attributes.gold - 20,
        health: attributes.health - 5,
        experience: attributes.experience + 5,
      }),
      description:
        "You surrender to the pirates, losing a lot of treasure and some health but gaining a little experience",
      priority: 0,
    },
  ],
};

export const events = [magicalWhirlpool, pirateAttack];
