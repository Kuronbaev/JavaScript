/** @format */

const body = document.querySelector('body')
const wrapper = document.querySelector('.wrapper')
const container = document.querySelectorAll('.container')
const items = document.querySelector('*')
/* ~~~~header~~~~ */
const headera = document.querySelector('#header')
const header = document.querySelector('.header')
const header_h1 = document.querySelector('.header-h1')
const ul_menu = document.querySelector('.menu')
const item = document.querySelectorAll('.menu-item')
const link = document.querySelectorAll('.menu-item-link')
const headerBtn = document.querySelector('.header-btn')

/* ~~~main~~~~~ */
const main = document.querySelector('.box-block')
main.style.paddingBottom = '14px'
/* ~~~ship~~~~~ */

const ships = document.querySelector('#ship')
const ship = document.querySelector('.ship')
const shipTittle = document.querySelector('.ship-tittle')
const ship_h3 = document.querySelector('.ship-h3')
const ship_h1 = document.querySelector('.ship-h1')
const ship_p = document.querySelector('.ship-p')
const shipBtns = document.querySelector('.ship-btn')
const ship_btn1 = document.querySelector('.ship-btn1')
const ship_btn2 = document.querySelector('.ship-btn2')

/* ~~~~block~~~~ */

const blocks = document.querySelector('#blocks')
const block = document.querySelector('.blocks')
const blockItems = document.querySelectorAll('.block')
const boxs = document.querySelectorAll('.box')
const block_h2 = document.querySelectorAll('.block-h2')
const block_p = document.querySelectorAll('.block-p')

/* ~~~~footer~~~~ */

const footers = document.querySelector('#footer')
const footer = document.querySelector('.footer')
const footerImg = document.querySelectorAll('.footer-img')

/* ~~~~~~~~ */
body.style.background = '#0B0B22'
body.style.overflowX = 'hidden'
body.style.width = '100%'
body.style.height = '100%'
body.style.color = 'white'
body.style.margin = '0'
body.style.padding = '0'

wrapper.style.width = '100%'
wrapper.style.position = 'relative'
wrapper.style.overflow = 'hidden'
items.style.margin = '0'
items.style.padding = '0'

let content = [container[0], container[1], container[2]]
content.map(el => {
	el.style.width = '1086px'
	el.style.margin = '0 auto'
	el.style.padding = '0 30px'

	return el
})
container[3].style.width = '1226px'
container[3].style.margin = '0 auto'

/* ~~~~~~~~ */

/* ~~~~~~~~ */
headera.style.width = '100%'
headera.style.marginTop = '23px'
headera.style.paddingLeft = '40.25px'

headera.style.height = '39px'
header.style.display = 'flex'
header.style.alignItems = 'center'
header.style.justifyContent = 'space-between'
header.style.gap = '20px'

header_h1.style.color = '#FFF'
header_h1.style.fonFamily = 'Dm Sans'
header_h1.style.fontSize = '24px'
header_h1.style.fontWeight = '700'

ul_menu.style.display = 'flex'
ul_menu.style.alignItems = 'center'
ul_menu.style.justifyContent = 'center'
ul_menu.style.gap = '50px'
ul_menu.style.listStyle = 'none'
let arr = [link[0], link[1], link[2], link[3]]
arr.map(el => {
	el.style.fontSize = '16px'
	el.style.fontFamily = 'Noto Sans'
	el.style.color = 'rgba(255, 255, 255, 0.80)'
	el.style.textDecoration = 'none'
	return el
})

headerBtn.style.fontFamily = 'Noto Sans'
headerBtn.style.fontSize = '14px'
headerBtn.style.color = '#FFF'
headerBtn.style.padding = ' 10px 30px'
headerBtn.style.borderRadius = '3px'
headerBtn.style.background = ' rgba(255, 255, 255, 0.10)'
headerBtn.style.boxShadow = ' 0px 15px 30px 0px rgba(0, 0, 0, 0.10)'
headerBtn.style.border = '0'
/* ~~~~~~~~ */

/* ~~~~~~~~ */
ships.style.width = '100%'
ships.style.marginTop = '23px'
ships.style.margin = '101px 0'

ship.style.textAlign = 'center'
ship.style.display = 'flex'
ship.style.alignItems = 'center'
ship.style.justifyContent = 'center'
ship.style.flexDirection = 'column'
ship.style.gap = '38px'

ship_h3.style.color = '#16FCD2'
ship_h3.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)'
ship_h3.style.fontSize = '16px'
ship_h3.style.fontFamily = 'Noto Sans'
ship_h3.style.fontWeight = '600'
ship_h3.style.letterSpacing = '1.6px'
ship_h3.style.marginTop = '18px'

ship_h1.style.fontFamily = 'Noto Sans'
ship_h1.style.fontSize = '36px'
ship_h1.style.fontWeight = '700'
ship_h1.style.margin = '13px 0 24px 0'

ship_p.style.color = 'rgba(255, 255, 255, 0.60)'
ship_p.style.fontFamily = 'Noto Sans'
ship_p.style.fontSize = '16px'
ship_p.style.lineHeight = '32px'
/* ~~~~~Btns~~~ */
shipBtns.style.display = 'flex'
shipBtns.style.alignItems = 'center'
shipBtns.style.justifyContent = 'center'
shipBtns.style.gap = '25px'

ship_btn1.style.color = 'white'
ship_btn1.style.fontFamily = 'Noto Sans'
ship_btn1.style.fontSize = '16px'
ship_btn1.style.fontWeight = '600'
ship_btn1.style.padding = '15px 55px'
ship_btn1.style.borderRadius = '3px'
ship_btn1.style.background = '#6016FC'
ship_btn1.style.border = 'none'
ship_btn1.style.cursor = 'pointer'

ship_btn2.style.color = 'white'
ship_btn2.style.fontFamily = 'Noto Sans'
ship_btn2.style.fontSize = '16px'
ship_btn2.style.fontWeight = '600'
ship_btn2.style.padding = '15px 55px'
ship_btn2.style.borderRadius = '3px'
ship_btn2.style.background = 'rgba(255, 255, 255, 0.10)'
ship_btn2.style.border = 'none'
ship_btn2.style.cursor = 'pointer'
/* ~~~~~~~~ */

/* ~~~~~~~~ */
blocks.style.opacity = '1'
blocks.style.marginBottom = '79px'

block.style.display = 'flex'
block.style.alignItems = 'flex-start'
block.style.justifyContent = 'center'
block.style.gap = '22px'

let block_items = [blockItems[0], blockItems[1], blockItems[2]]
block_items.map(el => {
	el.style.width = '358px'
	el.style.height = '206px'
	el.style.padding = '32px 49px 36px 40px'
	el.style.display = 'flex'
	el.style.alignItems = 'flex-start'
	el.style.justifyContent = 'center'
	el.style.flexDirection = 'column'
	el.style.background = 'rgba(255, 255, 255, 0.05)'
	el.style.borderRadius = '5px'
	el.style.transition = 'background .55s,transfrom .55s'

	el.onmouseover = function (event) {
		let target = event.target
		target.style.background = '#7777776c'
		target.style.transform = 'scale(1.032)'
	}
	el.onmouseout = function (event) {
		let target = event.target
		target.style.background = 'rgba(255, 255, 255, 0.05)'
		target.style.transform = 'scale(1)'
	}
	return el
})

let boxes = [boxs[0], boxs[1], boxs[2]]
boxes.map(el => {
	el.style.padding = '13px'
	el.style.borderRadius = '3px'
	el.style.background = ' rgba(255, 255, 255, 0.03)'
	el.style.display = 'flex'
	el.style.alignItems = 'center'
	el.style.marginBlock = '0'
	el.style.marginBottom = '29px'
	el.style.justifyContent = 'center'
	el.style.cursor = 'pointer'
	return el
})

let blockh2 = [block_h2[0], block_h2[1], block_h2[2]]
blockh2.map(el => {
	el.style.color = '#fff'
	el.style.fontFamily = 'Noto Sans'
	el.style.fontWeight = '600'
	el.style.marginBlock = '0'
	el.style.marginBottom = '8px'
	ship_btn2.style.fontSize = '18px'

	return el
})
let blockP = [block_p[0], block_p[1], block_p[2]]
blockP.map(el => {
	el.style.width = '239px'
	el.style.color = 'rgba(255, 255, 255, 0.60)'
	el.style.fontFamily = 'Noto Sans'
	ship_btn2.style.fontSize = '16px'
	el.style.fontWeight = '500'
})

/* ~~~~~~~~ */
/* ~~~~~~~~ */
footers.style.borderTop = '1px solid #FFFFFF1A'
footers.style.width = '100%'
footers.style.paddingTop = '31.7px'
footers.style.paddingBottom = '33.67px'

footer.style.display = 'flex'
footer.style.alignItems = 'center'
footer.style.justifyContent = 'space-between'
//footer.style.gap ="31.698px"

let image = [footerImg[0], footerImg[1], footerImg[2], footerImg[3], footerImg[4]]
image.map(el => {
	el.style.transition = 'all .55s'
	el.onmouseover = function (event) {
		let target = event.target
		target.style.transform = 'scale(1.182)'
	}
	el.onmouseout = function (event) {
		let target = event.target
		target.style.transform = 'scale(1)'
	}
})
/* ~~~~~~~~ */