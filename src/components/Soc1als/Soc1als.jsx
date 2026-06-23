import './Soc1als.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import { socials } from './soc1als.data'

export default (props) => {
  const { className } = props

  return (
    <div className={clsx('soc1als', className)}>
      <ul className="soc1als__list">
        {socials.map(({ label, icon }, index) => (
          <li className="soc1als__item" key={index}>
            <a className="soc1als__link" href="/">
              <span className="visually-hidden">{label}</span>
              <Icon name={icon} hasFill />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
