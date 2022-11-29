// First level: необходимо реализовать страницу, которая получает данные о товаре и 
//выводит информационные карточки с товарами. 
// В нижней части страницы должен быть расчет общей суммы. 
// Результат должен выглядеть приблизительно как на макете 
//https://www.figma.com/file/wRonUTYoOVL3ii4meCtdzR/Untitled?node-id=1%3A2&t=5i8ANTCkEpFzMpoi-0

// результат дз на GitHub Pages https://tatianawansiedler.github.io/Telran_prof_FE/hw_26.11.22/


//1. обработчик события формы

const products = [];
const add_form = document.querySelector('.form');

add_form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = add_form.title.value
    const price = add_form.price.value
    const count = add_form.count.value

    products.push({ title, price, count })

    add_form.title.value = ''
    add_form.price.value = ''
    add_form.count.value = ''

    rerender()
})

//2. функция для создания карточки товара

function createCard(title, price, count) {
    const product = document.createElement('div')
    const product_title = document.createElement('p')
    const product_price = document.createElement('p')
    const product_count = document.createElement('p')

    product_title.innerText = `${title}`
    product_price.innerText = `${price}`
    product_count.innerText = `${price} x ${count} = ${price * count}`

    product.append(product_title, product_price, product_count)

    product.classList.add('product')
    return product
}

//3. функция для подсчета и отображения общей стоимости 

const info = document.querySelector('.info')

function showTotalAmount() {

    const sum_p = document.createElement('p')
    const count_p = document.createElement('p')
    info.append(sum_p, count_p);

    const total_sum = products.reduce((sum, { price, count }) => sum + Number(price * count), 0)
    const total_count = products.reduce((sum, { count }) => sum + Number(count), 0)

    sum_p.innerText = `Общая стоимость: ${total_sum}`
    count_p.innerText = `Общее количество: ${total_count}`
}

//4. функция rerender 

const container = document.querySelector('.container')

function rerender() {
    container.innerText = ''
    info.innerText = ''

    products.forEach(({ title, price, count }) => {
        const product = createCard(title, price, count)
        container.append(product);
    })

    if (products.length === 0) {
        info.innerText = '* Товары отсутствуют. Заполните информацию о товаре выше'
    } else {
        showTotalAmount()
    }

}

rerender()