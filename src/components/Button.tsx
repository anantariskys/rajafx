import { FC, ReactNode } from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children : ReactNode,
    variant? : 'primary' | 'secondary'|'secondary-outline'|'primary-outline',
    width? : 'w-full' | 'w-fit',
    className? : string
}
const Button:FC<Props> = ({children,variant='primary',width='w-fit',className,onClick}) => {
    let buttonVariant = '';
    switch (variant) {
        case 'primary':
            buttonVariant='bg-primary text-[#FAFAFA] ';
            
            break;
        case 'secondary':
            buttonVariant='bg-white text-primary ';
            break;

        case 'secondary-outline':
            buttonVariant = 'bg-transparent border hover:bg-white hover:text-primary border-white text-white';    
             break;
        case 'primary-outline':
            buttonVariant = ' bg-transparent border hover:bg-primary hover:text-white border-primary text-primary';    
             break;
        
    
        default:
            break;
    }
  return (
    <button onClick={onClick} className={`${width} ${className} ${buttonVariant}  px-8 py-2.5 rounded-lg active:scale-95 transition-all`}>
        {children}
    </button>
  )
}

export default Button
