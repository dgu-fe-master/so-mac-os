import styled from '@emotion/styled';
import { appID } from '@/stores/apps-store';

interface WindowProps {
    appId: appID;
}

const Window = ({ appId }: WindowProps) => <WindowContainer>{appId}</WindowContainer>;

const WindowContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export default Window;
