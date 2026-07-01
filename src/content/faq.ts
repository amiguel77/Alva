export type FaqItem = {
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Is the app safe to use?',
    answer: 'Yes. Alva is closed-source (EULA), meaning the code is private and inauditable.',
  },
  {
    question: "Why isn't it on the Play Store?",
    answer:
      'Google does not allow third-party YouTube clients on the Play Store. You can safely download updates from Him.',
  },
  {
    question: 'How to update?',
    answer:
      'Use the in-app updater.',
  },
  {
    question: 'Can I log in with my Google account?',
    answer: 'Yes, Alva supports account login to sync your playlists and library.',
  },
  {
    question: 'Is there an iOS version?',
    answer: 'No, Alva is Android-only. iOS users can try YTMusicUltimate.',
  },
  {
    question: 'Is there a desktop version?',
    answer: 'No. Try YouTube Music in your browser, or Pear-desktop as an alternative.',
  },
]