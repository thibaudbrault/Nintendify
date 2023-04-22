import { defineStore } from 'pinia'
import { Database } from '~/types/schema'

export const useFetchStore = defineStore('fetch', () => {
  const client = useSupabaseClient<Database>()

  const fetchMusics = async (title: string) => {
    const { data: musics } = await client
      .from('musics')
      .select('*, albums!inner(image, name)')
      .eq('albums.name', title)
      .order('id')
    return musics
  }
  const fetchAlbum = async (title: string) => {
    const { data: album } = await client
      .from('albums')
      .select('*, musics(*), license(name), consoles(name, fullName)')
      .eq('name', title)
      .order('id', { foreignTable: 'musics' })
      .limit(1)
      .single()
    return album
  }

  const fetchAlbums = async () => {
    const { data: albums } = await client.from('albums').select(`*`).order('id')
    return albums
  }

  return { fetchMusics, fetchAlbum, fetchAlbums }
})
