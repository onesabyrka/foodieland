import scrollImage from '@/assets/images/scroll.png'
import authorImage from '@/assets/images/author.png'
import bgImage from '@/assets/images/slider-bg.png'
import badgeIcon from '@/assets/icons/badge.svg'

export const slides = [
  {
    id: 1,
    category: {
      imgSrc: scrollImage,
      label: 'Hot Recipes',
    },
    title: 'Spicy delicious chicken wings',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim',
    tags: [
      {
        id: 1,
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        id: 2,
        icon: 'cutlery',
        label: 'Chicken',
      },
    ],
    author: {
      imgSrc: authorImage,
      name: 'John Smith',
      date: {
        label: '15 March 2022',
        dateTime: '2022-03-15',
      },
    },
    bgImgSrc: bgImage,
    badgeImgSrc: badgeIcon,
  },
  {
    id: 2,
    category: {
      imgSrc: scrollImage,
      label: 'Hot Recipes',
    },
    title: 'Spicy delicious chicken wings',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim',
    tags: [
      {
        id: 1,
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        id: 2,
        icon: 'cutlery',
        label: 'Chicken',
      },
    ],
    author: {
      imgSrc: authorImage,
      name: 'John Smith',
      date: {
        label: '15 March 2022',
        dateTime: '2022-03-15',
      },
    },
    bgImgSrc: bgImage,
    badgeImgSrc: badgeIcon,
  },
  {
    id: 3,
    category: {
      imgSrc: scrollImage,
      label: 'Hot Recipes',
    },
    title: 'Spicy delicious chicken wings',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim',
    tags: [
      {
        id: 1,
        icon: 'clock',
        label: '30 Minutes',
      },
      {
        id: 2,
        icon: 'cutlery',
        label: 'Chicken',
      },
    ],
    author: {
      imgSrc: authorImage,
      name: 'John Smith',
      date: {
        label: '15 March 2022',
        dateTime: '2022-03-15',
      },
    },
    bgImgSrc: bgImage,
    badgeImgSrc: badgeIcon,
  },
]

export const sliderConfig = JSON.stringify({
  spaceBetween: 120,
  slidesPerView: 'auto',
  centeredSlides: true,
  initialSlide: 1,
  effect: 'coverflow',
})
