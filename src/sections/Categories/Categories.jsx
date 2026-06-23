import './Categories.scss'
import Grid from '@/components/Grid'
import CategoryCard from '@/components/CategoryCard'
import Button from '@/components/Button'
import { categories } from './categories.data'

export default () => {
  return (
    <section
      className="categories container"
      aria-labelledby="categories-title"
    >
      <header className="categories__header">
        <h2 className="categories__title" id="categories-title">
          Categories
        </h2>
        <Button className="categories__button" variant="accent">
          View All Categories
        </Button>
      </header>
      <div className="categories__body">
        <Grid className="categories__list" columns={6}>
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </Grid>
      </div>
    </section>
  )
}
