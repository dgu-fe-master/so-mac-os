import { InputHTMLAttributes, useState } from 'react';
import styled from '@emotion/styled';

export interface ActionCenterSliderProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: string;
}

const ActionCenterSlider = ({ type, style, ...rest }: ActionCenterSliderProps) => {
    const [value, setValue] = useState<number>(100);

    const LeftIconNameByType: Record<string, string> = {
        디스플레이: 'sun',
        사운드: 'sound',
    };

    return (
        <div>
            {type && <LeftIcon src={require(`@/assets/icons/action-center/${LeftIconNameByType[type]}.svg`)} />}
            <Slider
                type="range"
                min="1"
                max="100"
                onInput={(e: any) => setValue(e.target.value)}
                defaultValue={100}
                style={{
                    background: `linear-gradient(to right, #fff 0%, #fff ${value}%, rgb(171, 168, 168, 0.5) ${value}%, rgb(171, 168, 168, 0.5) 100%)`,
                    ...style,
                }}
                {...rest}
            />
        </div>
    );
};

export default ActionCenterSlider;

const Slider = styled.input`
    -webkit-appearance: none;

    width: 100%;
    height: 25px;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.602);
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
    outline: none;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #fff;
        border: 1px solid rgb(214, 211, 211);
        cursor: pointer;

        :hover {
            background: rgb(240, 239, 239);
        }
    }

    ::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #fff;
        border: 1px solid rgb(214, 211, 211);
        cursor: pointer;
    }
`;

const LeftIcon = styled.img`
    position: absolute;
    z-index: 1;
    transform: translate(60%, 0);
    margin-top: 8px;
    width: 12px;
`;
