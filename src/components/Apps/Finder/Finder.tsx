import styled from '@emotion/styled';
import Sidebar from '@/components/Apps/Finder/Sidebar/Sidebar';
import TitleBar from '@/components/Apps/Finder/TitleBar/TitleBar';
import FinderArea from '@/components/Apps/Finder/FinderArea';
import { useState } from 'react';

export interface FinderProps {
    location?: string;
}

const Finder = ({ location = 'recent' }: FinderProps) => {
    const [loc, setLoc] = useState<string>(location);

    const onChangeLocation = (loc: string) => setLoc(loc);

    return (
        <FinderContainer>
            <Sidebar location={loc} onChangeLocation={onChangeLocation} />
            <FinderBody>
                <TitleBar location={loc} />
                <FinderArea />
            </FinderBody>
        </FinderContainer>
    );
};

export default Finder;

const FinderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: -36px;
    position: relative;
    z-index: -1;
    background: none;
    pointer-events: none; // TODO: 드래그 동작되도록 고민
    border-radius: inherit;
`;

const FinderBody = styled.div`
    width: 100%;
    height: 100%;
`;
