const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// images.map(image => {
//   const imgList = document.querySelector('.gallery');
//   const item = document.createElement('li');
//   item.classList.add('img-task3');
//   const img = document.createElement('img');
//   img.setAttribute('src', image.url);
//   img.setAttribute('alt', image.alt);
//   item.append(img);
//   imgList.append(item);
// });

const gallery = document.querySelector('.gallery');
const item = images
  .map(image => `<li class="img-task3"><img src="${image.url}" alt="${image.alt}" /></li>`)
  .join('');
gallery.insertAdjacentHTML('beforeend', item);
