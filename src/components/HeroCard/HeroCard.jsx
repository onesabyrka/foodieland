import './HeroCard.scss'
import { Image } from 'minista'
import Icon from '@/components/Icon'
import Button from '@/components/Button'

export default (props) => {
  const { category, title, description, tags, author, bgImgSrc, badgeImgSrc } =
    props

  return (
    <article className="hero-card">
      <div className="hero-card__body">
        <div className="hero-card__main">
          <div className="category">
            <Image className="category__image" src={category.imgSrc} />
            <span className="category__label">{category.label}</span>
          </div>
          <h2 className="hero-card__title h1">{title}</h2>
          <div className="hero-card__description">
            <p>{description}</p>
          </div>
          <div className="tags">
            <ul className="tags__list">
              {tags.map(({ icon, label }, index) => (
                <li className="tags__item" key={index}>
                  <Icon className="tags__image" name={icon} hasFill />
                  <span className="tags__label">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <footer className="hero-card__footer">
          <div className="author-card">
            <Image className="author-card__image" src={author.imgSrc} />
            <div className="author-card__body">
              <h3 className="author-card__name">{author.name}</h3>
              <time
                className="author-card__date"
                dateTime={author.date.dateTime}
              >
                {author.date.label}
              </time>
            </div>
          </div>
          <Button>
            <span>View Recipes</span>
            <Icon name="play" hasFill />
          </Button>
        </footer>
      </div>
      <Image
        className="hero-card__image"
        src={bgImgSrc}
        width={660}
        height={640}
      />
      <Image className="hero-card__badge" src={badgeImgSrc} />
    </article>
  )
}
