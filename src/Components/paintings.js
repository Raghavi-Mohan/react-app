const desc=`Acrylic Textures on canvas.
Digitally reproduced using archival pigments on cotton rag, canvas panel, or satin canvas.
Art prints are flat and do not include the original textures, which are present only in the original artwork.
Both original artworks and fine art prints are available on enquiry.
Mockup is for display purposes only and not to scale.`;
const MaterialOptions=`Canvas roll, Canvas Panels + Framed, Canvas Stretched + Framed (DM for Size and Price)`;
const KeychianMaterialOptions=`Clay keychains (comes with a charm), Additional charms available to add(each additional charms add 0.50 cents)`
const MagnetMaterialOptions=`Made with wooden panels with acrylic texture medium and glazed for protection`
const BookmarkMaterialOptions=`Made with wooden panels with acrylic texture medium and glazed for protection`
const descCrafts=`Handcrafted clay keychains, textured fridge magnets, and wooden bookmarks—all made with love and creativity. 
Each piece is crafted using materials like air-dry clay, wood, and textured acrylic paints. 
Fully customizable with names, colors, or themes, they make for unique, personal keepsakes or gifts.
Mockup is for display purposes only and not to scale.`;
/*const allImages = importAll(require.context('../Asset/images', false, /\.(png|jpe?g|svg)$/));

function importAll(r) {
  let images = {};
  r.keys().forEach((key) => {
    const fileName = key.replace('./', '');
    images[fileName] = r(key);
  });
  return images;
}

function safeRequire1(path) {
  if (allImages[path]) {
    return allImages[path].default || allImages[path];
  } else {
    console.warn(`Image not found: ${path}`);
    return allImages['image-not-found.png'];
  }
}*/

function safeRequire(path) {
  try {
    return require(`../Asset/images/${path}`);
  } catch (e) {
    console.log('Image not found, using default image');
    return require('../Asset/images/image-not-found.png');
  }
}

const paintings = [
    {
        id: 1,
        title: 'Blueprint of Nature',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Blueprint of Nature.png'),
            safeRequire('Blueprint of Nature_1.png')
        ],
        description: `Acrylic Textures on canvas, 12x16 inches.
This original artwork has been expertly digitized to produce a stunning, high-quality fine art print.
Printed locally in Florida, each piece is created using archival-grade pigments on either smooth cotton rag (for paper prints) or satin canvas (for canvas prints).
Please note: This is a reproduction of the original artwork and does not feature any 3D textured elements.
The interior mockup is for display purposes only and is not to scale.`

    },
    {
        id: 2,
        title: 'Echo of the Earth',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Echo of the Earth.png'),
            safeRequire('Echo of the Earth_1.png')
        ],
        description: desc
    },
    {
        id: 3,
        title: 'Floral Reverie',
        availablity: 'Handcrafted & available - yours if you love it.',
        options:MaterialOptions,
        slider: [
            safeRequire('Floral Reverie.png'),
            safeRequire('Floral Reverie_1.jpg'),
            safeRequire('Floral Reverie_2.jpg')
        ],
        description: desc
    },
    {
        id: 4,
        title: 'Framed by Flora',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Framed by Flora.png'),
            safeRequire('Framed by Flora_1.jpg'),
            safeRequire('Framed by Flora_2.jpg')
        ],
        description: desc
    },
    {
        id: 5,
        title: 'Garden of Time',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Garden of Time.png'),
            safeRequire('Garden of Time_1.png')

        ],
        description: desc
    },
    {
        id: 6,
        title: 'Golden Morning',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Golden Morning.png'),
            safeRequire('Golden Morning_1.png')

        ],
        description: desc
    },
    {
        id: 7,
        title: 'Gratitude in Texture',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Gratitude in Texture.png'),            
            safeRequire('Gratitude in Texture_1.png')
        ],
        description: desc
    },
    {
        id: 8,
        title: 'Heirloom Elegance',
        availablity: 'Handcrafted & available - yours if you love it.',
        options:MaterialOptions,
        slider: [
            safeRequire('Heirloom Elegance.png'),
            safeRequire('Heirloom Elegance_1.png')
        ],
        description: desc
    },
    {
        id: 9,
        title: 'Heritage in Hue',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Heritage in Hue.png'),
            safeRequire('Heritage in Hue_1.png'),
            safeRequire('Heritage in Hue_2.png')
        ],
        description: desc
    },
    {
        id: 10,
        title: 'Ink & Ice Garden',
        availablity: 'Handcrafted & available - yours if you love it.',
        options:MaterialOptions,
        slider: [
            safeRequire('Ink & Ice Garden.png'),
            safeRequire('Ink & Ice Garden_1.png'),
            safeRequire('Ink & Ice Garden_2.png')
        ],
        description: desc
    },
    {
        id: 11,
        title: 'Kindness Captured',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Kindness Captured.png'),
            safeRequire('Kindness Captured_1.png')
        ],
        description: desc
    },
    {
        id: 12,
        title: 'Lavender Loop',
        availablity: 'Handcrafted & available - yours if you love it.',
        options:MaterialOptions,
        slider: [
            safeRequire('Lavender Loop.png'),
            safeRequire('Lavender Loop_1.png'),
            safeRequire('Lavender Loop_2.png')
        ],
        description: desc
    },
    {
        id: 13,
        title: 'Layered Comfort',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Layered Comfort.png'),
            safeRequire('Layered Comfort_1.png')
        ],
        description: desc
    },
    {
        id: 14,
        title: 'Mandala Clock',
        availablity: 'Handcrafted & available - yours if you love it.',
        options:MaterialOptions,
        slider: [
            safeRequire('Mandala Clock.png'),
            safeRequire('Mandala Clock_1.png')
        ],
        description: desc
    },
    {
        id: 15,
        title: 'Moments in Motion',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Moments in Motion.png'),
            safeRequire('Moments in Motion_1.png')
        ],
        description: desc
    },
    {
        id: 16,
        title: 'Peacock Bloom',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Peacock Bloom.png'),
            safeRequire('Peacock Bloom_1.png')
        ],
        description: desc
    },
    {
        id: 17,
        title: 'Regal Silence',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Regal Silence.png'),
            safeRequire('Regal Silence_1.png')
        ],
        description: desc
    },
    {
        id: 18,
        title: 'Rings of Calm',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Rings of Calm.png'),
            safeRequire('Rings of Calm_1.png')
        ],
        description: desc
    },
    {
        id: 19,
        title: 'Roots of Gold',
        availablity: 'Handcrafted & available - yours if you love it.',
        options:MaterialOptions,
        slider: [
            safeRequire('Roots of Gold.png'),
            safeRequire('Roots of Gold_1.png'),
            safeRequire('Roots of Gold_2.png')
        ],
        description: desc
    },
    {
        id: 20,
        title: 'Royal Reflection',
        availablity: 'Handcrafted & available - yours if you love it.',
        options:MaterialOptions,
        slider: [
            safeRequire('Royal Reflection.png'),
            safeRequire('Royal Reflection_1.png')
        ],
        description: desc
    },
    {
        id: 21,
        title: 'Structured Serenity',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Structured Serenity.png'),
            safeRequire('Structured Serenity_1.png')
        ],
        description: desc
    },
    {
        id: 22,
        title: 'Terracotta Bloom',
        availablity: 'Handcrafted & available - yours if you love it.',
        options:MaterialOptions,
        slider: [
            safeRequire('Terracotta Bloom.jpg'),
            safeRequire('Terracotta Bloom_1.png')
        ],
        description: desc
    },
    {
        id: 23,
        title: 'The Playful Divine',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('The Playful Divine.png'),
            safeRequire('The Playful Divine_1.png')
        ],
        description: desc
    },
    {
        id: 24,
        title: 'Tribal Grace',
        availablity: 'Handcrafted & available - yours if you love it.',
        options:MaterialOptions,
        slider: [
            safeRequire('Tribal Grace.png'),
            safeRequire('Tribal Grace_1.png')
        ],
        description: desc
    },
    {
        id: 25,
        title: 'Velvet Jewel',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Velvet Jewel.png'),
            safeRequire('Velvet Jewel_1.png')
        ],
        description: desc
    },
    {
        id: 26,
        title: 'Wave of Time',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Wave of Time.png'),
            safeRequire('Wave of Time_1.png')
        ],
        description: desc
    },
    {
        id: 27,
        title: 'Window to Spring',
        availablity: 'Handcrafted & available - yours if you love it.',
        options:MaterialOptions,
        slider: [
            safeRequire('Window to Spring.jpg'),
            safeRequire('Window to Spring_1.jpg'),
            safeRequire('Window to Spring_2.jpg')
        ],
        description: desc
    },
    {
        id: 28,
        title: 'Elegance in Flight',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Elegance in Flight.png'),
            safeRequire('Elegance in Flight_1.png')
        ],
        description: desc
    },
    {
        id: 29,
        title: 'Stories in Her Stance',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Stories in Her Stance.png'),
            safeRequire('Stories in Her Stance_1.png')
        ],
        description: desc
    },
    {
        id: 30,
        title: 'Feather of Grace',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Feather of Grace.png'),
            safeRequire('Feather of Grace_2.png')
        ],
        description: desc
    },
    {
        id: 31,
        title: 'Beyond Threshold',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Beyond Threshold.png'),
            safeRequire('Beyond Threshold_1.png'),
            safeRequire('Beyond Threshold_2.png'),
            safeRequire('Beyond Threshold_3.png')
        ],
        description: desc
    },
    {
        id: 32,
        title: 'Melody in Gold',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Melody in Gold.png'),
            safeRequire('Melody in Gold_1.png')
        ],
        description: desc
    },
    {
        id: 33,
        title: 'Whispers in Balance',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Whispers in Balance.png'),
            safeRequire('Whispers in Balance_1.png'),
            safeRequire('Whispers in Balance_2.png')

        ],
        description: desc
    },
        {
        id: 34,
        title: 'Grace in Silence',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Grace in Silence.png'),
            safeRequire('Grace in Silence_1.png'),
            safeRequire('Grace in Silence_2.png')

        ],
        description: desc
    },
    {
        id: 35,
        title: 'Charms',
        availablity: 'Pre-order: Customizable Keychains',
        options:KeychianMaterialOptions,
        slider: [
            safeRequire('charms_1.png'),
            safeRequire('charms_2.jpg'),
            safeRequire('charms_3.png'),
            safeRequire('charms_4.png'),
            safeRequire('charms_5.png'),
            safeRequire('charms_6.png'),
            safeRequire('charms_7.jpg'),
            safeRequire('charms_8.jpg'),
            safeRequire('charms_9.jpg')
        ],
        description: descCrafts
    },
    {
        id: 36,
        title: 'Minis',
        availablity: 'Pre-order: Customizable Fridge Magnets',
        options:MagnetMaterialOptions,
        slider: [
            safeRequire('M_1.png'),
            safeRequire('M_2.png'),
            safeRequire('M_3.png'),
            safeRequire('M_4.png')

        ],
        description: descCrafts
    },
    {
        id: 37,
        title: 'StoryStems',
        availablity: 'Pre-order: Customizable BookMarks',
        options:BookmarkMaterialOptions,
        slider: [
            safeRequire('storyStems.png'),
            safeRequire('storyStems_3.png'),
            safeRequire('storyStems_2.png')

        ],
        description: descCrafts
    },
            {
        id: 38,
        title: 'Blush Harmony',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            safeRequire('Blush Harmony.jpg'),
            safeRequire('Blush Harmony_1.jpg'),
            safeRequire('Blush Harmony_2.jpg'),
            safeRequire('Blush Harmony_3.jpg')

        ],
        description: desc
    },
];

export default paintings;
