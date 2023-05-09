import { aboutThisMac } from './about-this-mac';
import { calculator } from '@/data/apps/calculator';
import { calendar } from '@/data/apps/calendar';
import { finder } from '@/data/apps/finder';
import { github } from '@/data/apps/github';
import { mail } from '@/data/apps/mail';
import { message } from '@/data/apps/message';
import { memo } from '@/data/apps/memo';
import { notion } from '@/data/apps/notion';
import { photoBooth } from '@/data/apps/photo-booth';
import { photo } from '@/data/apps/photo';
import { safari } from '@/data/apps/safari';
import { systemPreferences } from '@/data/apps/system-preferences';

export interface AppConfig {
    title: string;
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    label: string;
    backgroundColor?: string;
}

export const dockApps: Record<string, AppConfig> = {
    finder,
    calculator,
    calendar,
    github,
    mail,
    memo,
    message,
    notion,
    'photo-booth': photoBooth,
    photo,
    safari,
    'system-preferences': systemPreferences,
};

export const apps: Record<string, AppConfig> = {
    ...dockApps,
    aboutThisMac,
};
