// Interactivity for choosing the adequate features...

const featuresSelection = document.querySelectorAll('.features-sec');
const featureBanner = document.querySelector('.feature-banner');
const featureHeader = document.querySelector('.feature-header');
const featureDescription = document.querySelector('.feature-desc');


const featuresData = [
    {
        banner: 'images/illustration-features-tab-1.svg',
        header: 'Bookmark in one click',
        desc: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    {
        banner: 'images/illustration-features-tab-2.svg',
        header: 'Intelligent search',
        desc: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    {
        banner: 'images/illustration-features-tab-3.svg',
        header: 'Share your bookmarks',
        desc: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    }
];

featuresSelection.forEach((feature, index) => {
    
    feature.addEventListener('click', (event) => {

        featuresSelection.forEach((item, position) => {
            item.classList.remove('selected');
        });

        event.target.classList.add('selected');
        featureBanner.src = featuresData[index].banner;
        featureHeader.textContent = featuresData[index].header;
        featureDescription.textContent = featuresData[index].desc;
    });
});




// FAQ section interactivity....
const fqaAnswers = [
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    " Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
];

// UI items to be used for the FAQ section...

const questionWrappers = document.querySelectorAll('.question-wrapper');
const arroIcons = document.querySelectorAll('.arrow');
const questionItems = document.querySelectorAll('.question-item');

questionWrappers.forEach((item, index) => {
    const para = document.createElement('p');
    para.classList.add('answer');
    para.textContent = fqaAnswers[index];
    para.classList.add('hidden');
    item.appendChild(para);
});


const para = document.querySelectorAll('.answer');
questionItems.forEach((question, position) => {
    question.addEventListener('click', () => {
        para[position].classList.toggle('hidden');
        arroIcons[position].classList.toggle('arrow-change');
    })
});