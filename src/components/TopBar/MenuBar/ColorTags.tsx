import React, { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface ColorSet {
    bgColor: string;
    borderColor: string;
}

export type ColorTagsProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ColorTags = ({ disabled = false, ...rest }: ColorTagsProps) => {
    const colors: Array<ColorSet> = [
        { bgColor: '#F25D52', borderColor: '#f15b50' },
        { bgColor: '#f39f49', borderColor: '#ef8938' },
        { bgColor: '#f3cd52', borderColor: '#f0bf47' },
        { bgColor: '#48c864', borderColor: '#2cba48' },
        { bgColor: '#3778ea', borderColor: '#275de3' },
        { bgColor: '#a962c6', borderColor: '#a962c6' },
        { bgColor: '#939297', borderColor: '#79797d' },
    ];

    return (
        <ColorTagsContainer>
            {colors.map((color: ColorSet) => (
                <TagWrapper key={color.bgColor}>
                    <Tag
                        disabled={disabled}
                        style={{ backgroundColor: color.bgColor, border: `1px solid ${color.borderColor}` }}
                        {...rest}
                    />
                </TagWrapper>
            ))}
        </ColorTagsContainer>
    );
};

export default ColorTags;

const ColorTagsContainer = styled.div`
    display: flex;
    gap: 10px;
    padding: 5px 10px;
    height: 15px;
    align-items: center;
`;

const TagWrapper = styled.div`
    width: 14px;
`;

const Tag = styled.button`
    display: flex;
    align-items: center;
    background: inherit;
    border: none;
    box-shadow: none;
    padding: 0;
    overflow: visible;

    width: 13px;
    height: 13px;
    border-radius: 50px;

    :hover:not(:disabled) {
        width: 15px;
        height: 15px;
    }

    :disabled {
        opacity: 0.6;
    }
`;
