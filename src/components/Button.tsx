import { FC, ReactNode } from 'react'

interface Props {
    children : ReactNode,
    variant? : 'primary' | 'secondary',
    width? : 'w-full' | 'w-fit'
}
const Button:FC<Props> = ({children,variant='primary',width='w-fit'}) => {
    let className = '';
    switch (variant) {
        case 'primary':
            className='bg-primary text-[#FAFAFA]';
            
            break;
        case 'secondary':
            className='bg-[#FAFAFA] text-primary ';
            break;
    
        default:
            break;
    }
  return (
    <button className={`${width} ${className} px-8 py-2.5 rounded-lg active:scale-95 transition-all`}>
        {children}
    </button>
  )
}

export default Button
