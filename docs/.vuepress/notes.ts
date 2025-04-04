import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar', 'test1'],
})

const demoNote1 = defineNoteConfig({
  dir: 'interview',
  link: '/interview',
  sidebar: ['', 'bytedance', 'xiaomi', 'tencent', 'meituan', 'jingdong'],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote, demoNote1],
})