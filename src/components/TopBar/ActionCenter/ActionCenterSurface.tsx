import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

export interface ActionSurfaceProps extends HTMLAttributes<HTMLElement> {
    grid?: [colStart: number, colEnd: number, rowStart: number, rowEnd: number];
}

const ActionCenterSurface = ({ children, grid, ...rest }: ActionSurfaceProps) => {
    return (
        <Surface grid={grid} {...rest}>
            {children}
        </Surface>
    );
};

export default ActionCenterSurface;

type SurfaceProps = Pick<ActionSurfaceProps, 'grid'>;

const Surface = styled.section<SurfaceProps>`
    background-color: rgba(255, 255, 255, 0.5);
    padding: 15px 10px;
    border-radius: 10px;
    box-shadow: 0px 2px 5px 1px rgba(141, 140, 140, 0.4);
    display: flex;
    flex-direction: column;
    gap: 20px;
    grid-column: ${({ grid }) => `${grid?.[0]} / ${grid?.[1]}`};
    grid-row: ${({ grid }) => `${grid?.[2]} / ${grid?.[3]}`};
    justify-content: center;
`;
