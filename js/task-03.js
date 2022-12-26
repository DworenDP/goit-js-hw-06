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
]

// створюю пустий масив, звертаючись до пустого списку з класом .gallery
const ulEL = document.querySelector('.gallery')

// за допомогою методу forEach перебираю масив images, та методом insertAdjacentHTML
// і за допомогою шаблонної строки кожен наступний елемент перебору перед попереднім елементом
// проходження циклу, додаючи результат в DOM-дерево.
images.forEach((el) => {
    ulEL.insertAdjacentHTML(
        'afterbegin',
        `<li><img src = "${el.url}" alt = "${el.alt}" width = "250" height = "140"/></li>`
    )
})
