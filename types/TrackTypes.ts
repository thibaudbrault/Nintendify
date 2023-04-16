export interface ITrack {
  audioText: string
  tracksLength: number
  music: IMusic
}

export interface ILicense {
  id: number
  created_at: string
  name: string
}

export interface IMusic extends ILicense {
  id: number
  created_at: string
  title: string
  link: string
  album_id: number
}

export interface IAlbum extends ILicense {
  image: string
  license_id: string
  console_id: string
}

export interface IConsole extends ILicense {
  fullName: string
}
