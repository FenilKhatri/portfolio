import { RootState } from '@/store';
import { toggleTheme } from '@/store/features/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

const useTheme = () => {

    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.theme);

    const handleTheme = () => {
        dispatch(toggleTheme());
    }

  return { theme, handleTheme }
}

export default useTheme;