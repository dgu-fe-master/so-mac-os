import { MenuItemConfig } from '@/data/menu/finder';

export const finder: Record<string, MenuItemConfig> = {
    newFolder: {
        title: '새로운 폴더',
        breakAfter: true,
    },
    getInfo: {
        title: '정보 가져오기',
    },
    changeDesktopBg: {
        title: '배경화면 변경...',
        breakAfter: true,
    },
    useStacks: {
        title: '스택 사용',
    },
    stackGroupingBy: {
        title: '다음으로 스택 그룹화',
        subMenu: {
            type: {
                title: '종류',
            },
            lastlyUsed: {
                title: '최근 사용일',
            },
            addedDate: {
                title: '추가된 날짜',
            },
            revisionDate: {
                title: '수정일',
            },
            createdDate: {
                title: '생성일',
            },
            tag: {
                title: '태그',
            },
        },
    },
    viewOptions: {
        title: '보기 옵션',
    },
};
