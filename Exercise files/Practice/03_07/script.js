/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const hoop_bag = {
    name: 'Hoop Bag',
    colour: 'black',
    volume: 40,
    pockets: {
        inside: {
            laptop_sleeve: 1,
        },
        outside : {
            shoe_storage: 1,
            side_pocket: 1,
            front_pocket: 1,
            ball_holder: true
        },
    },
    strap_length: {
        left: 23,
        right: 23,
    },
    ball_in_holder: true,
    toggleBall: function (ball_in_holder) {
        this.ball_in_holder = ball_in_holder;
    },
    
}