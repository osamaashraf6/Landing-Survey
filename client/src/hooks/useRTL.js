import { useSelector } from 'react-redux';
import { selectIsRTL } from '../redux/slices/languageSlice';
export const useRTL = () => {
  const isRTL = useSelector(selectIsRTL);
  
  const rtlClass = (ltrClass, rtlClass) => {
    return isRTL ? rtlClass : ltrClass;
  };
  
  const rtlStyle = (ltrStyle, rtlStyle) => {
    return isRTL ? rtlStyle : ltrStyle;
  };
  
  return {
    isRTL,
    rtlClass,
    rtlStyle,
    dir: isRTL ? 'rtl' : 'ltr',
  };
};