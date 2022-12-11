import { useEffect } from 'react';

interface IProps {
    wrapperRef: React.RefObject<HTMLDivElement>;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const useBoxblur = ({ wrapperRef, setState }: IProps) => {
    const handleClickOutside = (e: any) => {
        if (!wrapperRef.current?.contains(e.target)) {
            setState(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return <h1></h1>;
};

export default useBoxblur;
