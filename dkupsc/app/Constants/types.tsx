export type ExamType = {
    key: number,
    name: string
}


export const fontFamily = [ 'Georgia', 'fangsong' ]

export const menuList = [
    {
        key: 1, value: 'Courses', dropdown: true,
    },
    { key: 2, value: 'Current Affairs', dropdown: false },
    { key: 3, value: 'Free Initiatives', dropdown: false },
    { key: 4, value: 'Demo', dropdown: false },
    { key: 5, value: 'Downloads', dropdown: false },
]

export const examTypes: ExamType[] = [
    { key: 1, name: "UPSC" },
    { key: 2, name: "MPSC" },
];
