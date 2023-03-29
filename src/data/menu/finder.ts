export interface MenuItemConfig {
    title?: string;
    breakAfter?: boolean;
    hotkey?: Array<string>;
    disabled?: boolean;
    icon?: boolean;
    subMenu?: Record<string, MenuItemConfig>;
}

export interface MenuConfig {
    title: string;
    menu: Record<string, MenuItemConfig>;
}

// eslint-disable-next-line @typescript-eslint/ban-types
const createMenuConfig = <T extends {}>(et: T) => et;

const finder: Record<string, MenuConfig> = {
    apple: {
        title: 'apple',
        menu: {
            aboutThisMac: {
                title: '이 Mac에 관하여',
                breakAfter: true,
            },
            systemPreferences: {
                title: '시스템 설정...',
            },
            appStore: {
                title: 'App Store...',
                breakAfter: true,
            },
            recentItems: {
                title: '최근 사용 항목',
                breakAfter: true,
                subMenu: {},
            },
            forceQuit: {
                title: '강제 종료...',
                breakAfter: true,
                hotkey: ['⌥', '⌘', 'esc'],
            },
            sleep: {
                title: '잠자기',
            },
            restart: {
                title: '재시동...',
            },
            shutdown: {
                title: '시스템 종료...',
                breakAfter: true,
            },
            lockScreen: {
                title: '화면 잠금',
                hotkey: ['^', '⌘', 'Q'],
            },
            logout: {
                title: '로그아웃...',
                hotkey: ['⇧', '⌘', 'Q'],
            },
        },
    },
    finder: {
        title: 'Finder',
        menu: {
            aboutFinder: {
                title: 'Finder에 관하여',
                breakAfter: true,
            },
            preferences: {
                title: '설정...',
                breakAfter: true,
                hotkey: ['⌘', ','],
            },
            emptyTrash: {
                title: '휴지통 비우기...',
                breakAfter: true,
                hotkey: ['⇧', '⌘', 'delete'],
            },
            hideFinder: {
                title: 'Finder 가리기',
                hotkey: ['⌘', 'H'],
            },
            hideOthers: {
                title: '기타 가리기',
                hotkey: ['⌥', '⌘', 'H'],
            },
            showAll: {
                title: '모두 보기',
                breakAfter: true,
                disabled: true,
            },
            quitFinder: {
                title: 'Finder 종료',
                hotkey: ['⌘', 'Q'],
            },
        },
    },
    file: {
        title: '파일',
        menu: {
            newFinderWindow: {
                title: '새로운 Finder 윈도우',
                hotkey: ['⌘', 'N'],
            },
            newFolder: {
                title: '새로운 폴더',
                hotkey: ['⇧', '⌘', 'N'],
            },
            newFolderWithSelection: {
                title: '선택 항목을 포함하는 새로운 폴더',
                hotkey: ['⌃', '⌘', 'N'],
                disabled: true,
            },
            newSmartFolder: {
                title: '새로운 스마트 폴더',
            },
            newTab: {
                title: '새로운 탭',
                hotkey: ['⌘', 'T'],
            },
            open: {
                title: '열기',
                hotkey: ['⌘', 'O'],
                disabled: true,
            },
            openWith: {
                title: '다음으로 열기',
                disabled: true,
                subMenu: {},
            },
            closeWindow: {
                title: '윈도우 닫기',
                disabled: true,
                hotkey: ['⌘', 'W'],
                breakAfter: true,
            },
            getInfo: {
                title: '정보 가져오기',
                hotkey: ['⌘', 'I'],
            },
            rename: {
                title: '이름 변경',
                disabled: true,
            },
            compress: {
                title: '압축',
                disabled: true,
            },
            duplicate: {
                title: '복제',
                disabled: true,
                hotkey: ['⌘', 'D'],
            },
            makeAlias: {
                title: '가상본 만들기',
                disabled: true,
                hotkey: ['⌃', '⌘', 'A'],
            },
            quickLook: {
                title: '훑어보기',
                disabled: true,
                hotkey: ['⌘', 'Y'],
            },
            print: {
                title: '프린트',
                disabled: true,
                hotkey: ['⌘', 'P'],
                breakAfter: true,
            },
            share: {
                title: '공유...',
                disabled: true,
                breakAfter: true,
            },
            showOrigin: {
                title: '원본 보기',
                hotkey: ['⌘', 'R'],
                disabled: true,
            },
            addToSidebar: {
                title: '사이드바에 추가',
                hotkey: ['⌃', '⌘', 'T'],
                disabled: true,
                breakAfter: true,
            },
            moveToTrash: {
                title: '휴지통으로 이동',
                hotkey: ['⌘', 'delete'],
                disabled: true,
            },
            eject: {
                title: '추출',
                hotkey: ['⌘', 'E'],
                disabled: true,
                breakAfter: true,
            },
            // colors
            tags: {
                title: '태그...',
                disabled: true,
                breakAfter: true,
            },
            find: {
                title: '찾기',
                hotkey: ['⌘', 'F'],
            },
        },
    },
    edit: {
        title: '편집',
        menu: {
            undo: {
                title: '실행 취소',
                hotkey: ['⌘', 'Z'],
            },
            redo: {
                title: '실행 복귀',
                disabled: true,
                hotkey: ['⇧', '⌘', 'Z'],
                breakAfter: true,
            },
            cut: {
                title: '오려두기',
                hotkey: ['⌘', 'X'],
                disabled: true,
            },
            copy: {
                title: '복사',
                hotkey: ['⌘', 'C'],
                disabled: true,
            },
            paste: {
                title: '붙여놓기',
                hotkey: ['⌘', 'V'],
                disabled: true,
            },
            selectAll: {
                title: '전체 선택',
                hotkey: ['⌘', 'A'],
                breakAfter: true,
            },
            showClipboard: {
                title: '클립보드 보기',
                breakAfter: true,
            },
            startDictation: {
                title: '받아쓰기 시작...',
            },
            emojiAndSymbols: {
                title: '이모티콘 및 기호',
                hotkey: ['fn', 'E'],
            },
        },
    },
    view: {
        title: '보기',
        menu: {
            asIcons: {
                title: '아이콘',
                hotkey: ['⌘', '1'],
                disabled: true,
            },
            asList: {
                title: '목록',
                hotkey: ['⌘', '2'],
                disabled: true,
            },
            asColumns: {
                title: '계층',
                hotkey: ['⌘', '3'],
                disabled: true,
            },
            asGallery: {
                title: '갤러리',
                hotkey: ['⌘', '4'],
                disabled: true,
                breakAfter: true,
            },
            useStacks: {
                title: '스택 사용',
                hotkey: ['⌃', '⌘', 'O'],
            },
            stackGroupingBy: {
                title: '다음으로 스택 그룹화',
                subMenu: {
                    none: {
                        title: '없음',
                        breakAfter: true,
                    },
                    type: {
                        title: '종류',
                        hotkey: ['⌃', '⌘', '2'],
                    },
                    lastlyUsed: {
                        title: '최근 사용일',
                        hotkey: ['⌃', '⌘', '3'],
                    },
                    addedDate: {
                        title: '추가된 날짜',
                        hotkey: ['⌃', '⌘', '4'],
                    },
                    revisionDate: {
                        title: '수정일',
                        hotkey: ['⌃', '⌘', '5'],
                    },
                    createdDate: {
                        title: '생성일',
                    },
                    tag: {
                        title: '태그',
                        hotkey: ['⌃', '⌘', '7'],
                    },
                },
            },
            cleanUp: {
                title: '아이콘 정리',
                disabled: true,
            },
            cleanUpBy: {
                title: '아이콘 정리 방식',
                disabled: true,
                breakAfter: true,
                subMenu: {},
            },
            hideSidebar: {
                title: '사이드바 가리기',
                hotkey: ['⌃', '⌘', 'S'],
                disabled: true,
            },
            hidePreview: {
                title: '미리보기 가리기',
                hotkey: ['⇧', '⌘', 'P'],
                disabled: true,
                breakAfter: true,
            },
            hideToolbar: {
                title: '도구 막대 가리기',
                hotkey: ['⌥', '⌘', 'T'],
                disabled: true,
            },
            showAllTabs: {
                title: '모든 탭 보기',
                hotkey: ['⇧', '⌘', '\\'],
                disabled: true,
            },
            hideTabBar: {
                title: '탭 막대 가리기',
                hotkey: ['⇧', '⌘', 'T'],
                disabled: true,
            },
            hidePathBar: {
                title: '경로 막대 가리기',
                hotkey: ['⌥', '⌘', 'P'],
                disabled: true,
            },
            hideStatusBar: {
                title: '상태 막대 가리기',
                hotkey: ['⌘', '/'],
                disabled: true,
                breakAfter: true,
            },
            customizeToolbar: {
                title: '도구 막대 사용자화...',
                disabled: true,
            },
            customizeTouchBar: {
                title: 'Touch Bar 사용자화...',
                breakAfter: true,
            },
            Views: {
                title: '보기 옵션',
                hotkey: ['⌘', 'J'],
            },
            showViews: {
                title: '보기 옵션 표시',
                breakAfter: true,
                disabled: true,
            },
            enterFullScreen: {
                title: '전체 화면 시작',
                hotkey: ['fn', 'F'],
                disabled: true,
            },
        },
    },
    go: {
        title: '이동',
        menu: {
            back: {
                title: '뒤로',
                disabled: true,
                hotkey: ['⌘', '['],
            },
            forward: {
                title: '앞으로',
                disabled: true,
                hotkey: ['⌘', ']'],
            },
            enclosingFOlder: {
                title: '상위 폴더',
                hotkey: ['⌘', '▲'],
                breakAfter: true,
            },
            recents: {
                title: '최근 사용',
                icon: true,
                hotkey: ['⇧', '⌘', 'F'],
            },
            documents: {
                title: '문서',
                icon: true,
                hotkey: ['⇧', '⌘', 'O'],
            },
            desktop: {
                title: '데스크탑',
                icon: true,
                hotkey: ['⇧', '⌘', 'D'],
            },
            downloads: {
                title: '다운로드',
                icon: true,
                hotkey: ['⌥s', '⌘', 'L'],
            },
            home: {
                title: '홈',
                icon: true,
                hotkey: ['⇧', '⌘', 'H'],
            },
            library: {
                title: '라이브러리',
                icon: true,
                hotkey: ['⇧', '⌘', 'L'],
            },
            computer: {
                title: '컴퓨터',
                icon: true,
                hotkey: ['⇧', '⌘', 'C'],
            },
            airdrop: {
                title: 'AirDrop',
                icon: true,
                hotkey: ['⇧', '⌘', 'R'],
            },
            network: {
                title: '네트워크',
                icon: true,
                hotkey: ['⇧', '⌘', 'K'],
            },
            icloudDrive: {
                title: 'iCloud Drive',
                icon: true,
                hotkey: ['⇧', '⌘', 'I'],
            },
            share: {
                title: '공유',
                icon: true,
                hotkey: ['⇧', '⌘', 'S'],
            },
            applications: {
                title: '응용 프로그램',
                icon: true,
                hotkey: ['⇧', '⌘', 'A'],
            },
            utilities: {
                title: '유틸리티',
                icon: true,
                hotkey: ['⇧', '⌘', 'U'],
                breakAfter: true,
            },
            goToFolder: {
                title: '폴더로 이동...',
                hotkey: ['⇧', '⌘', 'G'],
            },
            connectToServe: {
                title: '서버에 연결...',
                hotkey: ['⌘', 'K'],
            },
        },
    },
    window: {
        title: '윈도우',
        menu: {
            minimize: {
                title: '최소화',
                hotkey: ['⌘', 'M'],
                disabled: true,
            },
            zoom: {
                title: '확대/축소',
                disabled: true,
            },
            moveWindowToLeftSideOfScreen: {
                title: '화면 왼쪽으로 윈도우 이동',
                disabled: true,
            },
            moveWindowToRightSideOfScreen: {
                title: '화면 오른쪽으로 윈도우 이동',
                disabled: true,
            },
            cycleThrowWindows: {
                title: '배치된 윈도우 대치',
                disabled: true,
                breakAfter: true,
            },
            deleteWindowFromSet: {
                title: '세트에서 윈도우 제거',
                disabled: true,
                breakAfter: true,
            },
            showPreviousTab: {
                title: '이전 탭 보기',
                hotkey: ['⌃', '⇧', '⇥'],
                disabled: true,
            },
            showNextTab: {
                title: '다음 탭 보기',
                hotkey: ['⌃', '⇥'],
                disabled: true,
            },
            moveTabToNewWindow: {
                title: '새로운 윈도우로 탭 이동',
                disabled: true,
            },
            mergeAllWindows: {
                title: '모든 윈도우 통합',
                disabled: true,
                breakAfter: true,
            },
            bringAllToFront: {
                title: '모두 앞으로 가져오기',
                disabled: true,
            },
        },
    },
    help: {
        title: '도움말',
        menu: {
            tipsForMac: {
                title: 'Mac을 위한 팁',
            },
            macOSHelp: {
                title: 'macOS 도움말',
            },
        },
    },
};

export const finderMenu = createMenuConfig(finder);
