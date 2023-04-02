import { useState, useRef } from 'react';
import ActionCenterSwitch from '@/assets/icons/action-center/switch.svg';
import styled from '@emotion/styled';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import ActionCenterDropDown from '@/components/TopBar/ActionCenter/ActionCenterDropDown';

function ActionCenter() {
    const [active, setActive] = useState<boolean>(false);
    const acRef = useRef(null);

    const handleActionCenterClicked = () => setActive(!active);

    const handleACFocusOut = () => setActive(false);

    useOnClickOutside(acRef, handleACFocusOut);

    return (
        <div ref={acRef}>
            <ActionCenterButton active={active}>
                <img src={ActionCenterSwitch} onClick={handleActionCenterClicked} height="16" alt="Action Center" />
            </ActionCenterButton>
            {active && <ActionCenterDropDown />}
        </div>
    );
}

export default ActionCenter;

interface ActionCenterButtonProps {
    active: boolean;
}

const ActionCenterButton = styled.button<ActionCenterButtonProps>`
    display: flex;
    align-items: center;
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: default;
    padding: 4px 10px;
    vertical-align: middle;
    color: white;
    border-radius: 5px;
    height: 100%;
    background: ${({ active }) => (active ? 'rgba(255, 255, 255, 0.2)' : undefined)};

    :hover,
    :focus {
        background: ${({ active }) => (active ? 'rgba(255, 255, 255, 0.2)' : undefined)};
    }
`;
