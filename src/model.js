import image from './assets/me.jpg'
import {TextBlock, ImageBlock, ColumnsBlock, TitleBlock} from './classes/blocks'

const text = `
Молодой JavaScript разработчик, стремящийся набраться опыта. Нахожусь в активном поиске работы. <a target="_blank" href="https://github.com/Pailon">GitHub</a><br/> <a target="_blank" href="https://www.linkedin.com/in/pailon/">Linkedin</a>
`

export const model = [
    new TitleBlock( 'Конструктор сайтов на чистом JS', {
        tag:'h2',
        styles:{
            background:'linear-gradient(to right, #ff0099, #493240)',
            color:'#fff',
            padding:'1.5rem',
            'text-align':'center'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display:'flex',
            'justify-content': 'center'
        },
        imageStyles:{
            width:'500px',
            height:'auto'
        },
        alt:'This is img'
    }),
    new ColumnsBlock([
        'Приложение на чистом JavaScript, без использования библиотек',
        'Учусь на практике',
        'JavaScript - это просто, интересно и увлекательно',
    ],{
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color:'#fff',
            'font-weight':'bold'
        }
    } ),
    new TextBlock( text, {
        styles: {
            background:'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            "font-weight":'bold'
        }
    }),

]