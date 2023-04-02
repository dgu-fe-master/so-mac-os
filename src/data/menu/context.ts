import { MenuItemConfig } from '@/data/menu/finder';

export const contextMenu: Record<string, Record<string, MenuItemConfig>> = {
    default: {
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
    },
    folder: {
        open: {
            title: '열기',
            breakAfter: true,
        },
        moveToTrash: {
            title: '휴지통으로 이동',
            breakAfter: true,
        },
        getInfo: {
            title: '정보 가져오기',
        },
        rename: {
            title: '이름 변경',
        },
        compress: {
            title: '압축',
        },
        duplicate: {
            title: '복제',
        },
        makeAlias: {
            title: '가상본 만들기',
        },
        quickLook: {
            title: '훑어보기',
            breakAfter: true,
        },
        copy: {
            title: '복사',
        },
        share: {
            title: '공유...',
            breakAfter: true,
        },
        // colors
        tags: {
            title: '태그...',
        },
    },
};
