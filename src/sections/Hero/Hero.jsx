import './Hero.scss'
import HeroCard from '@/components/HeroCard'
import { sliderConfig, slides } from './hero.data'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 className="visually-hidden" id="hero-title">
        Spicy delicious chicken wings
      </h1>
      <div className="hero__slider swiper" data-js-slider={sliderConfig}>
        <ul className="hero__slider-list swiper-wrapper">
          {slides.map(({ id, ...slide }) => (
            <li className="hero__slider-item swiper-slide" key={id}>
              <HeroCard {...slide} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
