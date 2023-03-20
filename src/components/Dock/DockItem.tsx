import styled from '@emotion/styled';

const DockItem = ({ id }: { id: string }) => (
    <DockIcon src={require(`@/assets/icons/${id}.png`)} alt={`${id} app icon`} />
);

const DockIcon = styled.img`
    width: 50px;
    height: 50px;
    margin: 0.3em;
`;

export default DockItem;
