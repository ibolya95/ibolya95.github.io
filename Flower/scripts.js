
let currentPhoto = 0;
let imagesDAta = [

    {
        photo: 'images/liliom.jpg',
        title: 'Lilium',
        description: 'Lilium is a genus of herbaceous flowering plants growing from bulbs, all with large prominent flowers.'
    },

    {
        photo: 'images/gerbera.jpg',
        title: 'Gerbera',
        description: 'Gerbera was named in honour of German botanist and medical doctor Traugott Gerber. Gerbera is native to tropical regions of South America, Africa and Asia.'
    },

    {
        photo: 'images/ibolya.jpg',
        title: 'Viola odorata (Ibolya)',
        description: 'Viola odorata is a species of flowering plant in the viola family, native to Europe and Asia.'
    },

    {
        photo: 'images/camellia.jpg',
        title: 'Camellia',
        description: 'Camellia is a genus of flowering plants in the family Theaceae. They are found in eastern and southern Asia, from the Himalayas east to Japan and Indonesia.'
    },

    {
        photo: 'images/kamillak.jpg',
        title: 'Chamomile',
        description: 'Chamomile is commonly used to make herbal infusions for traditional medicine, and there is some evidence that chamomile has an effect on health'
    },

    {
        photo: 'images/orchid.jpg',
        title: 'Orchid',
        description: 'Orchids are the  one of the most well-known houseplants, people love orchids for their elegant beauty and long-lasting blooms.'
    },

    {
        photo: 'images/rose1.jpg',
        title: 'Rose',
        description: 'Rose bushes come in a variety of forms, from climbing roses to miniature rose plants, blooming mainly in early summer and fall.'
    },
];

let photoNumber = 0;

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesDAta[currentPhoto].photo);
    $('#photo-title').html(imagesDAta[currentPhoto].title);
    $('#photo-description').html(imagesDAta[currentPhoto].description);
}

loadPhoto(photoNumber);

$('.rightButton').click(() => {
    
        currentPhoto++;
    loadPhoto(currentPhoto);
})

$('.leftButton').click(() => {
    
    currentPhoto--;
loadPhoto(currentPhoto);
})

imagesDAta.forEach((item, index) => {
    $('.thumbnails').append(`<div class="box" 
    data-index="${index}"> ${item} 
    (data-index="${index}" ) </div>`);
    $('.box').click((event) => {
        let indexClicked = $(event.target).attr('data-index');
        let numberIndex = parseInt(indexClicked);

        $('#clicked').text(data[indexClicked]);
    })
})

