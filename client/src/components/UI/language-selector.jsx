import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from '@/components/ui/select';

const LanguageSwitcher = ({ className = '' }) => {
  const { currentLanguage, changeLanguage, availableLanguages, isLoading } = useLanguage();

  return (
    <Select 
      value={currentLanguage} 
      onValueChange={changeLanguage}
      disabled={isLoading}
    >
      <SelectTrigger className={`w-[80px] text-[#FFA630] bg-white border border-[#FFA630] rounded-md ${className}`}>
        <SelectValue>
          {currentLanguage.toUpperCase()}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="w-[120px] border border-[#FFA630] shadow-md bg-white">
        <SelectGroup>
          {Object.entries(availableLanguages).map(([code, lang]) => (
            <SelectItem
              key={code}
              value={code}
                className="flex items-center gap-2 p-2 hover:bg-[#FFA630] hover:text-white transition-colors"
            >
              <span className="flex items-center gap-2">
               {lang.name}
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;