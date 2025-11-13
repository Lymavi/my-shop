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
          src="https://www.zastavki.com/pictures/originals/2015/Nature___Flowers_Blossomed_lilac_flower_on_a_black_background_110219_.jpg"
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
          src="https://million-wallpapers.ru/wallpapers/4/38/455170667896766/bolshoj-belyj-cvetok-na-chernom-fone.jpg"
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
          src="https://storge.pic2.me/upload/712/587bcf5a443f1.jpg"
          alt="Third slide"
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