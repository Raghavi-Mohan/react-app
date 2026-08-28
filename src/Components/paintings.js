const desc=`Acrylic Textures on canvas.
Digitally reproduced using archival pigments on cotton rag, canvas panel, or satin canvas.
Art prints are flat and do not include the original textures, which are present only in the original artwork.
Both original artworks and fine art prints are available on enquiry.
Mockup is for display purposes only and not to scale.`;
const MaterialOptions=`Canvas roll, Canvas Panels + Framed, Canvas Stretched + Framed (DM for more details)`;
const KeychianMaterialOptions=`Clay keychains (comes with a charm), Additional charms available to add (DM for more details)`
const MagnetMaterialOptions=`Made with wooden panels with acrylic texture medium and glazed for protection (DM for more details)`
const BookmarkMaterialOptions=`Made with wooden panels/acrylic panels with acrylic texture medium and glazed for protection (DM for more details)`
const TanjorePaintingOptions=`Canvas Panels + Framed, Gemstone - White/Red/Green, Golden/Silver foil (DM for more details)`;
const descCrafts=`Handcrafted clay keychains, textured fridge magnets, and wooden/acrylic bookmarks—all made with love and creativity. 
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
    //console.log('Image not found, using default image');
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
            require('../Asset/paintings/Blueprint of Nature_12x16.png'),
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
            require('../Asset/paintings/Echo of the Earth_26x18.png'),
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
            require('../Asset/paintings/Floral Reverie_7x14.png'),
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
            require('../Asset/paintings/Framed by Flora_12x16.png'),
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
            require('../Asset/paintings/Garden of Time_20x18.png'),
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
            require('../Asset/paintings/Golden Morning_26x18.png'),
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
            require('../Asset/paintings/Gratitude in Texture_8x12.png'),
            require('../Asset/paintings/Kindness Captured_8x12.png'),
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
            require('../Asset/paintings/Heirloom Elegance_8".png'),
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
            require('../Asset/paintings/Heritage in Hue_12x16.png'),
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
            require('../Asset/paintings/Ink & Ice Garden_10x12.png'),
            safeRequire('Ink & Ice Garden_1.png'),
            safeRequire('Ink & Ice Garden_2.png')
        ],
        description: desc
    },
    {
        id: 12,
        title: 'Lavender Loop',
        availablity: 'Handcrafted & available - yours if you love it.',
        options:MaterialOptions,
        slider: [
            require('../Asset/paintings/Lavender Loop_4x16.png'),
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
            require('../Asset/paintings/Layered Comfort_8x12.png'),
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
            require('../Asset/paintings/Mandala Clock_12".png'),
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
            require('../Asset/paintings/Moments in Motion_20x20.png'),
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
            require('../Asset/paintings/Peacock Bloom_36x28.png'),
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
            require('../Asset/paintings/Regal Silence_8x10.png'),
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
            require('../Asset/paintings/Rings of Calm_26x18.png'),
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
            require('../Asset/paintings/Roots of Gold_8x10.png'),
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
            require('../Asset/paintings/Royal Reflection_12x16.png'),
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
            require('../Asset/paintings/Structured Serenity_36x28.png'),
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
            require('../Asset/paintings/Terracotta Bloom_12x16.png'),
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
            require('../Asset/paintings/The Playful Divine_18".png'),
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
            require('../Asset/paintings/Tribal Grace_20x16.png'),
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
            require('../Asset/paintings/Velvet Jewel_8".png'),
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
            require('../Asset/paintings/Wave of Time_8".png'),
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
            require('../Asset/paintings/Window to Spring_26x18.png'),
            safeRequire('Window to Spring_1.jpg'),
            safeRequire('Window to Spring_2.jpg')
        ],
        description: desc
    },
    {
        id: 29,
        title: 'Stories in Her Stance',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            require('../Asset/paintings/Stories in Her Stance_12x16.png'),
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
            require('../Asset/paintings/Feather of Grace_12x16.png'),
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
            require('../Asset/paintings/Beyond Threshold_12x16.png'),
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
            require('../Asset/paintings/Melody in Gold_36x28.png'),
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
            require('../Asset/paintings/Whispers in Balance_12x16.png'),
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
            require('../Asset/paintings/Grace in Silence_20x20.png'),
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
            require('../Asset/bookMarks/B_1.png'),
            require('../Asset/bookMarks/B_7.jpg'),
            require('../Asset/bookMarks/B_8.jpg'),
            require('../Asset/bookMarks/B_9.jpg'),
            require('../Asset/bookMarks/B_10.jpg'),
            require('../Asset/bookMarks/B_11.jpg'),
            require('../Asset/bookMarks/B_12.jpg'),
            require('../Asset/bookMarks/B_13.jpg'),
            require('../Asset/bookMarks/B_14.jpg'),
            require('../Asset/bookMarks/B_15.jpg'),
            require('../Asset/bookMarks/B_16.jpg'),
            require('../Asset/bookMarks/B_17.jpg'),
            require('../Asset/bookMarks/B_18.jpg')

        ],
        description: descCrafts
    },
            {
        id: 38,
        title: 'Blush Harmony',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            require('../Asset/paintings/Blush Harmony_10".jpg'),
            safeRequire('Blush Harmony_1.jpg'),
            safeRequire('Blush Harmony_2.jpg'),
            safeRequire('Blush Harmony_3.jpg')

        ],
        description: desc
    },
    {
        id: 39,
        title: 'MiniCanvas',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            require('../Asset/paintings/MiniCanvas_4x4.jpg'),
        ],
        description: desc
    },
    {
        id: 40,
        title: 'Annapakshi',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:TanjorePaintingOptions,
        slider: [
            require('../Asset/paintings/Annapakshi_11x14.jpg'),
            safeRequire('Annapakshi_1.jpg')
        ],
        description: desc
    },
     {
        id: 41,
        title: 'TanjorePeacock',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:TanjorePaintingOptions,
        slider: [
            require('../Asset/paintings/TanjorePeacock_11x14.jpg'),
            safeRequire('TanjorePeacock_1.jpg')
        ],
        description: desc
    },
     {
        id: 42,
        title: 'RoyalElephant',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:TanjorePaintingOptions,
        slider: [
            require('../Asset/paintings/RoyalElephant_11x14.jpg'),
            safeRequire('RoyalElephant_1.jpg')
        ],
        description: desc
    },
    {
        id: 43,
        title: 'TexturedPeacock',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:MaterialOptions,
        slider: [
            require('../Asset/paintings/TexturedPeacock_12x16.png'),
            safeRequire('TexturedPeacock_1.jpg')
        ],
        description: desc
    },
    {
        id: 44,
        title: 'GoldenPrinces',
        availablity: 'Recreation Avaliable : Each piece is handcrafted uniquely.',
        options:TanjorePaintingOptions,
         slider: [
            require('../Asset/paintings/GoldenPrinces_11x14.jpg'),
            safeRequire('GoldenPrinces_1.jpg')
        ],
        description: desc
    },
    {
        id: 45,
        title: 'ShellTrinketDish',
        availablity: 'Pre-order: Handcrafted shell trinket dish',
        options: 'Shell finish(Original shell/Replica with clay), hand-painted details, decoupage accents, and a protective glaze (DM for more details)',
        slider: [
            require('../Asset/shellTrinketDish/STT_1.jpg'),
            require('../Asset/shellTrinketDish/STT_2.jpg'),
            require('../Asset/shellTrinketDish/STT_3.jpg'),
            require('../Asset/shellTrinketDish/STT_4.jpg'),
            require('../Asset/shellTrinketDish/STT_5.jpg')
        ],
        description: 'A shell reimagined as a trinket dish—handcrafted, decorative, and practical.'
    },
    {
        id: 46,
        title: 'ScentedTrays',
        availablity: 'Pre-order: Handcrafted scented trays',
        options: 'Available in multiple sizes and finishes, each tray is uniquely handcrafted.',
        slider: [
            require('../Asset/scentedTrays/ST_1.jpg'),
            require('../Asset/scentedTrays/ST_2.jpg')
        ],
        description: 'Minimslist clay dishes handcraftef to bring a calm aura to your space. Perfect for incense sticks.'
    }

];

export default paintings;
