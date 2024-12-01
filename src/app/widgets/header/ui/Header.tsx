import { type HeaderProps } from '../model/types'
import HeaderImage from '../../../shared/images/photo_2024-11-20_00-25-59.jpg'
import Image from 'next/image'

export const Header: React.FC<HeaderProps> = (props) => {
    const {titles} = {...props}

  return (
    
        <header>
            {titles.map((title) => (<h1 key={title.id}>{title.value}</h1>))}
            <Image src={HeaderImage} alt={'header image'} width={200} height={200}/>
        </header>
    )
}

