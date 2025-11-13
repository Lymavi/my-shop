import { Carousel } from 'react-bootstrap'
import './banner.css'

export default function Banner() {
  return (
    // Слайдер на всю высоту окна, без изменения размеров при перелистывании
    <div className="banner-full">
      <Carousel interval={4000} indicators controls fade>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-img"
          src="https://img1.akspic.ru/crops/8/5/4/1/8/181458/181458-huawei-huawei_emui-tsvetok-xiaomi-lepestok-1920x1080.jpg"
          alt="First slide"
          />
          <Carousel.Caption>
            <h3>Для букета не нужен повод!</h3>
            <p>Закажи доставку букета прямо сейчас</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          className="d-block w-100 banner-img"
          src="https://img2.akspic.ru/crops/9/7/2/9/7/179279/179279-tsvetok-rozovyj-tsvetnoy-cvetochnyj_dizajn-tort-1920x1080.jpg"
          alt="Second slide"
        />
          <Carousel.Caption>
            <h3>Для букета не нужен повод!</h3>
            <p>Оформи цветочную подписку</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          className="d-block w-100 banner-img"
          src="https://img1.akspic.ru/crops/9/6/9/2/7/172969/172969-sad_roz-tsvetok-sad-gibridnaya_chajnaya_roza-cvetochnyj_buket-1920x1080.jpg"
          alt="Second slide"
        />
          <Carousel.Caption>
            <h3>Для букета не нужен повод!</h3>
            <p>Оформление мероприятий любой сложности</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}