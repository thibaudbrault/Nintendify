export type TTrack = {
  audioText: string
  tracksLength: number
  music: TMusic
}

export type TMusic = {
  id: number
  created_at: string
  title: string
  license: string
  game: string
  console: string
  img: string
  link: string
}
