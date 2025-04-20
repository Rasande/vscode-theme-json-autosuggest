export const aspectRatios = [
    { slug: 'square', name: 'Square', value: '1' },
    { slug: '4-3', name: '4:3', value: '4 / 3' },
    { slug: '3-4', name: '3:4', value: '3 / 4' },
    { slug: '3-2', name: '3:2', value: '3 / 2' },
    { slug: '2-3', name: '2:3', value: '2 / 3' },
    { slug: '16-9', name: '16:9', value: '16 / 9' },
    { slug: '9-16', name: '9:16', value: '9 / 16' }
];

export const palette = [
    { slug: 'black', name: 'Black', color: '#000000' },
    { slug: 'white', name: 'White', color: '#ffffff' },
    { slug: 'pale-pink', name: 'Pale pink', color: '#f78da7' },
    { slug: 'vivid-red', name: 'Vivid red', color: '#cf2e2e' },
    { slug: 'luminous-vivid-orange', name: 'Luminous vivid orange', color: '#ff6900' },
    { slug: 'luminous-vivid-amber', name: 'Luminous vivid amber', color: '#fcb900' },
    { slug: 'light-green-cyan', name: 'Light green cyan', color: '#7bdcb5' },
    { slug: 'vivid-green-cyan', name: 'Vivid green cyan', color: '#00d084' },
    { slug: 'pale-cyan-blue', name: 'Pale cyan blue', color: '#8ed1fc' },
    { slug: 'vivid-cyan-blue', name: 'Vivid cyan blue', color: '#0693e3' },
    { slug: 'vivid-purple', name: 'Vivid purple', color: '#9b51e0' },
];

export const gradients = [
    {
        slug: 'vivid-cyan-blue-to-vivid-purple',
        name: 'Vivid cyan blue to vivid purple',
        gradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'
    },
    {
        slug: 'light-green-cyan-to-vivid-green-cyan',
        name: 'Light green cyan to vivid green cyan',
        gradient: 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)'
    },
    {
        slug: 'luminous-vivid-amber-to-luminous-vivid-orange',
        name: 'Luminous vivid amber to luminous vivid orange',
        gradient: 'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)'
    },
    {
        slug: 'luminous-vivid-orange-to-vivid-red',
        name: 'Luminous vivid orange to vivid red',
        gradient: 'linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%)'
    },
    {
        slug: 'very-light-gray-to-cyan-bluish-gray',
        name: 'Very light gray to cyan bluish gray',
        gradient: 'linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%)'
    },
    {
        slug: 'cool-to-warm-spectrum',
        name: 'Cool to warm spectrum',
        gradient: 'linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%)'
    },
    {
        slug: 'blush-light-purple',
        name: 'Blush light purple',
        gradient: 'linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%)'
    },
    {
        slug: 'blush-bordeaux',
        name: 'Blush bordeaux',
        gradient: 'linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%)'
    },
    {
        slug: 'luminous-dusk',
        name: 'Luminous dusk',
        gradient: 'linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%)'
    },
    {
        slug: 'pale-ocean',
        name: 'Pale ocean',
        gradient: 'linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%)'
    },
    {
        slug: 'electric-grass',
        name: 'Electric grass',
        gradient: 'linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%)'
    },
    {
        slug: 'midnight',
        name: 'Midnight',
        gradient: 'linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%)'
    }
];

export const fontSizes = [
    { slug: 'small', name: 'Small', size: '13px' },
    { slug: 'medium', name: 'Medium', size: '20px' },
    { slug: 'large', name: 'Large', size: '36px' },
    { slug: 'x-large', name: 'Extra large', size: '42px' }
];

export const spacing = [
    { slug: '20', name: 'Spacing 20', value: '0.44rem' },
    { slug: '30', name: 'Spacing 30', value: '0.67rem' },
    { slug: '40', name: 'Spacing 40', value: '1rem' },
    { slug: '50', name: 'Spacing 50', value: '1.5rem' },
    { slug: '60', name: 'Spacing 60', value: '2.25rem' },
    { slug: '70', name: 'Spacing 70', value: '3.38rem' },
    { slug: '80', name: 'Spacing 80', value: '5.06rem' }
];

export const shadows = [
    { slug: 'natural', name: 'Natural Shadow', value: '6px 6px 9px rgba(0, 0, 0, 0.2)' },
    { slug: 'deep', name: 'Deep Shadow', value: '12px 12px 50px rgba(0, 0, 0, 0.4)' },
    { slug: 'sharp', name: 'Sharp Shadow', value: '6px 6px 0px rgba(0, 0, 0, 0.2)' },
    { slug: 'outlined', name: 'Outlined Shadow', value: '6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1)' },
    { slug: 'crisp', name: 'Crisp Shadow', value: '6px 6px 0px rgba(0, 0, 0, 1)' }
];
