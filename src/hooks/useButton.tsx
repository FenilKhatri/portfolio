import { useSelector } from 'react-redux';

const useButton = () => {

    const selector = useSelector((state: any) => state.theme.theme);
    const theme = selector == 'dark' ? 'primary' : 'secondary';

  return { theme } 
}

export default useButton