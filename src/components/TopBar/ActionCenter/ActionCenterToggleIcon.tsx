import { ButtonHTMLAttributes, ReactElement, useState } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as WifiIcon } from '@/assets/icons/action-center/wifi-rounded.svg';
import { ReactComponent as AirDropIcon } from '@/assets/icons/action-center/airdrop-rounded.svg';
import { ReactComponent as BluetoothIcon } from '@/assets/icons/action-center/bluetooth-rounded.svg';
import { ReactComponent as FocusIcon } from '@/assets/icons/action-center/focus-rounded.svg';

export interface ToggleIconProps extends ButtonHTMLAttributes<Omit<HTMLButtonElement, 'name'>> {
    name: string;
    defaultActive?: boolean;
}

const ActionCenterToggleIcon = ({ name, defaultActive = true, ...rest }: ToggleIconProps) => {
    const [active, setActive] = useState<boolean>(defaultActive);

    const onClickIcon = () => setActive(!active);

    const commonSizeProps = { width: '25', height: '25' };

    const ToggleIconByName: Record<string, ReactElement> = {
        'Wi-Fi': <WifiIcon {...commonSizeProps} />,
        Bluetooth: <BluetoothIcon {...commonSizeProps} />,
        AirDrop: <AirDropIcon {...commonSizeProps} />,
        '집중 모드': <FocusIcon {...commonSizeProps} />,
    };

    return (
        <ToggleIconButton active={active} onClick={onClickIcon} {...rest}>
            {ToggleIconByName[name]}
        </ToggleIconButton>
    );
};

export default ActionCenterToggleIcon;

interface ToggleIconButtonProps {
    active: boolean;
}

const ToggleIconButton = styled.button<ToggleIconButtonProps>`
    display: flex;
    align-items: center;
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: default;

    svg {
        width: 100%;
        height: 100%;

        circle {
            fill: ${({ active }) => (active ? '#1574f1' : 'rgb(171, 168, 168, 0.5)')};
        }

        [fill]:not(circle) {
            &:not([fill='none']) {
                fill: ${({ active }) => (active ? 'white' : 'black')};
            }
        }
        [stroke]:not(circle) {
            &:not([stroke='none']) {
                stroke: ${({ active }) => (active ? 'white' : 'black')};
            }
        }
    }
`;
