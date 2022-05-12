export var head_front = [];
export var head_left = [];
export var head_right = [];
export var head_back = [];
export var head_top = [];
export var head_bottom = [];
export var head_front_outer = [];
export var head_left_outer = [];
export var head_right_outer = [];
export var head_back_outer = [];
export var head_top_outer = [];
export var head_bottom_outer = [];

export default function initialize(){
    init_head();
    init_head_outer();
    init_left_arm();
    init_left_leg();
    init_right_arm();
    init_right_leg();
    init_torso();
    init_left_arm_outer();
    init_left_leg_outer();
    init_right_arm_outer();
    init_right_leg_outer();
    init_torso_outer();
}

function init_head(){
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            var index = ((i+8)*64)+j+8;
            head_front[(i*8)+j] = index;
        }
    }
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            var index = ((i+8)*64)+j;
            head_left[(i*8)+j] = index;
        }
    }
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            var index = ((i+8)*64)+j+16;
            head_right[(i*8)+j] = index;
        }
    }
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            var index = ((i+8)*64)+j+24;
            head_back[(i*8)+j] = index;
        }
    }
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            var index = (i*64)+j+8;
            head_top[(i*8)+j] = index;
        }
    }
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            var index = (i*64)+j+16;
            head_bottom[(i*8)+j] = index;
        }
    }
}

function init_head_outer(){
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            var index = ((i+8)*64)+j+40;
            head_front_outer[(i*8)+j] = index;
        }
    }
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            var index = ((i+8)*64)+j+32;
            head_left_outer[(i*8)+j] = index;
        }
    }
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            var index = ((i+8)*64)+j+48;
            head_right_outer[(i*8)+j] = index;
        }
    }
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            var index = ((i+8)*64)+j+56;
            head_back_outer[(i*8)+j] = index;
        }
    }
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            var index = (i*64)+j+40;
            head_top_outer[(i*8)+j] = index;
        }
    }
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            var index = (i*64)+j+48;
            head_bottom_outer[(i*8)+j] = index;
        }
    }
}

export var torso_front = [];
export var torso_left = [];
export var torso_right = [];
export var torso_back = [];
export var torso_top = [];
export var torso_bottom = [];
export var torso_front_outer = [];
export var torso_left_outer = [];
export var torso_right_outer = [];
export var torso_back_outer = [];
export var torso_top_outer = [];
export var torso_bottom_outer = [];

function init_torso(){
    for(var i=0; i<12; i++){
        for(var j=0; j<8; j++){
            var index = ((i+20)*64)+j+20;
            torso_front[(i*8)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+20)*64)+j+16;
            torso_left[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+20)*64)+j+28;
            torso_right[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<8; j++){
            var index = ((i+20)*64)+j+32;
            torso_back[(i*8)+j] = index;
        }
    }
    for(var i=0; i<4; i++){
        for(var j=0; j<8; j++){
            var index = ((i+16)*64)+j+20;
            torso_top[(i*8)+j] = index;
        }
    }
    for(var i=0; i<4; i++){
        for(var j=0; j<8; j++){
            var index = ((i+16)*64)+j+28;
            torso_bottom[(i*8)+j] = index;
        }
    }
}

function init_torso_outer(){
    for(var i=0; i<12; i++){
        for(var j=0; j<8; j++){
            var index = ((i+36)*64)+j+20;
            torso_front_outer[(i*8)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+36)*64)+j+16;
            torso_left_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+36)*64)+j+28;
            torso_right_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<8; j++){
            var index = ((i+36)*64)+j+32;
            torso_back_outer[(i*8)+j] = index;
        }
    }
    for(var i=0; i<4; i++){
        for(var j=0; j<8; j++){
            var index = ((i+32)*64)+j+20;
            torso_top_outer[(i*8)+j] = index;
        }
    }
    for(var i=0; i<4; i++){
        for(var j=0; j<8; j++){
            var index = ((i+32)*64)+j+28;
            torso_bottom_outer[(i*8)+j] = index;
        }
    }
}

export var left_leg_front = [];
export var left_leg_left = [];
export var left_leg_right = [];
export var left_leg_back = [];
export var left_leg_top = [];
export var left_leg_bottom = [];
export var left_leg_front_outer = [];
export var left_leg_left_outer = [];
export var left_leg_right_outer = [];
export var left_leg_back_outer = [];
export var left_leg_top_outer = [];
export var left_leg_bottom_outer = [];

function init_left_leg(){
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+20)*64)+j+4;
            left_leg_front[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+20)*64)+j;
            left_leg_left[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+20)*64)+j+8;
            left_leg_right[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+20)*64)+j+12;
            left_leg_back[(i*4)+j] = index;
        }
    }
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var index = ((i+16)*64)+j+4;
            left_leg_top[(i*4)+j] = index;
        }
    }
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var index = ((i+16)*64)+j+8;
            left_leg_bottom[(i*4)+j] = index;
        }
    }
}

function init_left_leg_outer(){
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+36)*64)+j+4;
            left_leg_front_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+36)*64)+j;
            left_leg_left_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+36)*64)+j+8;
            left_leg_right_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+36)*64)+j+12;
            left_leg_back_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var index = ((i+32)*64)+j+4;
            left_leg_top_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var index = ((i+32)*64)+j+8;
            left_leg_bottom_outer[(i*4)+j] = index;
        }
    }
}

export var right_leg_front = [];
export var right_leg_left = [];
export var right_leg_right = [];
export var right_leg_back = [];
export var right_leg_top = [];
export var right_leg_bottom = [];
export var right_leg_front_outer = [];
export var right_leg_left_outer = [];
export var right_leg_right_outer = [];
export var right_leg_back_outer = [];
export var right_leg_top_outer = [];
export var right_leg_bottom_outer = [];

function init_right_leg(){
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+52)*64)+j+20;
            right_leg_front[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+52)*64)+j+16;
            right_leg_left[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+52)*64)+j+24;
            right_leg_right[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+52)*64)+j+28;
            right_leg_back[(i*4)+j] = index;
        }
    }
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var index = ((i+48)*64)+j+20;
            right_leg_top[(i*4)+j] = index;
        }
    }
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var index = ((i+48)*64)+j+24;
            right_leg_bottom[(i*4)+j] = index;
        }
    }
}

function init_right_leg_outer(){
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+52)*64)+j+4;
            right_leg_front_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+52)*64)+j;
            right_leg_left_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+52)*64)+j+8;
            right_leg_right_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+52)*64)+j+12;
            right_leg_back_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var index = ((i+48)*64)+j+4;
            right_leg_top_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var index = ((i+48)*64)+j+8;
            right_leg_bottom_outer[(i*4)+j] = index;
        }
    }
}

export var left_arm_front = [];
export var left_arm_left = [];
export var left_arm_right = [];
export var left_arm_back = [];
export var left_arm_top = [];
export var left_arm_bottom = [];
export var left_arm_front_outer = [];
export var left_arm_left_outer = [];
export var left_arm_right_outer = [];
export var left_arm_back_outer = [];
export var left_arm_top_outer = [];
export var left_arm_bottom_outer = [];

function init_left_arm(){
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+20)*64)+j+44;
            left_arm_front[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+20)*64)+j+40;
            left_arm_left[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+20)*64)+j+48;
            left_arm_right[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+20)*64)+j+52;
            left_arm_back[(i*4)+j] = index;
        }
    }
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var index = ((i+16)*64)+j+44;
            left_arm_top[(i*4)+j] = index;
        }
    }
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var index = ((i+16)*64)+j+48;
            left_arm_bottom[(i*4)+j] = index;
        }
    }
}

function init_left_arm_outer(){
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+36)*64)+j+44;
            left_arm_front_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+36)*64)+j+40;
            left_arm_left_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+36)*64)+j+48;
            left_arm_right_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+36)*64)+j+52;
            left_arm_back_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var index = ((i+32)*64)+j+44;
            left_arm_top_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var index = ((i+32)*64)+j+48;
            left_arm_bottom_outer[(i*4)+j] = index;
        }
    }
}

export var right_arm_front = [];
export var right_arm_left = [];
export var right_arm_right = [];
export var right_arm_back = [];
export var right_arm_top = [];
export var right_arm_bottom = [];
export var right_arm_front_outer = [];
export var right_arm_left_outer = [];
export var right_arm_right_outer = [];
export var right_arm_back_outer = [];
export var right_arm_top_outer = [];
export var right_arm_bottom_outer = [];

function init_right_arm(){
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+52)*64)+j+36;
            right_arm_front[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+52)*64)+j+32;
            right_arm_left[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+52)*64)+j+40;
            right_arm_right[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+52)*64)+j+44;
            right_arm_back[(i*4)+j] = index;
        }
    }
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var index = ((i+48)*64)+j+36;
            right_arm_top[(i*4)+j] = index;
        }
    }
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var index = ((i+48)*64)+j+40;
            right_arm_bottom[(i*4)+j] = index;
        }
    }
}

function init_right_arm_outer(){
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+52)*64)+j+36;
            right_arm_front_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+52)*64)+j+32;
            right_arm_left_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+52)*64)+j+40;
            right_arm_right_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<12; i++){
        for(var j=0; j<4; j++){
            var index = ((i+52)*64)+j+44;
            right_arm_back_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var index = ((i+48)*64)+j+36;
            right_arm_top_outer[(i*4)+j] = index;
        }
    }
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var index = ((i+48)*64)+j+40;
            right_arm_bottom_outer[(i*4)+j] = index;
        }
    }
}